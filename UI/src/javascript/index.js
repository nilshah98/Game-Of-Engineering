import "../sass/main.scss";
// Globals
var {cn, qid, n_qid, params} = getStore();
var isCouncil = false;
console.log(cn, qid, n_qid, params);
let nextCard = {}
// Since cards are fetched from 0, whereas nodes from cn
// Hence creates an offset, which will be constant
const offSet = cn;

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

const generateTooltip = (data, location) => `<div class="toolTip__container"><div class="toolTip__body--${location}>
${data}
</div></div>`

const messageWrapper = document.getElementsByClassName("message__wrapper")[0];
const messageBody = document.getElementsByClassName("message__body")[0];

messageWrapper.addEventListener("click", () => messageWrapper.classList.toggle("message__wrapper--active"))

const getNextCard = (optionId) => {
    // Get result for the current question number and option
    // qid and optionId
    // cardBodies = DOMCards
    // cards = question-cards
    console.log(cards[qid])
    const result = nextCard.options[optionId].effect
    isCouncil = settleEffect(result, params, isCouncil)
    messageBody.classList.remove("message__body--danger");
    messageBody.classList.remove("message__body--warning");
    messageBody.classList.remove("message__body--success");

    for(var k in params){
        if(params[k] < 0){
            console.log("GAMEOVER",k)
            messageBody.textContent = `GAME OVER! Your ${k} has gone below 0`;
            messageWrapper.classList.toggle("message__wrapper--active");
            messageBody.classList.add("message__body--danger");
            // window.localStorage.clear();
            // params = {social : 50,technical : 50,goal : undefined,management : 50,cultural : 50,sports : 50,time : 100,pointer : 0};
            // updateStore(params,0,0)
            localStorage.clear()
            var newRes = getStore();
            cn = newRes.cn
            qid = newRes.qid
            params = newRes.params
            setTimeout(() => location.reload(),1500)
            break;
        }
        else if(params[k] < 20){
            messageBody.textContent = `WARNING! Your ${k} has gone below 20`;
            messageWrapper.classList.toggle("message__wrapper--active");
            messageBody.classList.add("message__body--warning");
        }
    }

    // Resume animations
    // tech | time | social | pointer
    let percent = 100-(params["technical"]+params["management"]+params["sports"]+params["cultural"])/4
    paramsRes[0].style.transform = `translateY(${percent}%)`
    percent = 100 - params["time"]
    paramsRes[1].style.transform = `translateY(${percent}%)`
    percent = 100 - params["social"]
    paramsRes[2].style.transform = `translateY(${percent}%)`
    percent = 100 - params["pointer"]
    paramsRes[3].style.transform = `translateY(${percent}%)`
    
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

    // Get the id for next card, since numbered ad 1,2,3,4....
    // console.log(nextCard);
    // updateStore(params,qid,n_qid,cn);

    // Return the card generated for the next question
    return (nextCard)
}

// Selectors
const graphPathsWrapper = document.getElementsByClassName("graph__pathWrapper");
const graphPaths = document.getElementsByClassName("graph__path");
const graphNodesWrapper = document.getElementsByClassName("graph__nodeWrapper");
const graphNodes = document.getElementsByClassName("graph__node");
const cardContainers = document.getElementsByClassName("card__container")[0];
var cardBodies = document.getElementsByClassName("card__body");
const graphRow = document.getElementsByClassName("graph__row");
const graphCol = document.getElementsByClassName("graph__col");
const graphPageWrapper = document.getElementsByClassName("graphPage__wrapper")[0];
// tech | time | social | pointer
const paramsRes = document.getElementsByClassName("params__fill");
const paramDots = document.getElementsByClassName("params__dot")


// Graph Build
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

// Inializers
// Path => cn
for(let i=0; i<cn; i++){
    graphNodesWrapper[i].classList.add("graph__nodeWrapper--active");
    graphPathsWrapper[i].classList.add("graph__pathWrapper--active");
    graphPaths[i].classList.add("graph__path--active");
    graphNodes[i].classList.add("graph__node--active");
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
let percent = 100-params["technical"]
paramsRes[0].style.transform = `translateY(${percent}%)`
percent = 100 - params["time"]
paramsRes[1].style.transform = `translateY(${percent}%)`
percent = 100 - params["social"]
paramsRes[2].style.transform = `translateY(${percent}%)`
percent = 100 - params["pointer"]
paramsRes[3].style.transform = `translateY(${percent}%)`

// Event-Listeners
for(let i=0; i<graphNodesWrapper.length; i++){
    graphNodesWrapper[i].addEventListener("click", () => {
        graphPageWrapper.classList.toggle("graphPage__wrapper--active")
        cardContainers.classList.toggle("card__container--active")
        setTimeout(() => {
            // cn - offset since ossible that on 5th node, but first card
            // since earlier cards not rendered
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


graphNodesWrapper[cn].classList.toggle("graph__nodeWrapper--next");

const answersEventListener = () => {
const answers = document.getElementsByClassName("card__answer");
for(let i=0; i<answers.length; i++){
    answers[i].addEventListener("click", () => {
        const id = [answers[i].classList[1].slice(14), qid]

        // console.log(id, "OPTION CLICKED");
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

console.log("LAST")
