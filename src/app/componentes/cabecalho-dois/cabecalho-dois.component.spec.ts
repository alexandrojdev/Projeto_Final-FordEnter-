import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoDoisComponent } from './cabecalho-dois.component';

describe('CabecalhoDoisComponent', () => {
  let component: CabecalhoDoisComponent;
  let fixture: ComponentFixture<CabecalhoDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoDoisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
