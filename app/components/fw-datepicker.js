import Component from '@glimmer/component';
import { FwDatepicker } from '@freshworks/crayons/react';

const noop = () => {};

export default class FwDatepickerComponent extends Component {
  theReactComponent = FwDatepicker;
  value = this.args.value || '02-02-2023';
  format = this.args.format || 'dd-MM-yyyy';
  onChange = this.args.onChange || noop;
  mode = this.args.mode || 'single date';
  readonly = this.args.readonly || "false";
  locale = this.args.locale;
  showFooter = this.args.showFooter || "true";
  clearInput = this.args.clearInput || "false";
}
