class SportItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        })
    }

    set sport(sport) {
        this._sport = sport;
        this.render();

    }
    render() {
        this.shadowDOM.innerHTML = `
            <style>
            .card {
                max-width: 255px;
                max-height: 180p;
                margin-bottom: 10px;
                display: flex;
                border: 1px solid #F5F5F5;
                float: left;
                margin-right: 20px;
                border-radius: 5px;
                box-shadow:0 0 10px rgba(0,0,0,.1);
            }
            .card-body {
                margin: 0 auto;
                text-align: center;
                padding: 20px;
            }

            </style>
           
                <div class="card">
                    <div class="card-body">
                        <img src="${this._sport.strSportThumb}" alt="" style="width:220px; height: 200px">
                        <hr>
                        <h4>${this._sport.strSport}</h4>
                        <p><i>${this._sport.strFormat}</i></p>
                    </div>
                </div>
                `;
    }
}

customElements.define("sport-item", SportItem);