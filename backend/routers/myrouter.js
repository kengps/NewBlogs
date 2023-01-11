const express = require('express');
const router = express.Router();
const path = require('path')
const Blogs = require('../models/mongoose')

const multer = require('multer');




// const Storage = multer.diskStorage({
//         destination:function(req, file , callback){
//                 callback(null, "../../frontend/public/images/home"); //* ตำแหน่งจัดเก็บไฟล์
//         },filename:function(req, file , callback){
//             callback(null , Date.now() + '.jpg') //* กำหนดชื่อไฟล์ ไม่ให้ซ้ำกัน โดยใช้ Date .
//         }
// })
 
// // //* เริ่มต้นทำการ upload

// const upload = multer({storage: Storage})




//const indexPath = path.join(__dirname,'../../public/index.html')


router.get('/', (req, res) =>{
    Blogs.find().exec((err, doc) => {
      res.render("homepage", { data: doc });
    });

})

router.get('/manage', (req, res) =>{

    res.render('forminput' )
})

router.post('/insert',(req, res) =>{

    //* Creating a new instance of the mongoDB model. สร้างข้อมูล data ใหม่ ที่มาจากการส่งจาก Form 
    let data = new Blogs({
        name: req.body.name,
       // img:  req.file.filename,
        description:req.body.description
    })
    

    //* A function that is being called from the mongoDB model.  นำข้อมูลใหม่ที่ได้ บันทึกไปยัง Mongoose
    Blogs.sendBlogs(data, (err) => {
      if (err) {
        console.log(`เกิดข้อผิดพลาด ${err}`);
      }

      res.redirect("/");
    });
   })


router.get('/path/:id', (req, res) =>{

    const pathId = req.params.id;
    if(pathId){
            res.end(`Welcome to the Path ${pathId}`)
    }
    
})


module.exports = router;