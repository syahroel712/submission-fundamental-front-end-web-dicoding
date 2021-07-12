class AppFoot extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();

    }
    render() {
        this.shadowDOM.innerHTML = `
                <style>
                    #footer {
                        border: 1px;
                        padding: 2px;
                        background-image: url('https://i.imgur.com/WefxcF9.png');
                        background-size: cover;
                        bottom: 0px;
                        left: 0px;
                        right: 0px;
                        margin-bottom: 0px;
                        margin-top: 10px;
                    }
                </style>
                <div id="footer">
                    <h4 align="center" style="color: white"><b><i>Syahrul || 2020</i></b></h4>
                </div>`;
    }
}

customElements.define("app-foot", AppFoot);