import '@babel/polyfill';
import * as dotenv          from 'dotenv';
// @ts-ignore
import {default as express} from 'express';
import * as bodyParser      from 'body-parser';
import mongoose             from 'mongoose';
import {customErrorHandler} from "./configuration/customErrorHandler";
import {ApiServiceImpl}     from "./service/impl/ApiServiceImpl";
import {ApiController}      from "./controller/ApiController";

dotenv.config();

const app = express();

// Configure middleware
app.use(bodyParser.json());

// Initialize all controllers
const apiController = new ApiController(new ApiServiceImpl());

// Insert your routes here
app.post("/apis", apiController.createNewApi);
app.get("/apis", apiController.listAllApis);

// Configure error handler, do not add more config below
app.use(customErrorHandler);

console.log(`Initializing discovery service
  ____  _                                   
 |  _ \\(_)___  ___ _____   _____ _ __ _   _ 
 | | | | / __|/ __/ _ \\ \\ / / _ \\ '__| | | |
 | |_| | \\__ \\ (_| (_) \\ V /  __/ |  | |_| |
 |____/|_|___/\\___\\___/ \\_/ \\___|_|   \\__, |
                                      |___/ 
`);

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true})
    .then(() => console.log("MongoDB connected..."));

app.listen(process.env.PORT || 3030, () => {
    console.log("App started...");
});
