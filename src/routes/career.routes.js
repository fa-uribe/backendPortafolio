import { Router } from "express";
const router = Router()

import * as careerCtrl from '../controllers/career.controller';
import { authJwt, verifySignup} from '../middlewares';

router.get('/careerList', careerCtrl.careerList);
router.post('/createCareer', careerCtrl.createCareer);

export default router;