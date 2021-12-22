//CRUD Create Read Update Delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()

// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error,client)=>{
    if(error){
        return console.log('Unable to connect to the database')
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID('61a758395cdf8b4592c50ebe')
    // },{
    //     $inc:{
    //         age:5
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('task').updateMany({
    //     completed:false 
    // },{
    //     $set: {
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age:30
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('task').deleteOne({
    //     description:'Pot plants'
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').findOne({name:'Jaydeep'},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch users!')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').findOne({_id: new ObjectID('61a758395cdf8b4592c50ebe')},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch users!')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age:25}).toArray((error,users)=>{
    //     if(error){
    //         return console.log('Unable to fetch users!')
    //     }
    //     console.log(users)
    // })

    // db.collection('users').find({age:25}).count((error,count)=>{
    //     if(error){
    //         return console.log('Unable to fetch users!')
    //     }
    //     console.log(count)
    // })

    // db.collection('task').findOne({_id: new ObjectID('61a74f2977dcce0361f954a8')},(error,tasks)=>{
    //     if(error){
    //         return console.log('Unable to fetch users!')
    //     }
    //     console.log(tasks)
    // })

    // db.collection('task').find({completed:false}).toArray((error,tasks)=>{
    //     if(error){
    //         return console.log('Unable to fetch users!')
    //     }
    //     console.log(tasks)
    // })

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age:25       
    // }, (error,result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result) 
    // })

//     db.collection('users').insertMany([
//         {
//             name:'ankur',
//             age:26
//         },
//         {
//             name:'Debolina',
//             age:23
//         }
//     ],(error,result)=>{
//         if(error){
//             return console.log('Unable to insert data')
//         }
//         console.log(result.insertedIds)
//     })
    // db.collection('task').insertMany([
    //     {
    //         description:'Clean the house',
    //         completed:true
    //     },
    //     {
    //         description:'Renew Inspection',
    //         completed:false
    //     },
    //     {
    //         description:'Pot plants',
    //         completed:false
    //     },
    // ], (error,result) => {
    //     if(error){
    //         return console.log('Unable to insert Documents!')
    //     }
    //     console.log(result)
    // })
})

// *************************************************************************************************************************
                                                        //\\ Callback //\\
// const doWorkCallback = (callback) =>{
//     setTimeout(()=>{
//         callback(undefined,[1,4,7])
//         // callback('Error!',undefined)
//     },2000)
// }

// doWorkCallback((error,result)=>{
//     if(error){
//         return console.log(error)
//     }
//     console.log('Success!',result)
// })

                                                        //\\ Promises //\\

// const doWorkPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve([1,4,7])
//         reject('Error, Something went wrong!')
//     },2000)
// })

// doWorkPromise.then((result)=>{
//     console.log('Success!',result)
// }).catch((error)=>{
//     console.log('Error!',error)
// })

//*************************************************************************************************************************