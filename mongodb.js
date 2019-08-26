const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-mananger'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database.')
  }

  const db = client.db(databaseName)

  db.collection('tasks').findOne({ _id: new ObjectID("5d5f8d43ff208d7151f06dd6") }, (error, task) => {
    if (error) { return console.log('Unable to fetch') }
    console.log(task)
  })

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    if (error) { return console.log('Unable to fetch') }
    console.log(tasks)
  })

  // db.collection('users').findOne({ _id: new ObjectID("5d63304560022ad1af907bd4") }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }
  //   console.log(user)
  // })

  // db.collection('users').find({ name: "Doug" }).toArray((error, users) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }
  //   console.log(users)
  // })

  // db.collection('users').find({ name: "Doug" }).count((error, count) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }
  //   console.log(count)
  // })
  

})