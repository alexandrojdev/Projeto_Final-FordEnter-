import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcaoDonwloadComponent } from './opcao-donwload.component';

describe('OpcaoDonwloadComponent', () => {
  let component: OpcaoDonwloadComponent;
  let fixture: ComponentFixture<OpcaoDonwloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcaoDonwloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcaoDonwloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
