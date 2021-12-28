const request = require("supertest")
const app = require("../main/index")

//afterAll(() => server.close())

describe("todo API", () => {
    it("Read todo", async () => {
        const response = await request(app)
            .get("/test")
            .set("Accept", "application/json")
            .type("application/json")
            .send({ name: "hello" })

        expect(response.status).toBe(200)
        expect(response.body).toEqual({ data: "test" })
    })

    it("Read todo", async () => {
        const response = await request(app)
            .get("/test")
            .set("Accept", "application/json")
            .type("application/json")
            .send({ name: "hello" })

        expect(response.status).toBe(200)
        expect(response.body).toEqual({ data: "test" })
    })

    it("Read todo", async () => {
        const response = await request(app)
            .get("/test")
            .set("Accept", "application/json")
            .type("application/json")
            .send({ name: "hello" })

        expect(response.status).toBe(200)
        expect(response.body).toEqual({ data: "test" })
    })

    it("Read todo", async () => {
        const response = await request(app)
            .get("/test")
            .set("Accept", "application/json")
            .type("application/json")
            .send({ name: "hello" })

        expect(response.status).toBe(200)
        expect(response.body).toEqual({ data: "test" })
    })
})
