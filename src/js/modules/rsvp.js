'use strict';

import _find from 'lodash-es/find';
import _map from 'lodash-es/map';
import _uniq from 'lodash-es/uniq';
import Vue from 'vue/dist/vue.esm';
import GUESTLIST from './guestlist';
import MissPlete from './MissPlete.js';

class rsvp {

  constructor(settings, data) {

    this._data = data;

    this._settings = settings;

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
      findName: this._findName,
      findGuests: this._findGuests,
      validate: this._validate
    };

    this._vue = new Vue(this._vue);

    return this;

  }

  _validate(event) {

    this.$validator.validateAll().then((result) => {

      if (result) return result;

      return event.preventDefault();

    });

  }

  _findName(event, key) {

    if (!event.currentTarget._missplete) {
      event.currentTarget._missplete = new MissPlete({
        input: event.currentTarget,
        options: _map( _uniq(
          _map( this.guestList, (i) => i[key] )
        ), (i) => [i]),
        className: 'c-missplete'
      });
    }

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