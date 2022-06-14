var owner='';
var carname='';
var plate='';
var entrydate='';
var exitdate='';

let vehicles=[]
function addcar(ev)
{ev.preventDefault();
console.log("hi");
let car={
    "owner":document.getElementById('cname').value,
    "car":document.getElementById('carname').value,
    "LicsensePlate":document.getElementById('lsplate').value,
    "EntryDate":document.getElementById('edate').value,
    "ExitDate":document.getElementById('extdate').value
}
vehicles.push(car);
console.log(vehicles)
for(var i=0;i<vehicles.length;i++)
{console.log(vehicles[i].owner);
owner=owner+vehicles[i].owner+"</br>";
carname=carname+vehicles[i].car+"</br>";
plate=plate+vehicles[i].LicsensePlate+"</br>";
entrydate=entrydate+vehicles[i].EntryDate+"</br>";
exitdate=exitdate+vehicles[i].ExitDate+"</br>";
}
document.getElementById("d1ownr").innerHTML=owner;
document.getElementById("d1car").innerHTML=carname;
document.getElementById("d1lp").innerHTML=plate;
document.getElementById("d1ed").innerHTML=entrydate;
document.getElementById("d1exd").innerHTML=exitdate;
owner="";
carname="";
plate="";
entrydate="";
exitdate="";
}
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById("add").addEventListener('click',addcar);
});

function removecar()
{let del= document.getElementById("rmvlsc").value;
console.log(del);
vehicles.splice(vehicles.findIndex(e => e.LicsensePlate == del),1);
console.log(vehicles);
for(var i=0;i<vehicles.length;i++)
{console.log("asdfasfd",vehicles[i].owner);
owner=owner+vehicles[i].owner+"</br>";
carname=carname+vehicles[i].car+"</br>";
plate=plate+vehicles[i].LicsensePlate+"</br>";
entrydate=entrydate+vehicles[i].EntryDate+"</br>";
exitdate=exitdate+vehicles[i].ExitDate+"</br>";
}
document.getElementById("d1ownr").innerHTML=owner;
document.getElementById("d1car").innerHTML=carname;
document.getElementById("d1lp").innerHTML=plate;
document.getElementById("d1ed").innerHTML=entrydate;
document.getElementById("d1exd").innerHTML=exitdate;
owner="";
carname="";
plate="";
entrydate="";
exitdate="";

}
document.addEventListener("DOMContentLoaded",()=>{
document.getElementById("remove").addEventListener('click',removecar)
});

function searchcar()
{let srchdata= document.getElementById("srchlsc").value;
let indx=vehicles.findIndex(e => e.LicsensePlate=== srchdata);
console.log(vehicles);
document.getElementById("d1ownr").innerHTML=vehicles[indx].owner;
document.getElementById("d1car").innerHTML=vehicles[indx].car;
document.getElementById("d1lp").innerHTML=vehicles[indx].LicsensePlate;
document.getElementById("d1ed").innerHTML=vehicles[indx].EntryDate;
document.getElementById("d1exd").innerHTML=vehicles[indx].ExitDate;
}
document.addEventListener("DOMContentLoaded",()=>{
document.getElementById("srch").addEventListener('click',searchcar)
});