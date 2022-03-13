require('es6-promise').polyfill();
import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
      const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

      tabs();
      modal('[data-modal]', '.modal', modalTimerId);
      timer('.timer', '2022-05-20');
      cards();
      calculator();
      forms('form', modalTimerId);
      slider({
            container: '.offer__slider',
            slide: '.offer__slide',
            nextArrow: '.offer__slider-next',
            prevArrow: '.offer__slider-prev',
            field: '.offer__slider-inner',
            wrapper: '.offer__slider-wrapper',
            totalCounter: '#total',
            currentCounter: '#current'
      });
});