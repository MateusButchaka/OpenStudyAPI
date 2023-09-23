import { Router } from 'express';
import alunoControlles from '../controllers/AlunoControlles';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoControlles.index);
router.post('/', loginRequired, alunoControlles.store);
router.put('/:id', loginRequired, alunoControlles.update);
router.get('/:id', alunoControlles.show);
router.delete('/:id', loginRequired, alunoControlles.delete);

export default router;
