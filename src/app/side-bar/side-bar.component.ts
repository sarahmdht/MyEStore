import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SearchComponent, CategoryComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
