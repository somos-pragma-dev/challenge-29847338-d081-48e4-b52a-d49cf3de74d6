import express from 'express';
import { createProduct } from '../controllers/productController';
import { errorHandler } from '../middlewares/errorHandler';

const router = express.Router();

router.post('/', createProduct);
router.use(errorHandler);

export default router;