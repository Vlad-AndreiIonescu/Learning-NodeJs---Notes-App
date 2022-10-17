const dWC =(callback)=>{
    setTimeout(()=>{
       // callback('erroare',undefined)
       callback(undefined,'rr')
    },2000)
}

dWC((error,result)=>{
    if(error){
        return console.log(error)
    }
    console.log(result)
})