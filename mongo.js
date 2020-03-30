const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const uri = "mongodb://192.168.11.191";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    // 选择数据库和集合
    const collection = client.db("In1906").collection("users");
    // perform actions on the collection object

    // 获取数据
    collection.find({}).toArray(function(err,docs) {
        console.log("Found the following records");
        console.log(docs);
    });

    // 添加数据 insertOne
    const doc = {name:'剑小',age:24,email:'jianxiao@qq.com',mobile:'13153820647'};
    collection.insertOne(doc,function (err,result) {
        console.log("添加成功\n");
    });

    // 更新数据
    const where = {name:'nmb'};
    const set = {$set:{age:22}};
    collection.updateOne(where,set,function (err,result) {
        console.log("更新成功");
    })
    client.close();
});