import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';



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
        allowNull: true        
    },
    photo_url: {
        type:String,
        allowNull:true
    },
    email: {
        type:String,
        allowNull: false        
    },
    password: {
        type:String,
        allowNull: false        
    },
    password_hash: {
        type:String,
        allowNull: false        
    },
    
});

UserSchema.pre('save', async user => {
    if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
        user.password = user.password_hash;
    }
});



module.exports = mongoose.model('User', UserSchema);
