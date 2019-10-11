import "../sass/main.scss";
import './constants'
import {graphPathsWrapper, graphPaths, graphNodesWrapper, graphNodes, cardContainers, paramDots} from './selectors'
import {generateCard, handleRes, handleMessages, handleDots} from './helper'
import {initialiseEventListeners} from './eventListeners'

// Globals
var {cn, qid, params} = getStore();
var isCouncil = false;
var nextCard

initialiseEventListeners(cn)

var currCard = ``
nextCard = next_card(qid,params,false)

// keep fetching till nextCard has title
while(!nextCard.hasOwnProperty("title")){
    if(nextCard.isVacation){
        params["time"] = 100;
        handleMessages("info", `Vacation started! Here're your skills till now\n - ${Object.keys(params).map((elem) => elem + " - " + params[elem])}`)
    }

    nextCard = next_card(qid, params, isCouncil)
    qid = nextCard.id;
}

// Cannot update here, since no necessary that the question has been answered
currCard += generateCard(nextCard);
cardContainers.innerHTML = currCard;

const answers = document.getElementsByClassName("card__answer");
for(let i=0; i<answers.length; i++){
    answers[i].addEventListener("mouseover", () => handleDots(i, 0, nextCard))
    answers[i].addEventListener("mouseout", () => handleDots(i, 0, nextCard))
}

// Result
handleRes(params)

graphNodesWrapper[cn].classList.toggle("graph__nodeWrapper--next");

const getNextCard = (optionId) => {
    // Get result for the current question number and option
    let event = ""
    let eventAttr = []
    
    const result = nextCard.options[optionId].effect
    qid = nextCard.id

    isCouncil = settleEffect(result, params, isCouncil)
    
    for(var k in params){
        if(params[k] < 0){
            event="danger"
            eventAttr=[k]
            break
        }
        else if(params[k] < 20){
            event = "warning"
            eventAttr.push(k)
        }
    }
    
    handleRes(params)
    
    if(event === "danger"){
        handleMessages(event,`Game Over ${eventAttr.join(' ')} has dropped below 0`);
        nextCard = null;
        return;
    }
    else{
        // Get nextcard for the provided qid, params and isCouncil
        nextCard = next_card(qid, params, isCouncil)
        let flag = true
        
        // While the nextCard does not have "title" parameter, keep fetching
        while(!nextCard.hasOwnProperty("title")){
            if(nextCard.isVacation){
                params["time"] = 100;
                event = event === "warning" ? event : "info" 
                handleMessages(event, `Vacation started! Here're your skills till now\n - ${Object.keys(params).map((elem) => elem + " - " + params[elem])}`)
                flag = false
            }
            nextCard = next_card(qid, params, isCouncil)
            qid = nextCard.id
        }
        
        if(flag && event === "warning"){handleMessages(event,`Warning ${eventAttr.join()} have dropped below 20`)}
        
        return (nextCard)
    }
}

const answersEventListener = () => {
    const answers = document.getElementsByClassName("card__answer");
    for(let i=0; i<answers.length; i++){
        answers[i].addEventListener("click", () => {

            let snextCard = getNextCard(answers[i].classList[1].slice(14))
            
            if(snextCard){
                cardContainers.innerHTML += generateCard(snextCard)
                let start = answers.length - snextCard.options.length
                let end = answers.length 
                
                for(let j=start; j<end; j++){
                    answers[j].addEventListener("mouseover", () => handleDots(j, start, snextCard))
                    answers[j].addEventListener("mouseout", () => handleDots(j, start, snextCard))
                }
                
                // For next cards
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
            }
            else{
                localStorage.clear();
                setTimeout(() => location.reload(), 2000);
            }
            
        })
    }
}

answersEventListener();
