import Component from '@glimmer/component';
import { FwButton } from '@freshworks/crayons/react';
import { action } from '@ember/object';

export default class ExampleComponent extends Component {
  theReactComponent = FwButton;

  @action handleClick() {
    console.log('hello ')
  }
}
