window.onload = function (){
    
    var status = document.getElementById("status")

    var game = document.getElementById("game")

    var start = document.getElementById("start")

    var boundary = document.getElementsByClassName("boundary")

    var end = document.getElementById("end")

    var game_start = false

    var counter = 0


    start.addEventListener("mouseover", function(){
        status.innerHTML = "the game has begun"
        var game_start = true

        for (var i=0; i<boundary.length ; i++) { 
             boundary[i].addEventListener("mouseover", function(){
                 for (let i = 0; i < boundary.length; i++) {
                    boundary[i].classList.add('youlose')
                 }
                 
                 
                })
             }

    })    





        start.addEventListener('click', function(){
            counter -=10;
            for (let i = 0; i < boundary.length; i++) {
                boundary[i].classList.remove('youlose')
            }

            status.innerHTML = "The game has reset"
            var game_start=false
        })
        



    if (game_start == true)
    end.addEventListener('mouseover', function ( ) {
        for (let i = 0; i < boundary.length; i++) {
            boundary[i].classList.remove('youlose')
        }
        status.innerHTML = "You Won !"
    })





}
