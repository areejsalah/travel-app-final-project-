
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

afterAll((done) => {
  // Close the server after tests
  server.close(() => {
    console.log('Test server closed');
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

  
/* const request = require('supertest');
const app = require('../src/server/server'); // Import the Express app directly

const testObj = { test: 'test' }

describe('Test the Post Endpoints', () => {
    test('is it receive and handle post request on geo route correctly?', async () => {
        const res = await request(app).
            post('/geonames')
            .send({ testObj })
        expect(res.statusCode).toEqual(200);
    })

    test('is it receive and handle post request on weather route correctly?', async () => {
        const res = await request(app).
            post('/weatherbit')
            .send({ testObj })
        expect(res.statusCode).toEqual(200);
    })

    test('is it receive and handle post request on pix route correctly?', async () => {
        const res = await request(app).
            post('/pixabay')
            .send({ testObj })
        expect(res.statusCode).toEqual(200);
    })

})

describe("Test Get Endpoints", () => {
    test("'is it receive and response post request on geo route correctly?", async () => {
        const response = await request(app).get("/geonames");
        expect(response.statusCode).toBe(200);
    });

    test("is it receive and response post request on weather route correctly?", async () => {
        const response = await request(app).get("/weatherbit");
        expect(response.statusCode).toBe(200);
    });

    test("is it receive and response post request on pix route correctly?", async () => {
        const response = await request(app).get("/pixabay");
        expect(response.statusCode).toBe(200);
    });

    test("is it receive and response post request on country route correctly?", async () => {
        const response = await request(app).get("/country");
        expect(response.statusCode).toBe(200);
    });
});
/* const axios = require('axios');

// Mock the axios module
jest.mock('axios');

describe('Express Server', () => {
    beforeAll(() => {
        // Set up any necessary configurations before all tests
    });

    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test to avoid interference
    });

    it('should serve the index.html file on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toMatch(/html/);
    });

    it('should return pixabay data on POST /pixabay', async () => {
        const mockPixabayResponse = {
            hits: [
                { id: 1, webformatURL: 'http://example.com/image1.jpg' },
                { id: 2, webformatURL: 'http://example.com/image2.jpg' }
            ]
        };

        // Mock the axios post method to return the mock response
        axios.post.mockResolvedValue({ data: mockPixabayResponse });

        const response = await request(app)
            .post('/pixabay')
            .send({ destination: 'Paris' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockPixabayResponse);
        expect(axios.post).toHaveBeenCalled(); // Ensure axios.post was called
    });

    it('should return geonames data on POST /geonames', async () => {
        const mockGeonamesResponse = {
            postalCodes: [
                { postalCode: '75001', placeName: 'Paris' },
                { postalCode: '75002', placeName: 'Paris' }
            ]
        };

        axios.post.mockResolvedValue({ data: mockGeonamesResponse });

        const response = await request(app)
            .post('/geonames')
            .send({ destination: 'Paris' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockGeonamesResponse);
        expect(axios.post).toHaveBeenCalled();
    });

    it('should return weatherbit data on POST /weatherbit', async () => {
        const mockWeatherbitResponse = {
            data: [
                { date: '2024-10-14', temp: 20 },
                { date: '2024-10-15', temp: 22 }
            ]
        };

        axios.post.mockResolvedValue({ data: mockWeatherbitResponse });

        const response = await request(app)
            .post('/weatherbit')
            .send({ destination: 'Paris', daysOfForecast: 7 });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockWeatherbitResponse);
        expect(axios.post).toHaveBeenCalled();
    });
});
*/