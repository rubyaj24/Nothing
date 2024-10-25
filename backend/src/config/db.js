import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        console.log("connected :${conn.connection.host}");
    }
    catch(error){
        console.error('Error: ${error.message}');
        process.exit(1);
    }
};