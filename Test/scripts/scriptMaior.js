let exit = document.querySelector("#saida")

document.querySelector("#btn").addEventListener("click", function(){
        document.querySelector("#saida").value = cliq();

        function cliq(){

            let num1 = prompt("Digite o primeiro número: ")
            let num2 = prompt("Digite o primeiro número: ")           

            if(num1 > num2){
                exit.innerHTML = "O Primeiro número é " + num1 + " é maior que o segundo " + num2
            }else if(num1 < num2){
                exit.innerHTML = "O Segundo número é " + num2 + " é maior que o primeiro " + num1

            }

        }


})