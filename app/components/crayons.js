import Component from '@ember/component';

import { FwButton } from '@freshworks/crayons/react';
export default Component.extend({
  tagName: '',


   init() {
    this._super(...arguments);
    this.set('theReactComponent',FwButton);
  },


  actions: {
    handleClick() {
      console.log('hello');
    }
  }
});
