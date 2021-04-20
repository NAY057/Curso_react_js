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
> FIN instalacion BOOTSTRAP

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