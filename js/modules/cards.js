import {getResource} from '../services/services';

function cards() {
    //Cards
   class MenuCard {
      constructor(src, alt, tittle, descr, price, parentSelector) {
         this.src = src;
         this.alt = alt;
         this.tittle = tittle;
         this.descr = descr;
         this.price = price;
         this.parent = document.querySelector(parentSelector);
         this.transfer = 27;
         this.changeToRub();
      }

      changeToRub() {
         this.price = this.price * this.transfer;
      }

      render() {
         const element = document.createElement('div');
         element.innerHTML = `
            <div class="menu__item">
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.tittle}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
      </div>
     `;
     this.parent.append(element);
      }
   }

   axios.get('http://localhost:3000/menu')
   .then(data => {
   data.data.forEach(({img, altimg, title, descr, price}) => {
       new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      });
   });
}

export default cards;