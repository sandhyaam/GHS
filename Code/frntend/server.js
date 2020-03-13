const express = require('express')
const app = express()

app.get('/home', loadstdHtml);
app.get('/admin', adminLoginPage);
app.get('/nursary', nursaryLogin);
app.get('/user', userlogin);
app.get('/adminpage', adminpage);
app.get('/userpage', userPage);
app.get('/nursarypage', nursaryPage);
app.get('/nursaryRegistration', nursaryRegistration);
app.get('/nursaryForgotPassword', nursaryForgotPassword);
app.get('/userforgetpassword', UserForgetPassword);
app.get('/userRegistration', userRegistration);

app.get('/Admin/viewNursary', viewNursary);
app.get('/Admin/userDetails', userDetails);
app.get('/Admin/plantDetails', plantDetails);
app.get('/Admin/feedback', feedbackDetails);

app.get('/Nursary/profile', ViewProfile);
app.get('/Nursary/addPlants', addPlants)
app.get('/Nursary/viewPlants', viewPlants);
app.get('/Nursary/userViewOrders', UserOrders);
app.get('/Nursary/feedBackview', FeedBackView);
app.get('/Nursary/changepasswd', changepasswd);

app.get('/User/userprofile', UserProfile);
app.get('/User/viewplantdetails', viewPlantDetails);
app.get('/User/viewcartdetails', viewCartDetails);
app.get('/User/orderpage', orderDetails);
app.get('/User/viewOrdersdetails', ViewOrdersDetails);
app.get('/User/feedback', feedback);
app.get('/User/payments', Payments);
app.get('/User/changepasswrd', changepasswrd);




function loadstdHtml(req, res) {
    res.sendFile('index.html', { root: __dirname });
}

function adminLoginPage(req, res) {
    res.sendFile('adminLogin.html', { root: __dirname });
}

function nursaryLogin(req, res) {
    res.sendFile('nursaryLogin.html', { root: __dirname });
}

function userlogin(req, res) {
    res.sendFile('userLogin.html', { root: __dirname });
}


function UserForgetPassword(req, res) {
    res.sendFile('userforgetpassword.html', { root: __dirname });
}

function adminpage(req, res) {
    res.sendFile('Admin/adminmainpage.html', { root: __dirname });
}
function userPage(req, res) {
    res.sendFile('User/user.html', { root: __dirname });
}

function nursaryPage(req, res) {
    res.sendFile('Nursary/nursary.html', { root: __dirname });
}

function nursaryForgotPassword(req, res) {
    res.sendFile('nursaryforgotpassword.html', { root: __dirname });
}

function viewPlants(req, res) {
    res.sendFile('Nursary/viewPlants.html', { root: __dirname });
}

function viewNursary(req, res) {
    res.sendFile('Admin/viewNursarys.html', { root: __dirname });
}
function userDetails(req, res) {
    res.sendFile('Admin/userDetails.html', { root: __dirname });
}

function plantDetails(req, res) {
    res.sendFile('Admin/plantDetails.html', { root: __dirname });
}
function feedbackDetails(req, res) {
    res.sendFile('Admin/feedBackDetails.html', { root: __dirname });
}

function ViewProfile(req, res) {
    res.sendFile('Nursary/profile.html', { root: __dirname });
}

function UserProfile(req, res) {
    res.sendFile('User/profile.html', { root: __dirname });
}

function nursaryRegistration(req, res) {
    res.sendFile('nursaryRegistration.html', { root: __dirname });
}

function changepasswd(req, res) {
    res.sendFile('Nursary/changepassword.html', { root: __dirname });
}
function userRegistration(req, res) {
    res.sendFile('userRegistration.html', { root: __dirname });
}

function addPlants(req, res) {
    res.sendFile('Nursary/addPlants.html', { root: __dirname });
}


function UserOrders(req, res) {
    res.sendFile('Nursary/userOrders.html', { root: __dirname });
}

function FeedBackView(req, res) {
    res.sendFile('Nursary/feedbackdetails.html', { root: __dirname });
}

function orderDetails(req, res) {
    res.sendFile('User/orderDetailspage.html', { root: __dirname });
}

function viewPlantDetails(req, res) {
    res.sendFile('User/viewPlantDetails.html', { root: __dirname });
}

function viewCartDetails(req, res) {
    res.sendFile('User/cartDetails.html', { root: __dirname });
}
function ViewOrdersDetails(req, res) {
    res.sendFile('User/viewOrders.html', { root: __dirname });
}

function feedback(req, res) {
    res.sendFile('User/feedback.html', { root: __dirname });
}

function Payments(req, res) {
    res.sendFile('User/payment.html', { root: __dirname });
}

function changepasswrd(req, res) {
    res.sendFile('User/changePassword.html', { root: __dirname });
}

app.listen(3000, () => console.log(`Example app listening on port number 3000!`))