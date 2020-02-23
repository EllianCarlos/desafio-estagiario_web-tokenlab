import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    name: {
        type:String,
        allowNull: false        
    },
    company: {
        type:String,
        allowNull: false        
    },
    email: {
        type:String,
        allowNull: false        
    },
    password: {
        type:String,
        allowNull: false        
    },
});

module.exports = mongoose.model('User', UserSchema);
