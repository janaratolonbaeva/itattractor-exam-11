const mongoose = require('mongoose');
const config = require('./config');
const {nanoid} = require('nanoid');

const Category = require("./models/Category");
const Goods = require("./models/Goods");
const User = require("./models/User");

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [computers, cars, other] = await Category.create({
    title: 'computers'
  }, {
    title: 'cars'
  }, {
    title: 'other'
  });

  const [user1, user2] = await User.create({
    username: 'john_doe',
    password: '123',
    displayName: 'John Doe',
    phone: '999-99-99',
    token: nanoid()
  }, {
    username: 'mike_honey',
    password: '123',
    displayName: 'Mike Honey',
    phone: '888-88-88',
    token: nanoid()
  });

  await Goods.create({
    title: 'Seagate Barracuda 3TB',
    description: 'Something... ',
    category: computers,
    image: 'fixtures/hdd.jpg',
    user: user1._id
  }, {
    title: 'Super Car',
    description: 'Something... ',
    category: cars,
    image: 'fixtures/car.jpeg',
    user: user1._id
  }, {
    title: 'Toy Pikachu',
    description: 'Something... ',
    category: other,
    image: 'fixtures/toy.jpeg',
    user: user2._id
  });

  await mongoose.connection.close();
};

run().catch(console.error);