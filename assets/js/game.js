var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Andy-Roid", "A-Dell"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function() {
    window.alert("WELCOME TO THE JUNGLE " + playerName + "!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? (Skipping incurs a $2 penalty)");

    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

        enemyHealth = enemyHealth - playerAttack;
        console.log(enemyNames[i] + " health is now " + enemyHealth);
        enemyHealth - playerAttack;

        playerHealth = playerHealth - enemyAttack;
        console.log(playerName + " health is now " + playerHealth);
        playerHealth - enemyAttack;

        if (enemyHealth <= 0) {
            window.alert(enemyNames[i] + " is out of commission");
        }
        else {
            window.alert(enemyNames[i] + " has " + enemyHealth + " health remaining.");
        }

        if (playerHealth <= 0) {
            window.alert(playerName + " is straight up, not having a good time... he died.");
        }
        else {
            window.alert(playerName + " has " + playerHealth + " health remaining.");
        }
    }
    else if (promptFight === "skip" || promptFight === "Skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            playerMoney = playerMoney - 2;
            window.alert(playerName + " has decided to skip this fight. Goodbye! " + playerName + " has $" + playerMoney + " remaining.");
            
        }
        else {
            fight();
        }

    }
    else {
        window.alert("Fight or Skip, those are the options, it's not difficult.");
    }

};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
