/**
 * Created by 1400003 on 23/11/2015.
 */
var mongodb = require ('mongodb');
var http = require ('http');
var port = process.env.PORT || 1337;
var url = 'mongodb://<DarkGtr>:<1squall1>@ds054308.mongolab.com:54308/darknodeapp'
var MongoClient = mongodb.MongoClient;

http.createServer(function(request, response) {
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
        });