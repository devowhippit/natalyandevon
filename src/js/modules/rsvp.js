'use strict';

import _find from 'lodash-es/find';
import Vue from 'vue/dist/vue.esm';
import GUESTLIST from './guestlist';

class rsvp {

  constructor(settings, data) {

    this._data = data;

    this._settings = settings;

    console.dir(GUESTLIST);

    this._vue = {
      el: '[data-js="rsvp"]',
      data: {
        init: true,
        response: true,
        guest: {
          firstName: '',
          lastName: '',
          guests: false
        },
        guestList: GUESTLIST
      }
    }

  }

  init() {

    Vue.use(VeeValidate, {events: 'blur'});

    this._vue.methods = {
      findGuests: this._findGuests//,
      // validate: this._validate
    };

    this._vue = new Vue(this._vue);

    return this;

  }

  // _validate(event) {
  //   console.dir(event);
  //   this.$validator.validateAll().then((result) => {
  //     if (result) {
  //       // eslint-disable-next-line
  //       // alert('From Submitted!');
  //       return;
  //     }
  //     // alert('Correct them errors!');
  //   });
  // }

  _findGuests() {

    let g = _find(this.guestList, {
      firstName: this.guest.firstName,
      lastName: this.guest.lastName,
    });

    if (typeof g != 'undefined') {
      this.guest.guests = g.guests;
    } else {
      this.guest.guests = false;
    }

  }

}

export default rsvp;