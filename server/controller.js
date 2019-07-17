module.exports = {
  getPosts: async (req, res) => {
    console.log('hit')
    const db = req.app.get('db')
    let diaryPosts = await db.diary.getPosts()
    res.status(200).send(diaryPosts)
  }
}