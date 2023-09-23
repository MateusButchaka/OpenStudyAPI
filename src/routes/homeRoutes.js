import { Router } from 'express';
import homeControlles from '../controllers/HomeControlles';

const router = new Router();

router.get('/', homeControlles.index);

export default router;
