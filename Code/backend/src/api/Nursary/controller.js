import nursery from '../Common/nursaryModel';
import plantsModel from '../Common/plantsModel';
import feedbackModel from '../Common/feedbackModel';
import user from '../Common/userModel';
import order from '../Common/orderModel';
import { sendEmail } from '../Common/email';

export const nursarylogin = (req, res) => {
  nursery.findOne({ "userName": req.query.userName, "password": req.query.password, "status": "Active" }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const nursaryRegistration = (req, res) => {
  nursery.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are successfully registered in Green House Services<br><br>UserName: ${req.body.userName}<br>Password: ${req.body.password}<br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send(result);
    }
  })
}

export const Profile = (req, res) => {
  nursery.find({ "userName": req.query.userName }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result.map(record => {
        return record;
      }));
  })
}

export const editPlant = (req, res) => {
  plantsModel.findById({"_id" :req.params.id} ).populate('nursary').exec((err, user) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = [user].map(data => {
        return { id: data._id, nursary: data.nursary.nursary, plantType: data.plantType, plantName: data.plantName, rate: data.rate, image: data.image }
      })
      res.send(ress);
    }
  })
}

export const updateProfile = (req, res) => {
  nursery.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const addPlant = (req, res) => {
  plantsModel.findOne({ "nursary": req.body.nursary, "plantName": req.body.plantName }, (err, result) => {
    if (err)
      res.send(err);
    else if (result == null || result == []) {
      plantsModel.create(req.body, (err, result) => {
        if (err) {
          res.send(err);
        }
        else {
          res.send(result);
        }
      })
    }
    else {
      res.send("exists");
    }
  })
}

export const getPlantData = (req, res) => {
  plantsModel.find({ "nursary": req.query.nursary }).populate('nursary').exec((err, user) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = user.map(data => {
        return { id: data._id, nursary: data.nursary.nursary, plantType: data.plantType, plantName: data.plantName, rate: data.rate, image: data.image }
      })
      res.send(ress);
    }
  })
}

export const updatePlant = (req, res) => {
  plantsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const getOrderDetails = (req, res) => {
  order.find({}).populate(' user').exec((err, user) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = user.map(data => {
        return { id: data._id, user: data.user.userName, orderId: data.orderId, amount: data.amount, date: data.date, status: data.status }
      })
      res.send(ress);
    }
  })
}

export const acceptOrder = (req, res) => {
  order.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      user.findById(result.user, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          const subject = 'Order Details';
          const body = `your order has been accepted by the nursery<br><br>OrderId: ${result.orderId}<br>Amount: ${result.amount}<br>Status: ${result.status}<br>Thank You.`;
          sendEmail(results.email, subject, body);
          res.send(result);
        }
      })
    }
  })
}

export const rejectOrder = (req, res) => {
  order.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      user.findById(result.user, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          const subject = 'Order Details';
          const body = `your order has been rejected by the nursery<br><br>OrderId: ${result.orderId}<br>Amount: ${result.amount}<br>Status: ${result.status}<br>Thank You.`;
          sendEmail(results.email, subject, body);
          res.send(result);
        }
      })
    }
  })
}

export const getCancelOrders = (req, res) => {
  order.find({}).populate('user').exec((err, user) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = user.map(data => {
        return { id: data._id, user: data.user.userName, orderId: data.orderId, amount: data.amount, date: data.date, status: data.status }
      })
      res.send(ress);
    }
  })
}

export const chnagepassword = (req, res) => {
  nursery.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'YOUR CHANGE PASSWORD DETAILS';
      const body = `Your password has been changed  below here: <br>userName:${req.body.userName}<br>password: ${req.body.password}<br><br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send([result]);
    }
  })
}

export const forgotpassword = (req, res) => {
  nursery.findOne({ "email": req.query.email }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      const subject = 'Credentials Recived';
      const body = `userName: ${result.userName}<br>password: ${result.password}<br>Please Login  Using these Credentials<br>Thank You.`;
      sendEmail(req.query.email, subject, body);
      res.send(result);
    }
  })
}

export const delelePlant = (req, res) => {
  plantsModel.findByIdAndRemove({ "_id": req.params.id }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const deleteNursary = (req, res) => {
  nursery.findByIdAndRemove(req.params.id, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const getFeedBack = (req, res) => {
  feedbackModel.find({ "nursary": req.query.nursary }).populate('user nursary').exec((err, user) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = user.map(data => {
        return { id: data._id, user: data.user.userName, nursary: data.nursary.nursary, feedback: data.feedback }
      })
      res.send(ress);
    }
  })
}

