var rw=require('random-words')

var fs=require('fs')

fs.writeFile('xyz.txt','hello hi by',(err,data)=>{
    if(err){
        console.log("err",err)
    }
    else{
        console.log(data)
    }
})

fs.open('abc.txt','w',(err,data)=>{
    if(err){
        console.log("err",err)
    }
    else{
        console.log(data)
    }
})

