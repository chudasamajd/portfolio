const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click",() => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false")
    {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else if(visibility === "true")
    {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});


// Resume Text Animation
const resume_text = document.querySelector(".resume-text");
resume_text.innerHTML = resume_text.textContent.replace(/\S/g,"<span>$&</span>");

const element = document.querySelectorAll('.resume-text span');
for(let i=0; i<element.length; i++)
{
    element[i].style.transform = "rotate("+i*11.2+"deg)"
}


// Project Section
var $cursor = $(".cursor"),
$overlay = $(".project-overlay");

function moveCircle(e) {
    TweenLite.to($cursor, 0.5, {
        css: {
        left: e.pageX,
        top: e.pageY
        },
        delay: 0.03
    });
}

$(".project-0").hover(function() {
    $(".cursor").css({ "background-image": "url('assets/img/Project 1.jpg')" });
});
$(".project-1").hover(function() {
    $(".cursor").css({ "background-image": "url('assets/img/Project 2.jpg')" });
});
$(".project-2").hover(function() {
    $(".cursor").css({ "background-image": "url('assets/img/Project 3.jpg')" });
});
$(".project-3").hover(function() {
    $(".cursor").css({ "background-image": "url('assets/img/Project 4.jpg')" });
});

var flag = false;
$($overlay).mousemove(function() {
    flag = true;
    TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
    $($overlay).on("mousemove", moveCircle);
});

$($overlay).mouseout(function() {
    flag = false;
    TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});