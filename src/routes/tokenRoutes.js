import { Router } from 'express';
import tokenControlles from '../controllers/TokenControlles';

const router = new Router();

router.post('/', tokenControlles.store);

export default router;
