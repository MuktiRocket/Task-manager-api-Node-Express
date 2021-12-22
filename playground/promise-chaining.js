require('../src/db/mongoose')

const User = require('../src/models/user')
const Task = require('../src/models/task')

//61b06ba2b72c7dd55212613f

// User.findByIdAndUpdate('61b06ba2b72c7dd55212613f',{ age: 1} ).then((user)=>{
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


// Task.findByIdAndDelete('61a9c8fab6e0ddcf51e67df9').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

// const updateAgeAndCount = async(id,age) =>{
//     const user = await User.findByIdAndUpdate(id,{age})
//     const count = await User.countDocuments({age})
//     return count 
// }

// updateAgeAndCount('61b06ba2b72c7dd55212613f', 2).then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count 
}

deleteTaskAndCount('61a9c8fab6e0ddcf51e67df9').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})