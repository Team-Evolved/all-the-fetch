//the simplest fetch you can use and still have error handling
const url = 'https://jsonplaceholder.typicode.com/users';

export function getData(){
   
    fetch(url)
    .then((response) =>{
        //console.log(response);
        //console.log(response.status)
        //error checking code -200 to 299
        if(! response.ok) throw new Error('You have an error')
            return response.json(); // method to extract Json string & converts to a Object
        })
    .then((dataobj)=>{ console.log(dataobj)})
    .catch(err =>{console.warn(err.message)}) 
}

function addTwo(response){}

//function add(`this is the "variable" response Object from fetch`){}
//callback function =>(`this is the "variable" response Object from fetch`)

































































// export function getData() {
//   //
//   fetch (url)
//     .then((resp) => {
//       // console.log(resp);
//       //error checking
//       //200-299
//       if (!resp.ok) throw new Error('was not a valid response');
//       return resp.json(); //method to extract JSON string and convert it to an Object
//     })
//     .then((dataobj) => {
//       console.log(dataobj);
//     })
//     .catch((err) => {
//       console.warn(err.message);
//     });

//  The code below will always fail. ?????
//  Fetch() always returns a Promise Object \/ so response needs the
//  other .then method to change the awaited Json Data string to be 
//  Changed to a JavaScript Object as an array below without the Promise is only 
//  declaring response as a variable!! 

//  let response = fetch(url);
//  let dataobj = response.json();
//  console.log(dataobj);
// }

// function fred(resp) {}
