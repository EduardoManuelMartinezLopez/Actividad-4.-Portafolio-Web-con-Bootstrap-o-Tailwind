# Portafolio Web Personal - Eduardo Manuel Martinez Lopez

**Proyecto:** Actividad 4 - Portafolio Web con Bootstrap o Tailwind  
**Nombre:** Eduardo Manuel Martinez Lopez 

**Descripción Breve:**  
Este es un portafolio web personal interactivo y responsivo, desarrollado como proyecto académico para demostrar mis competencias técnicas en el desarrollo Front-End, maquetación web y manejo de repositorios en GitHub.

---

## Descripción del Proyecto

* **Framework CSS:** Bootstrap 5 (implementado vía CDN).
* **Plantilla de Referencia:** El diseño visual está fuertemente inspirado en la plantilla **"Personal" de StartBootstrap**. 
* **Link de la plantilla original:** [StartBootstrap - Personal](https://startbootstrap.com/previews/personal)

### Secciones del Portafolio

El portafolio se compone de un menú de navegación adherente (sticky-top) y las siguientes secciones principales:

1. **Inicio:** Sección "Hero" de presentación que incluye un título con texto en degradado, botones de llamada a la acción y una fotografía formal adaptada con bordes orgánicos modernos.
2. **Sobre Mí:** Breve resumen de mi perfil, mi pasión por la tecnología, y mi enfoque actual y futuro en el desarrollo de software (Front-End y Full-Stack).
3. **Habilidades:** Dividida en dos subsecciones visuales para mostrar claridad profesional:
   * **Competencias Actuales:** Tecnologías que ya domino y he aplicado en proyectos reales (HTML5, CSS3, Bootstrap 5, JavaScript ES6, Bases de Datos, y Git/GitHub).
   * **En Proyección (Aspiracionales):** Tecnologías que planeo aprender para completar mi perfil (React/Vue, Node.js y TypeScript).
4. **Proyectos:** Vitrina tipo cuadrícula (Grid) que muestra sistemas desarrollados previamente, incluyendo un E-Commerce de Ropa, un Dashboard para Gimnasio, un Sistema de Restaurante y una Colección de Lógica JS.

---

## Proceso de Creación y Modificaciones

Para este proyecto, decidí tomar la plantilla **"Personal" de StartBootstrap** como mi máxima inspiración visual, pero en lugar de simplemente descargarla y rellenarla, **armé el portafolio desde cero**. Esto me permitió tener un control absoluto del código y entender cada pieza del rompecabezas. 

Aquí detallo el paso a paso, qué modifiqué respecto a una plantilla tradicional y por qué lo hice:

### 1. Estructura Base y Navegación
* **Paso a paso:** Inicié creando el archivo `index.html` e importando Bootstrap 5 mediante CDN. Construí un menú de navegación adherente (`sticky-top`) para que siempre esté accesible al usuario.
* **Qué modifiqué y por qué:** Las plantillas básicas suelen tener menús estáticos y aburridos. Para darle más vida, agregué un script en el archivo `portafolio.js` que detecta el *scroll* de la página. Si el usuario baja más de 10 píxeles, el menú cambia dinámicamente su sombra de `shadow-sm` a `shadow`. Hice esto porque mejora la experiencia de usuario (UX), dándole profundidad visual y separando el menú del contenido que va pasando por debajo.

### 2. Diseño Visual y Tipografía
* **Paso a paso:** Cree el archivo `portafolio.css` para sobreescribir los estilos genéricos de Bootstrap.
* **Qué modifiqué y por qué:** Cambié la fuente por defecto a **'Plus Jakarta Sans'**. Lo hice porque las tipografías del sistema a veces se ven muy planas, y esta fuente le da un aspecto mucho más moderno y tecnológico al portafolio. Además, para replicar la identidad de la plantilla original, creé las clases CSS `.text-gradient` y `.bg-gradient-primary-to-secondary`. Esto me permitió pintar los títulos principales con un degradado de azul a rosa vivo, rompiendo con la monotonía de los textos oscuros tradicionales.

### 3. La Fotografía de Perfil (Geometría Orgánica)
* **Paso a paso:** En la sección "Hero" (Inicio), agregué mi foto real y formal, tal como pide la rúbrica.
* **Qué modifiqué y por qué:** En lugar de dejar la típica foto cuadrada o redonda (que es lo que traen casi todas las plantillas base), diseñé un contenedor con la clase `.profile-shape-bg`. Le apliqué un `border-radius` muy específico y asimétrico (`30% 70% 70% 30% / 30% 30% 70% 70%`) y un fondo sutilmente degradado. Hice esto porque quería demostrar un dominio de CSS3 avanzado, dándole a mi foto un marco orgánico, dinámico y mucho más creativo que un simple círculo.

### 4. Estructuración del Contenido (Habilidades y Proyectos)
* **Paso a paso:** Maqueté las tarjetas de mis proyectos usando el sistema de rejillas nativo de Bootstrap (`row`, `col`, `card`).
* **Qué modifiqué y por qué:**
    * **En Habilidades:** La rúbrica pedía no dejar secciones vacías. Para que el diseño tuviera total sentido, dividí esta sección en dos áreas: **Competencias Actuales** (HTML, CSS, JS, Bootstrap, Bases de datos, que son reales y probadas en mis proyectos) y **En Proyección** (React, Node.js, TypeScript, que son mis metas a corto plazo). Así, el portafolio se ve completo y refleja mi realidad profesional actual.
    * **En Proyectos:** En el archivo `portafolio.css`, añadí una transición a las tarjetas de los proyectos (`.project-card:hover`) para que, al pasar el mouse sobre ellas, se eleven ligeramente (`transform: translateY(-5px)`) y proyecten una sombra más fuerte. Apliqué esto porque las tarjetas estáticas no invitan a la interacción; este sutil movimiento le indica al usuario que el elemento es clickeable, importante y moderno.

---

## Capturas de Pantalla

A continuación, se muestra el portafolio funcionando correctamente en mi navegador local:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/89da5584-532b-4284-84a9-a6255e036885" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b2bdb61a-3a76-4532-b31f-51285d2b65a4" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/27c41f62-931f-489d-ab11-bafc9605b2ff" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6fc31c91-350e-48f8-ae0a-8537fa1c0ee5" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e9aadc88-b373-400d-bba8-34e32f8a19a6" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/28c740ae-dc99-4e1d-959c-e9cf8f1494d5" />
