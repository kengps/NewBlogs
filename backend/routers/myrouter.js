const express = require('express');
const router = express.Router();
const path = require('path')
const mongoDB = require('../models/mongoose')

const multer = require('multer');




// const Storage = multer.diskStorage({
//         destination:function(req, file , callback){
//                 callback(null,"../../public/images/imgBlogs") //* ตำแหน่งจัดเก็บไฟล์
//         },filename:function(req, file , callback){
//             callback(null , Date.now() + '.jpg') //* กำหนดชื่อไฟล์ ไม่ให้ซ้ำกัน โดยใช้ Date .
//         }
// })
 
// //* เริ่มต้นทำการ upload

// const upload = multer({storage: Storage})




//const indexPath = path.join(__dirname,'../../public/index.html')


router.get('/', (req, res) =>{
    const isName = [
        {name:'123', price:'500'},
        {name:'456', price:'5000'},
        {name:'789', price:'50000'},
    ]
    res.render('homepage', {data:isName} )

})

router.get('/manage', (req, res) =>{

    res.render('forminput' )
})

router.post('/insert',(req, res) =>{

    //* Creating a new instance of the mongoDB model. สร้างข้อมูล data ใหม่ ที่มาจากการส่งจาก Form 
    let data = new mongoDB({
        name: req.body.name,
       // img:  req.body.name,
        description:req.body.description
    })
    

    //* A function that is being called from the mongoDB model.  นำข้อมูลใหม่ที่ได้ บันทึกไปยัง Mongoose
    mongoDB.sendBlogs(data , (err) => {
        if(err) {
            console.log(`เกิดข้อผิดพลาด ${err}`);

        }

        res.redirect('/')
    })
   })


router.get('/path/:id', (req, res) =>{

    const pathId = req.params.id;
    if(pathId){
            res.end(`Welcome to the Path ${pathId}`)
    }
    
})


module.exports = router;