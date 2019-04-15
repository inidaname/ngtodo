import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        lowercase: true,
        duplicate: false,
    },
    password: {
        required: true,
        type: String,
    },
}, { timestamps: true, createIndexes: true });
