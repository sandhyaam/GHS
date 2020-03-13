import { Router } from 'express'

import {
    adminLogin,
    getNurseryData,
    editNurseryData,
    updateNurseryData,
    getPlantsData,
    getFeedBack,
    getUserData

} from './controller'

const router = new Router();

router.get('/', adminLogin)

router.get('/getNurseryData', getNurseryData)

router.get('/editNurseryData/:id', editNurseryData);

router.put('/updateNurseryData/:id', updateNurseryData)

router.get('/getUserData', getUserData)

router.get('/getPlantsData', getPlantsData)

router.get('/getFeedback', getFeedBack);

export default router