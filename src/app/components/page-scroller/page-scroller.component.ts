import { Component, HostListener, OnInit } from '@angular/core';
import { setUpLocationSync } from '@angular/router/upgrade';
import { NgOptimizedImage } from '@angular/common';
import { PageIndexComponent } from '../page-index/page-index.component';

@Component({
  selector: 'app-page-scroller',
  standalone: true,
  imports: [NgOptimizedImage, PageIndexComponent],
  templateUrl: './page-scroller.component.html',
  styleUrl: './page-scroller.component.scss',
})
export class PageScrollerComponent implements OnInit {
  numberOfPages = 3;
  currentIndex: number = 0;
  isScrolling: boolean = false;

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (!this.isScrolling) {
      if (event.deltaY > 0) {
        this.scrollToSection(this.currentIndex + 1);
      } else {
        this.scrollToSection(this.currentIndex - 1);
      }
    }
  }
  scrollToSection(index: number) {
    if (index >= 0 && index < this.numberOfPages) {
      this.isScrolling = true;
      document
        .getElementById('' + index)
        ?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        this.currentIndex = index;
        this.isScrolling = false;
      }, 500);
    }
  }

  ngOnInit(): void {}
}
