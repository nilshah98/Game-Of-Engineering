// Event-Listeners

// Node click disabled 
// for(let i = 0; i < graphNodesWrapper.length; i++){
//     graphNodesWrapper[i].addEventListener("click", () => {
//         console.log(`${i} Node clicked`)
//         cardContainers.classList.toggle("card__container--active");
//         cards[i].classList.toggle("card__body--active")
//     })
// }

const cardContainerClick = (cardContainers, graphPageWrapper, cards) => {
    cardContainers.addEventListener("click", () => {
        graphPageWrapper.classList.toggle("graphPage__wrapper--active")
        for(let i=0; i<cards.length; i++){
            if(cards[i].classList.contains("card__body--active")){
                cards[i].classList.toggle("card__body--active")
            }
        }
        setTimeout(() => cardContainers.classList.toggle("card__container--active"), 301);
    })
}

// buttonNavigateLeft.addEventListener("click", () => {
//     cn = Math.max(cn - 1, 0)

//     if(graphPaths[cn].classList.contains("graph__path--active")){

//         handleStyleProperties([buttonNavigateLeft, buttonNavigateRight], "pointerEvents", "none")
//         graphPaths[cn].classList.toggle("graph__path--active")

//         setTimeout(() => {
//             handleStyleProperties([buttonNavigateLeft, buttonNavigateRight], "pointerEvents", "auto")
//             graphNodes[cn].classList.toggle("graph__node--active")
//             graphNodesWrapper[cn].classList.toggle("graph__nodeWrapper--active")
//         }, 501)
//     }    
// })

buttonNavigateRight.addEventListener("click", () => {
    cn = Math.min(cn + 1, graphPathsWrapper.length)
    
    if(!graphPaths[cn-1].classList.contains("graph__path--active")){
        
        handleStyleProperties([buttonNavigateLeft, buttonNavigateRight], "pointerEvents", "none")
        graphNodesWrapper[cn - 1].classList.toggle("graph__nodeWrapper--next")
        graphNodes[cn - 1].classList.toggle("graph__node--active")
        graphNodesWrapper[cn - 1].classList.toggle("graph__nodeWrapper--active")
        graphPageWrapper.classList.toggle("graphPage__wrapper--active")
        
        setTimeout(() => {
            handleStyleProperties([buttonNavigateLeft, buttonNavigateRight], "pointerEvents", "auto")
            
            graphPaths[cn-1].classList.toggle("graph__path--active")
            cardContainers.classList.toggle("card__container--active")
            if(graphNodes.length > cn){
                graphNodesWrapper[cn].classList.toggle("graph__nodeWrapper--next")
            }
            
            setTimeout(() => {
                cards[cn].classList.toggle("card__body--active")
            }, 501)
            
        },501)
    }
})