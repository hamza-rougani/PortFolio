import express from "express";
import mongoose from "mongoose";
import Project from "./Model/Projects.js"
import multer from "multer"
import path from "path"
import Post from "./Model/Post.js"
import User from "./Model/Admin.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import isAthenticated from "./Auth/auth.js"
import NewsPost from "./Model/NewsPost.js";
import NewsProject from "./Model/NewsProject.js";
const app = express();
// Import the cors middleware
import cors from "cors"
app.use(cors({
    origin: 'http://localhost:5173', // Replace with the actual origin of your client app
    methods: 'GET,POST,PUT,DELETE',
    // optionsSuccessStatus: 200, // Some legacy browsers (IE11) choke on a 204 response
  }));

//Middleware
app.get(express.json())
//connect to database mongodb
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://Portfolio:zQto5FWhSv1BcBQ8@cluster0.9vyuq1d.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("connection sucessfully to mongodb"))
.catch(()=>console.log("connection failed"))
// const fileFilter = (req, file, cb) => {
//   // Get the file extension from the original file name
//   const fileExtension = file.originalname.split('.').pop().toLowerCase();

//   // Check if the file extension is 'txt'
//   if (fileExtension === 'txt') {
//     // Skip 'txt' files, do not throw an error
//     cb(null, false); // File is not allowed
//   } else {
//     cb(null, true); // File is allowed
//   }
// };
// Set up Multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      const extname = path.extname(file.originalname);
      cb(null,file.fieldname+"-"+Date.now() + extname);
    },
  });
  
  const upload = multer({ storage });



//get Project
app.get("/project",async(req,res)=>{
try{
const projects =await Project.find().sort({"_id":-1})
res.status(200).json({data:projects})
}
catch(err){
  res.status(400).json({err:err})
}
})
//show Project
app.get("/show/:id",async(req,res)=>{
  const objectId  = req.params.id
  try{
  let project =await Project.findOne({_id:objectId})
  res.status(200).json({data:project})
  }
  catch(err){
    res.status(400).json({err:err})
  }
  })
