var clear = document.getElementById("clearbutton");
function add(){
    var input = document.getElementById("input").value;
    clear.style="display:inline-block;"
    var newpar = document.createElement('p');
    newpar.style = "display:inline-block;"
    newpar.classList.add("paragraph");
    var newCB = document.createElement('input');
    var newDiv = document.createElement('div');
    newCB.style = "display:inline-block";
    newCB.classList.add("other");
    newCB.setAttribute('type', "checkbox")
    newpar.innerHTML = " "+input;
    newCB.id="a";
    newpar.id="b";
    document.getElementById("container").appendChild(newDiv);
    newDiv.appendChild(newCB);
    newDiv.appendChild(newpar);
    newCB.addEventListener('change', function(){
        if(newCB.checked){
            newpar.style.textDecoration = 'line-through';
        }
        else if(!newCB.checked){
            newpar.style.textDecoration = 'none';
        }
    });
}
clear.addEventListener('click', function(){
    document.getElementById("a").remove();
    document.getElementById("b").remove();
});