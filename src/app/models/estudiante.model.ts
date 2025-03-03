export class Estudiante {
    Id: number;
    Nombre: string;
    TipoDocumento: string;
    NumeroDocumento: number;
    Correo: string;
    Telefono: number;
    Direccion: string;
    FechaNacimiento: Date;
    Creditos: number;
  
    constructor(
    Id: number = 0,
      Nombre: string = '',
      TipoDocumento: string = '',
      NumeroDocumento: number = 0,
      Correo: string = '',
      Telefono: number = 0,
      Direccion: string = '',
      FechaNacimiento: Date = new Date(),
      Creditos: number = 99
    ) {
    this.Id = Id;
      this.Nombre = Nombre;
      this.TipoDocumento = TipoDocumento;
      this.NumeroDocumento = NumeroDocumento;
      this.Correo = Correo;
      this.Telefono = Telefono;
      this.Direccion = Direccion;
      this.FechaNacimiento = FechaNacimiento;
      this.Creditos = Creditos;
    }
}