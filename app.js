console.log('connected');
function addPlayerStyle(element) {
    element.style.border = '5px solid red';
    element.style.borderRadius = '5px';
    element.style.marginBottom = '10px';
    element.style.padding = '10px';
}

const player = document.getElementsByClassName('player');
for (const element of player) {
    addPlayerStyle(element);

    // element.addEventListener('click', function () {

    //     element.style.backgroundColor = 'yellow';
    // })

    //another way by using event bubble is given bellow
}

document.getElementById('add-player').addEventListener('click', function () {
    const player = document.createElement('div');
    player.innerHTML = `
    <h2>new Player</h2>
    <p>Laboriosam similique voluptatibus magnam, ea vel veritatis impedit libero. Suscipit culpa libero sint
        fugit error tempora assumenda hic temporibus saepe, perferendis quod perspiciatis eligendi provident
        voluptates? Quasi at iste assumenda.</p>
    `
    player.classList.add('plsyers');
    const players = document.getElementById('players');
    players.appendChild(player);
    addPlayerStyle(player);
});


//on click style change using event bubble
document.getElementById('players').addEventListener('click', function (event) {
    // document.getElementById('players').style.backgroundColor = 'cyan';
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'cyan';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'blue';
        console.log(event.target);
    }
})

