import mongoose from 'mongoose';

// CONSTANTS
const Schema = mongoose.Schema;

export const ContactSchema = new Schema({

    firstName :{
        type : String,
        required : 'Enter a firstName'
    },
    lastName :{
        type : String,
        required : 'Enter a lastName'
    },
    email :{
        type : String
    },
    company :{
        type : String
    },
    phone :{
        type : Number
    },
    created_Date :{
        type : Date,
        default : Date.now
    }

});