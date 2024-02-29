function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            reslolve({data: 'Successfule response from the API'});
        }
    });
}
module.exports = getPaymentTokenFromAPI;
