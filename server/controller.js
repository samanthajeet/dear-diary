module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get('db')
    let diaryPosts = await db.diary.getPosts()
    res.status(200).send(diaryPosts)
  },
  createPost: async(req,res) => {
    const db = req.app.get('db');
    let {} = req.body
    let diaryPosts = await db.diary.createPost({ })
  }
}