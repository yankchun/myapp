import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent {

  constructor(
    private router: Router
  ) { }

  home() {
    this.router.navigate(['/general-details']);
  }

}
