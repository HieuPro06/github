const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/K5NodeMyDatabase');

const Schema = mongoose.Schema;

// const account = new Schema({
//   username: String,
//   password: String,
// },{
//     collection : 'Account'
// });

// const AccountyModel = mongoose.model('account', account);

// AccountyModel.create({
//     username : 'Mohamed Salah',
//     age : 30
// })
//     .then(function (data){
//         console.log('data',data);
//     })
//     .catch(function (err){
//         console.log('loi',err);
//     })

// AccountyModel.find({
//     username : 'neymar Jr'
// })
//     .then(function (data){
//         console.log('data',data);
//     })

const AccountSchema = new Schema({
    username : String,
    password : String 
},{
    collection : 'Account'
});


const AccountModel = mongoose.model('account', AccountSchema);

// AccountModel.updateOne({
//     username : 'messi'
// },{
//     username : 'Si tạ'
// })
//     .then(data => {
//         console.log('thanh cong');
//     })
//     .catch(err => {
//         console.log('That bai');
//     })

AccountModel.deleteOne({
    name : 'long lý',
    age : 21
})
    .then(data => {
        console.log('thanh cong');
    })
    .catch(err => {
        console.log('That bai');
    })