let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
 
btn.addEventListener("click",function(){
    let items=document.createElement("li");
    items.innerText=inp.value;

    let btndel=document.createElement("button");
    btndel.innerText="delete";
    btndel.classList.add("delete");

    items.appendChild(btndel);
    ul.appendChild(items);
    inp.value="";
    
});
ul.addEventListener("click",function (event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
})
// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
// delbtn.addEventListener("click",function(){
//     let par=delbtn.parentElement;
//     console.log(par);
//     par.remove();
// });
// }
