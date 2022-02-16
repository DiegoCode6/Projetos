let view = document.querySelector("#saida")
document.querySelector("#botao").addEventListener("click", function(){
    document.querySelector("#saida").value = cliq();

    function cliq(){

        const dia = new Date();
        let day = dia.getDate();
        let month = dia.getMonth()+1;
        let year = dia.getFullYear();
        let week = dia.getDay();
        let hours = dia.getHours();
        let minutes = dia.getMinutes();
        let seconds = dia.getSeconds();

        view.innerHTML = "hoje é dia: " + day + "<br> Mês: " + month +
                         "<br> Ano: " + year + "<br> Dia da semana: "
                        + week + "<br> Hora: " + hours + "<br> Minutos: " 
                        + minutes + "<br> Segundos: " + seconds
    }


})