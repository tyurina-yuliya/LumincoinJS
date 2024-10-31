// function dropDownMenu() {
//     const dropdownToggle = document.querySelector('.dropdown-toggle');
//
//     if (dropdownToggle) {
//         dropdownToggle.addEventListener('click', function (e) {
//             e.preventDefault();
//             this.classList.toggle('clicked');
//
//             const dropdownMenu = this.nextElementSibling;
//             if (dropdownMenu.style.display === 'block') {
//                 dropdownMenu.style.display = 'none';
//             } else {
//                 dropdownMenu.style.display = 'block';
//             }
//         });
//     }
// }
//
// document.addEventListener('DOMContentLoaded', function() {
//     dropDownMenu();
// });

document.getElementById('menu-toggle').addEventListener('click', function () {
    const sidebar = document.querySelector('.custom-sidebar');
    const menuButton = document.querySelector('.menu-toggle');
    sidebar.classList.toggle('show-sidebar');
    menuButton.classList.toggle('show-sidebar');
});


const ctx1 = document.getElementById('incomeChart');
const ctx2 = document.getElementById('expensesChart');

new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Blue'],
        datasets: [{
            data: [30, 20, 30, 10, 10],
            backgroundColor: [
                'rgb(212,53,69)',
                'rgb(242,122,25)',
                'rgb(245,185,18)',
                'rgb(36,193,147)',
                'rgb(18,107,242)',
            ]
        }]
    }
});


new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Blue'],
        datasets: [{
            data: [30, 20, 30, 10, 10],
            backgroundColor: [
                'rgb(212,53,69)',
                'rgb(242,122,25)',
                'rgb(245,185,18)',
                'rgb(36,193,147)',
                'rgb(18,107,242)',
            ]
        }]
    }
});

