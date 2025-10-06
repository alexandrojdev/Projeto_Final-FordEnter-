import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// IMPORTAÇÃO CRÍTICA PARA O | async
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar-servicos',
  standalone: true,
  imports: [
    // CommonModule já inclui o AsyncPipe e outras diretivas como *ngFor
    CommonModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatAutocompleteModule
  ],
  templateUrl: './buscar-servicos.component.html',
  styleUrl: './buscar-servicos.component.css'
})
export class BuscarServicosComponent implements OnInit {
  searchForm!: FormGroup;
  opcoesDeBusca: string[] = ['Salões de Beleza', 'Barbearias', 'Manicure e & Nail Designers', 'Esteticistas', 
  'Sombrancelhas & Cílios', 'Spas & Massagens', "MakeUp"];
  opcoesFiltradas$!: Observable<string[]>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      campoBusca: [''], 
      campoLocalizacao: [''], 
      campoData: [''], 
      campoHora: ['']
    });

    this.opcoesFiltradas$ = this.searchForm.get('campoBusca')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.opcoesDeBusca.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    console.log('Formulário Enviado:', this.searchForm.value);
  }
}