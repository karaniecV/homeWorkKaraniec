import { CONFIG } from "./config";
import { RenderPage } from './render-page';

export class Search {
  constructor(renderPage) {
    this.newsArray = [];
    this.renderPage = renderPage;
  }

  searchMethod(data) { 
    let inputValue;
    let subButton = document.querySelector(CONFIG.selectors.subButton);
    let searchForm = document.querySelector(CONFIG.selectors.form);
    let searchInput = document.querySelector(CONFIG.selectors.input);
    searchInput.addEventListener('input', (e) => {
      e.preventDefault();
      this.newsArray.length = 0;
      inputValue = searchInput.value
      data.forEach((item) => {
        let finde = item.title.search(inputValue);
        if (finde >= 0 && inputValue !== '') {
          this.newsArray.push(item);
          this.renderNews(this.newsArray);
        }
      })
    })
  }
  renderNews(data) {
    this.renderPage.renderSearchNews(data);
    console.log(data)
  }
}

