const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should resolve with correct data when input is true', function(done) {
        getPaymentTokenFromAPI(true)
            .then((data) => {
                expect(data).to.eql({data: 'Successful response from the API'});
                done();
            })
            .catch((error) => done(error));
    });
});