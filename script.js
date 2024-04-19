const API_KEY = "ae639946af4b474aa78200658241804";
const API_URL = "http://api.weatherapi.com/v1"; 
const LOCA = "/nawada,bihar"
const ENDPOINT = "/current.json"
const API_LINK = `${API_URL}${ENDPOINT}?key=${API_KEY}&q=${LOCA}`
fetch(API_LINK)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log("this is an error" + error))