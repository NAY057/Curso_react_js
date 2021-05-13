# Curso_react_js

## ACTIVAR EMMET REACT
> Intalacion EMMET
- Pulsa `ctrl + shift + P` en visual studio code. Te aparecerá una barra de comandos.

- En la barra de commandos busca la opción de `Preferences: Open Settings (JSON)`. 

- Se abrirá el archivo de  configuración de visual studio code que se mostrará en formato JSON.

- Coloca dentro del archivo JSON las siguientes lineas para poder activar emmet.
```javascript
//Esta linea activa la opción de usar emmet en React
"emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "jsx-sublime-babel-tags": "javascriptreact"
  },

//Esta linea es muy útil, nos permite usar emmet con componentes que no sean HTML.
//Por ejemplo un componente de react que escribamos llamado Layout, al darle tab
//nos lo mostrará como <Layout></Layout>
  "emmet.triggerExpansionOnTab": true,
```

> FIN Instalacion EMMET
## COMANDOS REACT
> Instalacion
- Crear una aplicacion nueva.
`npx create-react-app NOMBRE DE LA APP`

- Acualizar dependencias.
`npx npm-check-updates -u`

- Intallar npm.
`npm install`

- Correr servidor.
`npm run start`

> FIN Intalacion

> Importar archivos
- Para importar archivos ya sean CSS o de otro tipo de puede hacer de la siguiente manera:

- Para importar bootstrap se debe de ubicar el import en el INDEX.JS
`import 'bootstrap/dist/css/bootstrap.css';`

- Para importar un archivo de forma GLOBAL se debe de ubicar el import en el INDEX.JS:
`import './global.css';`

> FIN Importar archivos

> Instalacion BOOTSTRAP
- Escribir en consola lo siguiente.
`npm install bootstrap`

- Para importar bootstrap se debe de ubicar el import en el INDEX.JS
`import 'bootstrap/dist/css/bootstrap.css';`

> FIN instalacion BOOTSTRAP

> COMPONENTES
- Los componentes en React son bloques de construcción.
- Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
- Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.

-”Componente” vs “elemento"
Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

-Identificación de componentes
Para identificarlos debes hacerte las siguientes preguntas:

    - ¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
    - ¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.

- Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.
> FIN COMPONENTES

> PROPS
- Los props que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.

- Al escribir los props no importa el orden en el que lo hagas, únicamente importa el nombre.

- Se puede utilzar la tecnica DESTRUCTURING para asignar los props con menos codigo.
` render(){const { VARIABLE_1, VARIABLE_2, VARIABLE_3, .... } = this.props; return( CODIGO HTML ); } `
    

- Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

`ReactDOM.render( <Badge VARIABLE_1="..." VARIABLE_2="..." VARIABLE_3="... />, container );`

- Los props son como pequeños argumentos para los componentes.

> FIN PROPS

> MANEJO DE ESTADOS
- Para los datos que van a cambiar se debe utilizar el ESTADO(state) para poder actualizarlos de lo contrario se pueden utilizar las props.

- Se debe inicializar el estado como primer metodo de la CLASE asi:
```javascript
    state = {
      //ASI SE EVITAR EL WARNING INDICANDO QUE LOS CAMPOS NO ESTAN CONTROLADOS
        // firstName: '',
        // lastName: '',
        // email: '',
        // jobTitle: '',
        // twitter: ''
      };
```
- IMPORTANDE destacar que se utiliza `this.state` para leer el estado y `this.setstate` para setear el estado.

- Dentro de un INPUT el estado de debe de interceptar asi:`onChange={this.handleChange}` y luego con la prop `value={this.state.AQUI VA EL NAME DE LA ETIQUETA HTML}`.

- Se utiliza una funcion encargada de setear los eventos asi:
```javascript
    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
```

> FIN MANEJO DE ESTADOS


> LISTAS DE COMPONENTES
- Para listar componentes se debe de ulitizar el prop MAP para comvertir un objeto a un elemeto, asi:
```javascript
            <div className="BadgesList">//contenedor
                <ul className="list-unstyled">//lista
                    {this.props.badges.map(badge =>{//Funcion de arreglos map que recive un objeto (badge) y retorna cada uno de los elementos en un  (li) en donde se escuentra todo el badge que debe renderisar
                        return (
                            <li key={badge.id}>
                            // El prop key es muy importante para react, de esta manera react sabe si el elemento aun esta en la lista y se debe renderizar Y SE UTILIZA SIEMPRE QUE SE LISTAN ELEMENTOS
                                <BadgesListItemNico badge={badge}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
```
> FIN LISTAS DE COMPONENTES

> REACT ROUTER
## INSTALAR REACT ROUTER
`npm install react-router-dom`

- Link internamente tiene un elemento <a> pero va a interceptar el clic para navegar de manera interna sin refrescar toda la página.

```javascript
import { Link } from 'react-router-dom'

<Link to="/badges/new" className="btn btn-primary">
  New Badge
</Link>
```

- Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source.

- Multi Page Apps: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

- Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

- React Router (v4): Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

    - BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
    
    - Route: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.
    
    - Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
    
    - Link: Toma el lugar del elemento <a>, evita que se recargue la página completamente y actualiza la URL.



- EJEMPLO DEL USO DE REACT ROUTER
```javascript
import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import BadgesNico from '../pages/BadgesNico'
import BadgeNewNico from '../pages/BadgeNewNico'

function App(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/badges' component={BadgesNico}/>
            <Route exact path='/badges/new' component={BadgeNewNico}/>
        </Switch>
        </BrowserRouter>
    )
}

export default App
```

> FIN REACT ROUTER

> CICLO DE VIDA DE LOS COMPONENTES

