# apiClient
HTTP API Client

#### Usage: 

- in your ```index.html```
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script> //axios cdn
<script type="text/javascript" src="client.js">    //appiClient sdk bundle

```
##### provide base url:
- in ```client.js```
```
const baseUrl = ""; //provide base url of your api i.e. 'http://localhost:8000/api'
```
##### In Nodejs run time:

- Same module can be used in nodejs run time too by uncommenting out axios import in ```client.js```

```
var axios = require('axios');
const get = async() {
 .....
 }
const post = async() {
....
}
```
##### Get request:

```
async function users(){
let route = "users";
let dataObj = {username:"salman"}
const {err, response} = await get(route, dataObj);
}
```
##### Post request:

```
async function login(){
let route = "login";
let dataObj = {username:"salman", password:"12345"}
const {err, response} = await post(route, dataObj);
}
```

##### Handling errors:
```
const {err, response} = await get("search", {queryId:"cars"})

//const {err, response} = await post(route, dataObj);

if(err) {
console.log(`it returned error: ${err}`)
else{
console.log(`it returned response: ${response}`)
```

##### Author   

##### :wave: [©Salman Dabbakuti](https://salmandabbakuti.github.io)
