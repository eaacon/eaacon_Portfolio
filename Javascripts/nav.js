const nav = document.querySelector('.navbar')

const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

hiddenElements.forEach((element) => {
    observer.observe(element)
});

const splash = document.querySelector('#splash');

fetch("/navbar.html")
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data;
})

if(splash != null)
{
    splash.addEventListener('click', () => {
        location.href = '../index.html#projects'
    });
}

function Fullview(ImgLink)
{
    document.getElementById("fullimg").src = ImgLink;
    document.getElementById("modal").style.display = "block";
}

function CloseModal()
{
    document.getElementById("modal").style.display = "none";
}