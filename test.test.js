var app = require("./app")
var request = require("supertest")

///////////////////////////////////////////////////////// FIRST TEST

test("name", async () => {
    await request(app).post("/addFirstName")
        .send({ "firstname": "John" })
        .expect(200)
        .expect({ prenom: "John" })
})

/////////////////////////////////////////////////////// NEW WORD

test("newWord", async () => {
    await request(app).post("/newWord")
        .send({ "mot": "bnchmf" })
        .expect(200)
        .expect({ newWord: "coding" })

})

test("newWord", async () => {
    await request(app).post("/newWord")
        .send({ "mot": "bgddrd" })
        .expect(200)
        .expect({ newWord: "cheese" })

})

test("newWord", async () => {
    await request(app).post("/newWord")
        .send({ "mot": "sdrshmf" })
        .expect(200)
        .expect({ newWord: "testing" })

})

/////////////////////////////////////////////////////// GREATER THAN B

test("greater than b", async () => {
    await request(app).post("/greater")
    .send({"a" : [1, 2, 3, 4, 5, 6, 7]})
    .send({"b" : 2})
    .expect(200)
    .expect({ sum : 25})
})

test("greater than b", async () => {
    await request(app).post("/greater")
    .send({"a" : [78, 99, 100, 101, 401]})
    .send({"b" : 99})
    .expect(200)
    .expect({ sum : 602})
})

test("greater than b", async () => {
    await request(app).post("/greater")
    .send({"a" : [-10, -11, -3, 1, -4]})
    .send({"b" : -3})
    .expect(200)
    .expect({ sum : 1})
})


/////////////////////////////////////////////////////// OCCURENCES

test("clean a from all occurrences", async () => {
    await request(app).post("/occurrences")
    .send({a : [1,2,3]})
    .send({b : 2})
    .expect(200)
    .expect({c : [1, 3]})
})

test("clean a from all occurrences", async () => {
    await request(app).post("/occurrences")
    .send({a : [1,2,'2']})
    .send({b : '2'})
    .expect(200)
    .expect({c : [1, 2]})
})

test("clean a from all occurrences", async () => {
    await request(app).post("/occurrences")
    .send({a : [false,'2',1]})
    .send({b : false})
    .expect(200)
    .expect({c : ['2', 1]})
})

test("clean a from all occurrences", async () => {
    await request(app).post("/occurrences")
    .send({a : [1,2,'2',1]})
    .send({b : 1})
    .expect(200)
    .expect({c : [2, '2']})
})

/////////////////////////////////////////////////////// SORT BY B

test("clean a from all occurrences", async () => {
    await request(app).post("/sortbyB")
    .send({a : [{a:1,b:2},{a:5,b:4}]})
    .expect(200)
    .expect({c : [{a:1,b:2},{a:5,b:4}]})
})

test("clean a from all occurrences", async () => {
    await request(app).post("/sortbyB")
    .send({a : [{a:2,b:10},{a:5,b:4}]})
    .expect(200)
    .expect({c : [{a:5,b:4},{a:2,b:10}]})
})

test("clean a from all occurrences", async () => {
    await request(app).post("/sortbyB")
    .send({a : [{a:1,b:7},{a:2,b:1}]})
    .expect(200)
    .expect({c : [{a:2,b:1},{a:1,b:7}]})
})

/////////////////////////////////////////////////////// remplace string

test("replace string", async () => {
    await request(app).post("/remplaceString")
    .send({ a: 'a', b: 'b', c: '' })
    .expect(200)
    .expect({ a: 'a', b: 'b', c: null })
})

test("replace string", async () => {
    await request(app).post("/remplaceString")
    .send({ a: '', b: 'b', c: ' ', d: 'd' })
    .expect(200)
    .expect({ a: null, b: 'b', c: null, d: 'd' })
})

test("replace string", async () => {
    await request(app).post("/remplaceString")
    .send({ a: 'a', b: 'b ', c: ' ', d: '' })
    .expect(200)
    .expect({ a: 'a', b: 'b ', c: null, d: null })
})

/////////////////////////////////////////////////////// times the key occurs within the array

test("times the key occurs within the array", async () => {
    await request(app).post("/theKeyOccurs")
    .send([1,2,2,3])
    .expect(200)
    .expect({1:1,2:2,3:1})
})

test("times the key occurs within the array", async () => {
    await request(app).post("/theKeyOccurs")
    .send([9,9,9,99])
    .expect(200)
    .expect({9:3,99:1})
})

test("times the key occurs within the array", async () => {
    await request(app).post("/theKeyOccurs")
    .send([4,3,2,1])
    .expect(200)
    .expect({1:1,2:1,3:1,4:1})
})

/////////////////////////////////////////////////////// ADDITION

test("addition", async () => {
    await request(app).post("/addition")
    .send([1, 2, 2, 4, 7, 3, 4, 5, 6, 7])
    .expect(200)
    .expect({sum : 41})
})

/////////////////////////////////////////////////////// SLICE


test("It should return the last n elements of a", async () => {
    await request(app).post("/nElementsOfA")
    .send([1, 2, 3, 4, 5], 2)
    .expect(200)
    .expect({result : [ 4, 5 ]})
})

// test("It should return the last n elements of a", async () => {
//     await request(app).post("/nElementsOfA")
//     .send([1, 2, 3], 6)
//     .expect(200)
//     .expect({result : [ 1, 2, 3 ]})
// })

// test("It should return the last n elements of a", async () => {
//     await request(app).post("/nElementsOfA")
//     .send([1, 2, 3, 4, 5, 6, 7, 8], 3)
//     .expect(200)
//     .expect({result : [6, 7, 8 ]})
// })

///////////////////////////////////////////////////////// DATE

test("number days between two date", async () => {
    await request(app).post("/numbersDays")
    .send({date1 : new Date('2020-06-11')})
    .send({date2 : new Date('2020-06-01')})
    .expect(200)
    .expect({numbersDays : 10})
})


