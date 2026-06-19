# CI Demo ICS

Proyecto realizado para el **2do parcial** de la materia **Ingenieria y Calidad de Software**, correspondiente a **4to ano de Ingenieria en Sistemas**.

El trabajo tiene como enfoque principal la aplicacion de practicas de **CI/CD** mediante un proyecto simple desarrollado con Node.js, Express y TypeScript. La aplicacion permite calcular el precio total de entradas para un concierto segun el artista, el tipo de entrada y la cantidad seleccionada.

## Objetivo

El objetivo del proyecto fue demostrar como un flujo de integracion y despliegue continuo puede ayudar a mejorar la calidad del software, automatizando validaciones importantes como la ejecucion de tests, la compilacion del proyecto y el despliegue de la aplicacion.

## Funcionalidad principal

La aplicacion funciona como una calculadora de entradas para conciertos. Permite seleccionar:

- Artista.
- Tipo de entrada: General, Campo o VIP.
- Cantidad de entradas.

Con esos datos, el sistema calcula el precio unitario y el total a pagar. La logica principal se encuentra en `src/ticketCalculator.ts` y tambien se expone mediante una API REST.

## Tecnologias utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Jest**
- **Supertest**
- **GitHub Actions**
- **Vercel**
- **OpenAPI**
- **Spec Kit**

## Estructura del proyecto

```text
ci-demo-ics/
|-- .github/workflows/ci.yml       # Pipeline de CI/CD
|-- public/                        # Archivos estaticos del frontend
|-- specs/                         # Especificaciones y planificacion
|-- src/                           # Codigo fuente de la aplicacion
|   |-- app.ts                     # Configuracion de Express y rutas
|   |-- server.ts                  # Inicio del servidor
|   `-- ticketCalculator.ts        # Logica de calculo de entradas
|-- tests/                         # Tests unitarios e integracion
|-- openapi.yaml                   # Documentacion de la API
|-- package.json                   # Scripts y dependencias
`-- vercel.json                    # Configuracion de despliegue
```

## Instalacion y ejecucion

Para instalar las dependencias:

```bash
npm install
```

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

La aplicacion queda disponible en:

```text
http://localhost:3000
```

## Scripts disponibles

```bash
npm run dev
```

Ejecuta el servidor en modo desarrollo.

```bash
npm run build
```

Compila el proyecto TypeScript.

```bash
npm test
```

Ejecuta los tests automatizados con Jest.

```bash
npm start
```

Ejecuta la version compilada del proyecto.

## API principal

### Health check

```http
GET /health
```

Respuesta esperada:

```json
{
  "status": "ok"
}
```

### Calcular precio de entradas

```http
POST /tickets/calculate
```

Ejemplo de body:

```json
{
  "artist": "Harry Styles",
  "ticketType": "VIP",
  "quantity": 2
}
```

Ejemplo de respuesta:

```json
{
  "artist": "Harry Styles",
  "ticketType": "VIP",
  "quantity": 2,
  "unitPrice": 120000,
  "total": 240000
}
```

## Tests

El proyecto incluye pruebas automatizadas para validar el comportamiento de la aplicacion:

- Tests unitarios para la funcion de calculo de entradas.
- Tests de integracion para el endpoint `POST /tickets/calculate`.
- Validacion de casos correctos y casos de error.

Los tests se ejecutan con:

```bash
npm test
```

## Pipeline de CI/CD

El archivo `.github/workflows/ci.yml` define el pipeline de GitHub Actions. Este flujo se ejecuta ante cambios en ramas configuradas y en pull requests hacia `main`.

El pipeline incluye los siguientes jobs:

1. **validate-sdd**: valida que existan los artefactos de especificacion del proyecto, como `openapi.yaml` y los documentos dentro de `specs/`.
2. **test**: instala dependencias y ejecuta los tests automatizados.
3. **build**: compila el proyecto TypeScript.
4. **deploy**: despliega la aplicacion en Vercel.
5. **send-feedback-email**: envia un correo con el resultado del pipeline.

Este flujo permite detectar errores de forma temprana y asegurar que el proyecto pase por validaciones automaticas antes de considerarse listo.

## Despliegue

El proyecto esta preparado para desplegarse en **Vercel** mediante el archivo `vercel.json`. El despliegue tambien forma parte del pipeline automatizado de GitHub Actions.

## Contexto academico

Este repositorio fue desarrollado como parte del **2do parcial de Ingenieria y Calidad de Software**, materia de **4to ano de Ingenieria en Sistemas**.

El foco del trabajo estuvo puesto en comprender y aplicar practicas de calidad relacionadas con:

- Integracion continua.
- Entrega y despliegue continuo.
- Automatizacion de pruebas.
- Validacion de artefactos de especificacion.
- Feedback automatico sobre el estado del proyecto.
- Despliegue automatizado.

## Autora

- Josefina Gorro
