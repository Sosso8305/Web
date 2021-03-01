

function defTitre1(){
    document.title=
    document.querySelector("#titre").textContent
}

function defTitre2(){
    document.title= document.getElementsByTagName("h2")[0].textContent
}

function defTitre3(){
    const baslise_h2 =document.getElementsByTagName("h2")

    if (baslise_h2.length == 0){
        document.title="Zouaoui Sofiane"
    }
    else{
        document.title=baslise_h2[baslise_h2.length-1].textContent
    }
}



document.getElementById("paraDate").addEventListener("mouseover", ()=>{
var myDate = new Date(2025,9,5)
var time = (myDate.getTime() - Date.now())/86400000
var jours =1//Math.round(time)

document.getElementById("date").innerHTML=jours

if (jours < 2){
    document.querySelector("#jour").innerHTML="jour"
} 



console.log(jours)

})
