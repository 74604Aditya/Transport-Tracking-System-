import mongoose, { Date, Schema } from "mongoose";

export const userLocation = new Schema({
    userId: String,
    lat: String,
    long: String,
    updatedTime: Date
});

export const UserLocation = mongoose.model('userLocation', userLocation);

