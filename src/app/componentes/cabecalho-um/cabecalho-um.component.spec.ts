import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoUmComponent } from './cabecalho-um.component';

describe('CabecalhoUmComponent', () => {
  let component: CabecalhoUmComponent;
  let fixture: ComponentFixture<CabecalhoUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoUmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
