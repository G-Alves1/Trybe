import { Router } from 'express';

import WorldCupController from './controllers/worldCupController';

const worldCupController = new WorldCupController();

const router = Router();

router.get('/:runner', worldCupController.runnerUp);
router.get('/', worldCupController.getWorldCups);
router.get('/:year', worldCupController.getWorldCupByYear);
router.post('/', worldCupController.insertWorldCup);
router.put('/:year', worldCupController.updateWorldCup);
router.delete('/:year', worldCupController.deleteWorldCup);

export default router;