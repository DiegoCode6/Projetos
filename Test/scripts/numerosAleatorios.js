let exit = document.querySelector("#saida");

document.querySelector("#btn").addEventListener("click", function(){
        document.querySelector("#saida").value = cliq()

        function cliq(){

          let num = Math.round(Math.random()*100) +1;
          
          exit.innerHTML = num

        }
});


document.querySelector("#limpo").addEventListener("click", function(){
    document.querySelector("#saida").value = limpar()

    function limpar(){

        
        exit.innerHTML = null;

    }
})

       
