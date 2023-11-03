const splash = document.querySelector('.splash');
const back = document.querySelector('.back');

if(splash != null)
{
    splash.addEventListener('click', () => {
        location.href = '../frontlines.html';
    });
}
else if(back != null)
{
    back.addEventListener('click', () => {
        console.log('clicked');
        location.href = '../index.html';
    });
}