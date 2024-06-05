//criar promises

// const myPromise = new Promise ((resolve, reject) => {
//     const nome = 'Vinicim'

//     if (nome === 'Vini'){
//         resolve ('usuário encontrado')
//     } else {
//         reject ('usuário não encontrado')
//     }

// })

// myPromise.then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log("Algo aconteceu: " + error)
// })

// // Encadeamento de then's 

// const myPromise2 = new Promise ((resolve, reject) => {     //()=>{} função assincrona,arrow function
//     const nome = 'Vini'

//     if (nome === 'Vini'){          // 1= atribuição  , 2== se o mesmo valor , 3=== se o mesmo valor e tipo (1== true // 1=== true||falso)
//         resolve ('usuário encontrado')
//     } else {
//         reject ('usuário não encontrado')
//     }

// })

// myPromise2.then((data) => {    //então ,com se fosse o try
//     return data.toUpperCase();
// }).then((stringModified) => {
//     console.log(stringModified);
// })

//Resolver váras promises  com all() - vai levar em consideração o tempo da maior promisse para ser resolvido

const p1 = new Promise((resolve, reject) => {
     setTimeout(() =>{              //atrasa a execução do codigo em 2 milisegundos (2000)
        console.log('P1 OK!')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    console.log('P2 OK!')
})

const p3 = new Promise((resolve, reject) => {
    console.log('P3 OK!')
})

const resolveAll = Promise.all([p1,p2,p3]).then ((data) =>{                            //Class::method , não precisa criar um objeto porque é metodo estatico
     console.log(data)
})                                

//Resolvendo várias promises com Race - respeita o tempo individual de cada promise

const p4 = new Promise((resolve, reject) => {
    setTimeout(() =>{              //atrasa a execução do codigo em 2 milisegundos (2000)
       console.log('P4 OK!')
   }, 2000)
})

const p5 = new Promise((resolve, reject) => {
   console.log('P5 OK!')
})

const p6 = new Promise((resolve, reject) => {
   console.log('P6 OK!')
})

const resolveRace = Promise.race([p4,p5,p6]).then ((data) =>{                             
    console.log(data)
})  

//Fetch API - API GitHub

const userName = 'vinicimxt'

fetch('https://api.github.com/users/' + userName, {
    method : 'GET',
    headers : {
        Accept: 'application/vnd.github.v3+json'
    },
}).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data.name)
}).catch((error) =>{
    console.log(error)
})
