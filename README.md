![image](https://github.com/user-attachments/assets/04dcd388-a49d-427b-b005-72c2503141b1)![image](https://github.com/user-attachments/assets/02b63330-1ce6-4417-8c5e-7d2deca1ea88)
## 👉 Tutorial - [Video de Youtube](https://www.youtube.com/watch?v=u2lGfcKYHTs)

# Generador de Ideas de Proyectos

Este proyecto es una aplicación web diseñada para ayudar a los usuarios a generar ideas de proyectos personalizadas según una variedad de parámetros como el tipo de proyecto, nivel de dificultad, tecnologías deseadas y temas de interés. Utiliza tecnologías modernas y un modelo de IA para ofrecer resultados únicos y relevantes.

---

## **Funcionalidades Principales**

### **1. Entrada de Parámetros del Usuario**
Los usuarios pueden personalizar los siguientes parámetros para generar ideas:

- **Tipo de proyecto**: Opciones como Web, Móvil, IoT, IA, Backend, Fullstack.
- **Nivel de dificultad**: Básico, Intermedio o Avanzado.
- **Tiempo disponible**: Desde menos de una semana hasta más de un mes.
- **Tecnologías específicas**: Campo de texto con autocompletado para ingresar herramientas como React, Firebase, Python, etc.
- **Tema del proyecto**: Selección de categorías como Educación, Entretenimiento, E-commerce, entre otros, o la posibilidad de agregar un tema personalizado.

### **2. Generación de Ideas**
- **Lógica de Generación**: Un algoritmo combina los parámetros seleccionados para crear una descripción coherente y breve del proyecto.
- **Plantillas Dinámicas**: Se rellenan automáticamente con los datos proporcionados para garantizar resultados precisos.

### **3. Interfaz de Usuario**
- **Formulario de Entrada**: Campos organizados en secciones claras, validación mediante librerías como Formik o React Hook Form.
- **Resultados Generados**: Ideas mostradas en un panel con opciones para guardar, exportar o regenerar.

### **4. Funcionalidades Extras**
- **Historial de Ideas**: Almacena las ideas generadas para consultarlas posteriormente.
- **Compartir Ideas**: Opcion de compartir en redes sociales o exportar en formato PDF.
- **Filtros Avanzados**: Filtrar resultados por relevancia, dificultad o categoría.
- **Exportación a Notion** (Implementación futura).
- **Generación de Diagramas de Flujo**: Integración con Skalidraw para visualizar ideas de forma estructurada (Implementación futura).

---

## **Tecnologías Utilizadas**

### **Frontend**
- **Next.js 15**: Framework para SSR, server actions, y manejo eficiente del estado.
- **TailwindCSS**: Framework de estilos para una interfaz moderna y responsiva.
- **shadcn/ui**: Componentes estilizados para un diseño limpio y funcional.
- **TypeScript**: Tipado estático para mejorar la calidad del código.

### **Generación de Ideas**
- **OpenAI API**: Modelo de inteligencia artificial configurado para generar ideas en formato JSON Schema.
- **Zod**: Librería para validación y manejo robusto de datos en el servidor.

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
