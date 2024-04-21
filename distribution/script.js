
// fetch(API_LINK)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log("This is an error:", error)); // Updated error message format

async function fetching() {
    try {
        const API_KEY = "ae639946af4b474aa78200658241804";
        const API_URL = "http://api.weatherapi.com/v1";
        // const ENDPOINT_HISTORY = "/history.json"
        const ENDPOINT_CURRENT = "/current.json"
        const LOCA = document.querySelector("#searchBar").value.toLowerCase()
        const API_LINK = `${API_URL}${ENDPOINT_CURRENT}?key=${API_KEY}&q=${LOCA}`;
        // const API_LINK_HISTORY = `${API_URL}${ENDPOINT_HISTORY}?key=${API_KEY}&q=${LOCA}`;

        const response = await fetch(API_LINK);
        // const hisRes = await fetch(API_LINK_HISTORY);
        if (!response.ok) {
            // if (!response.ok && hisRes.ok ) {
            throw new Error("ye if wala error hai");
        }

        const data = await response.json();
        // const hisData = await hisRes.json();
        // console.log(hisData);
        console.log(data);
        // Adding location 
        const location = document.querySelector("#place")
        location.innerHTML = `${data.location.name}, ${data.location.region}` 
        // Adding main temperature (in Celsius)
        const tempC = document.querySelector("#temp h1")
        tempC.innerHTML = data.current.temp_c + "°"
        // Adding Weather Condition: 
        const conditions = document.querySelector("#temp h3")
        conditions.innerHTML = data.current.condition.text
        // Adding temp in fahrenheit 
        const tempF = document.querySelector("#farhen h6")
        tempF.innerHTML = data.current.temp_f + "°F"

        // Function to format the date
        function formatDate(dateString) {
            const date = new Date(dateString);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        }

        // Get the localtime from the data and format it
        const localtimeFormatted = formatDate(data.location.localtime);

        console.log(localtimeFormatted);
        const date = document.querySelector("#date")
        date.innerHTML = localtimeFormatted

        // Adding wind Speed: 
        const wind = document.querySelector("#windStatus h6")
        wind.innerHTML = data.current.wind_mph + ` mph`

        // Adding humidity: 
        const humidity = document.querySelector("#humidity h6")
        humidity.innerHTML = data.current.humidity + `%`


    }
    catch {
        console.error("ye catch wala error hai");
    }
}
fetching()