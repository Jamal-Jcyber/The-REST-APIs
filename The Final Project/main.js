import express from 'express';
import routes from './src/routes/route'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

// CONSTANTS
const app = express();
const port = 4000;


// MONGOOSE CONNECTION
mongoose.Promise = global.Promise;
const uri = 'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=RESTAPIs'
mongoose.connect(uri, {
    useNewUrlParser : true, 
    useUnifiedTopology : true
});

// BODY-PARSER
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())

routes(app);
// SERVING STATIC FILES
app.use(express.static('public'))

app.get('/', (req, res) =>
    res.send(`node & express running on the port ${port}`)
);

app.listen(port, () =>
    console.log(`your server running on the port ${port}`)
    
);
