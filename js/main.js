document.addEventListener("DOMContentLoaded", () => {
    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        breakpoints: {
            800: {
                perView: 1
            },
            480: {
                perView: 1
            }
        }
    })
    glide.mount();

    const modalEl = document.querySelector(".modal");
    const btnsOpen = document.querySelectorAll('.popup__open');
    for (let btnOpen of btnsOpen) {
        btnOpen.addEventListener("click", () => {
            const popupName = btnOpen.getAttribute('data-popup');
            let html = "";
            switch(popupName) {
                case "DSG": {
                   html = `<div class="overlay data-popup="DSG">
                   <div class="popup">
                       <div class="popup__close"></div>
                       <div class="popup__top">
                           <h2 class="title title_popup">DSG / S TRONIC</h2>
                           <div class="popup__content">
                           <div class="popup__column">
                               <h3 class="subtitle subtitle_popup">Dq200
                               </h3>
                               <h3 class="subtitle subtitle_popup">Dq250
                               </h3>
                               <h3 class="subtitle subtitle_popup">Dq500
                               </h3>
                           </div>
                           <div class="popup__column">
                               <h3 class="subtitle subtitle_popup">  Dl501
                           </h3>
                               <h3 class="subtitle subtitle_popup"> Dq381
                               </h3>
                               <h3 class="subtitle subtitle_popup"> Dl382
                               </h3></div>
                           <div class="popup__column">
                           <h3 class="subtitle subtitle_popup"> Pdk
                           </h3>
                           </div>
                           </div>
               
                       </div>
                       <div class="popup__bottom">
                           <h3 class="subtitle subtitle_popup-black">ОСТАВЬ ЗАЯВКУ И ПОЛУЧИ СКИДКУ</h3>
                       <form class="popup__form">
                           <input class="input popup__name" type="text" placeholder="Имя">
                           <input class="input popup__phone" type="text" placeholder="Ваш телефон">
                           <button class="btn popup__btn" type="submit">Получить скидку</button>
                       </form>
                       </div>
                   </div>
               </div>`
                    modalEl.innerHTML = html;
                    break;
                }
                case "POWERSHIFT": {
                    html = `
                    <div class="overlay">
                       <div class="popup">
                           <div class="popup__close"></div>
                           <div class="popup__top">
                               <h2 class="title title_popup">POWER SHIFT</h2>
                               <div class="popup__content">
                                   <div class="popup__column">
                                        <h3 class="subtitle subtitle_popup">Dct 250
                                       </h3>
                                       <h3 class="subtitle subtitle_popup"> Dct 450
                                       </h3>
                    
                                   </div>
                    
                               </div>
                    
                           </div>
                           <div class="popup__bottom">
                               <h3 class="subtitle subtitle_popup-black">ОСТАВЬ ЗАЯВКУ И ПОЛУЧИ СКИДКУ</h3>
                               <form class="popup__form">
                                   <input class="input popup__name" type="text" placeholder="Имя">
                                   <input class="input popup__phone" type="text" placeholder="Ваш телефон">
                                   <button class="btn popup__btn" type="submit">Получить скидку</button>
                               </form>
                           </div>
                       </div>
                     </div>
                    `;
                    modalEl.innerHTML = html;
                    break;
                }
                case "SWAP": {
                    html = `<div class="overlay">
                    <div class="popup">
                        <div class="popup__close"></div>
                        <div class="popup__top">
                            <h2 class="title title_popup">СВАП</h2>
                            <div class="popup__content">
                                <div class="popup__column">
                 
                 
                                    <h3 class="subtitle subtitle_popup">Переход с Кпп с «сухим» сцепление на Кпп с «мокрым»
                                    </h3>
                                    <h3 class="subtitle subtitle_popup">  Переход с вариатора на Dsg
                                    </h3>
                 
                                </div>
                 
                            </div>
                 
                        </div>
                        <div class="popup__bottom">
                            <h3 class="subtitle subtitle_popup-black">ОСТАВЬ ЗАЯВКУ И ПОЛУЧИ СКИДКУ</h3>
                            <form class="popup__form">
                                <input class="input popup__name" type="text" placeholder="Имя">
                                <input class="input popup__phone" type="text" placeholder="Ваш телефон">
                                <button class="btn popup__btn" type="submit">Получить скидку</button>
                            </form>
                        </div>
                    </div>
                 </div>`;
                 modalEl.innerHTML = html;
                    break;
                }
                case "AKPP": {
                    html = `
                    <div class="overlay">
                       <div class="popup">
                           <div class="popup__close"></div>
                           <div class="popup__top">
                               <h2 class="title title_popup">АКПП</h2>
                               <div class="popup__content">
                                   <div class="popup__column">
                                        <h3 class="subtitle subtitle_popup"> Tr60
                                       </h3>
                                      <h3 class="subtitle subtitle_popup">  Tr80
                                       </h3>
                    
                                   </div>
                    
                               </div>
                    
                           </div>
                           <div class="popup__bottom">
                               <h3 class="subtitle subtitle_popup-black">ОСТАВЬ ЗАЯВКУ И ПОЛУЧИ СКИДКУ</h3>
                               <form class="popup__form">
                                   <input class="input popup__name" type="text" placeholder="Имя">
                                   <input class="input popup__phone" type="text" placeholder="Ваш телефон">
                                   <button class="btn popup__btn" type="submit">Получить скидку</button>
                               </form>
                           </div>
                       </div>
                    </div>
                    `;
                    modalEl.innerHTML = html;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }

const btnClose = () => {
        document.addEventListener("click", (ev) =>{
            if (ev.target && ev.target.classList.contains("popup__close")) {     
                const overlayEl = document.querySelector(".overlay"); 
                overlayEl.classList.add("hidden");
            }
        })
    };
    
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
 
  
    const forms = document.querySelectorAll('form');


    btnClose();
});

