
import {template} from './template';

export class AmazingLoading extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this._loadingDivElement = this._shadowRoot.querySelector('#loading');
    }

    showLoading() {
        this._loadingDivElement.style.visibility = 'visible';
    }

    hideLoading() {
        this._loadingDivElement.style.visibility = 'hidden';
    }

}

customElements.define("amazing-loading", AmazingLoading);
