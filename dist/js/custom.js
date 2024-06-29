
//alphabets
document.querySelectorAll('.input-text').forEach(function(element){
    element.addEventListener('input',function(){
        this.value = this.value.replace(/[^A-Z a-z]/g,'').trimStart();
    });
});
//numbers
document.querySelectorAll('.input-number').forEach(function(element){
    element.addEventListener('input',function(){
        this.value = this.value.replace(/[^0-9]/g,'').trimStart();
    });
});
//email
document.querySelectorAll('.input-email').forEach(function(element){
    element.addEventListener('input',function(){
        var value = this.value.replace(/\.\./g, ".");
        //remove .@
        value = value.replace(/\.@/g,"@");
        //remove extra chars
        value = value.replace(/[^A-Z a-z0-9.@_-]/g,'');
        //multiple @
        value = value.replace(/\@@/g,"@");
        
        //remove whitespace from start
        this.value = value.trimStart();
    });
    //remove . from the end
    element.addEventListener('change',function(){
        value = this.value;
        if( value[value.length-1] == '.'){
            value = value.substring(0,value.length-1)
        }        
        //remove whitespace from start
        this.value = value.trimStart()
    });
});

document.querySelectorAll('.contactUsForm').forEach(function(element){
    element.addEventListener('submit',function(e){
        e.preventDefault();
        const formData = new FormData(this);
        sendMessage(e,formData,element)
    })
});
async function sendMessage(element,formData,parent){

    const submit = element.target.submit;
    submit.innerHTML = 'Please Wait...';
    submit.setAttribute('disabled',1);
    
    const query = await fetch('#');
    const response = await query.text();
    submit.innerHTML = 'Send';
    
    parent.querySelectorAll('.response').forEach(function(e){
        if(response){
            e.innerHTML = '<div class="alert alert-success small mt-3">Thank you! Your message has been sent.</div>'
        }else{
            e.innerHTML = '<div class="alert alert-danger small mt-3">There was error in sending your message, Please try again later</div>'
            submit.removeAttribute('disabled');
        }    
    })
}
$('.testimonial-carousel').owlCarousel({
    loop:false,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true,
        },
        600:{
            items:1,
            nav:false,
            dots:true,
        },
        1000:{
            items:1,
            nav:false,
            dots:true,
        }
    }
});
$('.whyUsCarousel').owlCarousel({
    loop:false,
    margin:30,
    responsiveClass:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            dots:true,
        },
        600:{
            items:1,
            dots:true,
        },
        1000:{
            items:1,
            dots:true,
        }
    }
});
$('.award-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
$('.stepCarousel,.projectCarousel').owlCarousel({
    loop:false,
    margin:10,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            dots:true,
        },
        600:{
            items:3,
            dots:true,
        },
        1000:{
            items:5,
            dots:true,
        }
    }
});

$('.portfolioCarousel').owlCarousel({
    loop:false,
    margin:10,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            dots:true,
        },
        600:{
            items:3,
            dots:true,
        },
        1000:{
            items:3,
            dots:true,
        }
    }
});

/*
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  //>=, not <=
  if (scroll >= 300) {
      //clearHeader, not clearheader - caps H
      $("header nav").addClass("nav-light");
      $("header nav").removeClass("nav-dark");
  }else{
    $("header nav").addClass("nav-dark");
    $("header nav").removeClass("nav-light");
  }
});
*/