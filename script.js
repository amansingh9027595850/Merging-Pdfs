const express = require('express');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const port = 9027;
const {mergerPdfs} = require('./merge.js');
app.use('/static', express.static('public'))



app.get('/', ( req , res)=>{
    // res.send('hello world 123 3456r');
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/merge', upload.array('pdfs', 2), async(req, res, next)=> {
    console.log(req.files);
    let time = await mergerPdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
    res.redirect(`http://localhost:9027/static/${time}.pdf`);
    
    // res.send({data: req.files});

  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

app.listen(port,()=>{
    console.log(`serveer is running on port http://localhost:${port}`);
})