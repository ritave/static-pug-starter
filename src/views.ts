import * as express from 'express';

import home from './home/views';

const router = express.Router();

router.use('/static', express.static('static'))
router.use('/', home)

export default router
