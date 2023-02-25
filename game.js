window.onload = function (){
    
    var status = document.getElementById("status")
    var game = document.getElementById("game")
    var start = document.getElementById("start")
    var boundary = document.getElementsByClassName("boundary")
    var end = document.getElementById("end")
    var counting = document.getElementById('counter')

    var game_started = false
    var game_finished = false

    var score = 0
    // starting the game
    start.addEventListener('mouseenter', start_the_game)
    function start_the_game() {
        status.innerHTML = "the game has begun";
        game_started = true;
        // game_finished = false;
        console.log(game_started)
        }
        

 
    // loosing the game
    for (let i=0; i<boundary.length; i++) {
    boundary[i].addEventListener("mouseover", you_lose)
    }
    function you_lose() {
    if (game_started && !game_finished) {
            for (let i=0; i<boundary.length; i++) {
        boundary[i].classList.add('youlose');

    }   
    status.innerHTML = "you lose";
    score -=10
    counting.innerHTML = "Counter " + score
    game_finished=false

    
    }
    else if (game_started && game_finished==true ) {
        for (let i=0; i<boundary.length; i++) {
            boundary[i].classList.remove('youlose');
        } 
        status.innerHTML = "You already won !"
    }
    }
    

    // outisde the box
    game.addEventListener('mouseleave', outside_the_box)
    function outside_the_box(){ 
    for (let i=0; i<game.length; i++) {
        game[i].classList.add('youlose');
    }
    status.innerHTML = "Stick to the box"
}

    // ending the game (win)
//     end.addEventListener('mouseover', end_the_game)
      
//     function end_the_game() {
//         if (game_started ==true  && game_finished == false) {
//         status.innerHTML = "The game has ended. Please restart"
//         game_finished=true;
//     }
// }


    // restarting the game
    start.addEventListener("click", restarting) 
    function restarting () {
        for (let i=0; i<boundary.length; i++) {
            boundary[i].classList.remove('youlose');
        } 
        status.innerHTML = "the game has restarted"
        counting = 0
        game_finished=false
    }

    //ending the game 

    end.addEventListener("mouseover", end_the_game)
    function end_the_game() {
        if (game_started == true && game_finished ==false ) {
            status.innerHTML = " YOU win ! go back to S to continue"
                // i need to reset all the previous functions and addeventlisteners 
        game_finished = true;
    }
    score +=5
    counting.innerHTML = "Counter " + score

}
}
