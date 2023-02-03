import Application from 'ember-crayons-demo/app';
import config from 'ember-crayons-demo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
