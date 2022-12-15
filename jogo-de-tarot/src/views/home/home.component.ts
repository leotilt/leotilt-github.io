import { Component, OnInit } from '@angular/core';
import { CardsAPIService } from 'src/components/services/cards-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private cardsAPI: CardsAPIService) {}
  card!: any;
  cardName!: any;
  cardUrl!: string;

  ngOnInit(): void {
    this.updateData();
  }

  updateData() {
    this.cardsAPI.getCards().subscribe((cards) => {
      this.card = cards;
    });
  }
}
