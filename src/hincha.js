// ["Nicolás", "18", "Velez", "Casado", "Universitario"]

class Hincha {
  constructor(row) {
    this.nombre = row[0];
    this.edad = row[1];
    this.equipo = row[2];
    this.estadoCivil = row[3];
    this.estudios = row[4];
  }
}

export default Hincha;
