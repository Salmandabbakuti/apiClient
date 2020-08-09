//var axios = require("axios") comment out this line f you're using in nodejs runtime or *if you're using this module in website, provide axios browser cdn in head tag of your html
const baseUrl = ""; //provide base url of your api i.e. 'http://localhost:8000/api'

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
