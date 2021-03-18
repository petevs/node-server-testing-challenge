const supertest = require('supertest')
const server = require('../server')

describe("destinations integration tests", () => {
    it("gets a list of all destinations", async () => {
        const res = await supertest(server).get('/destinations')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBeGreaterThanOrEqual(3)
        expect(res.body[0].id).toBe(1)
        expect(res.body[0].name).toBe(/hawaii/i)
    })

    it("gets a single destination by id", async () => {
        const res = await supertest(server).get('/destinations/3')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.id).toBe(3)
        expect(res.body.name).toBe(/whistler/i)
    })

    it('returns an error when the destination not found', async ()=> {
        const res = await supertest(server).get("/destinations/100")
        expect(res.statusCode).toBe(404)
    })

    it("creates a destination", async () => {
        const res = await supertest(server)
            .post('/destinations')
            .send({ name: "Rome"})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.id).toBeDefined()
        expect(res.body.name).toBe(/rome/i)
    })

    it("deletes a destination", async () => {
        const res = await supertest(server)
            .delete('/destinations/3')
        expect(res.statusCode).toBe(200)
    })
})