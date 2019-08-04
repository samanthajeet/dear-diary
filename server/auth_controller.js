module.exports = {
  login: async(req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body
    let response = await db.auth.login({username})
    console.log(response)
  }
}