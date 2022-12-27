import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { ThisReceiver } from '@angular/compiler';
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
  name?: string;
  image?: string;

  namesf!: any;
  imagesf?: string[] = [];

  shufflerValue!: any;

  ngOnInit(): void {}

  updateData() {
    this.dataCards.getDataCards().subscribe((data) => {
      this.data = data;
      this.cards = this.data.cards;
      this.imageBackCard = this.data.imageBackCard;
      this.imagesUrl = this.data.imagesUrl;

      this.shufflerCardsArray();
      this.startTarotCards();
      this.startTarotCards()
    });
  }

  startTarotCards() {
     let suffix = this.shufflerValue.image
     for(const suffixs of suffix){
      const newUrl =`${this.imagesUrl}${suffixs}`;

     console.log(newUrl)
     }
    }
 

  concatShufflerValue() {
    this.image = this.imagesUrl.concat(this.shufflerValue.image);
    this.name = this.shufflerValue.name;
  }

  shufflerCardsArray() {
    let random = Math.floor(Math.random() * this.cards.length);
    this.shufflerValue = this.cards[random];
    this.concatShufflerValue();
  }
}
