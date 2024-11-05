// Array of popular destinations in India
const destinations = [
    {
        name: "Jaipur",
        image: "jaipur.jpg",
        description: "Jaipur, known as the Pink City, is famous for its majestic palaces, forts, and vibrant culture.",
        attractions: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar"],
    },
    {
        name: "Udaipur",
        image: "udaipur.jpg",
        description: "Udaipur, the City of Lakes, is renowned for its stunning lakes and romantic backdrops.",
        attractions: ["City Palace", "Lake Pichola", "Jagdish Mandir", "Saheliyon ki Bari","fathesagar","dudh talai","Ambraighat","gangorghat"],
    },
    {
        name: "Chittorgarh",
        image: "chittorgarh.jpg",
        description: "Chittorgarh is famous for its grand fort, a symbol of Rajput pride and valor.",
        attractions: ["Chittorgarh Fort", "Vijay Stambha", "Rani Padmini's Palace","sawliya seth temple"],
    },
    {
        name: "Agra",
        image: "agra.jpg",
        description: "Agra is home to the iconic Taj Mahal, a UNESCO World Heritage Site and a symbol of love.",
        attractions: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
    },
    {
        name: "Goa",
        image: "goa.webp",
        description: "Goa is famous for its beautiful beaches, vibrant nightlife, and Portuguese heritage.",
        attractions: ["Baga Beach", "Fort Aguada", "Basilica of Bom Jesus"],
    },
    {
        name: "Kerala",
        image: "kerala.jpeg",
        description: "Kerala, known as God's Own Country, is famous for its backwaters, hill stations, and lush greenery.",
        attractions: ["Alleppey Backwaters", "Munnar", "Kochi"],
    },
    {
        name: "Varanasi",
        image: "varanasi.cms",
        description: "Varanasi, one of the oldest cities in the world, is a spiritual center and a hub for Hindu rituals.",
        attractions: ["Ganges River", "Kashi Vishwanath Temple", "Dashashwamedh Ghat"],
    },
    {
        name: "Rajasthan",
        image: "rajasthan.jpg",
        description: "Rajasthan is known for its rich history, vibrant culture, and magnificent forts.",
        attractions: ["Jaisalmer Fort", "Hawa Mahal", "Mehrangarh Fort"],
    },
    {
        name: "Mumbai",
        image: "mumbai.jpg",
        description: "Mumbai is the financial capital of India, known for its bustling streets and Bollywood.",
        attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves"],
    },
    {
        name: "Delhi",
        image: "delhi.webp",
        description: "Delhi, the capital city, is a blend of ancient history and modern architecture.",
        attractions: ["Red Fort", "India Gate", "Qutub Minar"],
    },
    {
        name: "Hampi",
        image: "hampi.webp",
        description: "Hampi is known for its ancient temples and ruins, showcasing the rich history of the Vijayanagara Empire.",
        attractions: ["Virupaksha Temple", "Vijaya Vittala Temple"],
    },
    {
        name: "Leh-Ladakh",
        image: "ladakh.webp",
        description: "Leh-Ladakh is famous for its stunning landscapes, Buddhist monasteries, and adventure sports.",
        attractions: ["Pangong Lake", "Nubra Valley", "Thiksey Monastery"],
    },
    {
        name: "Darjeeling",
        image: "darjeeling.jpg",
        description: "Darjeeling is known for its tea plantations and breathtaking views of the Himalayas.",
        attractions: ["Tiger Hill", "Batasia Loop", "Darjeeling Himalayan Railway"],
    },
    {
        name: "Rishikesh",
        image: "rishikesh.webp",
        description: "Rishikesh is known as the Yoga Capital of the World, situated on the banks of the Ganges River.",
        attractions: ["Triveni Ghat", "Laxman Jhula", "Parmarth Niketan"],
    },
    {
        name: "Andaman Islands",
        image: "andaman islands.webp",
        description: "The Andaman Islands are famous for their pristine beaches, coral reefs, and tropical forests.",
        attractions: ["Havelock Island", "Cellular Jail", "Radhanagar Beach"],
    },
    {
        name: "Ajmer",
        image: "ajmer.jpg",
        description: "Ajmer is known for its rich history and the famous Ajmer Sharif Dargah.",
        attractions: ["Ajmer Sharif Dargah", "Ana Sagar Lake", "Taragarh Fort"],
    },
];

// Function to display destinations
const displayDestinations = (destinationsToDisplay = destinations) => {
    const destinationList = document.getElementById("destination-list");
    destinationList.innerHTML = "";

    destinationsToDisplay.forEach((destination) => {
        const card = document.createElement("div");
        card.className = "card";
        
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <button onclick="toggleAttractions('${destination.name}')">View Attractions</button>
            <div class="attractions hidden" id="attractions-${destination.name}">
                <h4>Famous Attractions:</h4>
                <ul>
                    ${destination.attractions.map(attraction => `<li>${attraction}</li>`).join('')}
                </ul>
            </div>
            <button onclick="addToItinerary('${destination.name}')">Add to Itinerary</button>
        `;
        
        destinationList.appendChild(card);
    });
};


displayDestinations();

const toggleAttractions = (destinationName) => {
    const attractionsDiv = document.getElementById(`attractions-${destinationName}`);
    if (attractionsDiv.classList.contains("hidden")) {
        attractionsDiv.classList.remove("hidden");
    } else {
        attractionsDiv.classList.add("hidden");
    }
};

const itinerary = [];

const addToItinerary = (destinationName) => {
    itinerary.push(destinationName);
    updateItinerary();
};

const updateItinerary = () => {
    const itineraryList = document.getElementById("itinerary-list");
    itineraryList.innerHTML = "";

    itinerary.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        itineraryList.appendChild(listItem);
    });
};

document.getElementById("save-itinerary").addEventListener("click", () => {
    if (itinerary.length === 0) {
        alert("Your itinerary is empty!");
    } else {
        localStorage.setItem("itinerary", JSON.stringify(itinerary));
        alert("Itinerary saved!");
    }
});


document.getElementById("search-button").addEventListener("click", () => {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const filteredDestinations = destinations.filter(destination => 
        destination.name.toLowerCase().includes(searchTerm)
    );
    displayDestinations(filteredDestinations);
});
