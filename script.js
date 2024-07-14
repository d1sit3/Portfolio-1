;(function burger(){
    let condition = false;
    let start = 0;
    let end = 0;
    let burger = document.querySelector('.menu_small_icon');
    burger.addEventListener('click', function(){
        if(condition==false){
            anime({
                targets:'.body__header',
                top:['-500px', '0'],
                easing:'easeInSine',
                duration:1000,
                loop:false,
            });
            anime({
                targets:'.menu_small_icon',
                rotate:'90deg',
                easing:'easeInSine',
                duration:1000,
                loop:false,
            })
            condition = true;
        }else{
            anime({
                targets:'.body__header',
                top:['0', '-500px'],
                easing:'easeInSine',
                duration:1000,
                loop:false,
            });
            anime({
                targets:'.menu_small_icon',
                rotate:'0deg',
                easing:'easeInSine',
                duration:1000,
                loop:false,
            })
            condition = false;
        }
    })
})();

;(function pairs(){
    let condition = false;
    let btn = document.querySelector('.btn');
    let parent = document.querySelector('.pairs__shoes');
    btn.addEventListener('click', function(){
        if(condition == false){
            condition = true;
            let container = document.createElement('div')
            container.classList.add('shoes__div')
            for(i=0; i<3; i++ ){
                let img = document.createElement('img');
                img.src = 'images/image 2.png';
                img.classList.add('shoes__brand')
                container.appendChild(img)
                
            }
            parent.appendChild(container)
            btn.style.display = 'none'
        }
    })
})();
