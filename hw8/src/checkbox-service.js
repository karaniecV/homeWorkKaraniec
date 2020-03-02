import { CONFIG } from "./config";
import { Observable } from "./observable";

export class CheckboxService {
    constructor(){
        this._checkbox = document.querySelectorAll(CONFIG.selectors.checkbox);
        this._observable = new Observable();
        this.filters = {};

    }
    subscribe(fn){
        this._observable.subscribe(fn);
    }
}