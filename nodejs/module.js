// NPM module //
// const color = require('cli-color')

/* (function (exports, module,require,__dirname, __filename){
    var age = 25;
    console.log(name)
})() */

// NPM module //
// const color = require('cli-color')

// console.log(color.yellow('Hello Node'))

// Local Module  //
/* const register = require('./auth')

register('Rahul') */

// const auth = require('./auth')

// auth.register('Rahul')
// auth.login('Rahul', 'secret')


// Core modules //

const path = require('path')



// dirname //

// console.log('Folder Name: ', path.dirname(__filename))


// Filename //

// console.log('File Name: ', path.basename(__filename))

// Extension //

// console.log('Ext Name: ', path.extname(__filename))


// Parse //

// console.log('Parse : ', path.parse(__filename))


// Join //

// console.log('Join : ', path.join(__dirname, 'order', 'app.js'))


// File System //
const fs = require('fs')

// Make a directory (Create Folder) //

/* fs.mkdir(path.join(__dirname, './test'),(err) =>{
    if(err){
        console.log('Something went wrong....')

        return
    }
    console.log('Folder created...')
}) */

// Create a file  //

/* fs.writeFile(path.join(__dirname, 'test', 'test.txt'),'Hello Node', (err) =>{
    if(err) {
        throw err
    }
    console.log('File created....')
}) */

// Read a File //

/* fs.readFile(path.join(__dirname, 'test', 'test.txt'),(err, data) =>{
    if(err){
        throw err
    }

    const content = Buffer.from(data)
    console.log(content.toString())
}) */

// Operating System (OS Module) //

const os = require('os')


// console.log('os type: ', os.type())

// console.log('os platform: ', os.platform())

// console.log('os architecture: ', os.arch())

// console.log('cpu Details: ', os.cpus())

// console.log('Free Memory: ', os.freemem())

// console.log('Total Memory: ', os.totalmem())

// console.log('Uptime: ', os.uptime())


// Event Modules //

const Emitter = require('events')
const { Console } = require('console')

// const myEmitter = new Emitter()

/* myEmitter.on('somename', (data) =>{
    console.log(data)
})

myEmitter.emit('somename',{
    name: 'Rahul Sharma'

}) */

/* class Auth extends Emitter {
    register(username){
        console.log('Registered successfully...')

        this.emit('registered', username)
    }
}

const auth = new Auth() */


// Listen //

// Verify Email //
/* auth.on('registered', (data) => {
    console.log(`Sending email to ${data}`)

}) */

// Welcome Email Message //
/* auth.on('registered', (data) => {
    console.log(`Sending welcome email to ${data}`)

})

auth.register('Rahul') */




