import {HebrewCalendar, HDate, Location, Event, Zmanim} from '@hebcal/core';

const location = Location.lookup("New York");
const today = new HDate();
const month = today.getMonth();
let weekArray = [];
let day = today.subtract(today.getDay()), i = 0;
let d = day.getDay();

// loop to push in the days of the week into the array
while(d < 7){
    weekArray.push({
        weekday : day.add(i).getDay() +1,
        "Hebrew Day" : `${day.add(i).getDate(month)}th of ${day.getMonthName(month)}, ${day.getFullYear()}`,
        'Shma (Gr"a)' : new Zmanim(location, day.add(i)).sofZmanShma().toLocaleTimeString(),
        'Tfila (Gr"a)' : new Zmanim(location, day.add(i)).sofZmanTfilla().toLocaleTimeString(),
});
    d++; i++;
}
console.table(weekArray)