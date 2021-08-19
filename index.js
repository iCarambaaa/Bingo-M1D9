let cellContainerNode = document.getElementById("board")

for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {

    let newCellNode = document.createElement("board")
    newCellNode.innerHTML = cellNumber
    newCellNode.id = cellNumber
    newCellNode.classList.add("cell")
    cellContainerNode.appendChild(newCellNode)
}



/* function highlightNumber () {
    let randomNumber = Math.floor(Math.random() * 77)
    for (document.getElementsByClassName('cell').id of document.getElementsByClassName('cell')) {
        if (document.getElementsByClassName('cell').id == randomNumber) {
            document.getElementsByClassName('cell').add("highlightedCell")
        }
    }
    

} */

let highlightNumber = function() {
    let randomNumber
    function rN(){ 
        let randomNumber = Math.floor(Math.random() * 77)
        return randomNumber }
    
    let dong = document.getElementById(randomNumber)
    dong.classList.add("highlightedCell")
}
