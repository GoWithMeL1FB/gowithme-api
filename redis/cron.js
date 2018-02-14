const CronJob = require('cron').CronJob;
//import { getAllUsers } from '../rest-server/src/components/user/userController';
//import { getItinerariesByUsernameQuery } from '../events-server/src/components/itinerary/itineraryQueries.js';

const testJob = new CronJob('1 * * * * * *', function() {
//I expext this to run once every minute

  console.log("Cron job Ran!");
}, function() {
  //optional second function
  
    console.log("Second function ran");
  }, true, 'America/Los_Angeles' );

  console.log('Test cron', testJob.running);
  testJob.start();
  console.log('Test cron', testJob.running);








  const StatWorker = new CronJob('* 1 * * * * *', function() {
    //query db for all usernames
    const allUsers = getAllUsers();
    let userStats =[];
    //save in array as object
    allUsers.forEach(user => {
      console.log("found user", user.username)
      userStats.push( {
      username: user.username,
      count: null,
      mostLiked: {name: null, numberOfLikes: null},
      mostShared: {name: null, numberOfShares: null}
      });
    });
    // for each user query events database for Date Courses with owner equal to username
    // userStats.forEach( user => {
    //   let itineraries = getItinerariesByUsernameQuery(user.username);
    //   console.log( itineraries );
    
    //   })
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
      console.log("Cron job Ran!");
    }, null, true, 'America/Los_Angeles' );
    
  console.log('Test cron', testJob.running);
  testJob.start();
  console.log('Test cron', testJob.running);
  
    