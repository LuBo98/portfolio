import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, effect, input, Input } from '@angular/core';
import { relative } from 'path';

@Component({
  selector: 'app-page-index',
  standalone: true,
  imports: [],
  animations: [
    trigger('mainPointMoveUp', [
      state(
        'mainPostition',
        style({
          minheight: '20px',
          opacity: 1,
        })
      ),
      state(
        'topPosition',
        style({
          minheight: '16px',
          opacity: 0.7,
          position: 'relative',
          top: '-10px',
        })
      ),
      transition('* => mainPosition', [animate('1s')]),
      transition('* => topPosition', [animate('1s')]),
    ]),
  ],
  templateUrl: './page-index.component.html',
  styleUrl: './page-index.component.scss',
})
export class PageIndexComponent {
  indexLength = input.required<number>();
  currentIndex = input.required<number>();
  lastIndex = 0;

  constructor() {
    effect(() => {
      if (this.currentIndex() > this.lastIndex) {
        this.animationDown();
      } else {
        this.animationUp();
      }
      this.lastIndex = this.currentIndex();
    });
  }

  animationUp() {}

  animationDown() {}

  mainPointClickTest(event: Event) {
    console.log('test');
  }
}
