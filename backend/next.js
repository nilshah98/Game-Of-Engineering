const  next_card = (answered_index,params,isPartOfCouncil)=>{
    let current_index = answered_index+1;
    let current_card = {};
    while(current_index<cards.length)
    {
        current_card = cards[current_index];
        // if(social>=current_card.social && pointer>=current_card.pointer)
        // {
        //     [technical,cultural,management,sports] = ...skills;
        //     current_skills = current_card.skills;
        //     if(skills.technical>=current_skills.technical && skills.cultural>=current_skills.cultural && skills.management>=current_skills.technical && skills.technical>=current_skills.technical)
        // }
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

const settleEffect = (effects,params)=>{
    for(var key in effects){
        params[key] += effects; 
    }
}

//export {next_card};