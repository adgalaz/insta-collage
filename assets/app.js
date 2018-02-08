function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);
}

function allowDrop(ev){
  ev.preventDefault();
}
function drop(ev) {
  if (ev.target.innerHTML === "") {
    console.log(ev.target);
    ev.preventDefault();
    var id_foto = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(id_foto));
  } else {
    console.log("funciona");
     ev.target.removeChild(ev.target.firstChild);
    ev.preventDefault();
    var id_foto = ev.dataTransfer.getData('text');
  }
}