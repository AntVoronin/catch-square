window.onload = function() {

    const gField = document.querySelector('.gameField'),
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

    screen.orientation.onchange = function() {
        console.log('Ориентация: ' + screen.orientation.type);
        let head = document.querySelector('head');
        
        if( screen.orientation.type == 'landscape-primary' ) {
            let rel = `<link rel="stylesheet" href="style_orientation.css"></link>`;
            head.insertAdjacentHTML("beforeend", rel );
            } else { 
                head.querySelector('link[href="style_orientation.css"]').remove();
            }

        //console.log(head.querySelector('link[href="style_orientation.css"]') );

        // head.querySelector('link[href="style_orientation.css"]').remove();

        //document.querySelector('head').append(`<link rel="stylesheet" href="style_orientation.css"></link>`);
        // document.querySelector('head').innerHTML += `
        //                                 <style>
        //                                 .gameField {
        //                                     width: 315px;
        //                                     height: 350px;}
        //                                 .squere {
        //                                     width: 85px;
        //                                     height: 85px;
        //                                     }
        //                                 .score {
        //                                     min-height: 350px;
        //                                 }
        //                                 .score h4 {
        //                                     color: white;
        //                                 }
        //                                 </style> `
    };

    //наверно можно подгружать м скрипты(медиа) под размер конкретный:
    // switch (screen.orientation.type) {
    //     case "landscape-primary":
    //       console.log("That looks good.");
    //       break;
    //     case "landscape-secondary":
    //       console.log("Mmmh… the screen is upside down!");
    //       break;
    //     case "portrait-secondary":
    //     case "portrait-primary":
    //       console.log("Mmmh… you should rotate your device to landscape");
    //       break;
    //     default:
    //       console.log("The orientation API isn't supported in this browser :(");
    //   }

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
