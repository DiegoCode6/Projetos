let exit = document.querySelector("#saida");
document.querySelector("#btn").addEventListener("click", function(){
        document.querySelector("#saida").value = contPares();

        function contPares(){                      

            for(i=1; i <=10; i++){

                if(i % 2 == 0){
                    exit.innerHTML += " " + i;
                }

            }
            

        }
});