import "./Container.css";
function primaryRequest() {
    const valores = fetch("https://opentdb.com/api.php?amount=30&category=15").then((batata) => {
        batata.json().then((bacon) => {
            console.log(bacon.data);
           });
          });
        };
      primaryRequest();