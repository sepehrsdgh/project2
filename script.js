//show more and show less 1//
number=document.querySelectorAll(".list2").length

document.querySelector(".numberofshowmore").innerHTML=`Show ${number} More`

function display(){
    for(let i=0;i<document.querySelectorAll(".list1").length;i++){
    document.querySelectorAll(".list1")[i].style.display="none"
    }
}
display()

document.querySelector("#showmore").addEventListener("click",showMore)
document.querySelector("#showless").addEventListener("click",showLess)


function showMore(){
    for(let i=0;i<document.querySelectorAll(".list1").length;i++){
    document.querySelectorAll(".list1")[i].style.display="flex"
    }
    document.querySelector("#showmore").style.display="none"
}

function showLess(){
    for(let i=0;i<document.querySelectorAll(".list1").length;i++){
    document.querySelectorAll(".list1")[i].style.display="none"
    }
    document.querySelector("#showmore").style.display="flex"
}

//show more and show less 2//
function display2(){
    for(let i=0;i<document.querySelectorAll(".list2").length;i++){
    document.querySelectorAll(".list2")[i].style.display="none"
    }
    
}
display2();
document.querySelector("#showmore2").addEventListener("click",showMore2)
document.querySelector("#showless2").addEventListener("click",showLess2)
function showMore2(){
    for(let i=0;i<document.querySelectorAll(".list2").length;i++){
    document.querySelectorAll(".list2")[i].style.display="flex"
    }
    document.querySelector("#showmore2").style.display="none"
}

function showLess2(){
    for(let i=0;i<document.querySelectorAll(".list2").length;i++){
    document.querySelectorAll(".list2")[i].style.display="none"
    }
    document.querySelector("#showmore2").style.display="flex"
}