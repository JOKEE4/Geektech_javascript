

// 5_1
function Contsructor(name,login,password,){
    this.username =name
    this.login = login
    this.password = password
}
var obj = new Contsructor('Erkutbek','ErkutCrush','e02022004')

// console.log(obj);

//5_2
var arr1=["evgenii","vadim","EKATERINA","SoFya","mARIA","svetlana","alexey"]

function capitalaze(arr){
    arr.map((name)=>{
        console.log(name[0].toUpperCase()+name.slice(1).toLowerCase());
    })

}


// capitalaze(arr1)

// 5_3
var inn =["00101202215478","qwerty","125042000000258","79451789841256","21010199578143","01234567891234","249489","21702200214789"]
function TrueInn(arr){
    arr.filter((inn)=>{
        if(inn.length===14 && (inn[0]==='0' || inn[0]==='1' || inn[0]==='2')){
            console.log(inn);
        }
    })
}
// TrueInn(inn)

//5_4
var arrUser= ["Evgenii","Vadim","Ekaterina","Sofya","Maria","Svetlana","Alexey"]
console.log(arrUser.reduce(function (a,b){
    return a.length > b.length ? a:b
}
))