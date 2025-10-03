import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PgCadastroComponent } from './pg-cadastro.component';
import { FormsModule } from '@angular/forms';

describe('PgCadastroComponent', () => {
  let component: PgCadastroComponent;
  let fixture: ComponentFixture<PgCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgCadastroComponent, FormsModule] // Importa o standalone component e FormsModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
