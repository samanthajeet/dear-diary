module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get('db')
    let diaryPosts = await db.diary.getPosts()
    res.status(200).send(diaryPosts)
  },
  createPost: async(req,res) => {
    const db = req.app.get('db');
    console.log(req.body)
    let {post_title, post_text, post_image} = req.body
    let diaryPosts = await db.diary.createPost({ post_title, post_text, post_image})
    res.status(200).send(diaryPosts)
  }
}