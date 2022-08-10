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





//hamburger menu open and close
document.querySelector(".hamburger-open").style.display="none"
document.querySelector(".hamburger-close").style.display="flex"
let c=document.querySelector(".hamburger-close")
let o=document.querySelector(".hamburger-open")
let i=0
document.querySelector(".hamburgermenuicon").addEventListener("click",function(){
    i+=1
    if(i%2===0){   
        c.style.display="flex"
        o.style.display="none"
        document.querySelector("main").style.marginLeft="89px"
        for( let i=0;i<8;i++){
            document.querySelectorAll(".section1 .image-container")[i].style.width="270px"
            }
            for(let i=0;i<8;i++){
                document.querySelectorAll(".section1 .items1 .captions .caption-top .captions-text")[i].style.width="270px"
                }
                for( let i=0;i<4;i++){
                    document.querySelectorAll(".section3 .image-container")[i].style.width="270px"
                    }
                    for( let i=0;i<4;i++){
                        document.querySelectorAll(".section3 .items1 .captions .caption-top ")[i].style.width="270px"
                        }
                
        // document.querySelector("main").style.transformOrigin="100% 0%"
        // document.querySelector("main").style.transform="scaleX(1)"
        
        
    }

    if(o.style.display==="none"&i%2===1){
    c.style.display="none"
    o.style.display="block"
    document.querySelector("#home").style.backgroundColor="rgb(193,193,193)"
    document.querySelector("main").style.marginLeft="245px"
    for( let i=0;i<8;i++){
    document.querySelectorAll(".section1 .image-container")[i].style.width="250px"
    }
    for( let i=0;i<8;i++){
        document.querySelectorAll(".section1 .items1 .captions .caption-top .captions-text")[i].style.width="200px"
        }
        for( let i=0;i<4;i++){
            document.querySelectorAll(".section3 .image-container")[i].style.width="250px"
            }
            for( let i=0;i<4;i++){
                document.querySelectorAll(".section3 .items1 .captions .caption-top .captions-text")[i].style.width="200px"
                }
                for( let i=0;i<4;i++){
                    document.querySelectorAll(".section3 .items1 .captions .caption-top ")[i].style.width="250px"
                    } 
    // document.querySelector("main").style.transformOrigin="100% 0%"
    // document.querySelector("main").style.transform="scaleX(0.87)"
    }
    
})

