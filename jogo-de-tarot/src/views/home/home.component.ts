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
  name?: any;
  image?: any;

  ngOnInit(): void {
    
  }

  updateData() {
    this.dataCards.getDataCards().subscribe((data) => {
      this.data = data;
      this.pointData();
      this.concatURL()
    });
  }

  pointData() {
    this.imageBackCard = this.data.imageBackCard;
    this.imagesUrl = this.data.imagesUrl;
    this.cards = this.data.cards;
    // this.name = this.cards[0].name;
  }
 
 concatURL(){
 this.image = this.imagesUrl.concat(this.cards[0].image)
 this.name = this.cards[0].name
 } 

}
