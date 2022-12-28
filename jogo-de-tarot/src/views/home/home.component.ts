import { Component, OnInit } from '@angular/core';
import { CardsAPIService } from 'src/components/services/cards-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dataCards: CardsAPIService) {
    this.updateData();
  }
  data!: any;

  cards!: Array<any>;
  imagesUrl!: string;
  imageBackCard!: string;
  nameRandom?: string;
  imageRandom?: string;

  allCards!: any;

  namesf!: any;
  imagesf?: any;

  shufflerValue!: any;

  selectedCard!: any;

  ngOnInit(): void {}

  updateData() {
    this.dataCards.getDataCards().subscribe((data) => {
      this.data = data;
      this.cards = this.data.cards;
      this.imageBackCard = this.data.imageBackCard;
      this.imagesUrl = this.data.imagesUrl;

      this.shufflerCardsArray();
      this.showAllCards();
    });
  }

  showAllCards() {
    this.allCards = this.cards.map((card) => {
      return {
        image: this.imagesUrl + card.image,
        name: card.name,
      };
    });
  }

  concatShufflerValue() {
    this.imageRandom = this.imagesUrl.concat(this.shufflerValue.image);
    this.nameRandom = this.shufflerValue.name;
  }

  shufflerCardsArray() {
    let random = Math.floor(Math.random() * this.cards.length);
    this.shufflerValue = this.cards[random];
    this.concatShufflerValue();
  }

  changeCardImages() {
    this.allCards = this.cards.map(() => {
      return {
        url: this.imageBackCard,
        name: null,
      };
    });
    this.radomcards();
  }

  radomcards() {
    const index = Math.floor(Math.random() * this.allCards.length);
    const card = this.allCards[index];
    this.allCards = [card];
    this.selectedCard = card;
  }
}
