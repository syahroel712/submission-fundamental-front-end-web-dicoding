import "../component/sport-list.js";
import "../component/app-jumbo.js";
import "../component/app-foot.js";

function main() {

    const base_url = "https://www.thesportsdb.com/api/v1/json/1/all_sports.php";

    const getSports = () => {
        fetch(base_url)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message)
                } else {
                    renderAllSports(responseJson.sports)
                }
            })
    };

    const renderAllSports = (sports) => {
        const listSport = document.querySelector("sport-list");
        listSport.sports = sports;
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getSports();
    });
}

export default main;