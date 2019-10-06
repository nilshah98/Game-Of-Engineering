let queue = [];
const  next_card = (answered_index,params,isPartOfCouncil)=>{
    let current_index = answered_index+1;
    let current_card = {};
    while(current_index<cards.length)
    {
        current_card = cards[current_index];
        let requirement = current_card.requirement;
        let flag = false;
        for(var keys in requirement)
        {
            if(requirement[keys]>=params[keys])
            {
                flag = true;
                break;
            }
        }
        if(current_card.hasOwnProperty('whichCouncil'))
        {
            if(current_card.whichCouncil!=isPartOfCouncil)
            flag = true;
        }
        if(flag===false)
        {
            if(current_card.type===1)
            {
                const random_function = current_card.options;
                current_card.options=random_function(params);
            }
            return current_card;
        }
        current_index++;
    }
}

const settleEffect = (effects,params,isPartOfCouncil)=>{
    for(var key in effects){
        if(key=='whichCouncil')
        {
            isPartOfCouncil=effects[key];
        }
        else
        {
            if(key == 'resume')
            {
                queue.push(effects[key])
            }
            else
            {
                params[key] += effects[key];
                params[key]=(params[key]>100)?(100):(params[key])
            }
        }
    }
    return isPartOfCouncil;
}

const resume = ()=>{

}

//export {next_card};