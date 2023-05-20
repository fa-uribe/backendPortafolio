import { Router } from "express";
const router = Router()

import * as evntCtrl from '../../controllers/event.controller';
import { authJwt, verifySignup} from '../../middlewares';

router.post('/createEvent', evntCtrl.eventCreate);
router.put('/editEvent/:id', evntCtrl.eventEdit);
router.get('/getEvents/', evntCtrl.eventsDisplay);
router.get('/getEvent/:id', evntCtrl.eventDisplay);
router.delete('/deleteEvent/:id', evntCtrl.eventDelete);

export default router;