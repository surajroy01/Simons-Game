//for checking flash sequence
let gameSeq=[]
let userSeq=[]

let btns=["red","blue","pink","yellow"]

let started=false
let level =0

//for starting game
let button=document.querySelector("button")
let h5=document.querySelector("h5")
let h4=document.querySelector("h4")
let b=button.addEventListener("click",function(){
    
    if(started==false)
    {
        
        console.log("game started")
        
         started=true
         LevelUp()
         
    }
})
function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);
}


function LevelUp(){
    userSeq=[]
    //after  starting changing level
    level++
    h5.innerText=`Level ${level}`
    h4.innerHTML=`Your Score : ${(level-1)*10}`

    //selecting random btn
    let randIdx=Math.floor(Math.random()*btns.length)
    let randClr=btns[randIdx]
    let randBtn=document.querySelector(`.${randClr}`)
    //storing in gameseq
    gameSeq.push(randClr)
    console.log(gameSeq)
    //now how to flash
    btnFlash(randBtn)
}

function btnFlash1(pbtn){
    pbtn.classList.add("userflash")
    setTimeout(function() {
        pbtn.classList.remove("userflash")
    }, 250);
}

//pressing i.e user will press the button/box
function btnPress(event){
    let pbtn=this
    btnFlash1(pbtn)
    userClr=pbtn.getAttribute("id")
    //storing user input
    userSeq.push(userClr)
    console.log(userSeq)
    check(userSeq.length-1)
}

let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}
   
//resetting
function reSet(){
    started=false
    userSeq=[]
    gameSeq=[]
    level=0

}
//checking function
function check(ind){
    if(gameSeq[ind]===userSeq[ind]){
        if(gameSeq.length==userSeq.length){
            setTimeout(LevelUp,500)
        }
    console.log("same hai")
    }
    else{
        console.log("alag h")
        h5.innerHTML=`GAME OVER !<br>Press the button to start again`
        reSet()
    }
}
        
