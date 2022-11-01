document.getElementsByName("title").addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementsByName("description").addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementsByClassName("rec").addEventListener("click", function(event){
    event.preventDefault()
  });

function limpiarFormulario() {
    document.getElementById("form").reset();
}


