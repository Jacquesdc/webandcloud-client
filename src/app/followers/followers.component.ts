import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  ownFollowers: User[] = [
    { id: 1, name: "Roger", followIds: [], followerIds: []},
    { id: 2, name: "Paul", followIds: [], followerIds: []}
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
