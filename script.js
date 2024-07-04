window.onload = function() {

    const gField = document.querySelector('.gameField'),
          score  = document.querySelector('.score');

    let start;

    //создаём квадраты:
    for(let i=1; i<=9; i++) {
        //gField.innerHTML += `<div class="squere"></div>`;
        gField.insertAdjacentHTML('beforeend', '<div class="squere"></div>');
        //или так:
        // const divSquere = document.createElement("div");
        //       divSquere.classList.add('squere');
        //       gField.appendChild(divSquere);
    }

    screen.orientation.onchange = function() {

        let head = document.querySelector('head');
        let rel = `<link rel="stylesheet" href="style_orientation.css"></link>`;

        //адаптив для поворота экрана смартфона:
        // if( screen.orientation.type == 'landscape-primary' ) {
        //     head.insertAdjacentHTML("beforeend", rel );
        //     } else { 
        //         head.querySelector('link[href="style_orientation.css"]').remove();
        //     }

        //так нагляднее:
        switch (screen.orientation.type) {
            case "landscape-primary":
            head.insertAdjacentHTML("beforeend", rel );
            break;
            // case "landscape-secondary":
            // break;
            // case "portrait-secondary":
            case "portrait-primary":
            head.querySelector('link[href="style_orientation.css"]').remove();
            break;
            default:
            console.log("The orientation API isn't supported in this browser :(");
        }
    };

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

}
