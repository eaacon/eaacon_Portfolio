const pageLabel = document.querySelector('#ToC button');
const tocContainer = document.querySelector('.dropdown-content');
const descriptionPages = document.querySelectorAll('#description-container div');
const pageHeadings = [];

const imageGallery = $(".page-content img[id]");

$("#ToC").on("click", function(){
    var workingLabel = pageLabel.innerHTML;
    workingLabel = workingLabel.slice(0, -1);

    var ddContent = document.querySelector('.grid-drop')
    if(ddContent.style.gridTemplateRows == "0fr")
    {
        pageLabel.innerHTML = workingLabel + " -";
        ddContent.style.gridTemplateRows = "1fr"
    }else{
        pageLabel.innerHTML = workingLabel + " +";
        ddContent.style.gridTemplateRows = "0fr"
    }
});

$(imageGallery).each(function(i) {
    //add id to headings array
    pageHeadings.push($(this).attr('id'));

    //create table of contents list item, set the text, and add to div container
    var tocItem = document.createElement('li');
    tocItem.innerHTML = $(this).attr('id');
    tocItem.style.width = "100%";

    tocContainer.appendChild(tocItem);

    //make table of contents items clickable
    tocItem.addEventListener('click', () =>{
        location.href = '#'+tocItem.innerHTML
    });

    $(tocItem).hover(function(){
        tocItem.style.padding = "0.3rem 0";
    }, function(){
        tocItem.style.padding = "0 0";
    });
});

//set initial label and description
FlipToPage(0);
SetPageLabel(pageHeadings[0]);

//check scroll position, update description + label
$(function () {
    $(document).scroll(function() {
        var currentId = 0;
        $(imageGallery).each(function(i) {
            if(window.scrollY > ($(this).offset().top - 300)) currentId = i;
            else {return false;}
        });

        SetPageLabel(pageHeadings[currentId]);
        FlipToPage[currentId];
    });
});

//function for setting the name of the page/chapter we are on (i.e. Intro, Concept, Turnarounds, Sketches)
function SetPageLabel(label)
{
    pageLabel.innerHTML = label + " +";

    for (let index = 0; index < pageHeadings.length; index++) {
        if(label == pageHeadings[index])
            FlipToPage(index);
    }
}

//function for "flipping" the textbox page to match label
function FlipToPage(i){
    for (let index = 0; index < descriptionPages.length; index++) {
        if(index == i) descriptionPages[index].style.display = "block";
        else descriptionPages[index].style.display = "none";
    }
}


