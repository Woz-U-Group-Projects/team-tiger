'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "createdAt" from table "project"
 * removeColumn "updatedAt" from table "project"
 * changeColumn "user_id" on table "project"
 *
 **/

var info = {
    "revision": 4,
    "name": "project_model_autoincrement",
    "created": "2020-01-08T20:48:33.824Z",
    "comment": ""
};

var migrationCommands = [   
    {
        fn: "changeColumn",
        params: [
            "project",
            "user_id",
            {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "user_id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
