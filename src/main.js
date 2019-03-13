import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
// import { Date } from './../src/business.js'


$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    const userMonth = $(".month").val();
    console.log(userMonth);
    const userDay = $(".day").val();
    const userYear = $(".year").val();


    const userDate = new Date(`${userDate.month} ${userDate.month}, ${userDate.year}`);
    let day = userDate.getDay();
    console.log(day);
  });
});
