function diceRoller(dice, sides) {
let rolls = [];
    for(i = 0; i < dice; i++) {
       let roll = Math.floor(Math.random() * sides) + 1;
        rolls.push(roll);
    }
    return rolls;
}






