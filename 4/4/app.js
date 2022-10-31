
//1
function Compare(a,b){
    if(a>b){
         console.log(b);
    }else{
        console.log(a);
    }
}
 Compare(12,6)


//2
function CountLetter(word,letter){
    var result = 0
    for(var l of word){
        if(l===letter){
            result++
        }
    }
    console.log(result)
}

 CountLetter('Hello','o')


//3
function Arithmethic(a,b){
     console.log((a*b)/2);
}

//4 
var arr = [0,1,3,4,5,6,7,8]
function canfilter(arr){
    // var c = 0
    arr.filter(function (a){
         if(a>5){
            console.log(a);
         }
    })
    
}
 canfilter(arr)

//5
function checkInn(inn){
    var newinn = String(inn)
    console.log(newinn.length)

    if(newinn.length===14 && (newinn[0]==='0' || +newinn[0]===1 || +newinn[0]===2)){
        alert('Correct')
    }else{
        alert('undefined')
    }
}
 checkInn(20000000000000)
// 6



function Reveso(word){
    var mass =[]
    for(let i =word.length-1;i>=0;i--){
        mass.push(word[i])
    }
    var newmass =  mass.join("")
    console.log(newmass);
}
 Reveso(prompt())