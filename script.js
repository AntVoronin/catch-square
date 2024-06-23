const wrap   = document.querySelector('.wrapper'),
      squere = document.querySelectorAll('.squere');

startGame(500);
//можно динамически задавать число квадратов, время и генерить квадраты скриптом через innerHTML например
//а вёрстка будет чистая

function startGame(time) {
    const start = new Date();
    const timer = setInterval( active, time ); 

    squere.forEach( el=> {
        el.addEventListener('click', function() {
            if( this.classList.contains('active') ) {
                this.classList.add('hide');
                let hideNum = document.querySelectorAll('.hide');
                if( hideNum.length === 9 ) {
                    alert(`Game Over!!! Ваше время ${ ((new Date() - start)/1000).toFixed(2) } сек`);
                    clearInterval(timer);
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
// рандомн целое от 0 до max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }