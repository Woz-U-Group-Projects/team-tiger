'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "DOB" to table "project"
 * addColumn "email_address" to table "project"
 *
 **/

var info = {
    "revision": 2,
    "name": "project_model_info",
    "created": "2020-01-08T20:19:04.300Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "project",
            "DOB",
            {
                "type": Sequelize.DATEONLY,
                "field": "DOB",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "project",
            "email_address",
            {
                "type": Sequelize.STRING(45),
                "field": "email_address",
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
