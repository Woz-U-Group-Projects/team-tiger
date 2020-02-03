'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "projects", deps: []
 *
 **/

var info = {
    "revision": 6,
    "name": "initialmigration",
    "created": "2020-01-10T20:51:43.252Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "projects",
        {
            "UserId": {
                "type": Sequelize.INTEGER,
                "field": "UserId",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            },
            "FirstName": {
                "type": Sequelize.STRING,
                "field": "FirstName"
            },
            "LastName": {
                "type": Sequelize.STRING,
                "field": "LastName"
            },
            "Email": {
                "type": Sequelize.STRING,
                "field": "Email",
                "unique": true
            },
            "Username": {
                "type": Sequelize.STRING,
                "field": "Username",
                "unique": true
            },
            "Password": {
                "type": Sequelize.STRING,
                "field": "Password"
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt"
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt"
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
