import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private meta: Meta) {}

  ngOnInit() {
 
  }

}
