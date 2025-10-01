import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompoPadreComponent } from './compo-padre';

describe('CompoPadreComponent', () => {
  let component: CompoPadreComponent;
  let fixture: ComponentFixture<CompoPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
