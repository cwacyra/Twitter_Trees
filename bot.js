console.log("the bot is good");

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'FrEFsI0lZn2GeIP0Yi9gTj1ei',
  consumer_secret:      'tj868w2fUKRgsSaW3RhZ889CBsqEUffLA8Va6j4ugAJxRRRyqZ',
  access_token:         '992851206606336000-vz8yQlSJKprGHw6G4aVTjmlqeecjCXT',
  access_token_secret:  'gcslqxNDBGHgdmfrg9PfRpa7YJ2PUzMW5dJ8OsYJTBFz9',
});

var exec = require('child_process').exec;
var fs = require('fs');



tweetIt();
setInterval(tweetIt, 1000*20)

function tweetIt(){
    var cmd = 'processing-java --sketch=`pwd`/sketching --run';
    exec(cmd, processing);

    function processing(){
        console.log('finished boi')
        var filename = 'sketching/output.png';
        var params = {
        encoding: 'base64' 
        }
        var b64 = fs.readFileSync(filename, params);
        
        T.post('media/upload', { media_data: b64 }, uploaded) ;
           
        function uploaded(err, data, response){
        var id = data.media_id_string;
        var tweet = {
            status: 'another day',
            media_ids:[id]
            }
        
        T.post('statuses/update', tweet, tweeted);
        }
    
        function tweeted(err, data, response){
        console.log("sup")
        }
    }
}
        





    