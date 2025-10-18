function fetchdata() {
    let elem1 = document.querySelector("input").value
    return elem1;

}

let ctr = 1;
function addTODO() {
   
    let elem1 = fetchdata();
    let divelem = document.createElement("div")
    divelem.setAttribute("id",ctr);
    divelem.innerHTML = ctr+"."+elem1;
        ctr+=1;

    document.querySelector("body").appendChild(divelem);
}

function deleteTODO(div_id) {
    let elem = document.getElementById(div_id);
    elem.parentNode.removeChild(elem);
}

function updateTODO() {
    let elem1 = fetchdata();
    let elem = document.querySelector("div");
    elem.innerHTML = elem1;
}