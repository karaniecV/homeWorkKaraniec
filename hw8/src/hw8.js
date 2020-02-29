import { CONFIG } from "./config";
import { Router } from "./router";
import { RenderPage } from "./render-page";
import { Search } from './search';



class NewsPage { 
    constructor() {
        this.news = [];
        this.about = [1, 2, 3];
        this.router = new Router();
        this.renderPage = new RenderPage(this.search, this.router);
        this.search = new Search();
        this.init();

    }
    init() {
        fetch(`${CONFIG.api}/news`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.news = data;
                console.log(data);
                this.renderPage.renderAllNews(data);
                this.renderPage.renderAboutPage();
                this.initRouter();
                this.router.render(decodeURI(location.pathname));
                this.search.searchMethod(data);
                this.search.renderNews();
                
            });
        
    }

    initRouter(){
        this.router.addRouter('', this.renderPage.renderHomePage.bind(this.renderPage,
             this.news));
        this.router.addRouter('news', this.renderPage.renderSingleNews.bind(this.renderPage,
             this.news));
        this.router.addRouter('about', this.renderPage.renderAboutPage.bind(this.renderPage));
        this.router.addRouter('search', this.renderPage.renderSearchPage.bind(this.renderPage, this.news));
    }
    
    

}

const newsPage = new NewsPage();
