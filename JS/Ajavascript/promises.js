
// const cart =["shoes", "pants", "kurta"]

// createOrder(cart,function (orderId) {
    
    
// proceedToPayment(orderId)
// }); 

 //const promise =createOrder(cart);

// //{data: orderDetail}

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });


// const GITHUB_API ="https://api.github.com/users/Vikram8084"

// const user =fetch(GITHUB_API);
// console.log(user);

// user.then(function(data) {
//     console.log(data);
// });

createOrder(cart)
.then(function (orderId) {
  return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    return showPaymentSummary(paymentInfo);
})
.then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
})