let exit = document.querySelector("#saida");

document.querySelector("#btn").addEventListener("click", function(){
        document.querySelector("#saida").value = adivinhandoNumeros()

        function adivinhandoNumeros(){

            let num = prompt("Digite um Número: ")
            let comp = Math.round(Math.random() * 100) +1;

            if(num == comp){

                exit.innerHTML = "Parabéns, número correto"

            }else{
                exit.innerHTML = "Número incorreto"
            }
        }
});