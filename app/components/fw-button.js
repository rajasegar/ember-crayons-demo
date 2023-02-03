import Component from '@glimmer/component';
import { FwButton } from '@freshworks/crayons/react';

const noop = () => {};
export default class FwButtonComponent extends Component {
  theReactComponent = FwButton;

  color = this.args.color || 'primary';
  size = this.args.size || 'normal';
  children = this.args.children || '';
  onClick = this.args.onClick || noop;
}
