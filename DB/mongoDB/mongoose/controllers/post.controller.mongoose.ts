import { Post, IPost } from '../models/post.model.mongoose'

const createPost = async (post: IPost): Promise<IPost> => {
    const newPost = new Post(post)
    return await newPost.save()
}

const readPost = async (id: string): Promise<IPost | null> => {
    return await Post.findById(id).exec()
}

const updatePost = async (id: string, post: Partial<IPost>): Promise<IPost | null> => {
    return await Post.findByIdAndUpdate(id, post, { new: true }).exec()
}

const deletePost = async (id: string): Promise<void> => {
    await Post.findByIdAndDelete(id).exec()
}

export {
    createPost,
    readPost,
    updatePost,
    deletePost,
}
