'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Projects", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-01-08T03:04:00.571Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "Projects",
        {
            "user_id": {
                "type": Sequelize.INTEGER,
                "field": "user_id",
                "autoIncrement": true,
                "primaryKey": true
            },
            "first_name": {
                "type": Sequelize.STRING,
                "field": "first_name",
                "allowedNull": false
            },
            "last_name": {
                "type": Sequelize.STRING(45),
                "field": "last_name",
                "allowNull": false
            },
            "createdBy": {
                "type": Sequelize.STRING,
                "field": "createdBy"
            }
        },
        {}
    ]
}];

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
