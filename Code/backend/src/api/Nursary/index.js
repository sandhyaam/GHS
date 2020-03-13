import { Router } from 'express'

import {
    nursarylogin,
    nursaryRegistration,
    Profile,
    updateProfile,
    addPlant,
    getPlantData,
    updatePlant,
    delelePlant,
    getOrderDetails,
    getCancelOrders,
    getFeedBack,
    editPlant,
    deleteNursary,
    acceptOrder,
    rejectOrder,
    chnagepassword,
    forgotpassword

} from './controller'

const router = new Router();

router.get('/nursarylogin', nursarylogin)

router.get('/forgotpassword', forgotpassword);

router.post('/nursaryRegistration', nursaryRegistration)

router.get('/editPlant/:id', editPlant);

router.get('/Profile', Profile)

router.put('/updateProfile/:id', updateProfile)

router.post('/addPlant', addPlant)

router.get('/getPlantData', getPlantData)

router.delete('/deleteNursary/:id', deleteNursary)

router.put('/updatePlant/:id', updatePlant)

router.delete('/delelePlant/:id', delelePlant)

router.get('/getOrderDetails', getOrderDetails)

router.get('/CancelOrders', getCancelOrders)

router.put('/acceptOrder/:id', acceptOrder)

router.put('/rejectOrder/:id', rejectOrder)

router.get('/getFeedback', getFeedBack);

router.put('/chnagepassword/:id', chnagepassword)

export default router