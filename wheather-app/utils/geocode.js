const request=require('request')

const geoCode = (address, callback) => {
  
    const url = 'http://api.positionstack.com/v1/forward?access_key=4a9735806b50c9e13211652105b5ce63&query=%20'+address+'&limit=1'

        request({url, json:true},(err,{body})=>{
    if(err){
          callback("nu am putut accesa serviciul de geolocatie")  //asta e param error doar
    }else if(body.data.length===0){//merge
        callback("nu am gasit nimic")
    }
    else{
     callback(undefined,{lat:body.data[0].latitude,
        long: body.data[0].longitude,
        regiune: body.data[0].region})
    }
})
}

module.exports=geoCode