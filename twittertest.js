/**
 * Created by 1400003 on 30/11/2015.
 */

var Twitter = require('twitter');
var client = new Twitter ({
    consumer_key: 'FlHG5MRryB6gGBw7k19Enizaq',
    consumer_secret: 'j7LuAv3d5b8eCOqehJomhvi91BArqP2a5qtlFq5HsVma456bno',
    access_token_key: '4329333393-Bjg5j3KiVLwSTK34dWGMz0rePMEevO90HocrQpI',
    access_token_secret: 'UzCAMrmrxIgv79KZfQVYVf5coump0SIDyhcRuI8MT29Nc'
})

client.get('search/tweets', {q: 'lolcat'}, function(error, tweets){
    console.log(tweets);
});