- El orden del ciclo de vida de los componentes es asi: `1-Constructor, 2/4-Render, 3-ComponentDidMount, 5-ComponentDidUpdate, 6-ComponentWillUnmount`


```javascript
    Constructor(props){
    // El constructor se utiliza para inicializar el estado(THIS.STATE) y enlazar metodos, de lo contrario no se necesita un constructor.

	/*Este método se ejecuta cuando se instancia un componente. Nos permite definir el estado inicial del componente, hacer bind de métodos y definir propiedades internas en las que podemos guardar muchos datos diferente*/
}
```
```javascript
render(){
	/*En este momento de la fase de montado se van a tomar las propiedades, el estado y el contexto y se va a generar la UI inicial de este componente*/
}
```
```javascript
componentWillMonunt(){
	/*Este método se ejecuta cuando el componente se está por renderizar. En este punto es posible modificar el estado del componente sin causar una actualización (y por lo tanto no renderizar dos veces el componente).*/
}
```
```javascript
componentDidMount(){
	/*Este último método de la fase de montado se ejecuta una vez el componente se renderizó en el navegador y nos permite interactuar con el DOM o las otras APIs del navegador (geolocation, navigator, notificaciones, etc.).*/
}
```
```javascript
componentWillReceiveProps(nextProps){
	/*Este método se ejecuta inmediatamente después que el componente reciba nuevas propiedades. En este punto es posible actualizar el estado para que refleje el cambio de propiedades, ya sea reiniciando su valor inicial o cambiándolo por uno nuevo.*/
}
```
```javascript
shouldComponentUpdate(nextProps, nextState){
	/*Este método (el cual debe ser puro) se ejecuta antes de empezar a actualizar un componente, cuando llegan las nuevas propiedades (nextProps) y el nuevo estado (nextState).

Acá es posible validar que estos datos sean diferentes de los anteriores (this.props y this.state) y devolver true o false dependiendo de si queremos volver a renderizar o no el componente.*/
}
```
```javascript
componentWillUpdate(prevProps, prevState){
	/*Una vez el método anterior devolvió true se ejecuta este método, acá es posible realizar cualquier tipo de preparación antes de que se actualice de la UI*/
}
```
> FIN CICLO DE VIDA DE LOS COMPONENTES

> LLAMADAS A UNA API
- Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:

- Loading: cuando la petición se envía y estamos esperando.
- Error: se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
- Data: los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.

    ```javascript
    Una llamada a una API tiene tres estados

    Una promesa

    Loading
    =>
        Error
        ||
        Data
            Without data {}
            ||
            With data {…}

    Es vital indicar que se está cargando para que el usuario tenga paz
    Si no hay data es vital hacer un CTA para introducir data

    ```
> FIN LLAMADAS A UNA API

> REDIRECCION A OTRA PAGINA
- Para realizar la redireccion a otra pagina se utiliza un prop que las paginas reciven mediante el react router, los props a recivir son tres: match, history y location.
`this.props.history.push('/RUTA A DIRIGIR')` 
> FIN REDIRECCION A OTRA PAGINA

> LEER UN ID
- Para leer un Id de una ruta y editar algun elemento se de debe de hacer de la siguiente manera
```javascript
  componentDidMount(){
      this.fetchData()
      // Se llaman los datos cuando todo ya este cargado
  }
  
  fetchData = async e => {
    this.setState({ loading: true, error: null });
    try {
        // api.badges.read() toma el Id del elemento que nos interesa pero no se puede leer aun
      const data = await api.badges.read(
          // Para poder leer el Id que toma el read() se usan uno de los props que tiene react-router el cual es MATCH
          this.props.match.params.badgeId
          // Luego para acceder a la variable que se declaro previamente en la ruta url se accede con PARAMS y luego se le agrega el nombre de la variable, en este caso badgeId
      )
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }
```
> FIN LEER UN ID

> CREAR UN PORTAL
- Hay momentos en los que queremos renderizar un modal, un tooltip, etc. Esto puede volverse algo complicado ya sea por la presencia de un z-index o un overflow hidden.

- En estos casos lo ideal será renderizar en un nodo completamente aparte y para esto React tiene una herramienta llamada Portales que funcionan parecido a ReactDOM.render; se les dice qué se desea renderizar y dónde, con la diferencia de que ese dónde puede ser fuera de la aplicación.
```javascript
{ReactDom.createPortal( que queremos renderizar , donde lo queremos renderizar)}

// Ejemplo 
{ReactDOM.createPortal(
    <h1>Hola, realmente no estoy aquí</h1>,
    document.getElementById('modal')
)}

```

- Para ponder renderizarlo esto debe de hacerse en el index.html

```javascript
// Esto dentro del index.html
<div id="modal"></div>
```

> FIN CREAR UN PORTAL

> REACT HOOKS
- la ventaja de los Hook es que te permite manejar estados e interactuar con el ciclo de vida de un componente. Es decir, como dijo Richard en el vídeo, los hooks permite a los componentes funcionales tener características que solo las clases tiene, para ello te ayudarán 

- `useState (manejar el estado) Ej: const [state, setState] = React.useState(VARIABLE DE INICIACION DEL ESTADO)`
- `useEffect (para suscribir el componente a un ciclo de vida)`
- `useReducer (para ejecutar un efecto basado en una acción)`

- En resumen y dicho llanamente: Los Hooks son como un todo en uno

- Custom Hooks: Usamos los hooks fundamentales para crear nuevos hooks custom. Estos hooks irán en su propia función y su nombre comenzará con la palabra use. Otra de sus características es que no pueden ser ejecutados condicionalmente (if).

- `useState` regresa un arreglo de dos argumentos.
> FIN REACT HOOKS

