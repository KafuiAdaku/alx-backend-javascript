const request = require('request');
const {expect} = require('chai');

describe('Index page', function() {
    it('should have correct status code', function(done) {
        request('http://localhost:7865', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return correct result', function(done) {
        request('http://localhost:7865', function(error, response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('should return correct headers', function(done) {
        request('http://localhost:7865', function(error, response, body) {
            expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
            done();
        })
    })
});

describe('Cart page', function() {
    it('should have correct status code', function(done) {
        request('http://localhost:7865/cart/12', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('should return 404 when id is not a number', function(done) {
        request('http://localhost:7865/cart/hello', function(error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    it('should return correct result', function(done) {
        request('http://localhost:7865/cart/12', function(error, response, body) {
            expect(body).to.equal('Payment methods for cart 12');
            done()
        });
    });
});
