import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Silva',
      email: 'maria@gmail.com',
      idade: 32,
    });
    res.json(novoAluno);
  }
}

// Exportamos a class instanciada, para que não seja preciso instanciar a classe
// após fazer o import
export default new HomeController();
