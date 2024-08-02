import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Task-maids';

  searchQuery!: number;

  constructor(private router: Router) {}

  onSearchChange(query: number) {
    if (query!=0) {
      this.router.navigate(['/user', query]);
    }
  }
  ngOnInit(): void {
  }


}
