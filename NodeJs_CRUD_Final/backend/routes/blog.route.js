let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
let blogSchema = require("../models/Blog");
  
router.post("/create-blog", (req, res, next) => {
  blogSchema.create(req.body)
  .then(data => {
    res.json(data)})
  .catch(
      err => {
        console.log(err) 
        res.json(err)
  });
})
  

router.get("/", (req, res) => {
  blogSchema.find({}).then(data => {res.json(data)}).catch(err => res.send(err))  
});
  

router
  .route("/update-blog/:id")
  .get((req, res) => {
    blogSchema.findById(

      req.params.id).then(data => {
        res.json(data)
        console.log(req.params)})
        .catch(err => {
          console.log(err)
          res.send(err)})
  })
  
  .put((req, res, next) => {
    blogSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      }).then(data =>  {          
        res.json(data);
        console.log("Student updated successfully !");
      }).catch(error => {
        console.log(error);    
        return next(error);
       
      })
    }
    );
  
router.delete("/delete-blog/:id", 
(req, res, next) => {
  blogSchema.findByIdAndRemove(
      req.params.id).then(data => {
        res.status(200).json({
          msg: data,
        })
      });
    }
  );

  
module.exports = router;