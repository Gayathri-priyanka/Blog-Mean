import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js"

export const create= async (req, res, next) => {
  if(!req.user.isAdmin){
    return next(errorHandler(403, 'You are not allowed to create a post'));
  }
  if(!req.body.title || !req.body.content)
  {
    return next(errorHandler(400, 'Please provide all the required fields'));
}
 const slug= req.body.title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g, '-');
 const newPost= new Post({
    ...req.body, slug, userId: req.user.id
 });

 try {
    const savedPost= await newPost.save();
    res.status(201).json(savedPost);
 } catch (error) {
    next(error);
 }

};

export const getPosts = async (req, res, next) => {
   try {
     const query = {};
     const startIndex = parseInt(req.query.startIndex) || 0;
     const limit = parseInt(req.query.limit) || 9;
     const sortDirection = req.query.order === 'asc' ? 1 : -1;
 
     if (req.query.userId) query.userId = req.query.userId;
     if (req.query.category) query.category = req.query.category;
     if (req.query.slug) query.slug = req.query.slug;
     if (req.query.postId) query._id = req.query.postId;
     if (req.query.searchTerm) {
       query.$or = [
         { title: { $regex: req.query.searchTerm, $options: 'i' } },
         { content: { $regex: req.query.searchTerm, $options: 'i' } }
       ];
     }
 
     const posts = await Post.find(query)
       .sort({ updatedAt: sortDirection })
       .skip(startIndex)
       .limit(limit);
 
     const totalPosts = await Post.countDocuments();
     const now = new Date();
     const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

     
 
     const lastMonthsPosts = await Post.countDocuments({
       createdAt: { $gte: oneMonthAgo },
     });
 
     res.status(200).json({
       posts,
       totalPosts,
       lastMonthsPosts,
     });
   } catch (error) {
     next(error);
   }
 };