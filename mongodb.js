const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-mananger'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database.')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'Doug',
  //   age: 34
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 28
  //   }, {
  //     name: 'Gunther',
  //     age: 27
  //   }
  // ], (error, result) => {
  //   if (error) { return console.log('Unable to insert documents') }
    
  //   console.log(result.ops)
  // })

  db.collection('tasks').insertMany([
    {
      description: 'Take out the garbage',
      completed: false
    }, {
      description: 'Walk the dog',
      completed: true
    }, {
      description: 'Clean out the fridge',
      completed: false
    }
  ], (error, result) => {
    if (error) { return console.log('Unable to insert documents') }
    console.log(result.ops)
  })
})