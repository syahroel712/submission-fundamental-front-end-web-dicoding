class AppJumbo extends HTMLElement {

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
                    #jumbo{
                        border: 1px solid #ccc;
                        margin-bottom: 30px;
                        padding: 20px;
                        background-image:url('https://i.imgur.com/WefxcF9.png');
                        background-size: cover;
                    }
                </style>

                <div id="jumbo">
                    <h1 align="center" style="color: white"><b><i>WINNER NEVER QUIT AND QUITTERS NEVER WIN!!!</i></b></h1>
                    <marquee><h3 style="color:white"><i>PUSH HARDER THAN YESTERDAY!!!</i></h3></marquee>
                </div>`;
    }
}

// kemudian definisikan custom element yang dibuat agar bisa digunakan pada DOM
customElements.define("app-jumbo", AppJumbo);