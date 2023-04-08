import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    // || 'mongodb+srv://nidhiumesh:Nidhi12345@cluster0.lqgoj7t.mongodb.net/?retryWrites=true&w=majority';
||'mongodb://127.0.0.1:27017/tuiter';
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);
import express from 'express';
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);