const dWP = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       //resolve('rr')
       reject('Eroare')
    },2000)
})

dWP.then((result)=>{
    console.log('Success',result)
}).catch((error)=>{
    console.log('ERORR!', error)
})