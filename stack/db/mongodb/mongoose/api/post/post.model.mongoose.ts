import mongoose, { Schema, Document } from 'mongoose'

interface IPost extends Document {
    title: string;
    content: string;
    author: string;
}

const postSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
})

const Post = mongoose.model<IPost>('Post', postSchema)

export { IPost, Post }