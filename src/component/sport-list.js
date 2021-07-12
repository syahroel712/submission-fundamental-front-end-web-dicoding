import './sport-item.js';
class SportList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set sports(sports) {
        this._sports = sports;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._sports.forEach(sport => {
            const sportItemElement = document.createElement("sport-item");
            sportItemElement.sport = sport;
            this.shadowDOM.appendChild(sportItemElement);
        })
    }
}

customElements.define("sport-list", SportList);