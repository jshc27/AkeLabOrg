# PRUEBA DE SELECCIÓN JAVASCRIPT AKELAB

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Ejercicios 

1. La serie Fibonacci es una sucesión de números que inician por la unidad y cada uno
de sus términos es la suma de los dos anteriores (1, 1, 2, 3, 5, 8, 13, 21, ...).
Crear una página que contenga un input de texto y un botón. En el input de texto se
debe poder ingresar un número entero igual o mayor a 1 que representa la cantidad
de números que deseamos mostrar de la serie y al presionar el botón se deben
mostrar en pantalla.
Ejemplo: La caja de texto tiene el número 6, al presionar el botón se deberían mostrar
los números (1, 1, 2, 3, 5, 8).
Validar que la caja de texto no puede tener números menores a 1 o texto, mostrar
mensaje de error.

2. Crear una página que contenga un input de texto y un botón. En el input de texto se
debe poder ingresar un número entero igual o mayor a 1 que representan la cantidad
de número que deseamos mostrar. Al presionar el botón en pantalla se deben mostrar
los números en secuencia (1, 2, 3, 4, 5, 6, 7, 8, ...) adicional se deben reemplazar los
número múltiplos de 3 por la palabra AKE y los números múltiplos de 5 por la palabra
LAB. Si el número es múltiplo de 3 y de 5 se deben mostrar ambas palabras AKELAB.
Ejemplo: La caja de texto tiene el número 20, al presionar el botón se debería mostrar
en pantalla (1, 2, AKE, 4, LAB, AKE, 7, 8, AKE, LAB, 11, AKE, 13, 14, AKELAB, 16,
17, AKE, 19, LAB).
Validar que la caja de texto no puede tener números menores a 1 o texto, mostrar
mensaje de error.

3. Crear una página para visualizar películas de acuerdo con el mock-up que se  encuentra adjunto en el correo. La página debe mostrar todas las películas que se  encuentran en el archivo JSON (movies.json) adjunto. 
● Primero debes crear un servidor de node con el archivo JSON de las películas. El  servidor debe tener un endpoint y por medio de una petición http con el método GET  o POST el servidor debe responder el contenido del archivo JSON. El endpoint debe  validar el contenido de la variable “Akelab” para responder con la información de las  películas. Si el endpoint utiliza el método GET pasar la variable por parámetros de la 
petición o si el endpoint utiliza el método POST pasar la variable por el body de la  petición. El valor de la variable es: Akelab = 123456789 
● Para realizar la petición http puedes utilizar alguna librería de Javascript o utilizar el  método fetch. Ten presente que las peticiones http son asíncronas por lo tanto debes  controlarlas por medio de callbacks, promesas o async await. Puedes agregar un  loading a la página mientras obtienes los datos. 
● La página de las películas debe contar con una barra de búsqueda para filtrar las  películas por nombre. No debe discriminar por mayúsculas o minúsculas. ● La página debe contar con un botón de filtro por género. El icono del botón se  encuentra adjunto en el correo. Al hacer clic sobre el botón debe desplegar las  opciones de género con un checkbox para filtrar por cada género o varios. 
● La página debe contar con botón para ordenar las películas de acuerdo con fecha o  calificación. 
● Para mostrar las imágenes de las películas deben concatenar el siguiente link  (https://image.tmdb.org/t/p/w500) con la propiedad “poster_path”. 
Ej: https://image.tmdb.org/t/p/w500/1yWmCAIGSVNuTOGyz9F48W9g1Ux.jpg 

## Pantallas 
![inicio](https://user-images.githubusercontent.com/56690309/123491172-b370cb80-d5db-11eb-9c5a-1708e89a3b47.png)
![fibonacci](https://user-images.githubusercontent.com/56690309/123491176-b8ce1600-d5db-11eb-9653-598dafb1aef8.png)
![Secuencia](https://user-images.githubusercontent.com/56690309/123491183-bcfa3380-d5db-11eb-9277-01637747b715.png)
![films](https://user-images.githubusercontent.com/56690309/123491185-bf5c8d80-d5db-11eb-95eb-83de75c82c05.png)


