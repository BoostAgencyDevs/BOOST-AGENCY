# 📋 DOCUMENTACIÓN COMPLETA - PROYECTO BOOST AGENCY

## 🏗️ 1. ESTRUCTURA GENERAL DEL PROYECTO

```
Pagina_Johana/
├── 📁 frontend/                    # Aplicación Angular (Cliente)
│   ├── 📁 src/
│   │   ├── 📁 app/
│   │   │   ├── 📁 pages/          # Componentes de páginas
│   │   │   ├── 📁 shared/         # Servicios compartidos
│   │   │   └── 📁 layout/         # Componente de layout
│   │   ├── 📁 assets/             # Imágenes, logos, fuentes
│   │   └── 📁 environments/       # Configuración de entornos
│   ├── 📄 angular.json            # Configuración de Angular
│   ├── 📄 package.json            # Dependencias del frontend
│   ├── 📄 tailwind.config.js      # Configuración de Tailwind CSS
│   └── 📄 styles.css              # Estilos globales
│
├── 📁 backend/                     # API Node.js + Express (Servidor)
│   ├── 📁 content/                 # Archivos JSON de datos
│   │   ├── 📁 formularios/        # Formularios de contacto
│   │   ├── 📄 blog.json           # Contenido del blog
│   │   ├── 📄 contenido.json      # Contenido general
│   │   ├── 📄 fundacion.json      # Contenido de fundación
│   │   ├── 📄 planes.json         # Contenido de planes
│   │   ├── 📄 servicios.json      # Contenido de servicios
│   │   └── 📄 tienda.json         # Contenido de tienda
│   ├── 📁 uploads/                 # Carpeta para subidas de archivos
│   ├── 📄 server.js               # Servidor principal
│   └── 📄 package.json            # Dependencias del backend
│
├── 📄 package.json                 # Dependencias raíz
└── 📄 tailwind.config.js          # Configuración Tailwind raíz
```

---

## 🎨 2. FRONTEND (Angular)

### **Información del Proyecto:**
- **Nombre del proyecto:** `frontend` (según angular.json)
- **Versión Angular:** 17.0.0
- **Framework CSS:** Tailwind CSS

### **Archivos de Configuración:**
- **`angular.json`:** Ubicado en `frontend/angular.json`
- **`package.json`:** Ubicado en `frontend/package.json`
- **`tailwind.config.js`:** Ubicado en `frontend/tailwind.config.js`
- **`styles.css`:** Ubicado en `frontend/src/styles.css`

### **Estructura de Componentes:**
```
frontend/src/app/pages/
├── 📁 boostcast/          # Componente Boostcast
├── 📁 contacto/           # Componente de Contacto
├── 📁 fundacion/          # Componente de Fundación
├── 📁 futuro/             # Componente Futuro
├── 📁 inicio/             # Componente de Inicio (Página principal)
├── 📁 nosotros/           # Componente Nosotros
├── 📁 planes/             # Componente de Planes
├── 📁 servicios/          # Componente de Servicios
└── 📁 tienda/             # Componente de Tienda
```

### **Assets y Recursos:**
- **Ubicación:** `frontend/src/assets/`
- **Imágenes:** `frontend/src/assets/images/`
  - `Foto_jhoana.jpg` - Foto de la CEO
  - `hero-image.svg` - Imagen del hero
  - `Logo_Principal.png` - Logo principal

### **Generación del Build:**
```bash
# Comando para generar el build
ng build

# Ubicación del build generado
dist/frontend/

# Para producción
ng build --configuration production
```

---

## ⚙️ 3. BACKEND (Node.js + Express)

### **Archivo Principal:**
- **`server.js`:** Ubicado en `backend/server.js`

### **Rutas API Principales:**
```
/api/contenido              # Obtener contenido general
/api/blog                   # Contenido del blog
/api/servicios              # Contenido de servicios
/api/planes                 # Contenido de planes
/api/fundacion              # Contenido de fundación
/api/tienda                 # Contenido de tienda
/api/formularios/contacto   # Envío de formulario de contacto
/api/formularios/cotizacion # Envío de formulario de cotización
/api/formularios/soporte    # Envío de formulario de soporte
/api/upload                 # Subida de archivos
```

### **Archivos de Datos (JSON):**
```
backend/content/
├── 📄 contenido.json       # Contenido general del sitio
├── 📄 blog.json           # Entradas del blog
├── 📄 servicios.json      # Información de servicios
├── 📄 planes.json         # Planes y precios
├── 📄 fundacion.json      # Información de fundación
├── 📄 tienda.json         # Productos de la tienda
└── 📁 formularios/
    ├── 📄 leads.json      # Datos de leads
    └── 📄 soporte.json    # Tickets de soporte
```

### **Carpeta de Subidas:**
- **Ubicación:** `backend/uploads/`
- **Propósito:** Almacenar archivos subidos por usuarios

---

## 🔗 4. CONEXIÓN FRONTEND – BACKEND

### **Servicio de Comunicación:**
- **Archivo:** `frontend/src/app/shared/services/contenido.service.ts`
- **Método:** HttpClient de Angular

### **Configuración de Entorno:**
```typescript
// frontend/src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

### **Métodos del Servicio:**
```typescript
// Obtener contenido general
getContenido(): Observable<any>

// Obtener contenido específico
getSeccionContenido(seccion: string): Observable<any>

// Actualizar contenido (admin)
updateContenido(seccion: string, content: any): Observable<any>

// Enviar formularios
submitContactForm(formData: any): Observable<any>
submitQuoteForm(formData: any): Observable<any>
submitSupportForm(formData: any): Observable<any>

// Subir archivos
uploadImage(file: File): Observable<any>
```

---

## 🚀 5. OBSERVACIONES Y COMANDOS

### **Iniciar el Backend:**
```bash
cd backend
npm install
npm start          # Inicia el servidor en puerto 3000
# o
npm run dev        # Modo desarrollo con nodemon
```

### **Iniciar el Frontend:**
```bash
cd frontend
npm install
ng serve           # Inicia en http://localhost:4200
# o
npm start          # Alias para ng serve
```

### **Generar Build para Producción:**
```bash
cd frontend
ng build --configuration production
```

### **Despliegue en Netlify:**
- **Directorio a subir:** `frontend/dist/frontend/`
- **Comando de build:** `ng build`
- **Directorio de salida:** `dist/frontend/`

### **Puertos por Defecto:**
- **Frontend:** `http://localhost:4200`
- **Backend:** `http://localhost:3000`

### **Dependencias Principales:**
- **Frontend:** Angular 17, Tailwind CSS, RxJS
- **Backend:** Express, CORS, Multer, Path

---

## 📝 NOTAS ADICIONALES

- El proyecto utiliza **Tailwind CSS** para estilos
- La arquitectura sigue el patrón **MVC** (Model-View-Controller)
- Los datos se almacenan en archivos **JSON** (no hay base de datos)
- El frontend es una **SPA** (Single Page Application)
- El backend actúa como **API REST** para el frontend
- La comunicación se realiza mediante **HTTP requests** (GET, POST)

---

*Documentación generada para el proyecto BOOST AGENCY - Versión 1.0* 