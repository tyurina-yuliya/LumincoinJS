
export class Main {

    constructor() {
        console.log('На этой странице написать код для ГЛАВНОЙ страницы');

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

    }

}

