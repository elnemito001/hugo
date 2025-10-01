import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompoHijoComponent } from './compo-hijo';

describe('CompoHijoComponent', () => {
  let component: CompoHijoComponent;
  let fixture: ComponentFixture<CompoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
