var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Andy-Roid", "A-Dell"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function() {
    window.alert("WELCOME TO THE JUNGLE " + playerName + "!");

    while(enemyHealth > 0 && playerHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? (Skipping incurs a $10 penalty)");

    if (promptFight === "skip" || promptFight === "Skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to skip and lose your money?");

        if (confirmSkip) {
            playerMoney = playerMoney - 10;
            window.alert(playerName + " has decided to skip this fight. Goodbye! " + playerName + " has $" + playerMoney + " remaining.");
            break;   
        }
        else {
            fight();
        }
    }
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

        enemyHealth = enemyHealth - playerAttack;
        console.log(enemyNames[i] + " health is now " + enemyHealth);
        enemyHealth - playerAttack;

        playerHealth = playerHealth - enemyAttack;
        console.log(playerName + " health is now " + playerHealth);
        playerHealth - enemyAttack;

        if (enemyHealth <= 0) {
            window.alert(enemyNames[i] + " is out of commission");
            break;
        }
        else {
            window.alert(enemyNames[i] + " has " + enemyHealth + " health remaining.");
        }

        if (playerHealth <= 0) {
            window.alert(playerName + " is straight up, not having a good time... he died.");
            break;
        }
        else {
            window.alert(playerName + " has " + playerHealth + " health remaining.");
        }
    }
    
    else {
        window.alert("Fight or Skip, those are the options, it's not difficult.");
    }

};
}

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to The Jungle " + playerName + "! Round " + ( i + 1) );

        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);

     else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
      }
    
}
