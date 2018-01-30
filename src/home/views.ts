import { Router } from 'express';

const router = Router();
router.get('/', (req, res) => {
    res.render('index', { creator: 'Olaf Tomalka' })
});

export default router;
