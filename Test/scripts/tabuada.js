let exit = document.querySelector("#saida")
document.querySelector("#btn").addEventListener("click", function(){
        document.querySelector("#saida").value = tabu();

        function tabu(){

            let num = prompt("Digite um número: ")
            let tabuada = " ";
            

            for(i=1; i <= 10; i++){
                
                tabuada += num + " x " + i + " = " + num*i + "</br>"
            }

            exit.innerHTML = tabuada;
            
        }

});