
// fetch(API_LINK)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log("This is an error:", error)); // Updated error message format

async function fetching(){ 
    try{
        const API_KEY = "ae639946af4b474aa78200658241804";
        const API_URL = "http://api.weatherapi.com/v1"; 
        const ENDPOINT = "/current.json"
        const LOCA = "/" + document.querySelector("#searchBar").value.toLowerCase()
        const API_LINK = `${API_URL}${ENDPOINT}?key=${API_KEY}&q=${LOCA}`; 


        const response = await fetch(API_LINK); 
        if (!response.ok){
            throw new Error("ye if wala error hai");
        }

        const data = await response.json();
        console.log(data);

        
    }
    catch{ 
        console.error("ye catch wala error hai");
    }
}
