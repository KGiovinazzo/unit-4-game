var attack;
var defend;
var attackChar;
var attackerHP;
var attackerAP;
var attackerCAP;
var defendChar;
var defenderHP;
var defenderAP;
var defenderCAP;
var name;
var yourChar;
var yourDefend;
var myChar = "";
var myDefend = "";

function reset() {
    $("#photos").show();
    $(".restart").hide();
    $(".attackBtn").show();

}

var myChar = "";
var myDefend = "";

// reset health points.
characters.kirby.healthPts = 100;
characters.groot.healthPts = 150;
characters.pikachu.healthPts = 120;
characters.louise.healthPts = 160

// reset attack power.
characters.kirby.attackPwr = 10;
characters.groot.attackPwr = 20;
characters.pikachu.attackPwr = 15;
characters.louise.attackPwr = 25;

// delete all in-game text.
$(".youAttacked").empty();
$(".attackedBack").empty();
$(".youDefeated").empty();
$(".youWon").empty();
$(".youLose").empty();
$(".noEnemy").empty();

//adding the picture for each character so they show up on the page.
$("#kirby").appendTo("#photos");
$("#groot").appendTo("#photos");
$("#pikachu").appendTo("#photos");
$("#louise").appendTo("#photos");

//writing each characters healthpoints to the html so they show up on the page.
$("#kirby").html(characters.kirby.healthPts);
$('#groot').html(characters.groot.healthPts);
$('#pikachu').html(characters.pikachu.healthPts);
$('#louise').html(characters.louise.healthPts);

var characters = {

    kirby: {
        name: "kirby",
        visual: "assets/images/kirby.png",
        healthPts: 100,
        attackPwr: 10,
        counterAttackPwr: 25,
    },

    groot: {
        name: "groot",
        visual: "assets/images/groot.png",
        healthPts: 150,
        attackPwr: 20,
        counterAttackPwr: 30,
    },

    pikachu: {
        name: "pikachu",
        visual: "assets/images/pikachu.png",
        healthPts: 120,
        attackPwr: 15,
        counterAttackPwr: 20,
    },

    louise: {
        name: "louise",
        visual: "assets/images/louise.png",
        healthPts: 160,
        attackPwr: 25,
        counterAttackPwr: 35,
    },
};

$(document).ready(function () {
    reset();

    $(".firstRow").click(function () {

        if (myChar == "") {
            console.log(this);
            $(this).appendTo("#yourChar");
            myChar = $(this);
            yourChar = $(myChar).attr("value");
        }

        if (yourChar == characters.kirby.name) {
            attackerHP = characters.kirby.healthPts;
            attackerAP = characters.kirby.attackPwr;
            attackerCAP = characters.kirby.counterAttackPwr;
            attack = characters.kirby;
        }

        else if (yourChar == characters.groot.name) {
            attackerHP = characters.groot.healthPts;
            attackerAP = characters.groot.attackPwr;
            attackerCAP = characters.groot.counterAttackPwr;
            attack = characters.groot;

        }

        else if (yourChar == characters.pikachu.name) {
            attackerHP = characters.pikachu.healthPts;
            attackerAP = characters.pikachu.attackPwr;
            attackerCAP = characters.pikachu.counterAttackPwr;
            attack = characters.pikachu;
        }

        else if (yourChar == characters.louise.name) {
            attackerHP = characters.louise.healthPts;
            attackerAP = characters.louise.attackPwr;
            attackerCAP = characters.louise.counterAttackPwr;
            attack = characters.louise;
        }

        for (var i = 0; i < 4; i++) {
            $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);
        }

        // Clears characters from the top
        $("#photos").hide();

    })

});

// When the player chooses their characters, the game then moves that character into the defender HTMLTableSectionElement. Then, the remainder stay in the top.

$(".move").click(function(){
    $(this).appendTo("#defender");
    myDefend = $(this);
    yourDefend = $(myDefend).chilren().attr("value");
    $(".youDefeated").empty();

    if(yourDefend == characters.kirby.name) {
        defenderHP = characters.kirby.healthPts;
        defenderAP = characters.kirby.attackPwr;
        defenderCAP = characters.kirby.counterAttackPwr;
        defend = characters.kirby;
    }

    else if(yourDefend == characters.groot.name) {
        defenderHP = characters.groot.healthPts;
        defenderAP = characters.groot.attackPwr;
        defenderCAP = characters.groot.counterAttackPwr;
        defend = characters.groot;
    }

    else if(yourDefend == characters.pikachu.name) {
        defenderHP = characters.pikachu.healthPts;
        defenderAP = characters.pikachu.attackPwr;
        defenderCAP = characters.pikachu.counterAttackPwr;
        defend = characters.pikachu;
    }

    else if(yourDefend == characters.louise.name) {
        defenderHP = characters.louise.healthPts;
        defenderAP = characters.louise.attackPwr;
        defenderCAP = characters.louise.counterAttackPwr;
        defend = characters.louise;
    }


});

//when the user clicks attack, your character's helth points go down based on the counter attack. 

$(".attackBtn").click(function(){
    // if ($("#defender").children().length == 0) {
    //     $(".noEnemy").html("No enemy here.");
    // }

    if (!(attackerHP < 1) || !(defenderHP < 1)) {
        attackerHP = (attackerHP - defenderCAP);

    }
})