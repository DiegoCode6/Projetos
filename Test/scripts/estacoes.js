let exit = document.querySelector("#saida");
document.querySelector("#btn").addEventListener("click", function(){
    document.querySelector("#saida").value = estacoesDoAno();        

    function estacoesDoAno(){
        
        let meses = document.querySelector("#campo").value
        let msg = "";
        switch(meses){

            case "Janeiro":
            case "Fevereiro":
            case "Março":
            msg = "OUTONO";
            break;

            case "Abril":
            case "Maio":
            case "Junho":
            msg = "INVERNO";
            break;

            case "Julho":
            case "Agosto":
            case "Setembro":
            msg = "PRIMAVERA";
            break;

            case "Outubro":
            case "Novembro":
            case "Dezembro":
            msg = "VERÃO";
            break;

            default:
            msg = "Tente Novamente";
            break;

            
        }    
        exit.innerHTML = "A estação deste mês é: " + msg;
        }
});
