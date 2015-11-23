/**
 * Created by 1400003 on 23/11/2015.
 */
var mongodb = require ('mongodb');
var http = require ('http');
var port = process.env.PORT || 1337;
var url = 'mongodb://<DarkGtr>:<1squall1>@ds054308.mongolab.com:54308/darknodeapp'
var MongoClient = mongodb.MongoClient;