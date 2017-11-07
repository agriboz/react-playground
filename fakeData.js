const faker = require('faker');

var db = { posts: [] };

for (var i = 1; i <= 20; i++) {
  db.posts.push({
    id: i,
    first_name: faker.random.words(),
    last_name: faker.date.recent(),
    email: faker.random.boolean(),
  });
}

console.log(JSON.stringify(db));
