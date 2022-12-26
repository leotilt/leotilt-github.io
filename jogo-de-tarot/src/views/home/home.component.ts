import { Component, OnInit } from '@angular/core';
import { CardsAPIService } from 'src/components/services/cards-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dataCards: CardsAPIService) {
    this.updateData()
  }
  data!: any;
  cardName!: any;
  imageBackCard!: string;

  ngOnInit(): void {
    
  }

  updateData() {
    this.dataCards.getDataCards().subscribe((data) => {
      this.data = data;
      this.imageBackCard = this.data.imageBackCard 
    });
  }
}
