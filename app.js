const leaugeChamps = document.getElementById("leaugeChamps");
const searchBar = document.getElementById("searchBar");

var response1;

searchBar.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

const loadJsonChamps = async () => {
  var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
          aCallback(anHttpRequest.responseText);
      };
      anHttpRequest.open("GET", aUrl, true);
      anHttpRequest.send(null);
    };
  };
  var theurl = "http://localhost:8081/champions";
  var client = new HttpClient();
  client.get(theurl, function (response) {
    response1 = JSON.parse(response);
    console.log(response1);
  });
};

loadJsonChamps();
