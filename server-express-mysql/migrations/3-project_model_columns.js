'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "last_update" from table "project"
 *
 **/

var info = {
    "revision": 3,
    "name": "project_model_columns",
    "created": "2020-01-08T20:21:06.033Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "removeColumn",
    params: ["project", "last_update"]
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
