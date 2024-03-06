
let products = document.getElementById('Products');
let dropd = document.querySelector('.section_3');
let arrow = document.querySelector('.fa-solid.fa-play');
dropd.style.display = "none"; // Hide the dropd element initially

products.addEventListener('click', function () {
    dropd.style.display = "block"; // Display the dropd element when Products is clicked
    dropd.style.transition = 'all 0.2s ease-in';
    arrow.style.opacity = 0.4;
    arrow.style.transition = 'all 0.2s ease-in';

});

dropd.addEventListener("mouseleave", function () {
    dropd.style.display = "none"; // Display the dropd element when Products is clicked
    dropd.style.transition = 'all 0.2s ease-in';
    arrow.style.opacity = 1;
    arrow.style.transition = 'all 0.2s ease-in';

});


//search functionality

function myFun() {
    let searchVal = document.getElementById('inp').value.toUpperCase();
    let table = document.querySelector('.table');
    let tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let text = td.innerText || td.textContent;
            if (text.toUpperCase().indexOf(searchVal) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    console.log(searchVal);
}
