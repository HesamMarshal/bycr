const storeCards = document.querySelector(".store-cards");

const stores = [
  {
    storeName: "آتلیه باربد",
    imgSrc: "store.png",
    alt: "آتلیه باربد جهرم",
    address: "جهرم بلوار جانبازان",
    tel: "09171913303",
    instagram: "https://www.instagram.com/barbodjahrom",
    telegram: "",
    website: "",
  },
];

const addStores = () => {
  stores.forEach((store) => {
    const storeDiv = document.createElement("div");
    storeDiv.classList.add("store");
    const newStore = `
                    <img src="images/store.png" alt="store template" />
                    <div class="info">
                        <h3>${store.storeName}</h3>
                        <span class="address">${store.address}</span>
                        <span class="tel">${store.tel}</span>
                        <div class="social">
                            <div class="instagram"><a href="${store.instagram}" target="_blank" rel="noopener noreferrer"><img src="./images/instagram-with-circle-svgrepo-com.svg" alt="instagram icon" class="filter-blue"></a></div>
                            <div class="telegram"><a href="${store.telegram}" target="_blank" rel="noopener noreferrer"><i class="fab fa-telegram fa-lg"></i></a></div>
                            <div class="website"><a href="${store.website}" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe fa-lg"></i></a></div>
                        </div>
                    </div>               
                  `;
    storeDiv.innerHTML = newStore;
    storeCards.append(storeDiv);
  });
};

addStores();
