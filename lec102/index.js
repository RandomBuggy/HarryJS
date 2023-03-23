const express = require('express')
const path = require('path')
const {merger} = require('./merge')
const multer = require('multer');
const upload = multer({dest: "uploads/"})


const app = express()
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    let time = await merger(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    const url = `http://localhost:3000/static/${time}.pdf`;
    res.redirect(url)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
