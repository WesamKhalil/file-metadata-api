const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

app.use('/public', express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    console.log(req.file)
    res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ' + (process.env.PORT || 3000))
})