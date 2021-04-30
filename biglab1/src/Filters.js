
function filterFunct (display) {
    switch(display){
        case("All"):
            return;
        case("Important"):
            setTasks( oldTasks => oldTasks.filter( task => task.dateVariant == "danger"));
            break;
        case("Today's"):
            //setTasks( oldTasks => oldTasks.filter( task => isToday(task)));
            break; 
        case("Next week's"):
            //setTasks( oldTasks => oldTasks.filter( task => isNextWeek(task)));
            break; 
        case("Private"):
            setTasks( oldTasks => oldTasks.filter( task => task.icon == true)); 
            break;  
    }
}

/** 
 * Function to check if a date is today. Returns true if the date is today, false otherwise.
 * @param {*} date the javascript Date to be checked
 */
 function isToday(date){
    const comparisonTemplate = 'YYYY-MM-DD';
    const now = DayJS();
    return date.deadline && (date.deadline.format(comparisonTemplate) === now.format(comparisonTemplate));
}

/** 
 * Function to check if a date is yesterday. Returns true if the date is yesterday, false otherwise.
 * @param {*} date the javascript Date to be checked
 */
function isYesterday(date){
    const comparisonTemplate = 'YYYY-MM-DD';
    const yesterday = DayJS().subtract(1, 'day');
    return date.deadline && (date.deadline.format(comparisonTemplate) === yesterday.format(comparisonTemplate));
}

/** 
 * Function to check if a date is tomorrow. Returns true if the date is tomorrow, false otherwise.
 * @param {*} date the javascript Date to be checked
 */
 function isTomorrow(date){
    const comparisonTemplate = 'YYYY-MM-DD';
    const tomorrow = DayJS().add(1, 'day');
    return date.deadline && (date.deadline.format(comparisonTemplate) === tomorrow.format(comparisonTemplate));
}

/**
 * Function to check if a date is in the next week. Returns true if the date is in the next week, false otherwise.
 * @param {*} date the javascript Date to be checked
 */
 function isNextWeek(date){
     const tomorrow = DayJS().add(1, 'day');
     const nextWeek = DayJS().add(7, 'day');
     const ret = date.deadline && ( !date.deadline.isBefore(tomorrow,'day') && !date.deadline.isAfter(nextWeek,'day') );
     console.dir(date.deadline);
     return ret;
 }