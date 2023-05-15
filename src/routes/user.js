import { Router } from 'express';
const router = new Router();
import userController from '../controllers/User';

router.post('/', userController.store);

export default router;

/*
index -> lista todos os usuários (GET)
store/create -> cria um novo usuário (POST)
delete -> apaga um usuário (DELETE)
show -> mostra um usuário (GET)
update -> atualiza um usuário (PATCH/PUT)
*/
