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
const paramsRes = document.getElementsByClassName("params__fill");
const paramDots = document.getElementsByClassName("params__dot");
const messageWrapper = document.getElementsByClassName("message__wrapper")[0];
const messageBody = document.getElementsByClassName("message__body")[0];

export {graphPathsWrapper, graphPaths, graphNodesWrapper, graphNodes, 
    cardContainers, cardBodies, graphRow, graphCol, graphPageWrapper, 
    paramsRes, paramDots, messageWrapper, messageBody}