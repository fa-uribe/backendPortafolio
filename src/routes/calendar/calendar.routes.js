import { Router } from "express";
const router = Router()

import * as evntCtrl from '../../controllers/event.controller';
import { authJwt, verifySignup} from '../../middlewares';

router.post('/createEvent', [authJwt.verifyToken, authJwt.isUser], evntCtrl.eventCreate);
router.put('/editEvent/:id', [authJwt.verifyToken, authJwt.isUser], evntCtrl.eventEdit);
router.get('/getEvents/', [authJwt.verifyToken, authJwt.isUser], evntCtrl.eventsDisplay);
router.get('/getDailyEvents/:day', [authJwt.verifyToken, authJwt.isUser], evntCtrl.dailyEvents);
router.get('/getEvent/:id', [authJwt.verifyToken, authJwt.isUser], evntCtrl.eventDisplay);
router.delete('/deleteEvent/:id', [authJwt.verifyToken, authJwt.isUser], evntCtrl.eventDelete);

export default router;