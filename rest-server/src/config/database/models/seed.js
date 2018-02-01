import Users from './users';
import categories from './categories';
// import dateCourse from './dateCourse';
// import events from './events';
import rating from './rating';
import dateCourseEvents from './dateCourseEvents';
import comments from './comments';
import categoryJoin from './categoryJoin';

console.log("seed page");

const seedTables = () =>{
    users.bulkCreate([
      {
        id: 1,
        username: "Jon",
        password: "password",
        email: "jonDoe@fakeemail.com",
        bio: "This is the test bio for Jon Doe fake user seed data."
      },
      {
        id: 2,
        username: "Jane",
        password: "password",
        email: "janeDoe@fakeemail.com",
        bio: "This is the test bio for jane Doe fake user seed data."
      }
    ])
      .then(() => {
        console.log('users seed data created');
      })
      .catch(err => {
        console.error('users seed failed', err);
      });

categories.bulkCreate([
  {
    id: 1,
    name: "food"
  },
  {
    id: 2,
    name: "activity"
  },
  {
    id: 3,
    name: "event"
  }
])
.then(() => {
  console.log('categories seed data created');
})
.catch(err => {
  console.error('categories seed failed', err);
});

// dateCourse.bulkCreate([
//     {
//     id: 1 ,
//     date: "01/29/17",
//     name: "Day in LA",
//     begin: "09:00:00",
//     end: "21:00:00",
//     people: 2,
//     rating: null,
//     comments: [1],
//     creator: 1,
//     rating_count: 0
//   }
// ])
// .then(() => {
//   console.log('dateCourse seed data created');
// })
// .catch(err => {
//   console.error('dateCourse seed failed', err);
// });

// events.bulkCreate([
//   {
//     id: 1,
//     name: "Griffith Observatory",
//     image_id: null,
//     categories: [2]
//   }
// ])
// .then(() => {
//   console.log('events seed data created');
// })
// .catch(err => {
//   console.error('events seed failed', err);
// });

// dateCourseEvents.bulkCreate([
//   {
//     dataCourse_id: 1,
//     event_id: 1
//   }
// ])
// .then(() => {
//   console.log('dateCourseEvents seed data created');
// })
// .catch(err => {
//   console.error('dateCourseEvents seed failed', err);
// });

comments.bulkCreate([
  {
    id: 1,
    user_id: 1,
    text: "this was a good day but the observatory was too crowded.",
    dateCourse_id: 1,
    parent_id: null
  }
])
.then(() => {
  console.log('comments seed data created');
})
.catch(err => {
  console.error('comments seed failed', err);
});

rating.bulkCreate([
  {
    id: 1,
    user_id: 1,
    dateCourse: 1,
    rating: 4
  }
])
  .then(() => {
    console.log('rating seed data created');
  })
  .catch(err => {
    console.error('rating seed failed', err);
  });

categoryJoin.bulkCreate([
  {
    category: 1,
    mark_type: 1,
    user_id: 1,
    event_id: null
  }
])
  .then(() => {
    console.log('categoryJoin seed data created');
  })
  .catch(err => {
    console.error('categoryJoin seed failed', err);
  });
};

seedTables();

module.exports = seedTables;