import "../sass/main.scss";
import './constants'
import {graphPathsWrapper, graphPaths, graphNodesWrapper, graphNodes, 
    cardContainers, paramDots, messageWrapper, messageBody} from './selectors'
import {generateCard, handleRes, handleMessages} from './helper'
import {initialiseEventListeners} from './eventListeners'

// Globals
var {cn, qid, n_qid, params} = getStore();
var isCouncil = false;
let nextCard = {}

initialiseEventListeners(cn)

const getNextCard = (optionId) => {
    // Get result for the current question number and option
    // qid and optionId
    const result = nextCard.options[optionId].effect
    isCouncil = settleEffect(result, params, isCouncil)

    handleMessages(params)
    handleRes(params)
    
    // Get nextcard for the provided qid, params and isCouncil
    qid = n_qid;
    nextCard = next_card(qid, params, isCouncil);
    n_qid = nextCard.id;
    // While the nextCard does not have "title" parameter, keep fetching
    while(!nextCard.hasOwnProperty("title")){
        if(nextCard.isVacation){
            params["time"] = 100;
            messageBody.textContent = `Vacation started! Here're your skills till now - ${Object.keys(params).map((elem) => elem + " - " + params[elem])}`;
            messageWrapper.classList.toggle("message__wrapper--active");
            messageBody.classList.add("message__body--info");
        }
        qid = n_qid
        nextCard = next_card(qid, params, isCouncil)
        n_qid = nextCard.id
    }

    return (nextCard)
}

// Question => qid
var currCard = ``
nextCard = next_card(qid,params,false)
console.log("***********************************",nextCard);
console.log(qid);
n_qid = nextCard.id;
// keep fetching till nextCard has title
while(!nextCard.hasOwnProperty("title")){
    console.log("loop")
    if(nextCard.isVacation){
        params["time"] = 100;
        messageBody.textContent = `Vacation started! Here're your skills till now - ${Object.keys(params).map((elem) => elem)}`;
        messageWrapper.classList.toggle("message__wrapper--active");
        messageBody.classList.add("message__body--danger");
    }
    qid = n_qid;
    nextCard = next_card(qid, params, isCouncil)
    n_qid = nextCard.id;
}
// Cannot update here, since no necessary that the question has been answered;
// qid = nextCard.id;
currCard += generateCard(nextCard);
cardContainers.innerHTML = currCard;

// Result
handleRes(params)

graphNodesWrapper[cn].classList.toggle("graph__nodeWrapper--next");

const answersEventListener = () => {
const answers = document.getElementsByClassName("card__answer");
for(let i=0; i<answers.length; i++){
    answers[i].addEventListener("click", () => {
        const id = [answers[i].classList[1].slice(14), qid]

        let snextCard = getNextCard(id[0],id[1])
        cardContainers.innerHTML += generateCard(snextCard)

        for(let j=answers.length - snextCard.options.length; j<answers.length; j++){
            answers[j].addEventListener("mouseover", () => {
                for(let i=0; i<paramDots.length; i++){
                    // paramDots[i].classList.remove("params__dot--positive")
                    // paramDots[i].classList.remove("params__dot--negative")   
                }
                console.log("HOVER", snextCard.options)
                for(var k in snextCard.options[j - answers.length + snextCard.options.length].effect){
                    console.log(k,j - answers.length + snextCard.options.length)
                    if(k === "time"){
                        paramDots[1].classList.toggle("params__dot--active")
                    }else if(k === "social"){
                        paramDots[2].classList.toggle("params__dot--active")
                    }else if(k === "pointer"){
                        paramDots[3].classList.toggle("params__dot--active")
                    }else{
                        paramDots[0].classList.toggle("params__dot--active")
                    }
                }
            })
            answers[j].addEventListener("mouseout", () => {
                for(let i=0; i<paramDots.length; i++){
                    // paramDots[i].classList.remove("params__dot--positive")
                    // paramDots[i].classList.remove("params__dot--negative")   
                }
                for(var k in snextCard.options[j - answers.length + snextCard.options.length].effect){
                    if(k === "time"){
                        paramDots[1].classList.toggle("params__dot--active")
                    }else if(k === "social"){
                        paramDots[2].classList.toggle("params__dot--active")
                    }else if(k === "pointer"){
                        paramDots[3].classList.toggle("params__dot--active")
                    }else{
                        paramDots[0].classList.toggle("params__dot--active")
                    }
                }
            })
        }
        answersEventListener();

        
        cn = Math.min(cn + 1, graphPathsWrapper.length)
        
        if(!graphPaths[cn-1].classList.contains("graph__path--active")){

            updateStore(params,qid,cn);
            
            graphNodesWrapper[cn - 1].classList.toggle("graph__nodeWrapper--next")
            graphNodes[cn - 1].classList.toggle("graph__node--active")
            graphNodesWrapper[cn - 1].classList.toggle("graph__nodeWrapper--active")
            
            
            setTimeout(() => {
                
                graphPaths[cn - 1].classList.toggle("graph__path--active")
                
                if(graphNodes.length > cn){
                    graphNodesWrapper[cn].classList.toggle("graph__nodeWrapper--next")
                }
                
            },501)
        } 
    })
}
}

answersEventListener();
