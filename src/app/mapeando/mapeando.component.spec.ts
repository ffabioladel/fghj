import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapeandoComponent } from './mapeando.component';

describe('MapeandoComponent', () => {
  let component: MapeandoComponent;
  let fixture: ComponentFixture<MapeandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapeandoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapeandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
