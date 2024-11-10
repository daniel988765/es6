let show=() =>{
    let name=document.getElementById("input").value;
    document.getElementById("h1").innerHTML="wishing you a very happy new year to "+name;

}
document.getElementById("button").addEventListener("click", show)
