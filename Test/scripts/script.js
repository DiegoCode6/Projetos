//alert("Olá, Mundo")

document.querySelector("#btn").addEventListener("click", function(){
    alert("Bem Vindo")
})

document.querySelector("#btn1").addEventListener("click", function(){
    
  let nome =  prompt("Digite o seu nome: ")

    alert("Bem vindo, " + nome)

});


document.querySelector("#btn2").addEventListener("click", function(){
    
    document.querySelector("#resp")

    let nome = prompt("Digite o seu nome: ")

    document.write("Ola, " + nome);

});

//Calculando números

document.querySelector("#calc").addEventListener("click", function(){
    
  let num1 = Number (prompt("Digite um número"));

  document.querySelector("#resp1").value = ("O dobro de é: " + num1 * 2);    
  document.querySelector("#resp2").value = ("A metade de é: " + num1 / 2);

});

// Somando dois números

document.querySelector("#soma").addEventListener("click", function(){

  let num = Number(prompt("Digite o primeiro número: "));
  let num1 = Number(prompt("Digite o segundo número: "));

  document.querySelector("#respSoma").value = (num + num1)

})


//Calculando a média de um aluno

let resp = document.querySelector("#media");

document.querySelector("#calcMedia").addEventListener("click", function(){
              document.querySelector("#media").value = mAlunos();

      function mAlunos(){

        let nome = prompt("Digite o nome do aluno: ")
        let num =  Number (prompt("Digite a primeira nota do aluno: " + nome));
        let num1 = Number (prompt("Digite a segunda nota do aluno: " + nome));
        

        if((num + num1) /2 > 6 ){
         msg =  "Aluno " + nome + " Aprovado"
        }else{
          msg = "Aluno " + nome + " Reprovado"
        }
        }
        resp.value = msg; 
});