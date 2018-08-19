function json(file,callback){

	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		 if (xhr.readyState=="4" && xhr.status===200){
		 	callback(xhr.responseText);
		 }
	}
	xhr.send();
}
//json("data.json",function(text){
//	var d=JSON.parse(text);
//	console.log(d);
//	basic(d.details);
//	edu(d.education);
//	skill(d.skillset);
//	objective(d.careerobjective);
//	achievements(d.achievements);
//	description(d.description);
//})
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula"); 
main.appendChild(l);
function basic(cse){
	var i=document.createElement("img");
	i.src=cse.image;
	i.alt="profile photo";
	l.appendChild(i);
	var j=document.createElement("h5");
	j.textContent=cse.name;
	l.appendChild(j);
	var k=document.createElement("h5");
	k.textContent=cse.rollno;
	l.appendChild(k);
}
	var r=document.createElement("div");
	r.classList.add("right");
	main.appendChild(r);
	function edu(e){
		var e1=document.createElement("div");
		e1.classList.add("education");
		r.appendChild(e1);
		var head=document.createElement("h5");
 		head.textContent="education";
		e1.appendChild(head);
		head.appendChild(document.createElement("HR"));
		for (var i= 0; i<e.length; i++){
			var h=document.createElement("h5");
			h.textContent=e[i].course;
			e1.appendChild(h);
			var u=document.createElement("ul");
			e1.appendChild(u);
			var list=document.createElement("li");
			list.textContent=e[i].college;
			u.appendChild(list);
			var l1=document.createElement("li");
			l1.textContent=e[i].course;
			list.appendChild(l1);
		}
}
function skill(s){
	var s1=document.createElement("div");
	s1.textContent="skillset";
	r.appendChild(s1);

	var s2=document.createElement("table");
	var row="";
	for (var i=0; i<s.length;i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].values+"</td></tr>";
	}
	s2.innerHTML=row;
	s1.appendChild(s2);
	
}
function objective(c){
	var c1= document.createElement("div");
	c1.textContent="carrerabjective";
	r.appendChild(c1);
	c1.appendChild(document.createElement("HR"));
	var c2=document.createElement("h3");
	c2.textContent=c.name;
	c1.appendChild(c2);
	var c3=document.createElement("h3");
	c3.textContent=c.value;
	c1.appendChild(c3);
}
function achievements(a){
var a1=document.createElement("div");
a1.textContent="achievement";
r.appendChild(a1);
a1.appendChild(document.createElement("HR"));
var a2=document.createElement("h3");
for(i in a){
	var a3=document.createElement("ul");
	a1.appendChild(a3);
	var a4=document.createElement("li");
	a4.textContent=a[i];
	a3.appendChild(a4);
}
}
function description(d){
	var d1=document.createElement("div");
	d1.textContent="description";
	r.appendChild(d1);
	var d2=document.createElement("h3");
	d2.textContent=d.des;
	d1.appendChild(d2);
	
}
//fetch api
fetch("data.json")
.then(function(response){
	return response.json();

})
.then(function(d){
	console.log(d);
	basic(d.details);
	edu(d.education);
	skill(d.skillset);
	objective(d.careerobjective);
	achievements(d.achievements);
	description(d.description);
})



	

																																																																																																																																																																																																																																																																																																																																																																																																																										









































































