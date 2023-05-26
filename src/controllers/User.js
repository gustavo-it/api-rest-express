import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch(error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map(error => error.message)
      });
    }
  }
  // Index
  async index(req, res) {
    try {
      const users = await User.findAll(); // buscando todos os usuarios no db
      return res.json(users);
    }catch(error) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id); // buscando usuário por pk
      return res.json(user);
    }catch(error) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({
          errors: ['Id não enviado.'],
        });
      }
      const user = await User.findByPk(id);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    }catch(error) {
      return res.json(null);
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({
          errors: ['Id não enviado.'],
        });
      }
      const user = await User.findByPk(id);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(user);
    }catch(error) {
      return res.json(null);
    }
  }
}


export default new UserController();
