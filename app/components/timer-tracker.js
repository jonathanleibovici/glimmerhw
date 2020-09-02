import Component from '@glimmer/component';

export default class TimerTrackerComponent extends Component {
date = getDateTime();

}
function getDateTime(){ // to print a function make sure its out of the class
    var today = new Date();
    var date = today.getFullYear()//gets the whole year 
    var month = today.getMonth()+1;//gets the month from 0-11 thats why we add +1
    var getdate= today.getDate();//Get the day as a number (1-31)
    var time = today.getHour()+" "+today.getMinutes()+" "+today.getSeconds();
    var dateTime = date+""+ month + "" + getdate+""+""+time;
    return dateTime;
}//this is javascript here