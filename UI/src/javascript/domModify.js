// Graph Build
const graphBuilder = (nodeLeft, nodeRight, pathLeft, pathRight, pathTop, graphRow, graphCol, cardContainers) => {
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
        currCard += generateCard(`${i}th + Card`)
    }
    cardContainers.innerHTML = currCard
}

export {graphBuilder}
