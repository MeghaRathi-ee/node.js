var add=require('./abc')

var func=(a,b,c)=>{
    console.log("main function");
    c(a,b)
}

func(4,5,add) 