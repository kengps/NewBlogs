const mongoose = require("mongoose");

//* Connecting to the database.  เขื่อมต่ะ MongoDb ด่้วย Mongoose
mongoose.connect("mongodb://localhost:27017/blogs_wshop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//* Creating a schema for the database. สร้าง schema
const createBlogSchema = mongoose.Schema({
  //*! Creating a date and time stamp for the blog post. เวลาประเทศไทยไทย
  postedAt: {
    type: String,
    default: new Date().toLocaleString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    }),
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
   
  },
});

//* Creating a model for the database. */

const blogsModel = mongoose.model("blogs", createBlogSchema);

module.exports = blogsModel;

//* module.exports.blogsModel(() => {
//*    mongoose.model('blogs' ,createBlogSchema)
//* })

//*ออกแบบ function สำหรับบันทึกข้อมูล

module.exports.sendBlogs = (model, data) => {
  model.save(data);
};
