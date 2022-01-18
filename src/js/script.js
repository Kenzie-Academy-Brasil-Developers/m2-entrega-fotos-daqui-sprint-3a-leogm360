import { RouteFlickr } from "../routes/route-flickr.js";
import { Photos } from "../models/handle-photos.js";

const section = document.querySelector(".section");
const containerBackgroud = document.querySelector(".container-background");

function randomTag() {
  const index = Math.floor(Math.random() * 3);

  const tag = ["Pessoas", "Decorações", "Home Office"];

  return tag[index];
}

function inputTag() {
  const tag = document.querySelector(".form__input").value;

  return tag;
}

function listTag(target) {
  const tag = target.textContent;

  return tag;
}

function buildEndPoint(
  latitude = -25.4284,
  longitude = -49.2733,
  tag = randomTag()
) {
  return `https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=629e1b6f8a97b6d63ac339f020a16e97&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=${latitude}&lon=${longitude}&text=${tag}`;
}

function application(tag, callEndPoint) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const endPoint = callEndPoint(latitude, longitude, tag);

        RouteFlickr.get(endPoint).then((response) => {
          Photos.updatePhotos(response.photos.photo);

          Photos.updateImages();
        });
      },
      (error) => {
        const endPoint = callEndPoint();

        RouteFlickr.get(endPoint).then((response) => {
          Photos.updatePhotos(response.photos.photo);

          Photos.updateImages();
        });
      }
    );
  } else {
    const endPoint = callEndPoint();

    RouteFlickr.get(endPoint).then((response) => {
      Photos.updatePhotos(response.photos.photo);

      Photos.updateImages();
    });
  }
}

function switchPhoto(event) {
  const arrow = event.target.firstElementChild;
  const targetName = event.target.tagName;

  if (targetName === "BUTTON" || targetName === "I") {
    arrow.className.includes("fa-chevron-right")
      ? Photos.switchPhotoRight()
      : Photos.switchPhotoLeft();
  }
}

function callApplication(event) {
  const targetName = event.target.tagName;

  if (targetName === "BUTTON") {
    const tag = inputTag();

    application(tag, buildEndPoint);
  } else if (targetName === "LI") {
    const target = event.target;

    const tag = listTag(target);

    application(tag, buildEndPoint);
  }
}

function startPage() {
  const photos = [
    {
      id: "50771299338",
      owner: "26987155@N00",
      secret: "0307001376",
      server: "65535",
      farm: 66,
      title: "Lobo na trilha",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: "44880230604",
      owner: "77140007@N07",
      secret: "32c876f08e",
      server: "1973",
      farm: 2,
      title: "_MG_0570-a-1.jpg",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: "33719196651",
      owner: "31070752@N03",
      secret: "ca9787ccc5",
      server: "3862",
      farm: 4,
      title:
        "Tattoo de homenagem pros 25 cachorros que ela tem! De verdade! Essa pata é da carteira de vacinação de um que já faleceu. #tatuagemcwb #tatuagemcuritiba #tattoocwb2016 #tattoocwb #tattoocuritiba #tattoododia #tattoodog #tatuaje #tattoo #tatuagem #tatuaggi",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: "31730834804",
      owner: "77140007@N07",
      secret: "01a92da8a6",
      server: "265",
      farm: 1,
      title: "_R4A7381-a-1.jpg",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: "27173107541",
      owner: "123565019@N07",
      secret: "c3ce501147",
      server: "7374",
      farm: 8,
      title: "Street Dog",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
  ];

  Photos.updatePhotos(photos);

  Photos.updateImages();
}

startPage();

section.addEventListener("click", switchPhoto);

containerBackgroud.addEventListener("click", callApplication);

/* Flickr API

    Chave: 629e1b6f8a97b6d63ac339f020a16e97;
    Segredo: eb2566f0adf518b4;
*/
