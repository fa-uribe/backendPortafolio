import { Router } from "express";
const router = Router()

import * as authCtrl from '../../controllers/auth.controller';
import { authJwt, verifySignup} from '../../middlewares';

router.post('/signup', [verifySignup.checkRolesExisted, verifySignup.checkDuplicateEmail],authCtrl.signUp);
router.post('/signin', authCtrl.signIn);

export default router;