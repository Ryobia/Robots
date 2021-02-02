var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("WELCOME TO THE JUNGLE " + playerName + "!");

    enemyHealth = enemyHealth - playerAttack;
    console.log("Roborto's health is now " + enemyHealth);
    enemyHealth - playerAttack;

    playerHealth = playerHealth - enemyAttack;
    console.log(playerName + " health is now " + playerHealth);
    playerHealth - enemyAttack;

    if (enemyHealth <= 0) {
        window.alert(enemyName + " is out of commission");
    }
    else {
        window.alert(enemyName + " has " + enemyHealth + " health remaining.");
    }

    if (playerHealth <= 0) {
        window.alert(playerName + " is straight up, not having a good time... he died.");
    }
    else {
        window.alert(playerName + " has " + playerHealth + " health remaining.");
    }


};

fight();

