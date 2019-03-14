import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import { numToDays } from './../src/business.js'


$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    const userMonth = $(".month").val();
    const userDay = $(".day").val();
    const userYear = $(".year").val();

    const userDate = new Date(userYear, userMonth, userDay);
    let day = userDate.getDay();
    let translate = numToDays(day);
    $("#result").text(translate);
  });
});
