import dayjs from 'dayjs';
import DayJS from 'react-dayjs';

function getTasks (tasks, filter) {
    console.log(tasks);
    switch(filter){
        case('All'):
            return tasks;
        case('Important'):
            return tasks.filter(task => task.important === 'true' || task.important === true);
        case('Private'):
            return tasks.filter(task => task.private === 'true' || task.private === true);
        case("Today's"):
            return tasks.filter(task => isToday(task));
        case("Next week's"):
            return tasks.filter(task => isNextWeek(task));
        default:
            return tasks.filter(task => task.description.includes(filter));
    }
}

/* 
 * Function to check if a date is today. Returns true if the date is today, false otherwise.
 * @param {*} date the javascript Date to be checked
 */
 function isToday(date){
    const comparisonTemplate = 'YYYY-MM-DD';
    const now = dayjs();
    return dayjs(date.deadline) && (dayjs(date.deadline).format(comparisonTemplate) === now.format(comparisonTemplate)) 
}

/*
 * Function to check if a date is in the next week. Returns true if the date is in the next week, false otherwise.
 * @param {*} date the javascript Date to be checked
*/
function isNextWeek(date){
    const tomorrow = dayjs().add(1, 'day');
    const nextWeek = dayjs().add(7, 'day');
    const ret = dayjs(date.deadline) && ( !dayjs(date.deadline).isBefore(tomorrow,'day') && !dayjs(date.deadline).isAfter(nextWeek,'day') );
    //console.dir(dayjs(date.deadline));
    return ret;
}

/*
 * Function to check if a date is yesterday. Returns true if the date is yesterday, false otherwise.
 * @param {*} date the javascript Date to be checked
 
function isYesterday(date){
    const comparisonTemplate = 'YYYY-MM-DD';
    const yesterday = DayJS().subtract(1, 'day');
    return date.deadline && (date.deadline.format(comparisonTemplate) === yesterday.format(comparisonTemplate));
}*/

/*
 * Function to check if a date is tomorrow. Returns true if the date is tomorrow, false otherwise.
 * @param {*} date the javascript Date to be checked
 
 function isTomorrow(date){
    const comparisonTemplate = 'YYYY-MM-DD';
    const tomorrow = DayJS().add(1, 'day');
    return date.deadline && (date.deadline.format(comparisonTemplate) === tomorrow.format(comparisonTemplate));
}*/

 export default getTasks;