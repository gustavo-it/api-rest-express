class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true
    })
  }
}

// Exportamos a class instanciada, para que não seja preciso instanciar a classe
// após fazer o import
export default new HomeController();
