import EmberRouter from '@ember/routing/router';
import config from 'ember-crayons-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('datepicker-demo');
  this.route('buttons-demo');
  this.route('ask-freddy');
});
