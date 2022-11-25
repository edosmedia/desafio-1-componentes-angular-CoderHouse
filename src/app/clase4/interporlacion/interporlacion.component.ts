import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interporlacion',
  templateUrl: './interporlacion.component.html',
  styleUrls: ['./interporlacion.component.sass'],
})
export class InterporlacionComponent implements OnInit {
  public nombre: string;
  public apellido: string;
  public personas = ['Jose', 'Pedro', 'Juan'];
  public bandera = false;
  public valorSwitch: string;
  public hoy = new Date();

  constructor() {}
  verDatos() {
    console.log('Nombre: ', this.nombre);
    console.log('Apellido: ', this.apellido);
  }

  cargarDatos() {
    this.nombre = 'Lionel';
    this.apellido = 'Messi';
  }

  ngOnInit(): void {
    // this.nombre = "interporlacion ejemplo"
  }

  decirHola(): void {
    alert('Hola Como estas');
  }
}
