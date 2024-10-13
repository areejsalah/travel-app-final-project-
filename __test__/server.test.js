
// server.test.js

const app = require('../src/server/server')
const request = require('supertest')

//const supertest = require('supertest');
//const request = supertest(app);
let server;

beforeAll((done) => {
  // Start the server before tests
  server = app.listen(3000, () => {
    console.log('Test server running on port 3000');
    done();
  });
});


describe('Testing express server', () => {


    it('get mock object', async() => {

        const response = await request(app).get('/test')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('message')

    })
    
})

afterAll((done) => {
    // Close the server after tests
    server.close(() => {
      console.log('Test server closed');
      done();
    });
  });

  
