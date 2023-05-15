import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch(error) {
      console.log(error)
      res.status(400).json({
        errors: error.errors.map(error => error.message)
      });
    }
  }
}


export default new UserController();
