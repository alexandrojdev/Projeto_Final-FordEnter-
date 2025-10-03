import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrosselComponent } from './carrossel/carrossel.component'; 
import { LoginPopupComponent } from './login-popup/login-popup.component';



@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, CarrosselComponent, LoginPopupComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'meu-projeto-angular';
}
