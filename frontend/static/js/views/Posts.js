import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Posts');
  }

  async getHtml() {
    return `<p>
     포스트들
      </p>
      `;
  }
}
