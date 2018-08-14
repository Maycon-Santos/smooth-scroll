window.addEventListener('load', e => {
    
    const $smoothScrolls = document.querySelectorAll('[smooth-scroll]');

    const dSpeed = 0.5;
    const dFriction = 1;
    const dSteps = 5;

    for(let i = 0, l = $smoothScrolls.length; i < l; i++){

        const target = $smoothScrolls[i];

        let scrollingNow = false;

        let speed = 0;
        let friction = 0;
        let steps = dSteps;

        target.addEventListener('wheel', e => {

            e.preventDefault();

            const direction = e.deltaY / Math.abs(e.deltaY);

            //if((direction > 0 && speed < dSpeed * 3) || (direction < 0 && speed > dSpeed * -3))
                speed += dSpeed * direction;

            console.log(speed);
            friction = dFriction / 80;

            let start = performance.now();

            if(!scrollingNow) requestAnimationFrame(function scroll(time){

                scrollingNow = true;

                let deltaTime = (time - start) / 1000;
                deltaTime = Math.min(1, deltaTime);

                //let progress = deltaTime * speed;

                cacheScrollTop = target.scrollTop;

                target.scrollBy(0, speed * steps);

                steps -= steps * friction;

                if(~~steps > 0 && cacheScrollTop != target.scrollTop && target.scrollTop > 0)
                    requestAnimationFrame(scroll);
                else {
                    scrollingNow = false;
                    steps = dSteps;
                    speed = 0;
                }

            });

        });

    }

});
//# sourceMappingURL=smooth-scroll.js.map
