import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('DashBoard');
  }

  async getHtml() {
    console.log('에');
    return `<p>
        <a href='/posts' data-link>
          최근 포스트들
        </a>
      </p>
      `;
  }
}
