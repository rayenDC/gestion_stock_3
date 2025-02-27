import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInscritionComponent } from './page-inscrition.component';

describe('PageInscritionComponent', () => {
  let component: PageInscritionComponent;
  let fixture: ComponentFixture<PageInscritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageInscritionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInscritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
