
let datatoupload=[];

fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=15715343658.e1c1941.f9aade3797d848358e300b75fc2b5ead')
  .then(response=>response.json())
  .then(user=>
  	{
  		datatoupload = user.data
  	          console.log(user);
	if(user.meta.code==200)
		upload();
  	      }
     );    
   
console.log(datatoupload);
function upload(){
	var db = firebase.firestore();
datatoupload.forEach(addfunction);
function addfunction(item,i){
  db.collection("meme").doc(item.id).set(item)
.then(function(docRef) {
    console.log("Document written with ID: ", docRef);
});

}
}