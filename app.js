let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");


btn.addEventListener("click",function() {
    let item = document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    // console.log(inp.value);
    inp.value="";

});

ul.addEventListener("click",function(event){
    if (event.target.nodeName=="BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function (){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }