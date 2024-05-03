
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h2=document.querySelector("h2");
    let randomcolor=getRandomColor();
    h2.innerText=randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;

    console.log("Color updated")
});

function getRandomColor()
{
   let red=Math.floor(Math.random()*225);
   let green=Math.floor(Math.random()*225);
   let blue=Math.floor(Math.random()*225);

   let color=`rgb(${red}, ${green}, ${blue})`;
   return color;
}