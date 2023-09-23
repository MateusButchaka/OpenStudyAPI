import { Router } from 'express';

import loginRequired from '../middlewares/loginRequired';

import fotoControlles from '../controllers/FotoControlles';

const router = new Router();

router.post('/', loginRequired, fotoControlles.store);

export default router;
