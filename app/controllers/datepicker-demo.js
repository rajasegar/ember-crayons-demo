import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DatepickerDemoController extends Controller {
  @tracked selectedDate;
  @action onDateChange(ev) {
    this.selectedDate = new Date(ev.detail.value).toString();
  }
}
