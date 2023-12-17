import express, { request, response } from 'express';
import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, USER_NOT_FOUND, UPDATE_SUCCESS } from './constants.js';

import cors from 'cors';
import { User } from './UserModel.js';
import {UserLocation} from './UserLocation.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors());
app.use(express.json());

const connectDb = async ()=>{
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017/trackingdb');
    console.log("Database connection created");
    
    }catch(error){
        console.log(error)
    }
}

app.listen(3900, ()=>{
    console.log("Server has started as 3900");
    mongoose.connect('mongodb://127.0.0.1:27017/trackingdb')
    connectDb();
});


// ------------------- Verify Token ---------------//
function verifyToken(request, response, next){
    const header = request.get('Authorization');
    if (header) {
        const token = header.split(" ")[1];
        const decoded = jwt.verify(token, "secret1234", (error, payload)=>{
            if(error){
                response.status(StatusCodes.UNAUTHORIZED).send({message:"Invalid token"});
            }
            else{
                request.userId = jwt.verify(token,  "secret1234").id;
                next();
            }
        });
    } else {
        response.status(StatusCodes.UNAUTHORIZED).send({message:"Please login first"});
    }
    
}



// ------------ Signup api --------------------//


app.post('/user/signup', async(request, response)=>{
    try {
        const reqData = request.body;
        console.log("CREATED USER" , request.body);
        // reqData['password'] = bcrypt.hashSync(reqData.password,10); // this hashSync() is used to encrypt the password 10 times shuffle hoga password value
        const user = new User(reqData);
        await user.save();
        response.status(StatusCodes.CREATED).send({message:INSERT_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
})


// ------------ Login api --------------------//
app.post('/user/login', async(request, response)=>{
    try {
        console.log("request body:",request.body);
        const user = await User.findOne({name : request.body.name});
        console.log("user:",user);
        if (user) {
            // if(bcrypt.compareSync(request.body.password, user.password)){
                if(request.body.password === user.password){
                // generate token
                const token = jwt.sign({
                    id: user.id,
                    userName: user.name},'secret1234'); // sign(payload, secret key) secret key : based on this key token is generated
                response.status(StatusCodes.OK).send({message:"Login successfull ! ", token:token});
                console.log(user.password);
            }
            else{
                console.log("Wrong Pass");
                response.status(StatusCodes.BAD_REQUEST).send({message:"Invalid username or  password"});
            }
        } 
        else{
            response.status(StatusCodes.BAD_REQUEST).send({message:"Invalid username or  password"});
        }
        
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
})

// -----------------LOCATION API --------------------------- //
app.post("/post/location", verifyToken, async(request, response) =>{
    try{

        
        const userLocation = {
            lat: request.body.lat,
            long: request.body.long,
            updatedTime: new Date().getTime()
            };
    
        const location = await UserLocation.findOneAndUpdate({userId: request.userId}, userLocation,
            {
                new: true,
                upsert: true // Make this update into an upsert
              });
        response.send(location);
    }catch(error){
        response.status(500).send({message:ERROR_MESSAGE});
    }
})
//  ------------------- GET USER LOCATION ------------------------- //
app.get('/get/location', verifyToken, async(request, response)=>{
    try {
        // const id = await UserLocation.findById();
        // console.log(id);

        const userLocation = await UserLocation.find({"userId": request.userId});
        // console.log(userLocation);
        // response.send({id : id});
        response.send({location:userLocation});
        
    } catch (error) {
        console.log(error)
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
        
    }
})


// ------------- fetch logged in user data ----------------//
app.get("/user", verifyToken,async (request, response)=>{
    try {
        const users = await User.findById(request.userId);
        response.send({users:users})
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
        
    }
});

