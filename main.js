'use strict';

const durationShow = document.querySelector('.div__arrow--duration');
const priceShow = document.querySelector('.div__arrow--price');
const modalityShow = document.querySelector('.div__arrow--modality');
const calendarShow = document.querySelector('.div__arrow--calendar');

const collapsableDuration = document.querySelector('#div__duration--open');
const collapsablePrice = document.querySelector('#div__price--open');
const collapsableModality = document.querySelector('#div__modality--open');
const collapsableCalendar = document.querySelector('#div__calendar--open');

function hideDuration () {
  durationShow.classList.remove('div__arrow--collapse');
  collapsableDuration.classList.add('hidden');
}
function hidePrice () {
  priceShow.classList.remove('div__arrow--collapse');
  collapsablePrice.classList.add('hidden');
}
function hideModality () {
  modalityShow.classList.remove('div__arrow--collapse');
  collapsableModality.classList.add('hidden');
}
function hideCalendar () {
  calendarShow.classList.remove('div__arrow--collapse');
  collapsableCalendar.classList.add('hidden');
}

function showDurationInfo(){
  event.preventDefault();
  if (durationShow.classList.contains('div__arrow--collapse')){
    hideDuration();
    hidePrice();
    hideModality();
    hideCalendar();
  } else {
    durationShow.classList.add('div__arrow--collapse');
    collapsableDuration.classList.remove('hidden');
  }
}

function showPriceInfo(){
  event.preventDefault();
  if (priceShow.classList.contains('div__arrow--collapse')){
    hideDuration();
    hidePrice();
    hideModality();
    hideCalendar();
  } else {
    priceShow.classList.add('div__arrow--collapse');
    collapsablePrice.classList.remove('hidden');
  }
}

function showModalityInfo(){
  event.preventDefault();
  if (modalityShow.classList.contains('div__arrow--collapse')){
    hideDuration();
    hidePrice();
    hideModality();
    hideCalendar();
  } else {
    modalityShow.classList.add('div__arrow--collapse')
    collapsableModality.classList.remove('hidden');  
  }
}

function showCalendarInfo(){
  event.preventDefault();
  if (calendarShow.classList.contains('div__arrow--collapse')){
    hideDuration();
    hidePrice();
    hideModality();
    hideCalendar();
  } else {
   calendarShow.classList.add('div__arrow--collapse')
    collapsableCalendar.classList.remove('hidden');  
  }
}



durationShow.addEventListener('click', showDurationInfo);
priceShow.addEventListener('click', showPriceInfo);
modalityShow.addEventListener('click', showModalityInfo);
calendarShow.addEventListener('click', showCalendarInfo);