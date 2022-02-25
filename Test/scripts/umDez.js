let exit = document.querySelector("#saida");
document.querySelector("#btn").addEventListener("click", function(){
    document.querySelector("#saida").value = cliq();

    function cliq(){        

        for(i=1; i <= 10; i++){

            exit.innerHTML += " " + i;

        }
    }
});