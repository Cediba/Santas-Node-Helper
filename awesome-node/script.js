const fs = require('fs');
// 1 - What floor does Santa end up on
// ( --> should go Up 1 floor
// ) --> should go DOWN 1 floor

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) =>{
            if (currentValue === '(') {
                return acc += 1
            } else if (currentValue === ')') {
                return acc -= 1
            }
        }, 0)
        console.timeEnd('santa-time');
        console.log('Floor:', answer);
    })
}
question1();


// 2 - When does Santa first enter the basement

function question2() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let acc = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                acc += 1
            } else if (currentItem === ')') {
                acc -= 1
            }
            counter ++
            return acc < 0;
        })
        console.log('Basement entered at:', counter);
    })
}

question2();