<!-- ABOUT THE PROJECT -->
## PRÁCTICA 9: JavaScript

### Prevalidación de un formulario

Creará la prevalidación de JavaScript para un formulario.

### Built With

* HTML
* CSS
* JavaScript

### Prerequisites

Estas son algunos de los programas que se utilizaron y sus extensiones.

* Visual Studio Code
  ```sh
  techer.open-in-browser
  ```
  ```sh
  naumovs.color-highlight
  ```
  
* GitHub Desktop
  

### Ejercicio 1

1. Tendrá que enlazar con un archivo JavaScript externo en la cabecera de la página para que pueda escribir el código en su propio archivo.
2. Deberá definir un estilo CSS para utilizar cuando se resalte un campo obligatorio que se encuentra en blanco.
3. Configurar un listener en el evento de envío del formulario para que el código impida el envío del formulario (preventDefault()) si el campo de título o descripción se deja en blanco o la casilla de aceptación de la licencia no está marcada, pero en caso contrario se envíe el formulario.
4. Mejore el JavaScript para que los campos en blanco provoquen un cambio en la apariencia del formulario , además se deberá mostrar un mensaje de error notificandole al usuario que hacen falta campos requeridos.
5. Añadir otro listener a los campos para que cuando el usuario escriba en un campo (evento de cambio) JavaScript elimine el estilo que acabas de añadir.
6. Al presionar el boton limpiar todos los campos y estilos son reestablecidos

#### Pruebas

1. Pruebe el formulario en el navegador. Intente enviar el formulario con cualquiera de los campos en blanco.
2. Escriba en uno de los campos resaltados y el color del error debería desaparecer inmediatamente.
3. Al presionar el botón enviar se reestablecen los valores y estilos del formulario como al inicio.
