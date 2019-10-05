import "../sass/main.scss";
// Globals
var cn = 0;

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

// Mock Data
const data = {
    question: 'Choose from one of the available activities',
    title: 'Slot ek aur activity teen bahut na insaanfi hain',
    type: 0,
    options: [
        {
            text: 'Attend workshop on <programming in python>',
            effect: {
                technical: 10
            }
        },
        {
            text: 'Go for <basketball> team selection',
            effect: {
                sports: 10
            }
        },
        {
            text: 'Take part in debate society',
            effect: {
                cultural: 10,
                social: 10
            }
        },
        {
            text: 'Go home else trains will get crowded'
        }
    ]
}

// Helper functions
const handleStyleProperties = (components, property, value) => components.forEach((element) => element.style[property] = value)
const generateCard = (data) => `<div class="card__body">
                                    <div class="card__question">
                                        ${data.question}
                                    </div>
                                    <div class="card__options"> 
                                        ${data.options.map((item,index) => `<div class="card__answer card__answer--${index}"> ${item.text} </div>`).join(' ')}
                                    </div>
                                </div>`

// Selectors
const graphPathsWrapper = document.getElementsByClassName("graph__pathWrapper");
const graphPaths = document.getElementsByClassName("graph__path");
const graphNodesWrapper = document.getElementsByClassName("graph__nodeWrapper");
const graphNodes = document.getElementsByClassName("graph__node");
const buttonNavigateLeft = document.getElementsByClassName("buttonNavigate__button--left")[0];
const buttonNavigateRight = document.getElementsByClassName("buttonNavigate__button--right")[0];
const cardContainers = document.getElementsByClassName("card__container")[0];
const cards = document.getElementsByClassName("card__body");
const graphRow = document.getElementsByClassName("graph__row");
const graphCol = document.getElementsByClassName("graph__col");
const graphPageWrapper = document.getElementsByClassName("graphPage__wrapper")[0];

// Graph Build
var currPath = ``
for(let i=0; i<5; i++){
    currPath += nodeLeft
    currPath += pathLeft
}
currPath += nodeLeft
graphRow[0].innerHTML = currPath
graphRow[2].innerHTML = currPath

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

var currCard = ``
for(let i=0; i<24; i++){
    currCard += generateCard(data)
}
cardContainers.innerHTML = currCard

// Event-Listeners

// Node click disabled 
// for(let i = 0; i < graphNodesWrapper.length; i++){
//     graphNodesWrapper[i].addEventListener("click", () => {
//         console.log(`${i} Node clicked`)
//         cardContainers.classList.toggle("card__container--active");
//         cards[i].classList.toggle("card__body--active")
//     })
// }

cardContainers.addEventListener("click", () => {
    graphPageWrapper.classList.toggle("graphPage__wrapper--active")
    for(let i=0; i<cards.length; i++){
        if(cards[i].classList.contains("card__body--active")){
            cards[i].classList.toggle("card__body--active")
        }
    }
    setTimeout(() => cardContainers.classList.toggle("card__container--active"), 301);
})

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

graphNodesWrapper[0].classList.toggle("graph__nodeWrapper--next");

const answers = document.getElementsByClassName("card__answer");
for(let i=0; i<answers.length; i++){
    answers[i].addEventListener("click", () => {
        console.log(answers[i].classList[1].slice(14), cn);
    })
}

console.log("LAST")
