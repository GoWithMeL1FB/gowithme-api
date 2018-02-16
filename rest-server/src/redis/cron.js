// import axios from 'axios'
// import { Promise } from 'bluebird';
// import { setUserStats } from './index.js'

// import { getItinerariesByUsernameQuery } from '../../../events-server/src/components/itinerary/itineraryQueries';

// const { userQuery } = require('../components/user/userQueries');
// const CronJob = require('cron').CronJob;

// const StatWorker = new CronJob('* 1 * * * * *', async () => {
//   console.log("Cron job Ran!");
//   //query db for all usernames
//   const allUsers = await userQuery();

//   let userStats =[];
//   //save in array as object
//   allUsers.forEach( user => {
//     console.log("found user", user.username)
//     userStats.push({
//     username: user.username,
//     count: 0,
//     mostLiked: {name: null, numberOfLikes: 0},
//     mostShared: {name: null, numberOfShares: 0}
//     });
//   });
//     //console.log("userStats ", userStats);
//   console.log('this is userstats', userStats)
//   // for each user query events database for Date Courses with owner equal to username
//   // await Promise.all(userStats, userStats.forEach(async (user) => {
//     for(let i = 0; i < userStats.length; i ++) {
//       console.log('hey do we get hit first', userStats[i].username)
//       // let itineraries = await getItinerariesByUsernameQuery(user.username)
//       const { data } = await axios.get(`http://localhost:3031/api/itinerary/getItinerariesByUsername/${userStats[i].username}`)
//       console.log('data= ', data);
//         data.forEach(itin => {
//           console.log(itin.title);
//           userStats[i].count += 1
//           if(itin.meta.likes.length >= userStats[i].mostLiked.numberOfLikes) {
//             userStats[i].mostLiked.name = itin.title
//             userStats[i].mostLiked.numberOfLikes = itin.meta.likes.length
//           }
//           if(itin.meta.shares.length >= userStats[i].mostShared.numberOfShares) {
//             userStats[i].mostShared.name = itin.title
//             userStats[i].mostShared.numberOfShares = itin.meta.shares.length
//           }
//         })

//     }
    
//     setUserStats(userStats);
    
// }, null, true, 'America/Los_Angeles' );
  
// console.log('Test cron', StatWorker.running);
// StatWorker.start();
// console.log('Test cron', StatWorker.running);

    