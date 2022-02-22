let exit = document.querySelector("#saida");

document.querySelector("#adicao").addEventListener("click", function(){
        document.querySelector("#saida").value = adicaoCalc();

        function adicaoCalc(){

            let numAdicao = Number (document.querySelector("#num").value);
            let numAdicao2 = Number (document.querySelector("#num2").value);
            let adicao = numAdicao + numAdicao2;

            if(numAdicao + numAdicao2){

                exit.innerHTML = "" + adicao;

            }
            }
});

let subExit = document.querySelector("#saida")
document.querySelector("#sub").addEventListener("click", function(){
        document.querySelector("#saida").value = subCalc();

        function subCalc(){

            let numSub = Number(document.querySelector("#num").value);
            let numSub2 = Number(document.querySelector("#num2").value);
            let sub = numSub - numSub2;

            if(numSub - numSub2){
                
                subExit.innerHTML = "" + sub

            }

        }
});


let multiExit = document.querySelector("#saida");
document.querySelector("#mult").addEventListener("click", function(){
    document.querySelector("#saida").value = multiCalc()

    function multiCalc(){

        let numMulti =  Number (document.querySelector("#num").value);
        let numMulti2 = Number (document.querySelector("#num2").value);
        let multi = numMulti * numMulti2;

        if(numMulti * numMulti2){

            multiExit.innerHTML = "" + multi

        }
    }
});

let divExit = document.querySelector("#saida");
document.querySelector("#div").addEventListener("click", function(){
    document.querySelector("#saida").value = divCalc();

    function divCalc(){

        let numDiv =  Number (document.querySelector("#num").value);
        let numDiv2 = Number (document.querySelector("#num2").value);
        let divResult = numDiv / numDiv2; 
        
        if(numDiv / numDiv2){

            divExit.innerHTML = "" + divResult; 

        }
    }
});