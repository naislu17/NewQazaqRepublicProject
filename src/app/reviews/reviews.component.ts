import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {Review} from '../customer';
import {AllserviceService} from '../services/allservice.service';



@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  newName: string;
  newRev: string;

  review: Review[];
  constructor(private allserviceService: AllserviceService, private loggingService: LoggingService) {
    this.review = this.allserviceService.getReview();
    this.loggingService.log('Reviews: ' + this.review.toString());
  }

  // tslint:disable-next-line:typedef
  handleButtonClick(newName, newRev) {
    this.review.push({name: newName, rev: newRev});
  }

  ngOnInit(): void {
  }

}
