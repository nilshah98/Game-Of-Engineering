import {paramsRes, messageBody, messageWrapper, paramDots, graphPaths, graphPathsWrapper, graphNodes, graphNodesWrapper} from './selectors'

// Helper Functions
const generateCard = (data) => `<div class="card__body">
    <div class="card__title">
    ${data.title}
    </div>
    <div class="card__question">
    ${data.question}
    </div>
    <div class="card__options"> 
    ${data.options.map((item,index) => `<div class="card__answer card__answer--${index}"> ${item.text} </div>`).join(' ')}
    </div>
    </div>`

const handleRes = (params) => {
    let percent = 100-(params["technical"]+params["management"]+params["sports"]+params["cultural"])/4
    paramsRes[0].style.transform = `translateY(${percent}%)`
    percent = 100 - params["time"]
    paramsRes[1].style.transform = `translateY(${percent}%)`
    percent = 100 - params["social"]
    paramsRes[2].style.transform = `translateY(${percent}%)`
    percent = 100 - params["pointer"]
    paramsRes[3].style.transform = `translateY(${percent}%)`
}

const handleMessages = (event, message) => {
    messageBody.textContent = message;
    messageWrapper.classList.toggle("message__wrapper--active");
    messageBody.classList.add(`message__body--${event}`)
}

const handleDots = (curr, start, snextCard) => {
    for(var k in snextCard.options[curr - start].effect){
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
}

const graphAnimation = () => {
    var {params, qid, cn, isCouncil} = getStore()
    cn = Math.min(cn + 1, graphPathsWrapper.length)
    updateStore(params, qid, cn, isCouncil)
    if(!graphPaths[cn-1].classList.contains("graph__path--active")){

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

export {generateCard, handleRes, handleMessages, handleDots, graphAnimation}