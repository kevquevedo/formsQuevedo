import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent {

  @Input() alumnoNuevo: Alumnos;

  mostrarLista: string = "";
  color: string = "white";

  listaAlumnos: Alumnos[] = [
    {
      nombre: "Kevin",
      apellido: "Quevedo",
      sexo: "M"
    },
    {
      nombre: "Graciela",
      apellido: "Fernandez",
      sexo: "F"
    },
    {
      nombre: "Gaston",
      apellido: "Gutierrez",
      sexo: "M"
    },
    {
      nombre: "Agustina",
      apellido: "Lopez",
      sexo: "F"
    },
    {
      nombre: "Leandro",
      apellido: "Salvatore",
      sexo: "M"
    },
    {
      nombre: "Daniela",
      apellido: "Fiorello",
      sexo: "F"
    },
    {
      nombre: "Matias",
      apellido: "Cinzano",
      sexo: "M"
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  public sumarAlumno(alumno: Alumnos){
    let existe: boolean = false;
    this.listaAlumnos.forEach(elem => {

      if(elem.nombre == alumno.nombre &&
        elem.apellido == alumno.apellido)
        existe = true;
    });

    if(!existe){
      this.listaAlumnos.push(alumno);
    }
  }

  public verLista(caso: string){

    let listaRetorno  = null;
    switch (caso) {

      case 'T':
        listaRetorno = this.listaAlumnos;
        return listaRetorno;

      case 'M':

        listaRetorno = this.listaAlumnos.filter(function(alumno){
          return alumno.sexo == 'M';
        });
        break;

      case 'F':
        listaRetorno = this.listaAlumnos.filter(function(alumno){
          return alumno.sexo == 'F';
        });
        break;
      default:
        return this.listaAlumnos;
        break;
    };

    return listaRetorno;
  };

}

export class Alumnos{

  nombre: string;
  apellido: string;
  sexo: string;

  constructor(nombre: string, apellido: string, sexo: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
  }
}
