import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageScrollerComponent } from './page-scroller.component';

describe('PageScrollerComponent', () => {
  let component: PageScrollerComponent;
  let fixture: ComponentFixture<PageScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageScrollerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
