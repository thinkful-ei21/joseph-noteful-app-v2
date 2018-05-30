// 'use strict';

// const knex = require('../knex');

// let searchTerm = 'gaga';

// knex('notes')
//   .select('notes.id', 'title', 'content')
//   .modify(function (queryBuilder) {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

// knex('notes')
//   .first('notes.id', 'title', 'content')
//   .where('notes.id', '1005')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err =>{
//     console.error(err);
//   });

// knex('notes')
//   .update({
//     title: '',
//     content: ''
//   })
//   .where('id', '1005')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

// knex('notes')
//   .where('notes.id', '1005')
//   .del()
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err =>{
//     console.error(err);
//   });