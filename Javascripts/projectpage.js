//const tocDiv = document.querySelector('#ToC');
const tocButton = document.querySelector('#ToC button');
const tocContainer = document.querySelector('.dropdown-content');
const descriptionPages = document.querySelectorAll('#description-container div');
const pageHeadings = [];

const imageGallery = $(".page-content img[id]");

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
    });

    flipToPage(0);
});

SetTocLabel(tocContainer.getElementsByTagName('li')[0].innerHTML)

$(function () {
    $(document).scroll(function() {
        var currentId = 0;
        $(imageGallery).each(function(i) {
            console.log(window.scrollY + " | " + $(this).offset().top + " | " + i);
            if(window.scrollY > ($(this).offset().top - 200)) currentId = i;
            else {return false;}
        });

        //window.location.hash = newHash;
        SetTocLabel(pageHeadings[currentId]);
        flipToPage[currentId];
    });
});

function flipToPage(i){
    for (let index = 0; index < descriptionPages.length; index++) {
        if(index == i) descriptionPages[index].style.display = "block";
        else descriptionPages[index].style.display = "none";
    }
}

function SetTocLabel(label)
{
    tocButton.innerHTML = label;

    for (let index = 0; index < pageHeadings.length; index++) {
        if(label == pageHeadings[index])
            flipToPage(index);
    }
}

