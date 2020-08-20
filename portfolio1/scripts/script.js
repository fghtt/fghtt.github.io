

let scrollImg = setInterval( () => {
    
    if( window.pageYOffset > 800){
        
        let img = document.querySelectorAll( '.image-contacts img' );

        img[0].style.transform = 'translateX(0px)'; 
        img[0].style.opacity = '1'; 

    	clearInterval(scrollImg);
    }



}, 500);

function show_buy( num ){
    
    let buy = document.querySelector('.buy' + num);
	buy.style.opacity = '1';
}

function close_buy( num ){

    let buy = document.querySelector('.buy' + num);
	buy.style.opacity = '0';
}