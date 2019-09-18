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



    });
