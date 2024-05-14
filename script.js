import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const offersContainer = document.querySelector(".swiper-wrapper");

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("./data.json");
  const TourOffersData = await response.json();
  const doubledData = TourOffersData.concat(TourOffersData);

  //cardebis dagenerireba
  function showTour(data) {
    offersContainer.innerHTML = "";

    data.forEach((currentIndex) => {
      const tourOfferDiv = document.createElement("div");
      tourOfferDiv.classList.add("swiper-slide");

      const img = document.createElement("img");
      img.src = currentIndex.image;

      const header = document.createElement("h3");
      header.textContent = currentIndex.header;

      const info = document.createElement("p");
      info.textContent = currentIndex.info;

      const price = document.createElement("p");
      price.textContent = currentIndex.price;

      tourOfferDiv.appendChild(img);
      tourOfferDiv.appendChild(header);
      tourOfferDiv.appendChild(info);
      tourOfferDiv.appendChild(price);

      offersContainer.appendChild(tourOfferDiv);
    });
  }

  showTour(doubledData);

  //swiper
  const swiper = new Swiper(".first-swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    breakpoints: {
      601: {
        slidesPerView: 2,
        loop: false,
      },
      1025: {
        slidesPerView: 4,
      },
    },
  });
});
