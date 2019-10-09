import {paramsRes, messageBody, messageWrapper} from './selectors'

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

const handleMessages = (params) => {
    messageBody.classList.remove("message__body--danger");
    messageBody.classList.remove("message__body--warning");
    messageBody.classList.remove("message__body--success");

    for(var k in params){
        if(params[k] < 0){
            messageBody.textContent = `GAME OVER! Your ${k} has gone below 0`;
            messageWrapper.classList.toggle("message__wrapper--active");
            messageBody.classList.add("message__body--danger");
            setTimeout(() => {
                window.localStorage.clear()
                location.reload()
            }, 1000);
            break;
        }
        else if(params[k] < 20){
            messageBody.textContent = `WARNING! Your ${k} has gone below 20`;
            messageWrapper.classList.toggle("message__wrapper--active");
            messageBody.classList.add("message__body--warning");
        }
    }
}

export {generateCard, handleRes, handleMessages}