class Photos {
  static photos = [];
  static section = document.querySelector(".section");
  static photoIndex = 0;

  static updatePhotos(arrayPhotos) {
    this.photos = arrayPhotos;
  }

  static updateImages() {
    const photos = this.photos;
    const section = this.section;

    section.innerHTML = "";

    if (this.photos.length === 0) {
      section.innerText = `
      Ops! Nenhum resultado encontrado para sua pesqusia.
      Tente ampliar sua busca.
      `;
    } else {
      photos.forEach(({ id, owner, secret, server, farm, title }, index) => {
        let quadro = "";

        if (index === 0) {
          quadro = `
          <div class = "container-photo">
              <figure class="figure">
                  <div class="container-rectangles flex-row">
                      <span
                      class="container-rectangles__rectangle rectangle--color-primary-50"
                      ></span>
                      <span
                      class="container-rectangles__rectangle rectangle--color-primary-50"
                      ></span>
                      <span class="container-rectangles__rectangle"></span>
                      <span class="container-rectangles__rectangle"></span>
                      <span class="container-rectangles__rectangle"></span>
                      <span class="container-rectangles__rectangle"></span>
                      <span class="container-rectangles__rectangle"></span>
                      <span class="container-rectangles__rectangle"></span>
                      <span
                      class="container-rectangles__rectangle rectangle--color-primary-50"
                      ></span>
                      <span
                      class="container-rectangles__rectangle rectangle--color-primary-50"
                      ></span>
                  </div>
  
                  <img class="figure__image" src="https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg" alt="${title}" />
  
                  <figcaption class="hidden">${title}</figcaption>
              </figure>
  
              <div class="container-information flex-row">
                  <div class="container-header">
                      <span class="container-header__rectangle"></span>
  
                      <h2 class="container-header__title title3">${title}</h2>
  
                      <p class="container-header__paragraph details">
                          Veja no 
                          <a
                          class="container-header__cite"
                          href="https://www.flickr.com/people/${owner}/"
                          title="Photo author profile"
                          >
                              Flickr
                          </a>
                      </p>
                  </div>
  
                  <div class="container-buttons flex-col">
                      <button class="container-buttons__button" type="button">
                          <i class="fas fa-chevron-right"></i>
                      </button>
  
                      <button class="container-buttons__button" type="button">
                          <i class="fas fa-chevron-left"></i>
                      </button>
                  </div>
              </div>
          </div>
          `;
        } else {
          quadro = `
              <div class = "container-photo hidden">
                  <figure class="figure">
                      <div class="container-rectangles flex-row">
                          <span
                          class="container-rectangles__rectangle rectangle--color-primary-50"
                          ></span>
                          <span
                          class="container-rectangles__rectangle rectangle--color-primary-50"
                          ></span>
                          <span class="container-rectangles__rectangle"></span>
                          <span class="container-rectangles__rectangle"></span>
                          <span class="container-rectangles__rectangle"></span>
                          <span class="container-rectangles__rectangle"></span>
                          <span class="container-rectangles__rectangle"></span>
                          <span class="container-rectangles__rectangle"></span>
                          <span
                          class="container-rectangles__rectangle rectangle--color-primary-50"
                          ></span>
                          <span
                          class="container-rectangles__rectangle rectangle--color-primary-50"
                          ></span>
                      </div>
  
                      <img class="figure__image" src="https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg" alt="${title}" />
  
                      <figcaption class="hidden">${title}</figcaption>
                  </figure>
  
                  <div class="container-information flex-row">
                      <div class="container-header">
                          <span class="container-header__rectangle"></span>
  
                          <h2 class="container-header__title title3">${title}</h2>
  
                          <p class="container-header__paragraph details">
                              Veja no 
                              <a
                              class="container-header__cite"
                              href="https://www.flickr.com/people/${owner}/"
                              title="Photo author profile"
                              >
                                  Flickr
                              </a>
                          </p>
                      </div>
                  
                      <div class="container-buttons flex-col">
                          <button class="container-buttons__button" type="button">
                              <i class="fas fa-chevron-right"></i>
                          </button>
  
                          <button class="container-buttons__button" type="button">
                              <i class="fas fa-chevron-left"></i>
                          </button>
                      </div>
                  </div>
              </div>
              `;
        }

        section.innerHTML += quadro;
      });
    }
  }

  static switchPhotoRight() {
    const images = document.querySelectorAll(".container-photo");

    if (this.photoIndex < 4) {
      images[this.photoIndex].classList.toggle("hidden");

      images[this.photoIndex + 1].classList.toggle("hidden");

      this.photoIndex += 1;
    } else {
      images[this.photoIndex].classList.toggle("hidden");

      this.photoIndex = 0;

      images[this.photoIndex].classList.toggle("hidden");
    }
  }

  static switchPhotoLeft() {
    const images = document.querySelectorAll(".container-photo");

    if (this.photoIndex === 0) {
      images[this.photoIndex].classList.toggle("hidden");

      this.photoIndex = 4;

      images[this.photoIndex].classList.toggle("hidden");
    } else {
      images[this.photoIndex].classList.toggle("hidden");

      images[this.photoIndex - 1].classList.toggle("hidden");

      this.photoIndex -= 1;
    }
  }
}

export { Photos };
