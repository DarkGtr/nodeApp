/**
 * Created by 1400003 on 23/11/2015.
 */
var mongodb = require ('mongodb');
var http = require ('http');
var port = process.env.PORT || 1337;
var url = 'mongodb://<DarkGtr>:<1squall1>@ds054308.mongolab.com:54308/darknodeapp'
var MongoClient = mongodb.MongoClient;

/*http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Connecting \n');
        MongoClient.connect(url, function (err, db) {
            response.write('Connection Made \n');
            if (err) {
                response.write('Unable to conect to the mongoDB server. Error:' + err + "\n");
                db.close();
            } else {
                response.write('Connection established to' + url + "\n");
                db.close();
            }
            response.end('Finished, Connection closed \n');
            });
        }).listen(port);*/

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Connecting \n');
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        response.write('Connection Made \n');
        if (err) {
            response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
            //Error so close connection
            db.close();
        } else {
            //HURRAY!! We are connected. :)
            response.write('Connection established to' + url +"\n");

            // do some work here with the database.

            //Done Close connection
            db.close();
        }
        response.end('Finished, Connection closed \n');
    });

}).listen(port);
