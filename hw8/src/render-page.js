import { CONFIG } from './config';

export class RenderPage {
    constructor(search, router) {
        this.search = search;
        this.router = router;
    }
    
    renderHomePage(news) {
        const page = document.querySelector(CONFIG.selectors.homePage);
        const allNews = document.querySelector(CONFIG.selectors.newsListItems);
        [...allNews].forEach((novelty) => {
            novelty.classList.add(CONFIG.hidden);
        });
        [...allNews].forEach((novelty) => {
            news.forEach((item) => {
                if (Number(novelty.dataset.index) === Number(item.id)) {
                    novelty.classList.remove(CONFIG.hidden);
                }
            });
        });
        page.classList.add(CONFIG.visible);
    }

    renderAllNews(data) {
        const list = document.querySelector(CONFIG.selectors.newsList);
        const tptscr = document.querySelector(CONFIG.selectors.newsTemplate).innerHTML;
        const tpt = Handlebars.compile(tptscr);
        list.innerHTML = tpt(data);

        list.querySelectorAll('li').forEach((li) => {
            li.addEventListener('click', (e) => {
                e.preventDefault();
                const index = li.dataset.index;
                window.history.pushState(null, null, `/news/${index}`);
                this.router.render(decodeURI(location.pathname));
            });
        });
    }

    renderSearchPage(news) {
        const page = document.querySelector(CONFIG.selectors.homePage);
        const allNews = document.querySelector(CONFIG.selectors.newsListItems);
        [...allNews].forEach((novelty) => {
            novelty.classList.add(CONFIG.hidden);
        });
        [...allNews].forEach((novelty) => {
            news.forEach((item) => {
                if (Number(novelty.dataset.index) === Number(item.id)) {
                    novelty.classList.remove(CONFIG.hidden);
                }
            });
        });
        page.classList.add(CONFIG.visible);
    }
    renderSearchNews(data) {
        console.log(data)
        const list = document.querySelector(CONFIG.selectors.newsList);
        const tptscr = document.querySelector(CONFIG.selectors.newsTemplate).innerHTML;
        const tpt = Handlebars.compile(tptscr);
        list.innerHTML = tpt(data);

        list.querySelectorAll('li').forEach((li) => {
            li.addEventListener('click', (e) => {
                e.preventDefault();
                const index = li.dataset.index;
                window.history.pushState(null, null, `/news/${index}`);
                this.router.render(decodeURI(location.pathname));
            });
        });
    }

    renderSingleNews(news) {
        const page = document.querySelector(CONFIG.selectors.mainContent);
        const content = document.querySelector(CONFIG.selectors.newsList);
        const index = location.pathname.split('/news/')[1].trim();
        let isFinde = false;
        if (news.length) {
            news.forEach((novelty) => {
                if (Number(novelty.id) === Number(index)) {
                    isFinde = true;
                    const div = document.createElement('div');
                    content.remove();
                    page.append(div);
                    div.innerHTML = `
                    <div class="news page">
                        <div class="overlay">
                            <div class="content">
                                <div class="date" style="padding-top: 30px; padding-left: 150px; font-size: 12px;">${novelty.date}</div>
                                <h3 style="font-size: 25px; margin-top: 0; padding-left: 150px">${novelty.title}</h3>
                                <img src="/${novelty.image.large}" style="max-: 950px; padding-left: 150px" />
                                <p style="max-width: 950px; padding-left: 150px; font-size: 18px;">${novelty.description}</p>
                                <div class="massmedia" style="padding-left: 150px">Источник: ${novelty.massmedia}</div>
                            </div>
                        </div>
                    </div>`
                }
            })
        }
        isFinde ? page.classList.add(CONFIG.visible) : this.render404();

    }
    renderAboutPage() {
        const page = document.querySelector(CONFIG.selectors.mainContent);
        const content = document.querySelector(CONFIG.selectors.homePage);
        const about = document.querySelector(CONFIG.selectors.about);
        
        about.addEventListener('click', e => {
            e.preventDefault();
            content.remove();
            window.history.pushState(null, null, `/about`);
            this.router.render(decodeURI(location.pathname));
            const div = document.createElement('div');
            
            page.append(div);
            div.innerHTML = `
                <div class="about page" style="padding-left:250px">
                    <div class="kursant-table">
                        <div class="kursant-image"><img src="data:image/jpeg;base64,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" style="width:100px"></div>
                            <div class="instructor-info">
                                <div class="instructor-info-inner">
                                    <div class="h4 instructor-info__name">Вадим Коронец</div>
                                    <p class="instructor-info__speciality">Курсант курса: <a href="<a href=" /course/front-end-developer/razrabotka-veb-prilozhenii-na-javascript/">Разработка веб-приложений на JavaScript</a></p>
                            </div>
                        </div>
                    </div>




                    <div class="page-footer-column col-md-4 col-sm-4">
                        <div class="footer-column__header">
                            <small><a href="https://www.grodno.it-academy.by/" title="IT Academy Гродно">Контакты IT Academy Гродно</a></small>
                        </div>
                        <ul class="footer-column-list contact-list ct-pandora-container">
                            <li class="contact-list__item"> <a href="tel:+375152554444">
                                +375 (152) 55-44-44 <small></small> </a> </li>
                            <li class="contact-list__item"> <a href="tel:+375339004444">
                                +375 (33) 900–44–44 <small>MTC</small> </a> </li>
                            <li class="contact-list__item"> <a href="tel:+375447492222">
                                +375 (44) 749–22–22 <small>A1</small> </a> </li>
                        </ul>
                        <div class="location-list">
                            <div>
                                <a class="location-item__link" href="/about/contacts/"> <span class="link-text">ул. М.Горького, 1</span></a>
                            </div>
                        </div>
                        <div class="footer--work-time__block">
                            <div class="footer--work-time">
                                Консультируем с 8:30 до 19:00
                    	    </div>
                            <div>
                                Выходной: суббота и воскресенье
	                        </div>
                        </div>
                    </div>
                </div>`
        })
    }
    
}