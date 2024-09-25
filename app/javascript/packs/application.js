// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery
//= require bootstrap-sprockets
//= require_tree .


import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import './schedule';


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

document.addEventListener("turbolinks:load", () => {
  flatpickr(".datepicker", {
    dateFormat: "Y-m-d", 
  });
});