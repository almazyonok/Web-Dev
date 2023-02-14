let date = new Date(2012, 1, 20, 3, 12);

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}

function getLocalDay(date) {
    let day = date.getDay();

    if (day == 0) {
        day = 7;
    }

    return day;
}

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;

    return Math.round(diff / 1000); 
}

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now; 

    return Math.round(diff / 1000); 
}

function formatDate(date) {
    let diff = new Date() - date; 

    if (diff < 1000) { 
        return 'right now';
    }

    let sec = Math.floor(diff / 1000);

    if (sec < 60) {
        return sec + ' sec. ago';
    }

    let min = Math.floor(diff / 60000); 
    if (min < 60) {
        return min + ' min. ago';
    }

    let d = date;
    d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
    ].map(component => component.slice(-2)); 

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}