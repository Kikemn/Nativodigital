const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hospitalSchema = Schema({
    nameH: {type: String, required: true}
},{
    timestamps:true
})


module.exports = mongoose.model('hospital',hospitalSchema)