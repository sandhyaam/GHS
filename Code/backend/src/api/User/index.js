import { Router } from 'express'

import {
    userLogin,
    userRegistration,
    userProfile,
    getOrderDetails,
    userFeedBack,
    getPlantData,
    cartUpdate,
    addtocart,
    cartdetails,
    updateProfile,
    paymentDetails,
    deleteCart,
    updatePayment,
    editPlants,
    placeOrderDetails,
    cancelOrder,
    chnagepassword,
    forgotpassword,
    nurseryNames,
    editCartDetails

} from './controller'

const router = new Router();

router.get('/userLogin', userLogin);

router.get('/placeOrderDetails', placeOrderDetails)

router.get('/forgotpassword', forgotpassword);

router.post('/userRegistration', userRegistration)

router.get('/userProfile', userProfile)

router.get('/editCartDetails/:id',editCartDetails)

router.put('/updateProfile/:id', updateProfile)

router.get('/getPlantData', getPlantData)

router.post('/addtocart', addtocart)

router.get('/edit/:id', editPlants)

router.get('/cartdetails', cartdetails)

router.get('/getOrderDetails', getOrderDetails)

router.put('/cartUpdate/:id', cartUpdate)

router.get('/nurseryNames', nurseryNames);

router.post('/paymentdetails', paymentDetails)

router.post('/userFeedBack', userFeedBack)

router.delete('/deleteCart/:id', deleteCart)

router.put('/updatepayment/:id', updatePayment)

router.put('/chnagepassword/:id', chnagepassword)

router.put('/cancelOrder/:id', cancelOrder)

export default router