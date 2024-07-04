window.onload = function() {

    const gField = document.querySelector('.gameField'),
    // squere     = document.querySelectorAll('.squere'),
    score      = document.querySelector('.score');

    let start;

    //создаём квадраты динамически:
    for(let i=1; i<=9; i++) {
        gField.innerHTML += `<div class="squere"></div>`;
        //или так:
        // const divSquere = document.createElement("div");
        //       divSquere.classList.add('squere');
        //       gField.appendChild(divSquere);
    }

    screen.addEventListener("orientationchange", function () {
        console.log("The orientation of the screen is: " + screen.orientation);
        score.querySelector('.statistic').innerHTML += `orientationchange`;
    });

    startGame(1000);
    
    function startGame(time) {
        
        squere = document.querySelectorAll('.squere');
        //восстанавливавем квадратики при следующем запуске:
        squere.forEach( el=> {
            el.classList.remove('hide');
        } );

        start = new Date();
        let hideNum = 0;

        const timer = setInterval(active, time);
        //const timer = setTimeout( function() { setTimeout(active, time) } , time ); 

        squere.forEach( el=> {
            el.addEventListener('click', function(event) {
                if( event.target.classList.contains('active') ) {
                    event.target.classList.add('hide');
                    hideNum++ ;

                    if( hideNum === 9 ) {
                        let timeGame = ( (new Date() - start)/1000 ).toFixed(1) ;
                        score.querySelector('.statistic').innerHTML += `Ваше время: ${ timeGame }сек <br>`;
                        clearInterval(timer);

                        if( confirm("Сыграем ещё?") )  startGame(time);
                    }
                    // let hideNum = document.querySelectorAll('.hide');
                    // if( hideNum.length === 3 ) {
                    // .....
                    // }
                }
            })
        } )
    }
    //btnPlay.addEventListener('click', function() { startGame(1000) } );

    function active() {
        squere.forEach( el=> {
            if( getRand() ) el.classList.add('active');
                        else el.classList.remove('active');
        } )
    }

    function getRand() {
        return Math.round(Math.random());
    }

    // <p style="font-size: 120%; font-family: monospace; color: #cd66cc">Пример текста</p>
    `<style type="text/css">
        body {
            color: red;
            }
    </style>`

}
