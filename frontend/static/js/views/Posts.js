import AbstractView from './AbstractView.js';
import { request } from '../api.js';
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Posts');
  }
  // async getData() {

  //   console.log('데이터들', lists);
  // }

  async getHtml() {
    const data = await request();
    const lists = data.data.culturalEventInfo.row;
    console.log(data.data);
    return `${lists
      .map(
        (list) => `
    <img src="${list.MAIN_IMG}"/>
    <div>${list.TITLE}</div>`
      )
      .join('')}`;
  }
}
