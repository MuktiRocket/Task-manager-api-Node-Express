const express = require('express')
require('./db/mongoose')
const { findByIdAndUpdate, find, findById } = require('./models/user')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const bcrypt = require('bcryptjs')

const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is up on the port ' + port)
})

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//         res.send('All requests are disabled')
// })


// const jwt = require('jsonwebtoken')
// const myFunction = async () => {
//     const token = jwt.sign({_id:123456789},'mynameisjaydeepsarkar',{expiresIn:'5 seconds'})
//     console.log(token)
//     const data = jwt.verify(token,'mynameisjaydeepsarkar')
//     console.log(data)
// }

// // myFunction()
// const User = require('../src/models/user')
// // const Task = require('../src/models/task')
// const main = async () => {
//     // const task = await Task.findById('61b85adbe0e0bd6c6ced05c5')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('61b85966eae9ae481d3af8a4')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits:{
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb){

//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             cb(new Error('File uploaded must be Word document'))
//         }

//         cb(undefined, true) 
//         // cb(new Error('File uploaded must be PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('from my errorMiddleware')
// }

// app.post('/upload', upload.single('upload'), (req,res)=> {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })