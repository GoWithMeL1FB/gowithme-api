import Promise from 'bluebird';
const redis = require("redis")
const client = redis.createClient();
// download server with brew install redis
// start the server run: redis-server /usr/local/etc/redis.conf
// defaults to 127.0.0.1 port 6379

Promise.promisifyAll(redis.RedisClient.prototype);

client.on("connect", () => {
    console.log('redis connected!');
});
client.on("error", function(err) {
    console.log("Redis Error", + err);
  });

export const getUserStats = async (username) => {
    try{
        let stats = null;
        console.log('heyhey', username);
        await client.hgetallAsync(`${username}`).then((object) => {
            console.log("~~~this is the redis object", object);
            stats = object;
        }) 
        console.log("!!***** getUserStats function ", username, stats)
        return stats
    } catch(err) {
        console.log(err);
    }
}

export const setUserStats = (array) => {
    for(let i = 0; i < array.length; i++) {
        console.log('set user stats', array[i].username);
        client.hmset(`${array[i].username}`, {
            'dateCourseCount': `${array[i].count}`, 
            'mostSharedDC': `${array[i].mostShared.name}`, 
            'mostLikedDC': `${array[i].mostLiked.name}` })
        
        client.hgetall(`${array[i].username}`, function(err, object) {
            console.log(object);
        });


    }


}

