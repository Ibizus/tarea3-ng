import { Component } from '@angular/core';
import { ListaComponent } from '../lista/lista.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [ListaComponent, FormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent2 {

}
