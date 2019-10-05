import "../sass/main.scss";
// Globals
var cn = 0;
var qid = 0;
var isCouncil = false;

var params = {"technical": 0, "social": 0, "time": 0, "pointer": 0, "cultural": 0, "management":0, "sports":0 };

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
const generateCard = (data) => `<div class="card__body">
    <div class="card__question">
    ${data.question}
    </div>
    <div class="card__options"> 
    ${data.options.map((item,index) => `<div class="card__answer card__answer--${index}"> ${item.text} </div>`).join(' ')}
    </div>
    </div>`

const generateTooltip = (data, location) => `<div class="toolTip__container"><div class="toolTip__body--${location}>
${data}
</div></div>`

const getNextCard = (optionId) => {
    const result = cards[qid].options[optionId].effect
    isCouncil = settleEffect(result, params, isCouncil)
    console.log(params)

    // tech | time | social | pointer
    let percent = 100-params["technical"]
    paramsRes[0].style.transform = `translateY(${percent}%)`
    percent = 100 - params["time"]
    paramsRes[1].style.transform = `translateY(${percent}%)`
    percent = 100 - params["social"]
    paramsRes[2].style.transform = `translateY(${percent}%)`
    percent = 100 - params["pointer"]
    paramsRes[3].style.transform = `translateY(${percent}%)`
    

    let nextCard = next_card(qid, params, isCouncil);
    console.log(nextCard,"before")
    while(!nextCard.hasOwnProperty("title")){
        if(nextCard.isVacation){
            params["time"] = 100;
        }
        qid += 1
        nextCard = next_card(qid, params, isCouncil)
    }
    qid = nextCard.id - 1;
    
    return generateCard(nextCard)
}

// Selectors
const graphPathsWrapper = document.getElementsByClassName("graph__pathWrapper");
const graphPaths = document.getElementsByClassName("graph__path");
const graphNodesWrapper = document.getElementsByClassName("graph__nodeWrapper");
const graphNodes = document.getElementsByClassName("graph__node");
const cardContainers = document.getElementsByClassName("card__container")[0];
const cardBodies = document.getElementsByClassName("card__body");
const graphRow = document.getElementsByClassName("graph__row");
const graphCol = document.getElementsByClassName("graph__col");
const graphPageWrapper = document.getElementsByClassName("graphPage__wrapper")[0];
// tech | time | social | pointer
const paramsRes = document.getElementsByClassName("params__fill");

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
currCard += generateCard(next_card(-1,params,false))
cardContainers.innerHTML = currCard

// Event-Listeners

for(let i=0; i<graphNodesWrapper.length; i++){
    graphNodesWrapper[i].addEventListener("click", () => {
        graphPageWrapper.classList.toggle("graphPage__wrapper--active")
        cardContainers.classList.toggle("card__container--active")
        setTimeout(() => cardBodies[cn].classList.toggle("card__body--active"), 301)
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


graphNodesWrapper[0].classList.toggle("graph__nodeWrapper--next");

const answersEventListener = () => {
const answers = document.getElementsByClassName("card__answer");
for(let i=0; i<answers.length; i++){
    answers[i].addEventListener("click", () => {
        const id = [answers[i].classList[1].slice(14), qid]
        let nextCard = getNextCard(id[0],id[1])
        cardContainers.innerHTML += nextCard
        answersEventListener();
        
        cn = Math.min(cn + 1, graphPathsWrapper.length)
        
        if(!graphPaths[cn-1].classList.contains("graph__path--active")){
            
            graphNodesWrapper[cn - 1].classList.toggle("graph__nodeWrapper--next")
            graphNodes[cn - 1].classList.toggle("graph__node--active")
            graphNodesWrapper[cn - 1].classList.toggle("graph__nodeWrapper--active")
            
            
            setTimeout(() => {
                
                graphPaths[cn-1].classList.toggle("graph__path--active")
                
                if(graphNodes.length > cn){
                    graphNodesWrapper[cn].classList.toggle("graph__nodeWrapper--next")
                }
                
            },501)
        } 
    })
}
}

answersEventListener();



console.log("LAST")
