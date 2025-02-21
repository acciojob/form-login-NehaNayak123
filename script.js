const btn=document.getElementById("btn")
btn.addEventListener("click", getFormvalue);

	let fname=document.querySelector("#fname");
	let lname=document.querySelector("#lname");
function getFormvalue(e) {
	e.preventDefault();
    //Write your code here

	if(fname.value== ""){alert("fill all fields")}
	if(lname.value== ""){alert("fill all fields")}

	fname.value.trim();
	lname.value.trim();
	alert(fname.value+"-"+lname.value);
	fname.value=""
	lname.value=""
	

}
