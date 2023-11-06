const splash = document.querySelector('.splash');
const back = document.querySelector('.back');

if(splash != null)
{
    splash.addEventListener('click', () => {
        location.href = '../illustration.html';
    });
}
else if(back != null)
{
    back.addEventListener('click', () => {
        console.log('clicked');
        location.href = '../index.html';
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