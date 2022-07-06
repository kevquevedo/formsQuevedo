import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../alumnos/alumnos.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formulario: FormGroup;
  public alumnoForm: Alumnos;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      nombre: [, [Validators.required]],
      apellido: [, [Validators.required]],
      sexo: [, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe(value =>{
      console.log(value);
    });
  }

  crearAlumno(formulario: FormGroup){

    let nombre = formulario.get('nombre')?.value;
    let apellido = formulario.get('apellido')?.value;
    let sexo = formulario.get('sexo')?.value;
    this.alumnoForm = new Alumnos(nombre, apellido, sexo)
  }


}
