import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public friends = [
    { id: 1 , name: "roger"},
    { id: 2 , name: "marcel"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
