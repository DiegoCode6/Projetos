document.querySelector("#botao").addEventListener("click", function(){
        document.querySelector("#saida").value = cliq();

        function cliq(){            
            
            let dt_hrs = new Date();
            dt_hrs.setHours(dt_hrs.getHours());
            document.querySelector("#saida").innerHTML = dt_hrs;
        }


});