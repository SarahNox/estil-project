const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/estil');
const User = require('../models/user');
const Stylist = require('../models/stylist');

const users = [
  {
    name        : 'Cara',
    email       : "cara@i.com",
    password    : '1234',
    role        : 'User',
    avatar      : ' ',
    appointments: {
      date : new Date()
    }
  },
  {
    name        : 'Tasha',
    email       : 'tasha@cool.com',
    password    : '2345',
    role        : 'User',
    avatar      : ' ',
    appointments: {
      date : new Date()
    }
  },
  {
    name        : 'Mika',
    email       : 'mika@yell.com',
    password    : '3456',
    role        : 'User',
    avatar      : ' ',
    appointments: {
      date : new Date()
    }
  }];

const stylists = [
  {
    name        : 'Harry Potter',
    email       : 'harry@potter.co',
    password    : 'abcd',
    role        : 'Stylist',
    appointments: {
      date : new Date()
    },
    avatar: ' ',
    experience  : '',
    expertise   : 'Any',
    price       : ' ',
    availability: ' ',
    location    : 'Via Augusta, 92'
  },
  {
    name        : 'Hermione Granger',
    email       : 'hermione@granger.co.uk',
    password    : 'abcd',
    role        : 'Stylist',
    appointments: {
      date : new Date()
    },
    avatar: ' ',
    experience  : '',
    expertise   : 'Any',
    price       : ' ',
    availability: ' ',
    location    : 'Carrer de lAtlàntida, 53, 08003 Barcelona'
  },
];


User.create(users, (err, docs)=> {
  if (err){throw(err);}

  docs.forEach( (user)=>{
    console.log(user.name);
  })
  mongoose.connection.close();
});

Stylist.create(stylists, (err, docs)=> {
  if (err){throw(err);}

  docs.forEach( (stylist)=>{
    console.log(stylist.name);
  })
  mongoose.connection.close();
});
