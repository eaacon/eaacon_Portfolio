const hiddenElements = document.querySelectorAll('.hidden')

$("#splash").on('click', function(){
    $(location).attr('href', '../index.html#projects');
});

    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         console.log(entry)
    //         if(entry.isIntersecting){
    //             entry.target.classList.add('show');
    //         }else{
    //             entry.target.classList.remove('show');
    //         }
    //     });
    // });

    // hiddenElements.forEach((element) => {
    //     observer.observe(element)
    // });