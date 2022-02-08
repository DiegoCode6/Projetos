let resp = document.querySelector("#btns")

// adicionando evento de click

document.querySelector("#btn1").addEventListener("click", function(){
    document.querySelector("#btns").value = cliq(); //criando a function

    function cliq(){ // function criada
        
        resp.innerHTML += "Clique 1<br><br>"; 

    }


});


let resp2 = document.querySelector("#btns");

// adicionando evento de click

document.querySelector("#btn2").addEventListener("click", function(){
    document.querySelector("#btns").value = cliq2();

    function cliq2(){

        resp2.innerHTML += "Clique 2<br><br>";

    }
    

});


let resp3 = document.querySelector("#btns")

document.querySelector("#btn3").addEventListener("click", function(){
    document.querySelector("#btns").value = cliq3();

    function cliq3(){

        resp3.innerHTML += "Clique 3 <br><br>"

    }


})


let resp4 = document.querySelector("#btns");
document.querySelector("#btn4").addEventListener("click", function(){
    document.querySelector("#btns").value = cliq4();

    function cliq4(){
        
        resp4.innerHTML += "Clique 4<br><br>"

    }
})