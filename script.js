window.onload = function() {

    //можно динамически задавать число квадратов, время и генерить квадраты скриптом через innerHTML например
    //а вёрстка будет чистая ?
    const gField = document.querySelector('.gameField'),
    squere     = document.querySelectorAll('.squere'),
    score      = document.querySelector('.score'),
    btnPlay    = document.querySelector('.play');

    let start;

    startGame(1000);
    
    function startGame(time) {
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
    // рандомн целое от 0 до max-1
    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    // }
}
    


