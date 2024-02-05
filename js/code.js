'use strict';

var blocksDiv = document.querySelectorAll('.block');

var navDiv = document.querySelector('nav');

var li_a = document.querySelectorAll('.navbar li a');

var list_spans = document.querySelectorAll('.list span');

var skillsDiv = document.getElementById('skills');

var testimonials_Divs = document.querySelectorAll('.testimonial');

var contact_me_btn = document.getElementById('contact-me-btn');

var left_test_arrow = document.querySelector('.left-arrow');
var right_test_arrow = document.querySelector('.right-arrow');

contact_me_btn.onclick = ()=>{
    window.scroll({
        top: document.getElementById('contact-me').offsetTop - 50,
        behavior: 'smooth'
      });
}

resizeBlockDivsFun();

window.onresize = ()=>{ resizeBlockDivsFun()};

function resizeBlockDivsFun(){

    blocksDiv.forEach((e)=>{
        e.style.height =  window.innerHeight+'px';
    })

}

li_a.forEach((e)=>{

    e.onclick = (ee)=>{
        ee.preventDefault();
        let eTop    = document.getElementById(e.getAttribute('data-id')).offsetTop - 50;
        window.scroll({
            top: eTop,
            behavior: 'smooth'
          });
        }
})

list_spans.forEach((e)=>{

    // e.onmouseenter = function(){

    //     let selected_i = this.nextElementSibling;
    //     let c = 0;
    //     let x = setInterval(() => {
    //         selected_i.style.width = (c + 1)/3 + "%";
    //         selected_i.style.opacity = c/100;
    //         selected_i.innerHTML = c + "%";
    //         c++;
    //         if(c == 100){clearInterval(x)}
    //     }, 10);

    // }

});

function skillsAnimationFun(){
    let i = 0;
    let y = setInterval(()=>{
        let selected_i = list_spans[i].nextElementSibling;
        let c = 0;
        let x = setInterval(() => {
            selected_i.style.width = (c + 1)/3 + "%";
            selected_i.style.opacity = c/100;
            selected_i.innerHTML = c + "%";
            c++;
            if(c == 100){clearInterval(x)}
        }, 10);
        i++;
        if(i == list_spans.length){clearInterval(y)}
    },200)
}

window.onscroll = function(){
    let windowScrollY = window.scrollY;
    let skillsOffsetTop = skillsDiv.offsetTop;
    if(windowScrollY > skillsOffsetTop - 60){
        skillsAnimationFun();
    }
}

let center_box    = document.querySelector('.testimonial.center');
var center_box_id = eval(center_box.getAttribute('testimonial-id'));
let c = center_box_id;
let mouseEntered = false;

left_test_arrow.onclick = function(){
    if(mouseEntered == false){
        testimonials_Divs.forEach((e)=>{e.setAttribute('class','testimonial')})
        c = (c + 1)%testimonials_Divs.length;
        let l = (c - 1)% testimonials_Divs.length;
        let r = (c + 1)% testimonials_Divs.length;
        if( c == 0){l = testimonials_Divs.length-1}
        if(c == testimonials_Divs.length){c == 0}
        testimonials_Divs[l].setAttribute('class','testimonial left');
        testimonials_Divs[c].setAttribute('class','testimonial center');
        testimonials_Divs[r].setAttribute('class','testimonial right');
    }
    document.querySelector('.testimonial.center').onmouseenter = ()=>{mouseEntered = true};
    document.querySelector('.testimonial.center').onmouseleave = ()=>{mouseEntered = false};
}

right_test_arrow.onclick = function(){
    if(mouseEntered == false){
        testimonials_Divs.forEach((e)=>{e.setAttribute('class','testimonial')})
        c = (c - 1)%testimonials_Divs.length;
        if(c == -1){c = testimonials_Divs.length - 1}
        let r = (c + 1)% testimonials_Divs.length;
        let l = (c - 1)% testimonials_Divs.length;
        if(l == -1){l = testimonials_Divs.length - 1}
        testimonials_Divs[l].setAttribute('class','testimonial left');
        testimonials_Divs[c].setAttribute('class','testimonial center');
        testimonials_Divs[r].setAttribute('class','testimonial right');
    }
    document.querySelector('.testimonial.center').onmouseenter = ()=>{mouseEntered = true};
    document.querySelector('.testimonial.center').onmouseleave = ()=>{mouseEntered = false};
}

function slider(direction,duration){

    let x = setInterval(()=>{
    var c = center_box_id;
    if(direction == "ltr"){
        left_test_arrow.click();
    }
    if(direction == "rtl"){
        right_test_arrow.click();
    }
    },duration)

}
slider("rtl",5000)