export default function DataCall(url){
    // eslint-disable-next-line no-use-before-define
    let dt=[];
  fetch(url)
  .then(res=>res.json())
  .then(data=> dt=data)
// const call=await fetch(url);
// const data=await call.json();
// console.log(data);
return dt;
}