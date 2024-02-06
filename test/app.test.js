const request=require('supertest')
const app=require('../app.js')
const mongoose = require('mongoose')
const {dbconnect,dbupdate}=require('../config/db');
let testtoken=''
let testid=''
let questionid=''
let answerid=''
let commentid=''


beforeAll(async () => {
    await dbconnect();
    await dbupdate();
},10000);
      
afterAll(async () => {
   await mongoose.connection.close();
});

test('user signup',async()=>{
    const response =await request(app)
    .post('/user/signup')
    .send({
        username:'testname',
        password:'testpass',
        email:'testpass@gmail.com',
        mobileno: 8976058690
    }).expect(200)
})

test('user login',async()=>{
    const response =await request(app)
    .post('/user/login')
    .send({
        password:'testpass',
        email:'testpass@gmail.com',
    }).expect(200)

    testtoken=response.body.token;
    testid= response.body.user._id;
    console.log("user token",testtoken)
})

test('follow user',async()=>{
    await request(app)
    .post(`/user/follow/${testid}`)  
    .set("Authorization", `Bearer ${testtoken}`)
    .expect(200);
})

test('unfollow user',async()=>{
    await request(app)
    .post(`/user/unfollow/${testid}`)  
    .set("Authorization", `Bearer ${testtoken}`)
    .expect(200);
})

test('update user',async()=>{
    const response =await request(app)
    .patch('/user/updateuser')
    .set("Authorization", `Bearer ${testtoken}`)
    .send({
        username:'testname',
    }).expect(200)
})

test('get all users',async()=>{
    await request(app)
    .get('/user/getusers')  
    .set("Authorization", `Bearer ${testtoken}`)
    .expect(200);
})

test('get all followers',async()=>{
    await request(app)
    .get('/user/getfollower')  
    .set("Authorization", `Bearer ${testtoken}`)
    .expect(200);
})

test('delete user', async () => {
    await request(app)
        .delete('/user/deleteuser')
        .set('Authorization', `Bearer ${testtoken}`)
        .expect(200);
});

test('ask question',async()=>{
    const response=await request(app)
    .post('/question/ask')
    .set('Authorization', `Bearer ${testtoken}`)
    .send({
        question:'test question',
        category:'test category',
        user: testid
    })
    .expect(200);
    questionid= response.body.postedQuestion._id
});

test('update question',async()=>{
    const response =await request(app)
    .patch('/question/updatequestion')
    .set("Authorization", `Bearer ${testtoken}`)
    .send({
        question:'test question',
    }).expect(200)
})

test('get all questions',async()=>{
    await request(app)
    .get('/question/display')  
    .set("Authorization", `Bearer ${testtoken}`)
    .expect(200);
})

test('delete question', async () => {
    await request(app)
        .delete('/question/deletequestion')
        .set('Authorization', `Bearer ${testtoken}`)
        .expect(200);
});

test('answer question',async()=>{
    const response=await request(app)
    .post('/answer/answer')
    .set('Authorization', `Bearer ${testtoken}`)
    .send({
        answer:'test answer',
        question:questionid,
        user: testid
    })
    .expect(200);
    answerid= response.body.ans._id
});

test('update answer',async()=>{
    const response =await request(app)
    .patch('/answer/updateanswer')
    .set("Authorization", `Bearer ${testtoken}`)
    .send({
        answer:'test answer'
    }).expect(200)
})

test('delete answer', async () => {
    await request(app)
        .delete('/answer/deleteanswer')
        .set('Authorization', `Bearer ${testtoken}`)
        .expect(200);
});

test('get all answers',async()=>{
    await request(app)
    .get('/answer/getanswers')  
    .set("Authorization", `Bearer ${testtoken}`)
    .expect(200);
})

test('upvote answer',async()=>{
    await request(app)
    .post(`/answer/upvote/${answerid}`)  
    .set("Authorization", `Bearer ${testtoken}`)
    .expect(200);
})

test('downvote answer',async()=>{
    await request(app)
    .post(`/answer/downvote/${answerid}`)  
    .set("Authorization", `Bearer ${testtoken}`)
    .expect(200);
})

test('add comment',async()=>{
    const response=await request(app)
    .post('/comment/comment')
    .set('Authorization', `Bearer ${testtoken}`)
    .send({
        comment:'test comment',
        answer:answerid,
        question:questionid,
        user: testid
    })
    .expect(200);
    commentid= response.body.savecomment._id
});

test('update comment',async()=>{
    const response =await request(app)
    .patch('/comment/updatecomment')
    .set("Authorization", `Bearer ${testtoken}`)
    .send({
        comment:'test comment'
    }).expect(200)
})

test('delete comment', async () => {
    await request(app)
        .delete('/comment/deletecomment')
        .set('Authorization', `Bearer ${testtoken}`)
        .expect(200);
});

test('get all comments',async()=>{
    await request(app)
    .get('/comment/getcomment')  
    .set("Authorization", `Bearer ${testtoken}`)
    .expect(200);
})
