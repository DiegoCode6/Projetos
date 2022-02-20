let exit = document.querySelector("#saida");

document.querySelector("#btn").addEventListener("click", function(){
        document.querySelector("#saida").value = cliq();

        function cliq(){           
            
            let num1 = Number(document.querySelector("#ent1").value);
            let num2 = Number(document.querySelector("#ent2").value);
            let idade = num2 - num1;

            if(num2 - num1){
            msg = "idade: " + idade;
        }else{
            msg = "Apenas Números"
        }
        }

        exit.value = msg;
});