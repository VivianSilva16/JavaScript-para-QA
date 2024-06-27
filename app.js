
const LIST = [      //Montando uma SUPERCONSTANTE 

    {
        id:1,
        nome: 'Mestre Yoda',
        imagem: 'images/yoda.png'
    },
    {
        id:2,
        nome: 'C3PO',
        imagem: 'images/c3po.png'
    },
    {
        id:3,
        nome: 'Chewbacca',
        imagem: 'images/chewbacca.png'
    },
    {
        id:4,
        nome: 'Han Solo',
        imagem: 'images/hansolo.png'
    },
    {
        id:5,
        nome: 'Princesa Leia',
        imagem: 'images/leia.png'
    },
    {
        id:6,
        nome: 'Luke SkyWalker',
        imagem: 'images/luke.png'
    },
    {
        id:7,
        nome: 'R2D2',
        imagem: 'images/r2d2.png'
    },
    {
        id:8,
        nome: 'Darth Vader',
        imagem: 'images/vader.png'
    }
]





const App = new Vue({
 el: '#app',
 data:{

    title: 'Star Wars Lego',
    username: 'Vivi',
    personagens: LIST,
    BuscaNome: 'Luke Skywalker'
 },
 
methods:{

    like(name) {
         alert('O personagem ${name} recebeu um like!')
    },
   
     remove (id)   //removendo um personagem da lista 
     {
       const list = this.personagens
       list.filter (item => {
           return item.id  !== id 


       })
     },
     
    search() {

        if (this.BuscaNome === '') {
      
           return alert ('Por favor digite um personagem') }


        
            const list = this.personagens = LIST 
            const resultado = list.filter(item => {
       
            return item.nome === this.BuscaNome

        })

        if(resultado.length <= 0)
            {
                alert ('Nenhum Personagem com este nome')
            } else {

               
               this.personagens = resultado
               }

    }
}

})