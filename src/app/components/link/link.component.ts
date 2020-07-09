import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class Link {
  @Input() linkText: string;
  @Input() path: string;
}
