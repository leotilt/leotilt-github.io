import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Component } from '@angular/core';
import { CardsAPIService } from 'src/components/services/cards-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  animations: [
    trigger('cardAnimation', [
      state(
        'fadeOut',
        style({
          opacity: 0,
        })
      ),
      state(
        'fadeIn',
        style({
          opacity: 1,
        })
      ),
      transition('fadeOut => fadeIn', animate('500ms ease-in')),
      transition('fadeIn => fadeOut', animate('500ms ease-out')),
    ]),
  ],
})
export class HomeComponent {
  constructor(private dataCards: CardsAPIService) {
    this.updateData();
  }

  data!: any;

  cards!: Array<any>;
  valueCards!: Array<any>;

  imagesUrl!: string;
  imageBackCard!: string;

  //função updateData alimenta as variaveis fazendo o get no arquivo service onde contem o arquivo json, fazendo a requisição http
  updateData() {
    this.dataCards.getDataCards().subscribe((data) => {
      this.data = data;
      this.cards = this.data.cards;
      this.imageBackCard = this.data.imageBackCard;
      this.imagesUrl = this.data.imagesUrl;
      this.showAllCards();
    });
  }
  //Função showAllCards, é chamada assim que a aplicação é iniciada, listando todas as cartas do array concatenando com o url
  showAllCards() {
    this.valueCards = this.cards.map((card) => {
      return {
        image: this.imagesUrl + card.image,
        name: card.name,
      };
    });
  }
  //Função changeCards, muda o valor do array para a parte de tras da carta, e depois 2 segundos chama a função radomCards
  changeCardImages() {
    this.valueCards = this.cards.map(() => {
      return {
        image: this.imageBackCard,
      };
    });
    setTimeout(() => {
      this.radomCards();
    }, 2000);
  }
  //função radomCards mapeia o array retornando a imagem e o nome da carta gerado aleatoriamente pela função Math.radom
  radomCards() {
    this.valueCards = this.data.cards.map(
      (card: { image: string; name: any }) => {
        return {
          image: this.imagesUrl + card.image,
          name: card.name,
        };
      }
    );

    const index = Math.floor(Math.random() * this.valueCards.length);
    const card = this.valueCards[index];
    this.valueCards = [card];
  }
  //Botoes
  onClickPlay() {
    this.changeCardImages();
  }
  onClickNewGame() {
    this.showAllCards();
  }
}
