let resp = document.querySelector("#res")

document.querySelector("#btn").addEventListener("click", function(){
        document.querySelector("#resp").value = cliq();        

        function cliq(){

            let num = prompt("Digite um Número: ")

            if(num % 2 == 0){
                resp.innerHTML = "Número Par"
            }else{
                resp.innerHTML = "Número Impar"
            }
        }
})