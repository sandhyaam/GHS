import {Router} from 'express'

import admin from './Admin'
import user from './User'
import nursary from './Nursary'

const router=new Router();

router.use('/admin',admin)
router.use('/user',user)
router.use('/nursary',nursary)

export default router;