const inp1= document.querySelector('#login')
const inp2= document.querySelector('#parol')
const btn = document.querySelector('#btn')

const users = ["Evgenii","Vadim",'Malik']
const parol=["00101202215478","qwerty","125042000000258","79451789841256"]

console.log(parol)

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    users.map(function (login){
        if(login===inp1.value){
            parol.map(function (p){
                if(p===inp2.value){
                    alert('Авторизован')
                }
            })
        }
    })
})
//2point
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const h1Node =document.querySelector('h1')

