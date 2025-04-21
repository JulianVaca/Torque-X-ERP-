# ⚙️ Torque X

**Torque X** es una plataforma web desarrollada para revolucionar el proceso de compra y venta de motocicletas deportivas, integrando herramientas avanzadas de gestión empresarial. A través de una arquitectura basada en microservicios, Torque X ofrece una solución escalable, segura y eficiente que permite a concesionarios, clientes y administradores interactuar dentro de un ecosistema digital robusto y moderno.

## 🚀 Objetivo del proyecto

El propósito principal de Torque X es digitalizar y centralizar los procesos operativos de los concesionarios de motocicletas, brindando un sistema integral que incluya:

- Gestión de inventario en tiempo real.
- Automatización de citas para pruebas de manejo o asesorías.
- Facturación electrónica.
- Gestión de usuarios con roles diferenciados (cliente, administrador, concesionario).
- Reseñas y calificaciones de productos y servicios.

## 🧱 Arquitectura del sistema

El sistema se basa en una arquitectura de microservicios con una capa **BFF (Backend for Frontend)** para mejorar la comunicación entre el frontend y los servicios del backend. Esta estructura modular facilita la escalabilidad, mantenibilidad y pruebas del sistema.

- **Frontend:** `React.js` + `TailwindCSS`
- **Backend:** `Node.js` + `Express.js`
- **Base de datos:** `PostgreSQL`
- **Autenticación:** JWT (JSON Web Tokens)
- **Servicios auxiliares:** APIs RESTful, mensajería opcional (WhatsApp o email), balanceadores Nginx, Firewalls configurables

## 🔍 Funcionalidades principales

- Autenticación segura con validación de campos.
- Gestión y visualización de citas agendadas.
- Registro y administración de inventarios de motocicletas por concesionario.
- Facturación dinámica por cliente y producto.
- Panel de administración para gestionar usuarios, permisos y productos.
- Sistema de reseñas y calificación postventa.
- Notificaciones automáticas por eventos importantes.

## 🧪 Pruebas funcionales

Se han ejecutado múltiples pruebas centradas en validar el flujo de autenticación, la validación de formularios, el control de errores y la usabilidad en distintas interfaces. Cada caso de prueba fue evaluado bajo criterios de éxito específicos y documentado en la sección de Sprint Review.

## 📈 Atributos de calidad verificados

- **Rendimiento:** Respuesta inferior a 2 segundos para solicitudes comunes.
- **Seguridad:** Protección de datos mediante HTTPS, sanitización de inputs y JWT.
- **Escalabilidad:** Soporte para múltiples usuarios simultáneos con balanceadores de carga.
- **Mantenibilidad:** Modularización de componentes y uso de patrones como MVC.

## 🛠️ Requisitos técnicos

- Node.js >= 18.x
- PostgreSQL >= 14.x
- NPM o Yarn
- Docker (opcional para despliegue)

## 📦 Instalación local

```bash
git clone https://github.com/tu-usuario/torque-x.git
cd torque-x
npm install
npm run dev
```

Configura las variables de entorno (`.env`) para el backend y frontend con las claves necesarias (base de datos, JWT secret, etc.)

## 👨‍💻 Equipo de desarrollo
  
- Nicolás Ramírez  
- Camila Correa  
- Felipe Arenas
- Julián Vaca

## 📄 Licencia

Este proyecto está licenciado bajo la **MIT License**. Consulta el archivo `LICENSE` para más detalles.
