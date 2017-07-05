const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

  describe('GET /', () => {
    it('should response page not found', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect((res) => {
          expect(res.body).toInclude({
            status: 'NOT FOUND',
            message: 'Page not found'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return users', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect((res) => {
          expect(res.body).toInclude({
            username: 'didiyudha',
            email: 'didiyudha@gmail.com'
          });
        })
        .end(done);
    });
  });

});