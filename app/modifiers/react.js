import Modifier from 'ember-modifier';
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

import { Parser } from 'html-to-react';

export default class ReactModifier extends Modifier {
  constructor() {
    super(...arguments);
  }
  didReceiveArguments() {
    if (!this.root) {
      this.root = createRoot(this.element);
    }

    if(this.args.named['children']) {
      const htmlToReactParser = new Parser();
      const children = htmlToReactParser.parse(this.args.named['children']);
      this.root.render(createElement(this.args.positional[0], { ...this.args.named }, children));
    } else {
      this.root.render(createElement(this.args.positional[0], { ...this.args.named }));
    }
  }

  willDestroy() {
    this.root.unmount()	
  }

}
