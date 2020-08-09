const get = async(url, dataObj) => {
try{
const res = await axios.get(url,{
    params: dataObj
 })
return {err:undefined, response: res}
}catch(err){
return {err:err, response: undefined}
   }
}

/*
const {err, response} = await get("http://localhost:8000/search", {queryId:"cars"})
if(err) {
console.log(`it returned error: ${err}`)
else{
console.log(`it returned response: ${response}`)
*/
const post = async(url, dataObj) => {
    try{
    let res = await axios.post(url, dataObj);
    //console.log(res)
     return {err:undefined, response:res}
    }catch(err){
     return {err:err, response:undefined}
    }
}

/*
const {err, response} = await post("http://localhost:8000/login", {username:"salman", password:"salman12345"})
if(err) {
console.log(`it returned error: ${err}`)
}else{
 console.log(`it returned response: ${response}`)
}
*/
module.exports = {
    post,
    get
    }
