import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import { buildDate } from './../src/business.js'


$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    const userMonth = $(".month").val();
    const userDay = $(".day").val();
    const userYear = $(".year").val();
    const translate = buildDate(userYear, userMonth, userDay);
    $("#result").text(translate);
  });
});
