import {graphRow, graphCol, graphNodes, graphNodesWrapper, graphPaths, graphPathsWrapper, cardContainers} from './selectors'
import {generateCard, handleMessages, handleRes, handleDots} from './helper'

// Graph builder strings
const pathLeft =`<div class="graph__pathWrapper graph__pathWrapper--left">
<div class="graph__path graph__path--left"></div>
</div>`

const pathRight =`<div class="graph__pathWrapper graph__pathWrapper--right">
<div class="graph__path graph__path--right"></div>
</div>`

const nodeLeft =`<div class="graph__nodeWrapper graph__nodeWrapper--left">
<div class="graph__node graph__node--left"></div>
</div>`

const nodeRight =`<div class="graph__nodeWrapper graph__nodeWrapper--right">
<div class="graph__node graph__node--right"></div>
</div>`

const pathTop =`<div class="graph__pathWrapper graph__pathWrapper--top">
<div class="graph__path graph__path--top"></div>
</div> `

// Helper functions
const generateGraph = () => {
    var currPath = ``
    
    for(let i=0; i<5; i++){
        currPath += nodeLeft
        currPath += pathLeft
    }
    currPath += nodeLeft
    graphRow[0].innerHTML = currPath
    graphRow[2].innerHTML = currPath
    graphRow[4].innerHTML = currPath
    
    currPath = ``
    for(let i=0; i<5; i++){
        currPath += nodeRight
        currPath += pathRight
    }
    currPath += nodeRight
    graphRow[1].innerHTML = currPath
    graphRow[3].innerHTML = currPath
    
    currPath = ``
    for(let i=0; i<1; i++){
        currPath += pathTop
    }
    for(let i=0; i<graphCol.length; i++){
        graphCol[i].innerHTML = currPath
    }
    
    var {cn} = getStore()
    for(let i=0; i<cn; i++){
        graphNodesWrapper[i].classList.add("graph__nodeWrapper--active");
        graphPathsWrapper[i].classList.add("graph__pathWrapper--active");
        graphPaths[i].classList.add("graph__path--active");
        graphNodes[i].classList.add("graph__node--active");
    }
}

generateGraph()

const initialise = () => {
    var currCard = ``
    var {params, qid, cn, isCouncil} = getStore()
    var nextCard = next_card(qid,params,isCouncil)
    
    // keep fetching till nextCard has title
    while(!nextCard.hasOwnProperty("title")){
        if(nextCard.isVacation){
            params["time"] = 100;
            handleMessages("info", `Vacation started! Here're your skills till now\n - ${Object.keys(params).map((elem) => elem + " - " + params[elem])}`)
        }
        
        nextCard = next_card(qid, params, isCouncil)
        qid = nextCard.id;
    }
    
    updateStore(params, qid, cn, isCouncil)
    currCard += generateCard(nextCard);
    cardContainers.innerHTML = currCard;
    
    const answers = document.getElementsByClassName("card__answer");
    for(let i=0; i<answers.length; i++){
        answers[i].addEventListener("mouseover", () => handleDots(i, 0, nextCard))
        answers[i].addEventListener("mouseout", () => handleDots(i, 0, nextCard))
    }
    
    handleRes(params)
    graphNodesWrapper[cn].classList.toggle("graph__nodeWrapper--next");
    
    return nextCard
}

export {pathLeft, pathRight, nodeLeft, nodeRight, pathTop, initialise}