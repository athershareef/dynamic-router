import {Component, OnInit} from '@angular/core';
import {User} from '../model/User';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
})
export class NextComponent implements OnInit {

  private user: User;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.user = this.dataService.user;
  }

}
