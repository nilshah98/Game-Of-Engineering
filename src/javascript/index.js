import "../sass/main.scss";
import {initialise} from './constants'
import {cardContainers} from './selectors'
import {generateCard, handleRes, handleMessages, handleDots, graphAnimation} from './helper'
import {initialiseEventListeners} from './eventListeners'

// Globals
var nextCard = initialise()
var {cn} = getStore()
initialiseEventListeners(cn)

const getNextCard = (optionId) => {
    // Get result for the current question number and option
    var {params, qid, cn, isCouncil} = getStore();
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
        updateStore(params, qid, cn, isCouncil)
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
        
        updateStore(params, qid, cn, isCouncil)
        return (nextCard)
    }
}

const answersEventListener = () => {
    
    const answers = document.getElementsByClassName("card__answer");

    for(let i=0; i<answers.length; i++){
        answers[i].addEventListener("click", () => {

            // answers[i].classList[1].slice(14) => optionID for card__answer-- => len is 14
            let snextCard = getNextCard(answers[i].classList[1].slice(14))
            
            if(snextCard){
                cardContainers.innerHTML += generateCard(snextCard)
                let start = answers.length - snextCard.options.length
                let end = answers.length 
                
                for(let j=start; j<end; j++){
                    answers[j].addEventListener("mouseover", () => handleDots(j, start, snextCard))
                    answers[j].addEventListener("mouseout", () => handleDots(j, start, snextCard))
                }

                answersEventListener()
                graphAnimation()
            }
            else{
                localStorage.clear();
                setTimeout(() => location.reload(), 2000);
            }     
        })
    }
}

answersEventListener();
