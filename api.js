function demo()
{
 var oReq = new XMLHttpRequest();
 oReq.onload=perform;
 oReq.open("GET", "https://api.github.com/users/Darshan2452/repos");
 oReq.send();
}
 
function perform()
{
 var data=JSON.parse(this.responseText);
 content=document.getElementById("repo");
 
 for(let i=0;i<data.length;i++)
 content.innerHTML=content.innerHTML+"<br>/"+data[i]["name"];
 
 
}