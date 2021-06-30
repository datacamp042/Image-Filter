import { Router, Request, Response } from 'express';
import { ImageProcessingRouter } from './image_processing/routes/image_processing.router';
//import { UserRouter } from './users/routes/user.router';

const router: Router = Router();

router.use('/image_processing', ImageProcessingRouter);
//router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;