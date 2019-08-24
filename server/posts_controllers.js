module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get('db')
    let diaryPosts = await db.diary.getPosts()
    res.status(200).send(diaryPosts)
  },
  createPost: async(req,res) => {
    const db = req.app.get('db');
    // console.log(req.body)
    let {post_title, post_text, post_image, vibrant} = req.body
    let diaryPosts = await db.diary.createPost({ post_title, post_text, post_image, vibrant})
    res.status(200).send(diaryPosts)
  },
  deletePost: async(req, res) => {
    const db = req.app.get('db');
    let {id} = req.params
    let diaryPosts = await db.diary.deletePost({ id })
    res.status(200).send(diaryPosts)
  }, 
  getPost: async(req, res) => {
    const db = req.app.get('db');
    let {id} = req.params
    let diaryPost = await db.diary.getPost({ id })
    res.status(200).send(diaryPost)
  }
}