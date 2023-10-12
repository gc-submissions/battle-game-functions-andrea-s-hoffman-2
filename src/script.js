"use strict";

// TODO - write your code here.
const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  //   if (randNum === 0) {
  //     return opt1;
  //   } else {
  //     return opt2;
  //   }
  // ternary:
  return randNum === 0 ? opt1 : opt2;
};

const criticalHit = () => {
  console.log("CRITICAL!!!!");
  return 15;
};

const attackPlayer = function (health) {
  // given number (health)
  // returns number
  const randomHit = randomDamage();
  if (randomHit === 5) {
    return health - criticalHit();
  } else {
    return health - randomDamage();
  }
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

// logHealth("andrea", 70);

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

// logDeath("James", "Andrea");

const isDead = (health) => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
  // ternary operator:
  // return health <= 0 ? true : false;
  // shorthand only bc we're returning a boolean:
  // return health <= 0;
};

// const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      // attacker === player2 implied
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Andrea", "James", 90, 100);

// EXT CHALLENGES
const getGrade = (grade) => {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
  return grade >= 90
    ? "A"
    : grade >= 80
    ? "B"
    : grade >= 70
    ? "C"
    : grade >= 60
    ? "D"
    : "F";
};

console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(55));
console.log(getGrade(-55));

const prioritize = (urgent, important) => {
  // takes 2 booleans, return number
  if (urgent === true && important === true) {
    return 1;
  } else if (important === true && urgent === false) {
    // assume they're not both true, bc first condition failed
    // ... so if we say important is true, implying the other is false
    return 2;
  } else if (urgent === true && important === false) {
    // assume they're not both true, bc first condition failed
    return 3;
  } else {
    // imply both falsy
    return 4;
  }
};

console.log(prioritize(true, true));
console.log(prioritize(false, true));
console.log(prioritize(true, false));
console.log(prioritize(false, false));

const calculatePay = (wage, hours) => {
  if (hours > 40) {
    const overtimeHours = hours - 40;
    const otPay = overtimeHours * wage * 1.5;
    const basePay = wage * 40;
    return basePay + otPay;
  } else {
    return wage * hours;
  }
};

console.log(calculatePay(10, 20));
console.log(calculatePay(10, 40));
console.log(calculatePay(10, 50));
console.log(calculatePay(12, 60));
