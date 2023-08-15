const Users = require('./Users')
const Orders = require('./Orders')
const Books = require('./Books')
const BookAuthors = require('./BookAuthors')

//Exports all objects

module.exports = {
    users: new Users(),
}