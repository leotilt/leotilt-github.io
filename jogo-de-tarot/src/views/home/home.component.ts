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

  valueCards!: any;

  ngOnInit(): void {}

  updateData() {
    this.dataCards.getDataCards().subscribe((data) => {
      this.data = data;
      this.cards = this.data.cards;
      this.imageBackCard = this.data.imageBackCard;
      this.imagesUrl = this.data.imagesUrl;
      this.showAllCards();
    });
  }

  showAllCards() {
    this.valueCards = this.cards.map((card) => {
      return {
        image: this.imagesUrl + card.image,
        name: card.name,
      };
    });
  }

  changeCardImages() {
    this.valueCards = this.cards.map(() => {
      return {
        image: this.imageBackCard,
      };
    });
    setTimeout(() => {
      this.radomCards();
    }, 3000);
  }

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

  onClick() {
    this.changeCardImages();
  }
}
