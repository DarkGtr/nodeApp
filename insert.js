/**
 * Created by 1400003 on 23/11/2015.
 */
var mongodb = require ('mongodb');
var http = require ('http');
var port = process.env.PORT || 1337;
var url = 'mongodb://DarkGtr:1squall1@ds054308.mongolab.com:54308/darknodeapp'
var MongoClient = mongodb.MongoClient;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Connecting \n');
    MongoClient.connect(url, function (err, db) {
        response.write('Connection Made \n');
        if (err) {
            response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
            db.close();
        } else {
            response.write('Connection established to' + url +"\n");
            var collection = db.collection('users');

            var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
            var user2 = {name: 'modulus user', age: 22, roles: ['user']};
            var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};
            collection.insert([user1, user2, user3], function (err, result) {
                if (err) {
                    response.write('Insert failed ' + err + "\n");
                } else {
                    console.log(result);
                    response.write('Inserted ' + result.insertedCount +' documents ok. +"\n"');
                }
                //Close connection
                db.close();
                response.end('Finished, Connection closed \n');
                //remove any other db.close or response.end statement below this line
            });
        }
    });
}).listen(port);
/*
var collection = db.collection('users');

var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
var user2 = {name: 'modulus user', age: 22, roles: ['user']};
var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};

collection.insert([user1, user2, user3], function (err, result){
    if (err) {
        response.write('Insert failed ' + err + "\n");
    } else {
        console.log(result);
        response.write('Inserted ' + result.insertedCount + ' documents ok. +"\n"');
    }
        db.close();
        response.end('Finished, Connection closed \n');

});*/

