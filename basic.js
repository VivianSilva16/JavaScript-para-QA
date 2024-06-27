Cons.console.log("Olá javascript!");


//Declarando função no JavaScript

//function sona(n1,n2)

//{
// return n1+n1
//}

//var resultado = soma (5,5)    Os numeros cinco são os valores armazenados nas variaveis pra somar 
//console.log(resultado)


//CENÁRIO 1 : SAQUE DE BANCO 

//var saldo = 1000

//DADO QUE MEU SALDO É DE 1000 REAIS 

//function saque(saldo)

//{
   //if (valor>saldo) {
     
      // console.log("Valor do saque é superior ao saldo!")
   //} else if (valor >700){

   // console.log("Valor do saque é superior ao máximo disponível!")    
   //}
   
   
   //else {

       // saldo = saldo - valor
//}
   

//}

//saque(500)

//QUANDO EU FAÇO UM SAQUE DE 500 REAIS 

//ENTÃO ESSE VALOR DEVE SER TIRADO DO MEU SALDO 

//console.log(saldo)


//Arrays  , essas variaveis começam na posição 0 

//var gaveteiro = ['meias', 'calcinhas','cuecas','roupas caras']
                  //0        1           2           3


//console.log(gaveteiro[2])                  


//gaveteiro.push('calças')   //Colocando mais uma posição no array 
//gaveteiro.pop('')  //removendo O ULTIMO DA LISTA  do array 
//console.log(gaveteiro)


// removendo uma posição que não é a ultima do Array 

 //gaveteiro = gaveteiro.filter(function(p)
//{
   //  return p   !== 'cuecas'  //coloque aqui o item que você quer remover 
//})


var gaveteiro = ['meias', 'calcinhas','cuecas','roupas caras']

//console.log(gaveteiro[0])
//console.log(gaveteiro[1])
//console.log(gaveteiro[2])
//console.log(gaveteiro[3])


//gaveteiro.forEach(function(suafuncao){

//console.log(suafuncao)

//})

//for (var indice in gaveteiro){               //Montando um laço de repetição em JS 

//console.log(indice)         // ele vai escrever por esse índice, o numero da posição do Array.

//}

//for (indice=0;indice <=10;indice++){
     //1indicador //1ate que indice <10  //incremento (indice+1)

   //  console.log(indice)

//}

//Assim ele executa até o indice ser falso, com isso ele so roda enquanto indice for menor ou igual a 10 


// criando uma super variável em JS 
//Essa variável se transforma em objeto
//as chaves significam que ela é um objeto  

//var cueca = {

//nome:  "lupo",
//cor:   "rosa",
//tamanho: "P",
//}

//voce modela detalhes dessa variavel 

//declarando constante

//const cueca = "Calvin Klein"
//console.log(cueca)