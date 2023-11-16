const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
const circles = document.querySelectorAll('.step');
const progress = document.querySelector('.progress');
let currentActive = 1;

prev.addEventListener('click', function(){
    currentActive--;
    if(currentActive <= 1){
        currentActive = 1;
    }
    update();

})
next.addEventListener('click', function(){
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
})

function update(){
    circles.forEach(function(circle, index){
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
        
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length-1)/(circles.length-1))*100+'%'

    if(currentActive === 1){
        prev.disabled = true; //same as prev.setAttribute('disabled', true)
    }else if(currentActive === circles.length){
        next.setAttribute('disabled', true);
    }else{
        prev.removeAttribute('disabled');
        next.removeAttribute('disabled');
    }
}