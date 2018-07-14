import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {LoadingBarService} from '@ngx-loading-bar/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-next',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private loadingBar: LoadingBarService, private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.userSubject.subscribe(data => {
      this.stopLoading();
      this.router.navigate(['/next']);
    });
  }


  startLoading() {
    this.loadingBar.start();
    this.dataService.getData();
  }

  stopLoading() {
    this.loadingBar.complete();
  }
}
