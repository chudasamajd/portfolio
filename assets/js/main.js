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


