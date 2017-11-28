'use strict';

import _find from 'lodash-es/find';
import Vue from 'vue/dist/vue.esm';
import Validator from 'vee-validate';

class rsvp {

  constructor(settings, data) {

    this._data = data;

    this._settings = settings;

    this._vue = {
      el: '[data-js="rsvp"]',
      data: {
        init: true,
        guest: {
          firstName: '',
          lastName: '',
          guests: false
        },
        guestList: [
          {
            firstName: 'Devon',
            lastName: 'Hirth',
            guests: [
              {
                firstName: 'Natalya',
                lastName: 'Krimgold'
              },
              {
                firstName: 'Colin',
                lastName: 'Hirth'
              },
              {
                firstName: 'Barclay',
                lastName: 'Hirth'
              }
            ]
          }
        ]
      }
    }

  }

  init() {

    Vue.use(Validator, {events: 'blur'});

    this._vue.methods = {
      findGuests: this._findGuests
    };

    this._vue = new Vue(this._vue);

    return this;

  }

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