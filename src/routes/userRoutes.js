import { Router } from 'express';
import userControlles from '../controllers/UserControlles';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//
// isso nao deveria existir
// router.get('/', userControlles.index);// lista de usuarios
// router.get('/:id', userControlles.show); // lista de usuarios
//

router.post('/', loginRequired, userControlles.store);
router.put('/', loginRequired, userControlles.update);
router.delete('/', loginRequired, userControlles.delete);

export default router;
