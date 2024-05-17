
document.getElementById('s').addEventListener('click', myfun);

function myfun(e) {
    let w = parseFloat(document.getElementById('w').value);
    let h = parseFloat(document.getElementById('h').value);
    let bmi = w / ((h / 100) * (h / 100));
    document.getElementById('bmi').innerHTML = bmi.toFixed(2);

    if (w >= 1 && h >= 1) {
        e.preventDefault();
        if (bmi >= 18.5 && bmi <= 24.9) {
            document.getElementById('result').innerHTML = 'FIT';
        } else if (bmi <= 18.4) {
            document.getElementById('result').innerHTML = 'THIN';
        } else if (bmi >= 25) {
            document.getElementById('result').innerHTML = 'OBESITY';
        }
    } else {
        document.getElementById('result').innerHTML = '';
        document.getElementById('bmi').innerHTML = '';
    }
}