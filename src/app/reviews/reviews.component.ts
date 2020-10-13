import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  newName: string;
  newRev: string;

  reviews = [{name: 'Aisana', rev: 'The quality corresponds to the price. Beautiful design. I really liked the combination of colors that shimmer with each other.'},
    {name: 'Almat', rev: 'The size fit. And the color is very nice. I ordered a sweatshirt. Perfectly fits the body. Beautiful design.'},
    {name: 'Masha', rev: 'The order came very quickly and efficiently. The perfect T-shirt and cap that will fit everything. Thank you very much for this quality.'},
    {name: 'Amina', rev: 'I have not updated my wardrobe for a long time, and I always wanted me to have at least one thing from your store. I was looking for a red T-shirt. I found Marwin through the website, ordered it and delivered it the next day. Thank you very much.'},
    {name: 'Aylina', rev: 'I went with my niece to buy her a sweatshirt T-shirt. All sizes were available, which is very pleasing. We quickly found the right colors and sizes for her. It looks very stylish. Thank you for efficiency.'},
    {name: 'Marat', rev: 'Recently I ordered a thermos and a bag for my sister through the Meloman\'s website. Delivered very quickly. The main thing is that it was delivered right to the house and of high quality. The little sister really liked it. Thanks.'}
  ];

  // tslint:disable-next-line:typedef
  handleButtonClick(newName, newRev) {
    this.reviews.push({name: newName, rev: newRev});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
