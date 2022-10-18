//Get all dropdowns from document
const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdown elements
dropdowns.forEach(dropdown => {
    //Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    /*
    We are using this method in order for multiple dropdowns to work
    */

    //Add a click event to select element
    select.addEventListener('click', () => {
        //Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        //Add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        //Add a click event to the option element
        option.addEventListener('click', () => {
            //Add rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //Add the open styles to the menu element
            //Remove active class from all option elements
            options.forEach(option => {
                menu.classList.remove('menu-open');
                option.classList.remove('active');
            });
            //Add active class to clicked option element 
            option.classList.add('active');
        });
    });
});