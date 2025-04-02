const daysOfWeek = [
    'sun', 'mon',
    'tue', 'wed',
    'thu', 'fri',
    'sat'
];

const monthsOfYear = [
    'jan', 'feb', 'mar',
    'apr', 'may', 'jun',
    'jul', 'aug', 'sep',
    'oct', 'nov', 'dec'
];

const $ =(id) => document.getElementById(id);


function clock() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const ampm = h < 11 ? 'AM' : 'PM';
    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    $('hours').innerHTML = zeroPadding(hours);
    $('minutes').innerHTML = zeroPadding(min);
    $('seconds').innerHTML = zeroPadding(sec);
    $('ampm').innerHTML = ampm;
    $(daysOfWeek.at(day -1))
        .classList.remove('active')
    $(daysOfWeek[day])
        .classList.add('active');
    $('year').innerHTML = year;
    $('month').innerHTML = months[month];
    $('day').innerHTML = zeroPadding(date);
}


setInterval(clock, 500);