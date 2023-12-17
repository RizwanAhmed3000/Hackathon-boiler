import mongoose from 'mongoose';

const { Schema } = mongoose;

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // Add other admin-specific fields if needed
}, { timestamps: true });

export default mongoose.model('Admin', AdminSchema);