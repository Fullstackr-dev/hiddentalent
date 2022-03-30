const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

// const { Schema } = mongoose;
// const userProfile = new Schema ({
//     firstName: String,
//     lastName: String,
//     developerType: String,
//     location: String,
//     shortDescription: String,
//     fullDescription: String
// });

// const user1 = db.hidden_talent.find()

// const userData = mongoose.model('userData',userProfile)

app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', async (req,res) => {
    res.render('index')
})
app.get('/candidates', async (req,res) => {
    res.render('candidates')
})
app.get('/donate', async (req,res) => {
    res.render('donate')
})
app.get('/contact', async (req,res) => {
    res.render('contact')
})
app.get('/signin', async (req,res) => {
    res.render('signin')
})

mongoose.connect('mongodb+srv://admin:VEHdfBYWFa2AWr8@sandboxcluster.ybv6g.mongodb.net/SandboxCluster?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!")
        console.log(err)
    })
app.listen(3000, () => {
    console.log('App is listening on port 3000')
})