//store Project
app.post('/create',isAthenticated,upload.fields([
    { name: 'Image', maxCount: 4 },
    { name: 'ImagesR', maxCount: 10 },
    { name: 'ImagesD', maxCount: 10 },
  ]), async (req, res) => {
    try {

    const Introduct = JSON.parse(req.body.Introduct)
    const Overview = JSON.parse(req.body.Overview)
    const Problem = JSON.parse(req.body.Problem)
    const Solution = JSON.parse(req.body.Solution)
    const Diagrams = JSON.parse(req.body.Diagrams)
    const Realization = JSON.parse(req.body.Realization)
          const introductImage = req.files['Image'][0].path;
          const RImage = req.files['ImagesR'].map(file=>file.path);
          const DImage = req.files['ImagesD'].map(file=>file.path);
    
          const projectData = {
    
            Introduct: {
                title: Introduct.title,
                desc: Introduct.desc,
                tools: Introduct.tools,
                image:introductImage,
              },
            Overview: {
              title: Overview.title,
              desc: Overview.desc,
            },
            Problem: {
              title: Problem.title,
              desc: Problem.desc,
            },
            Solution: {
              title: Solution.title,
              desc: Solution.desc,
            },
            Diagrams: {
              title: Diagrams.title,
              desc: Diagrams.desc,
              images: DImage,
            },
            Realization: {
              title: Realization.title,
              desc: Realization.desc,
              images: RImage,
            },
            
            
          };
          
          const project = new Project(projectData);
      
          // Save the project data to the database
          await project.save();
      
          res.status(201).json({ body:JSON.parse(req.body.Introduct)});
   

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  });

 
//update Project
app.put('/updateproject/:id',isAthenticated,upload.fields([
  { name: 'Image', maxCount: 1 },
  { name: 'ImagesR', maxCount: 10 },
  { name: 'ImagesD', maxCount: 10 },
]), async (req, res) => {
  try {
  const id = req.params.id.toString()
  const Introduct = JSON.parse(req.body.Introduct)
  const Overview = JSON.parse(req.body.Overview)
  const Problem = JSON.parse(req.body.Problem)
  const Solution = JSON.parse(req.body.Solution)
  const Diagrams = JSON.parse(req.body.Diagrams)
  const Realization = JSON.parse(req.body.Realization)
  var imagesRialization = []
  var item = "ImagesR"
  JSON.parse(req.body.R).map((path)=>{
   if(path.includes(item)){
    imagesRialization.push(path)
   }else{
    var find = req.files["ImagesR"].find(i=>i.originalname==path);
    imagesRialization.push(find.path)
   }
  })
  var imagesDiagrams = []
  var item = "ImagesD"
  JSON.parse(req.body.D).map((path)=>{
   if(path.includes(item)){
    imagesDiagrams.push(path)
   }else{
    var find = req.files["ImagesD"].find(i=>i.originalname==path);
    imagesDiagrams.push(find.path)
   }
  })
  // console.log(req.body.)
 if(req.files["Image"]){
  var  introductImage = req.files["Image"][0].path
  
 }else{
  var  introductImage = req.body.Image
 }
        const projectData = {
     
          Introduct: {
              title: Introduct.title,
              desc: Introduct.desc,
              tools: Introduct.tools,
              image:introductImage,
            },
          Overview: {
            title: Overview.title,
            desc: Overview.desc,
          },
          Problem: {
            title: Problem.title,
            desc: Problem.desc,
          },
          Solution: {
            title: Solution.title,
            desc: Solution.desc,
          },
          Diagrams: {
            title: Diagrams.title,
            desc: Diagrams.desc,
            images: imagesDiagrams,
          },
          Realization: {
            title: Realization.title,
            desc: Realization.desc,
            images: imagesRialization,
          },
          
          
        };
        
       await  Project.findByIdAndUpdate({'_id':id},projectData);
        res.status(201).json({message:"the project has been updated successfully"});
 

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});
//destroy Project
app.delete("/project/:id",isAthenticated,async(req,res)=>{
  try{
    const id = req.params.id.toString()
     await Project.findByIdAndDelete({'_id':id})
    res.status(200).send({messsage:"project has been deleted"})
  }catch(err){
    res.status(400).json({err:err})
  }
})
// app.get("/test",async(req,res)=>{
//   try{
//     const count =await User.find().count()
//     res.status(200).send({count:count})
//   }catch(err){
//     res.status(400).send(err)
//   }


// })
//create post
app.post("/createpost",isAthenticated,upload.fields([{name:"image",maxCount:1}]),async(req,res)=>{
  try{
  const pathimage = req.files["image"][0].path;
  const CPost = new Post({
   post:req.body.post,
   image:pathimage,
  })
  await CPost.save()
  res.status(200).json({path:pathimage})
}catch(err){
  res.status(400).json({err:err})
}


})
//get posts
app.get("/posts",async(req,res)=>{
  try{
const posts =await Post.find().sort({"_id":-1});
res.status(200).json({data:posts})
  }catch(err){
    res.status(400).json({err:err})
  }
})
//get posts
app.get("/post/:id",async(req,res)=>{
  try{
    const id = req.params.id.toString()
const post =await Post.find({'_id':id});
res.status(200).json({data:post})
  }catch(err){
    res.status(400).json({err:err})
  }
})
//destroy post
app.delete("/post/:id",isAthenticated,async(req,res)=>{
  try{
    const id = req.params.id.toString()
     await Post.findByIdAndDelete({'_id':id})
    res.status(200).send({messsage:"post has been deleted"})
  }catch(err){
    res.status(400).json({err:err})
  }
})
//update post
app.put("/updatepost/:id",isAthenticated,upload.fields([{name:"image",maxCount:1}]),async(req,res)=>{
 try{
  const imagepath = req.files["image"][0].path
  const dataUpdate = {post:req.body.post,image:imagepath}
  const id = req.params.id.toString()
  await Post.findByIdAndUpdate({'_id':id},dataUpdate)
  res.status(200).json({message:"the post has been updated"})
 }catch(err){
  res.status(400).json({err:err})
 }
})

//create admin
app.post('/register', upload.none(), async (req, res) => {
  try {
    const count =await User.find().count()
    if(count==1){
  const {username,password} = req.body;

  // Hash the user's password
  const hashedPassword = await bcrypt.hash(password.toString(), 10);

  const user = new User({
      username:username,
      password: hashedPassword,
      isAdmin:false,
  });
      await user.save();
      res.status(201).json({user:req.body});
    }else{
      res.status(400).send("nuh bro")
     }
  } catch (err) {
      res.status(500).send(err.message);
  }
});
//login
// app.post("/loginAdmin", upload.none(),async(req, res, next) => {
//   User.findOne({ username: req.body.username })
//   .then(user => {
//   if (!user) {
//   return res.status(401).json({ error: 'Utilisateur non trouvé !' });
//   }
//   bcrypt.compare(req.body.password.toString(), user.password)
//   .then(valid => {
//   if (!valid) {
//   return res.status(401).json({ error: 'Mot de passe incorrect !' });
//   }
//   res.status(200).json({
//     userId: user._id,
//     token: jwt.sign(
//     { userId: user._id },
//     'RANDOM_TOKEN_SECRET',
//     { expiresIn: '24h' }
//     ),
//      isAdmin:user.isAdmin,
//     });
//     })
//     .catch(error => res.status(500).json({ error:error.message }));
//     })
//     .catch(error => res.status(500).json({ error:error.message }));
//     }
// )
app.post("/loginAdmin", upload.none(), async (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      
      bcrypt.compare(req.body.password.toString(), user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          
          // Use process.env.JWT_SECRET to sign the token
          const token = jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET', // Use the environment variable for the secret
            { expiresIn: '24h' }
          );
          
          res.status(200).json({
            userId: user._id,
            token: token,
            isAdmin: user.isAdmin,
          });
        })
        .catch(error => res.status(500).json({ error: error.message }));
    })
    .catch(error => res.status(500).json({ error: error.message }));
});

