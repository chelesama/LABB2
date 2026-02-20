# Laboratorio 2 - Manipulación del DOM con JavaScript

## Descripción del Proyecto
Este proyecto consiste en una página web interactiva que utiliza diferentes métodos de selección del DOM en JavaScript para manipular elementos HTML.

Se utilizan múltiples etiquetas HTML y diferentes tipos de selectores vistos en clase.

---

## Tabla de Selectores Utilizados

| Tipo de selector    | Elemento afectado            | Descripción |
|---------------------|------------------------------|-------------------------|
| getElementById        | h1 (titulo)             | Cambia el texto del título |
| getElementById        | button (btnAgregar)     | Agrega una nueva tarea     |
| getElementsByClassName| button (btnColor)       | Activa modo oscuro         |
| getElementsByTagName  | ul                      | Agrega elementos li a la lista|
| querySelector         | a (miEnlace)            | Muestra un mensaje         |
| querySelector         | input[type="text"]      | Detecta texto escrito      |
| querySelectorAll      | .card                   | Permite aplicar eventos a todas las tarjetas |
| querySelectorAll      | #lista li               | Cuenta las tareas existentes|

---

## Preguntas Teóricas

### ¿Cuál es la ventaja de getElementById frente a querySelector?

getElementById es más rápido y específico porque busca un único elemento por su ID.  
querySelector es más flexible porque permite usar cualquier selector CSS.

---

### ¿Cuándo usar querySelectorAll en lugar de querySelector?

Se usa querySelectorAll cuando se necesita seleccionar múltiples elementos.  

querySelector devuelve un solo elemento.  
querySelectorAll devuelve una colección de elementos (NodeList).