import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styleUrls: ['./proyecto1.component.scss']
})
export class Proyecto1Component implements OnInit {
  public nombre: string;
  public apellido: string;
  public durationInSeconds = 5;

  constructor(
    private _snackBar: MatSnackBar
  ) { 
    this.nombre = "";
    this.apellido = "";
  }

  ngOnInit(): void {
      
  }

  openSnackBar() {
    this._snackBar.open("hola " + this.nombre + " " + this.apellido, "cerrar",{
      duration: this.durationInSeconds * 1000,
    })
   
  }

}
