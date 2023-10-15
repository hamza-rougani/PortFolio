import express from "express";
import mongoose from "mongoose";
import Project from "./Model/Projects.js"
import multer from "multer"
import path from "path"
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
mongoose.connect("mongodb://127.0.0.1:27017/Portfolio")
.then(()=>console.log("connection sucessfully to mongodb"))
.catch(()=>console.log("connection failed"))

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const extname = path.extname(file.originalname);
      cb(null, Date.now() + extname);
    },
  });
  
  const upload = multer({ storage });



//get Project

//store Project
app.post('/create', upload.fields([
    { name: 'Introduct.image', maxCount: 1 },
    { name: 'Diagrams.images', maxCount: 10 },
    { name: 'Realization.images', maxCount: 10 },
  ]), async (req, res) => {
    try {
      // Extract and store uploaded images for each section
      const introductImage = req.files['introduct.image'][0].path;
      const diagramsImages = req.files['diagrams.images'].map((file) => file.path);
      const realizationImages = req.files['realization.images'].map((file) => file.path);
  
      // Create a new project instance with the data from the request
      const projectData = {
        // id: req.body.id,
        Introduct: {
            title: req.body.Introduct.title,
            desc: req.body.Introduct.desc,
            image: introductImage,
          },
        Overview: {
          title: req.body.Overview.title,
          desc: req.body.Overview.desc,
          images: overviewImages,
        },
        Problem: {
          title: req.body.Problem.title,
          desc: req.body.Problem.desc,
          images: problemImages,
        },
        Solution: {
          title: req.body.Solution.title,
          desc: req.body.Solution.desc,
          images: solutionImages,
        },
        Diagrams: {
          title: req.body.Diagrams.title,
          desc: req.body.Diagrams.desc,
          images: diagramsImages,
        },
        Realization: {
          title: req.body.Realization.title,
          desc: req.body.Realization.desc,
          images: realizationImages,
        },
      };
  
      const project = new Project(projectData);
  
      // Save the project data to the database
      await project.save();
  
      res.status(201).json({ message: 'Project created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  });

// app.post('/create',upload.none(), async (req, res) => {
//     try {
//         const {title,desc} = req.body
//         res.status(200).json({ title:title});

     
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
//   });
 
//update Project

//destroy Project
app.listen(3000,()=>{
    console.log("the server is runing on port 3000");
})