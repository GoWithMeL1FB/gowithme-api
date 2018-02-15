import axios from 'axios'
import { Promise } from 'bluebird';

import { getItinerariesByUsernameQuery } from '../../../events-server/src/components/itinerary/itineraryQueries';

const { userQuery } = require('../components/user/userQueries');
const CronJob = require('cron').CronJob;

// const testJob = new CronJob('1 * * * * * *', function() {
// //I expext this to run once every minute

//   console.log("Cron job Ran!");
// }, function() {
//   //optional second function
  
//     console.log("Second function ran");
//   }, true, 'America/Los_Angeles' );

//   console.log('Test cron', testJob.running);
//   testJob.start();
//   console.log('Test cron', testJob.running);



const StatWorker = new CronJob('* 1 * * * * *', async () => {
  console.log("Cron job Ran!");
  //query db for all usernames
  const allUsers = await userQuery();

  let userStats =[];
  //save in array as object
  allUsers.forEach( user => {
    console.log("found user", user.username)
    userStats.push({
    username: null,
    count: 0,
    mostLiked: {name: null, numberOfLikes: 0},
    mostShared: {name: null, numberOfShares: 0}
    });
  });
    //console.log("userStats ", userStats);
  console.log('this is userstats', userStats)
  // for each user query events database for Date Courses with owner equal to username
  // await Promise.all(userStats, userStats.forEach(async (user) => {
    for(let i = 0; i < userStats.length; i ++) {
      console.log('hey do we get hit first')
      // let itineraries = await getItinerariesByUsernameQuery(user.username)
      const { data } = await axios.get('http://localhost:3031/api/itinerary/getItinerariesByUsername/karolee')
      // console.log('user=', user );
      // console.log('HI HI HI', user.username );
      console.log('data= ', data);
        data.forEach(itin => {
          console.log(itin.title);
          userStats[i].username = data[0].owner
          userStats[i].count += 1
          if(itin.meta.likes.length >= userStats[i].mostLiked.numberOfLikes) {
            userStats[i].mostLiked.name = itin.title
            userStats[i].mostLiked.numberOfLikes = itin.meta.likes.length
          }
          if(itin.meta.shares.length >= userStats[i].mostShared.numberOfShares) {
            userStats[i].mostShared.name = itin.title
            userStats[i].mostShared.numberOfShares = itin.meta.shares.length
          }
        })
    }
    // }))
    console.log("I should have some data for you ...", userStats[0]);
  /* worker should:

    for each Date Course found 
      increment count value
      if DateCourse.meta.likes.length > mostLiked.numberOfLikes
        set MostLiked.name = DateCourse.title
        set MostLiked.numberOfLikes = DateCourse.meta.likes.length
      if DateCourse.meta.shares.length > mostShared.numberOfShares
        set MostShared.name = DateCourse.title
        set MostShared.numberOfShares = DateCourse.meta.shares.length
  update redis with new data    
  */
    
}, null, true, 'America/Los_Angeles' );
  
console.log('Test cron', StatWorker.running);
StatWorker.start();
console.log('Test cron', StatWorker.running);

    