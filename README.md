# apiClient
HTTP API Client SDK bundle for easier API integration to plain html frontends

#### Usage: 

- in your ```index.html```
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script> //axios cdn
<script src="https://unpkg.com/apiclient-dev-cdn@1.0.1/index.js"></script>  //apiClient sdk bundle

```
##### In Nodejs run time:

- Same module can be used in nodejs run time too.

###### Installation:

```
npm install -g apiclient-dev
```

```
const { get, post } = require('apiclient-dev'); # v1.0.4 preferred

async function myFunction(){
   const {err, response } = await get("http://localhost:8000/search", {username:"salman"})
      // your code to handle response or error here
   }
```
##### Get request:

```
async function users(){
let url = "http://localhost:8000/users";
let dataObj = {username:"salman"}
const {err, response} = await get(url, dataObj);
}
```
##### Post request:

```
async function login(){
let url = "http://localhost:8000/login";
let dataObj = {username:"salman", password:"12345"}
const {err, response} = await post(url, dataObj);
}
```

##### Handling errors:
```
const {err, response} = await get("http:localhost:8000/search", {queryId:"cars"})

//const {err, response} = await post(url, dataObj);

if(err) {
console.log(`it returned error: ${err}`)
else{
console.log(`it returned response: ${response}`)
```

##### Author   

##### :wave: [©Salman Dabbakuti](https://salmandabbakuti.github.io)
