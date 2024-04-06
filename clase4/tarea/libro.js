const Libro = {
  titulo: "",
  autor: "",
  genero: "",
  anio: "",
  editorial: "",

  imprimirInformacion: function () {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Género: ${this.genero}`);
    console.log(`Año de Publicación: ${this.anio}`);
    console.log(`Editorial: ${this.editorial}`);
  },
};

function filtrarPorAutor(libros, autor) {
  return libros.filter((libro) => libro.autor === autor);
}

const libro1 = Object.create(Libro);
libro1.titulo = "El nombre del viento";
libro1.autor = "Patrick Rothfuss";
libro1.genero = "Fantasía";
libro1.anio = 2007;
libro1.editorial = "DAW Books";

const libro2 = Object.create(Libro);
libro2.titulo = "Cien años de soledad";
libro2.autor = "Gabriel García Márquez";
libro2.genero = "Realismo mágico";
libro2.anio = 1967;
libro2.editorial = "Editorial Sudamericana";

const libro3 = Object.create(Libro);
libro3.titulo = "1984";
libro3.autor = "George Orwell";
libro3.genero = "Ciencia ficción";
libro3.anio = 1949;
libro3.editorial = "Secker & Warburg";

const libros = [libro1, libro2, libro3];

console.log("Información del libro 1:");
libro1.imprimirInformacion();

console.log("\nLibros escritos por George Orwell:");
const librosGGM = filtrarPorAutor(libros, "George Orwell");

librosGGM.forEach((libro) => libro.imprimirInformacion());
