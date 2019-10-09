import {graphRow, graphCol, graphNodes, graphNodesWrapper, graphPaths, graphPathsWrapper} from './selectors'

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
const generateGraph = () => {
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

    var {cn} = getStore()
    for(let i=0; i<cn; i++){
        graphNodesWrapper[i].classList.add("graph__nodeWrapper--active");
        graphPathsWrapper[i].classList.add("graph__pathWrapper--active");
        graphPaths[i].classList.add("graph__path--active");
        graphNodes[i].classList.add("graph__node--active");
    }
}

generateGraph()

export {pathLeft, pathRight, nodeLeft, nodeRight, pathTop}