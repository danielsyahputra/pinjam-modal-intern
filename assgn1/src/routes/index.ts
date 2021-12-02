import { Router } from 'express';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';
import { readAllProducts, createProduct, updateProduct, deleteProduct } from './Products';

// User-route
const userRouter = Router();
userRouter.get('/all', getAllUsers);
userRouter.post('/add', addOneUser);
userRouter.put('/update', updateOneUser);
userRouter.delete('/delete/:id', deleteOneUser);


// Product-route
const productRouter = Router();
productRouter.get('/all', readAllProducts);
productRouter.post('/add', createProduct);
productRouter.put('/update', updateProduct);
productRouter.delete('/delete/:id', deleteProduct);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/products', productRouter);
export default baseRouter;
