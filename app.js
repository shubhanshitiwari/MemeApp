let boxes = document.querySelectorAll(".box");
let reBtn = document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-game")
let mContain = document.querySelector(".messg")
let mPara = document.querySelector("#win-messg")
let count = 0;

let turnO = true

const winningArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] //2d array 

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
      if(turnO){
        box.innerText="O"
        turnO=false
    }
      else{
        box.innerText="X"
        turnO=true
      }
      box.disabled =true ;
      count++; 
      checkWinner()
      
      if (count === 9 && !mContain.classList.contains("show")) {
        mPara.innerText = "It's a Draw!";
        mContain.classList.remove("hide");
      }

    })
})
const disabledBoxes=()=>{
  for(let box of boxes){
    box.disabled = true
  }
}
const enabledBoxes=()=>{
  for(let box of boxes){
    box.disabled = false
    box.innerText=""
  }
}
const showWinner =(winner) =>{
  mPara.innerText=`Congratulations, Winner Is ${winner}`
  mContain.classList.remove("hide")
  disabledBoxes()
}

const checkWinner =() =>{
      for( let combo of winningArray) {
        // console.log(combo[0],combo[1],combo[2]);
        // console.log(
        //     boxes[combo[0]].innerText,
        //     boxes[combo[1]].innerText,
        //     boxes[combo[2]].innerText);

        let postVal1 = boxes[combo[0]].innerText
        let postVal2 = boxes[combo[1]].innerText
        let postVal3 = boxes[combo[2]].innerText

        if(postVal1!="" && postVal2!="" && postVal3!=""){
          if(postVal1 === postVal2 && postVal2 === postVal3){
            console.log("Winner",postVal1)
            boxes[combo[0]].innerText="$"
            boxes[combo[1]].innerText="$"
            boxes[combo[2]].innerText="$"
            showWinner(postVal1)
          }
          }
        }
}

const reGame =()=>{
  turnO=true;
  enabledBoxes()
  mContain.classList.add("hide")
}

newGameBtn.addEventListener("click",reGame)
reBtn.addEventListener("click",reGame)
