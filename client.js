//var axios = require("axios")
const baseUrl = "";

const get = async(route, dataObj) => {
try{
const res = await axios.get(`${baseUrl}/${route}`,{
    params: dataObj
 })
//console.log(res)
return {err:undefined, response: res}
}catch(err){
return {err:err.response.data, response: undefined}
   }
}

/*
const {err, response} = await get("search", {queryId:"cars"})
if(err) {
console.log(`it returned error: ${err}`)
else{
console.log(`it returned response: ${response}`)
*/
const post = async(route, dataObj) => {
    try{
    let res = await axios.post(`${baseUrl}/${route}`, dataObj);
    //console.log(res)
     return {err:undefined, response:res}
    }catch(err){
     return {err:err.response.data, response:undefined}
    }
}

/*
const {err, response} = await post("login", {username:"salmandev", password:"salman12345"})
if(err) {
console.log(`it returned error: ${err}`)
}else{
 console.log(`it returned response: ${response}`)
}
*/
