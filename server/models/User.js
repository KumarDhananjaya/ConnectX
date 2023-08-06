import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: 'string',
            required: true,
            min: '2',
            max: '50',
        },
        lastName: {
            type: 'string',
            required: true,
            min: '2',
            max: '50',
        },
        email: {
            type: 'string',
            required: true,
            max: '50',
            unique: true,
        },
        passsword: {
            type: 'string',
            required: true,
            min: '5',
        },
        picturePath: {
            type: 'string',
            default: '',
        },
        friends: {
            type: 'array',
            default: [],
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        iimpressions: Number,

    }, {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);
export default User;