import Component from '@glimmer/component';

export default class TimerTrackerComponent extends Component {
 date = getDateTime();
  //refresh button 
  
  //do the time manually 
  //and the extra credit 
  //use actions @tracked?
}



function getDateTime() { // to print a function make sure its out of the class
    const now = new Date();//this is to make a new date and time

    const d = []//this is an array of objects

    d.push({timezone_label: "New York", time: dateFormat(now)});
    // d . push pushes to the array timzone label is a just a lable for the timesozne
   //time is a property of an object stored in d. each object has a timezone_label and a time 
    // dateFormat(now) is passing in what the curretn time is
    now.setHours(now.getHours() + 7) + now.getMinutes()+1
    // now is the current date and time 
    //sethours() is creating the hours setting it 7 hourse ahead for israel
    // d . push pushes to the array timzone label is a just a lable for the timesozne
    d.push({timezone_label: "Israel", time: dateFormat(now)})

    return d//just returning the objects
}
//if (MyDate.getDate <10)get.Date = '0' + getDate;d.getHours() > 11 ? "PM" : "AM"
const dateFormat = d => `${d.toDateString()} ${get12HourFormat(d)}:${String(d.getMinutes()).padStart(2,"0")}:${d.getSeconds()}.${d.getMilliseconds()} ${d.getHours() > 11 ? "PM" : "AM"}`
//this is just a way of formating  taking in the object d
//toDateString is returning the date 
//get12hourformat takes the object d  returns the formated hour so instead of turning 13 it will return 1 am 
//

// get12HourFormat returns a 12 hour format instead of 24 hour format
const get12HourFormat = d => d.getHours() > 12 ? Math.abs(d.getHours() - 12) : d.getHours()
//this is a 24 hours so instead of getting 13 it will return 1 for 1 PM 