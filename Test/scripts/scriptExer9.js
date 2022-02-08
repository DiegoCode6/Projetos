let resp = document.querySelector("#cont");
let contado = 0;

document.querySelector("#cliq").addEventListener("click", function(){                   
    document.querySelector("#cont").value = contador();

function contador(){
    
     contado++; // métodos que podem ser usando ! contado+=1  !
    // console.log(contado)
  
  /* OUTRA MANEIRA DE FAZER
  document.querySelector("#cont").innerHTML = contado; */
 
    resp.innerHTML  = "A contagem está em " + contado
 

//let contado = 0;
//let resp = document.querySelector("#cont")

//if(contado == 0){
//   contado++
//    resp.innerHTML = `<p>A contagem está em ${contado} cliques</p>`
//}
}

});

document.querySelector("#del").addEventListener("click", function(){
    document.querySelector("#cont").value = zeradorCont();

    function zeradorCont(){
        if(contado > 1){
            contado = 0;
            let resp = document.querySelector("#cont");
            resp.innerHTML  = "A contagem está em " + contado
        }   

    }
})
