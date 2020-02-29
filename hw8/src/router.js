import { CONFIG } from "./config";

export class Router {
    constructor() {
        this.routes = {
            '404': () => {
                console.log('Not found');
            },
            'about': () => {
                console.log('about')
            },
            'search': () => {
                console.log('search')
            }
        }
        this.mainContent = document.querySelector(CONFIG.selectors.mainContent);
        window.addEventListener('popstate', e => {
            console.log(e)
            this.render(decodeURI(window.location.pathname))
        })
    }

    addRouter(route, action){
        this.routes[route] = action;
    }

    render(url){
        let temp = url.split('/')[1];
        [...this.mainContent].forEach((page) => {
            page.classList.remove(CONFIG.visible)
        });
        this.routes[temp] ? this.routes[temp]() : this.routes['404']();
    }

}