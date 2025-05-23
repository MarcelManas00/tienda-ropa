import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetasComponent } from './tarjet.component';

describe('TarjetComponent', () => {
  let component: TarjetasComponent;
  let fixture: ComponentFixture<TarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
