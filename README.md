# Generador de Ideas de Proyectos

Este proyecto es una aplicación web que ayuda a los usuarios a generar ideas de proyectos personalizadas según parámetros específicos como el tipo de proyecto, nivel de dificultad, tecnologías deseadas y temas de interés. Utiliza tecnologías modernas y un modelo de IA para ofrecer resultados precisos y relevantes.

---

## **Funcionalidades Principales**

### **1. Entrada de Parámetros del Usuario**
Los usuarios pueden personalizar los siguientes parámetros para generar ideas:

- **Tipo de proyecto**: Selección entre opciones como Web, Móvil, IoT, IA, Backend, Fullstack.
- **Nivel de dificultad**: Básico, Intermedio o Avanzado.
- **Tiempo disponible**: Rango definido desde menos de una semana hasta más de un mes.
- **Tecnologías específicas**: Campo de texto con autocompletado para ingresar herramientas como React, Firebase, Python, etc.
- **Tema del proyecto**: Selección de categorías como Educación, Entretenimiento, E-commerce, entre otros, o agregar un tema personalizado.

### **2. Generación de Ideas**
- **Lógica de Generación**: Un algoritmo combina los parámetros seleccionados para crear una descripción coherente y breve del proyecto.
- **Plantillas Dinámicas**: Se rellenan automáticamente con los datos proporcionados para garantizar resultados precisos.

### **3. Interfaz de Usuario**
- **Formulario de Entrada**: Campos organizados en secciones claras, validación mediante librerías como Formik o React Hook Form.
- **Resultados Generados**: Se muestran en un panel con opciones para guardar, exportar o regenerar ideas.

### **4. Funcionalidades Extras**
- **Historial de Ideas**: Guarda las ideas generadas para consultarlas más tarde.
- **Compartir Ideas**: Opción de compartir en redes sociales o exportar en formato PDF.
- **Filtros Avanzados**: Filtrar resultados por relevancia, dificultad o categoría.

---

## **Tecnologías Utilizadas**

### **Frontend**
- **Next.js**: Framework para SSR y enrutamiento eficiente.
- **TailwindCSS**: Framework de estilos para una interfaz moderna y responsiva.
- **shadcn/ui**: Componentes estilizados para un diseño limpio y funcional.
- **TypeScript**: Tipado estático para mejorar la calidad del código.

### **Generación de Ideas**
- **OpenAI API**: Modelo de inteligencia artificial para enriquecer las ideas generadas.

---

## **Cómo Usar**

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/CarlosPProjects/project-ideas-generator.git
   cd project-ideas-generator
   ```

2. **Instalar Dependencias**
   ```bash
   npm install --force
   ```

3. **Configurar Variables de Entorno**
   Crea un archivo `.env.local` con la siguiente variable:
   - `OPENAI_API_KEY`: Clave de la API de OpenAI.

4. **Iniciar el Servidor**
   ```bash
   npm run dev
   ```

5. Accede a la aplicación en [http://localhost:3000](http://localhost:3000).

---

## **Contribución**

¡Las contribuciones son bienvenidas! Por favor, sigue los siguientes pasos:
1. Haz un fork del repositorio.
2. Crea una rama con tus cambios.
3. Envía un pull request para revisión.

---

![image](https://github.com/user-attachments/assets/956ad1de-df5c-46a5-9f2c-c67c5c68ba4d)
