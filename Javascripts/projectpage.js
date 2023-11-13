//const tocDiv = document.querySelector('#ToC');
const tocButton = document.querySelector('#ToC button');
const tocContainer = document.querySelector('.dropdown-content');
const descriptionPages = document.querySelectorAll('#description-container div')
const pageHeadings = [];

descriptionPages.forEach(element => {
    var e = element.getElementsByTagName('h2')[0];
    pageHeadings.push(e.innerHTML);

    //e.setAttribute('id', e.innerHTML)
    var tocItem = document.createElement('li')
    tocItem.innerHTML = e.innerHTML
    tocItem.style.width = "100%";

    tocContainer.appendChild(tocItem)

    tocItem.addEventListener('click', () =>{
        location.href = '#'+tocItem.innerHTML
        SetTocLabel(tocItem.innerHTML)
    });

    flipToPage(0);
});

function flipToPage(i){
    for (let index = 0; index < descriptionPages.length; index++) {
        if(index == i) descriptionPages[index].style.display = "block";
        else descriptionPages[index].style.display = "none";
    }
}
SetTocLabel(tocContainer.getElementsByTagName('li')[0].innerHTML)

function SetTocLabel(label)
{
    tocButton.innerHTML = label;

    for (let index = 0; index < pageHeadings.length; index++) {
        if(label == pageHeadings[index])
            flipToPage(index);
    }
}

