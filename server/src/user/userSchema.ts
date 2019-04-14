import * as mongoose from 'mongoose';
// import * as  from 'bcrypt';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        lowercase: true,
    },
    password: {
        required: true,
        type: String,
    },
}, { timestamps: true });