// post NewsPost
app.post("/NewsPost",isAthenticated,upload.fields([{name:"NewsPost"}]),async(req,res)=>{
  try{
    const NewsPostPath = req.files["NewsPost"][0].path
    const NewsPostU =  new NewsPost({NewsPostImage:NewsPostPath})
    await NewsPostU.save()
    res.status(200).json({res:"the NewsPost created successfully"})
  }catch(err){
    res.status(404).json({err:err.message})
  }
 
})
// get NewsPost
app.get("/NewsPost",async(req,res)=>{
  try{
   const data = await NewsPost.find().sort({"_id":-1})
    res.status(200).json({data:data})
  }catch(err){
    res.status(404).json({err:err.message})
  }
})
// show NewsPost
app.get("/NewsPost/:id",async(req,res)=>{
  try{
   const id =req.params.id
   const data = await NewsPost.find({'_id':id})
    res.status(200).json({data:data})
  }catch(err){
    res.status(404).json({err:err.message})
  }
})
// delete NewsPost
app.delete("/NewsPost/:id",async(req,res)=>{
  try{
   const id = req.params.id
  await NewsPost.findByIdAndDelete({'_id':id})
    res.status(200).json({res:"the NewsPost has been deleted"})
  }catch(err){
    res.status(404).json({err:err.message})
  }
})
// delete NewsPost
app.put("/NewsPost/:id",isAthenticated,upload.fields([{name:"NewsPost"}]),async(req,res)=>{
  try{
   const id = req.params.id
   const ImageUpdate = req.files["NewsPost"][0].path
  await NewsPost.findByIdAndUpdate({'_id':id},{NewsPostImage:ImageUpdate})
    res.status(200).json({res:"the NewsPost has been updated"})
  }catch(err){
    res.status(404).json({err:err.message})
  }
})



// post NewsProject
app.post("/NewsProject",isAthenticated,upload.fields([{name:"NewsProject"}]),async(req,res)=>{
  try{
    const NewsProjectPathP = req.files["NewsProject"][0].path
    const NewsProjectU =  new NewsProject({NewsProjectImage:NewsProjectPathP})
    await NewsProjectU.save()
    res.status(200).json({res:"the NewsProject created successfully"})
  }catch(err){
    res.status(404).json({err:err.message})
  }
 
})
// show NewsProject
app.get("/NewsProject/:id",async(req,res)=>{
  try{
   const id =req.params.id
   const data = await NewsProject.find({'_id':id})
    res.status(200).json({data:data})
  }catch(err){
    res.status(404).json({err:err.message})
  }
})
// get NewsProject
app.get("/NewsProject",async(req,res)=>{
  try{
   const dataP = await NewsProject.find().sort({"_id":-1})
    res.status(200).json({data:dataP})
  }catch(err){
    res.status(404).json({err:err.message})
  }
})
// delete NewsPost
app.delete("/NewsProject/:id",async(req,res)=>{
  try{
   const id = req.params.id
  await NewsProject.findByIdAndDelete({'_id':id})
    res.status(200).json({res:"the NewsProject has been deleted"})
  }catch(err){
    res.status(404).json({err:err.message})
  }
})
// delete NewsPost
app.put("/NewsProject/:id",isAthenticated,upload.fields([{name:"NewsProject"}]),async(req,res)=>{
  try{
   const id = req.params.id
   const ImageUpdateP = req.files["NewsProject"][0].path
  await NewsProject.findByIdAndUpdate({'_id':id},{NewsProjectImage:ImageUpdateP})
    res.status(200).json({res:"the NewsPost has been updated"})
  }catch(err){
    res.status(404).json({err:err.message})
  }
})



app.listen(3000,()=>{
    console.log("the server is runing on port 3000");
})

