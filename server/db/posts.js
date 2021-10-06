import mongoose from 'mongoose';

const postShema = mongoose.Schema({
    title: {
        type: 'string',
        required: true,
    },
    content: {
        type: 'string',
        required: true
    },
    creator: {
        type: 'string',
        required: true
    }
})

const Post = mongoose.model('post', postShema);


export default Post;