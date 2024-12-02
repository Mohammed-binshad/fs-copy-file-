const fs = require("fs");

fs.copyFile('new-msg.txt','message-one.txt',(err)=>{
    if(err) throw err;
    console.log('copied file')
})