import { Router } from 'express';
const router = new Router();
import userController from '../controllers/User';

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index -> lista todos os usuários (GET)
store/create -> cria um novo usuário (POST)
delete -> apaga um usuário (DELETE)
show -> mostra um usuário (GET)
update -> atualiza um usuário (PATCH/PUT)
*/
