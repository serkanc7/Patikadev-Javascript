const input = document.querySelector("#task");
const ulDOM = document.querySelector("#list");


const liDOMs = document.querySelectorAll("#list>li");
for (let i = 0; i < liDOMs.length; i++){
    let liDOM = liDOMs[i];

    const closeDOM = document.createElement("span");
    closeDOM.className = "close";
    closeDOM.innerHTML = "x";

    liDOM.appendChild(closeDOM);
}

//Add new element
function newElement(){
    if(input.value === ""){
        $(".error").toast("show");
    }

    else {
        $(".success").toast("show");
    const newLi = document.createElement("li");
    const closeDOM = document.createElement("span");
    closeDOM.className = "close";
    closeDOM.innerHTML = "x";

    newLi.innerHTML = `${input.value}<span class="close">x</>`;
    ulDOM.appendChild(newLi);
    input.value = "";
    }
}

 //Delete and checked tasks
ulDOM.addEventListener("click",(e)=> {
    if( e.target.className === "close"){
        e.target.parentElement.remove();
    }
    else {
        e.target.className = "checked";
    }
})




