import db from "../../src/config/database.config";
import { port } from "../../src/config";
import app from "../../src/app";
    
const request = require("supertest");

const testTodo = {
    judul: "Todo 1",
    deskripsi: "Ini Todo 1"
}

beforeEach(async () => {
    db.authenticate()
    db.sync().then(() => {
        console.log("[TESTING] Connect to db")
    })
})

afterEach(async () => {
    db.close();
})

it('belum ada todo pada kondisi awal', async () => {
    const response = await request(app).get('/api/todos');
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
})

it('harusnya membuat user', async () => {
   
})