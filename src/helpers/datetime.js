export const humanReadableDateTime = (date) => {
    const dateObj = new Date(date);
    let year = '' + dateObj.getFullYear();
    let month = '' + (dateObj.getMonth() + 1);
    if (month.length === 1) {
        month = `0${month}`;
    }
    let day = `${dateObj.getDate()}`;
    if (day.length === 1) {
        day = `0${day}`;
    }
    let hour = `${dateObj.getHours()}`;
    if (hour.length === 1) {
        hour = `0${hour}`;
    }
    let minute = `${dateObj.getMinutes()}`;
    if (minute.length === 1) {
        minute = `0${minute}`;
    }
    let second = `${dateObj.getSeconds()}`;
    if (second.length === 1) {
        second = `0${second}`;
    }
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};