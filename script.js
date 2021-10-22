//No 7
let doorImage1 = document.querySelector('#door1');

//No 15,38, 40
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;



//No 9, 17,18,51,55, 63
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'
let startButton = document.querySelector('#start');
let currentlyPlaying = true;


//No 58
const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}


//No 50,52
const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }

}


//No 46,47,48, 59,60
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}



//No 37
const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * 3);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor3 = beachDoorPath;
    } else if (choreDoor === 2) {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}

// No 8, 44
doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }

}

//No 16,19,49, 53, 61, 65
doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }

}


doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }

}

//No 67
const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!'
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}



//No 66
startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }

};

//No 64
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?'
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    }

    currentlyPlaying = false;
}


startRound();
