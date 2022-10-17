// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID=mongodb.ObjectID

const {MongoClient, ObjectID}=require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'//conectam sv
const databaseName='task-manager'



MongoClient.connect(connectionURL, {useNewUrlParser: true},(error, client)=>{
    if(error){
       return console.log('Nu s-a putut conecta la db')
    }
    const db = client.db(databaseName)//am conectta la o anumita bd

    // db.collection('users').findOne({_id:new ObjectID("634d19282407c1623012ac1e")},(error,user)=>{
    //     if(error){ 
    //         return console.log('Nu s a gasit')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 22}).toArray((error,users)=>{
    //     if(error){ 
    //         return console.log('Nu s a gasit')
    //     }
    //     console.log(users)
    // })

    //  db.collection('tasks').findOne({_id:new ObjectID("634d1a292a76a43544ef7427")},(error,task)=>{
    //     if(error){ 
    //         return console.log('Nu s a gasit')
    //     }
    //     console.log(task)
    // })

     db.collection('tasks').find({completed: false}).toArray((error,tasks)=>{
        if(error){ 
            return console.log('Nu s a gasit')
        }
        console.log(tasks)
    })



})