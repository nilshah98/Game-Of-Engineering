import {messageWrapper, graphNodesWrapper, cardContainers, graphPageWrapper, cardBodies} from './selectors'

// Event Listeners
const initialiseEventListeners = (offSet) => {
    messageWrapper.addEventListener("click", () => messageWrapper.classList.toggle("message__wrapper--active"))

    for(let i=0; i<graphNodesWrapper.length; i++){
        graphNodesWrapper[i].addEventListener("click", () => {
            var {cn} = getStore()
            graphPageWrapper.classList.toggle("graphPage__wrapper--active")
            cardContainers.classList.toggle("card__container--active")
            setTimeout(() => {
                // Using offset to counter localstorage loading
                cardBodies[cn-offSet].classList.toggle("card__body--active")
            }, 301)
        })
    }
    
    cardContainers.addEventListener("click", () => {
        graphPageWrapper.classList.toggle("graphPage__wrapper--active")
        for(let i=0; i<cardBodies.length; i++){
            if(cardBodies[i].classList.contains("card__body--active")){
                cardBodies[i].classList.toggle("card__body--active")
            }
        }
        setTimeout(() => cardContainers.classList.toggle("card__container--active"), 301);
    })  
}

export {initialiseEventListeners}