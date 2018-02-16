<<<<<<< HEAD

import Promise from 'bluebird';
import redis from 'redis';
const client = redis.createClient();
// download server with brew install redis
// start the server run: redis-server /usr/local/etc/redis.conf
// defaults to 127.0.0.1 port 6379
=======
// import Promise from 'bluebird';
// const redis = require("redis")
// const client = redis.createClient();
// // download server with brew install redis
// // start the server run: redis-server /usr/local/etc/redis.conf
// // defaults to 127.0.0.1 port 6379
>>>>>>> [fix] redis halt

// Promise.promisifyAll(redis.RedisClient.prototype);

<<<<<<< HEAD
client.on("connect", () => {
    console.log('redis connected!');
});
client.on("error", function(err) {
    console.log("Redis Error" + err);
  });

export const getUserStats = async (username) => {
    try{
        let stats = null;
        console.log('heyhey', username);
        await client.hgetallAsync(`${username}`)
        .then((object) => {
            stats = object;
        })
        console.log("!!***** getUserStats function ", username, stats)
        return stats
    } catch(err) {
        console.log(err);
    }
}
=======
// client.on("connect", () => {
//     console.log('redis connected!');
// });
// client.on("error", function(err) {
//     console.log("Redis Error", + err);
//   });

// export const getUserStats = async (username) => {
//     try{
//         let stats = null;
//         console.log('heyhey', username);
//         await client.hgetallAsync(`${username}`)
//         .then((object) => {
//             stats = object;
//         }) 
//         console.log("!!***** getUserStats function ", username, stats)
//         return stats
//     } catch(err) {
//         console.log(err);
//     }
// }
>>>>>>> [fix] redis halt

// export const getUserImg = async (userImgRef) => {
//     try{
//         let img = null
//         await client.getAsync(`${userImgRef}`)
//         .then((reply) => {
//             img = reply;
//         }) 
//         console.log("******REDIS IMAGE", img);
//         return img
//     } catch(err) {
//         console.log(err);
//     }

// }

<<<<<<< HEAD
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


export const setUserImg = (key, imgLink) => {
=======
// export const setUserStats = (array) => {
//     for(let i = 0; i < array.length; i++) {
//         console.log('set user stats', array[i].username);
//         client.hmset(`${array[i].username}`, {
//             'dateCourseCount': `${array[i].count}`, 
//             'mostSharedDC': `${array[i].mostShared.name}`, 
//             'mostLikedDC': `${array[i].mostLiked.name}` })
        
//         client.hgetall(`${array[i].username}`, function(err, object) {
//             console.log(object);
//         });
//     }
// }

// export const setUserImg = (key, imgLink) => {
>>>>>>> [fix] redis halt
    
//         client.set(`${key}`, `${imgLink}`, redis.print);
//         getUserImg(`${key}`);

// }