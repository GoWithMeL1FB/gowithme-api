const redis = require("redis"), client = redis.createClient();
// download server with brew install redis
// start the server run: redis-server /usr/local/etc/redis.conf
// defaults to 127.0.0.1 port 6379

client.on("connect", () => {
    console.log('redis connected!')
});
client.on("error", function(err) {
    console.log("Redis Error", + err);
  });
/*
*** This is for Testing redis ***
client.set("string key", "string value", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});
*/

const setUserStats = () => {
    
    // query for userid's from mysql database
    //get required data from mysql database
    //vvv create hash for each user vvv
    /*client.hmset('<username>', {
        'dateCourseCount': <int>, 
        'mostSharedDC': <int>, 
        'mostLikedDC': <int> })
    
    client.hgetall('<username>', function(err, object) {
        console.log(object);
    });
    */

}

