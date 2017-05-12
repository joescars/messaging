var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

module.exports = function (context, req) {
    
    var config = {
        userName: 'mcscroot',
        password: 'mqRJAxoRd1lvlS1N1UVuhn220OzT0d',
        server: 'mcsc.database.windows.net',
        options: {
            database: 'social'
        }
    }
    var connection = new Connection(config);

    connection.on('connect', function (err) {
        if (err) {
            context.res = {
                status: 500,
                body: err
            }
        }
        else {
            request = new Request("SELECT * FROM [dbo].[vwProfiles]",
                function (err, rowCount, rows) {
                    context.res = {
                        status: 200,
                        body: rows
                    };
                }
            );
        }
    });

    context.done();
}