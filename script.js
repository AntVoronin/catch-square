window.onload = function() {

    const gField = document.querySelector('.gameField'),
          score  = document.querySelector('.score');

    let start, squere;

    //создаём квадраты:
    for(let i=1; i<=9; i++) {
        //gField.innerHTML += `<div class="squere"></div>`;
        gField.insertAdjacentHTML('beforeend', `<div class="squere" id=${i}><img class="bangHide" src="img/bang.png" alt=""></div>` );
    }
    //адаптив для поворота дисплея:
    screen.orientation.onchange = function() {

        let head = document.querySelector('head');
        let rel = `<link rel="stylesheet" href="css/style_orientation.css"></link>`;

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

        let img = document.querySelectorAll('.squere img');

        img.forEach( el=> {
            el.addEventListener('click', function(event) {

                if( this.parentElement.classList.contains('active') ) {

                    this.parentElement.classList.add('hide');

                    //не вышло пока анимировать backgroundImage: //this.style.backgroundImage = 'url("img/bang.png")';
                    this.classList.add('bangShow');

                    hideNum++ ;
                    console.log(hideNum);//как не запускать кучу ф-ций???

                    this.addEventListener('transitionend', function() {
                        this.classList.remove('bangShow');
                    })

                    if( hideNum === 9 ) {
                        let timeGame = ( (new Date() - start)/1000 ).toFixed(1) ;
                        score.querySelector('.statistic').innerHTML += `Ваше время: ${ timeGame }сек <br>`;
                        clearInterval(timer);

                        setTimeout( function() {
                            if( confirm(`Ваше время: ${ timeGame }сек. Сыграем ещё?`) )  startGame(time);
                            }, 600 );
                    }
                }
            })
        } )
    }

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
