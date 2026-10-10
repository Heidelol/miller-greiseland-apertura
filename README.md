# Miller Greiseland Studio — Landing de Inauguración y Promociones

Landing independiente de invitación y promociones de apertura para **Miller Greiseland Studio**.
Diseñada con estilo editorial de lujo silencioso, rápida, ligera y coherente con la identidad visual del estudio.

---

## 📌 Proyecto Independiente

Este proyecto está completamente separado del sitio principal (`miller-graceland`):
- Repositorio y carpeta independientes (`miller-greiseland-apertura`).
- **Repositorio en GitHub:** [https://github.com/Heidelol/miller-greiseland-apertura](https://github.com/Heidelol/miller-greiseland-apertura)
- **Despliegue oficial en Vercel:** [https://miller-greiseland-apertura.vercel.app](https://miller-greiseland-apertura.vercel.app)
- Sin dependencias de importación hacia otros proyectos.
- Sin conexión a bases de datos (Supabase), pagos, carritos ni paneles administrativos.
- Desplegado en su propio proyecto en Vercel conservando intacto `miller-graceland-demo`.

---

## 🚀 Cómo ejecutar localmente

El proyecto está configurado para ejecutarse en el puerto **5174** (evitando cualquier conflicto con el puerto habitual `5173` del sitio principal):

```bash
# 1. Acceder al directorio del proyecto
cd /Users/ho/Documents/Codex/2026-09-23/qu/work/miller-greiseland-apertura

# 2. Instalar dependencias (si es necesario)
npm install

# 3. Iniciar el servidor de desarrollo en http://localhost:5174
npm run dev

# 4. O compilar y previsualizar la versión de producción
npm run build
npm run preview
```

---

## ⚙️ Configuración Centralizada

Toda la información del evento, fechas, textos, promociones y enlaces de contacto se encuentra centralizada en:
📁 `src/config/inauguration.ts`

### Propiedades principales:
- `year`: Año centralizado (`2026`).
- `startDateIso`: `'2026-10-15'`
- `endDateIso`: `'2026-10-17'`
- `datesDisplay`: `'Del 15 al 17 de octubre'`
- `timeZone`: `'America/Cancun'`
- `inaugurationTime`: `null` (pendiente de confirmación por el negocio)

### Comportamiento del reloj y cuenta regresiva:
1. **Mientras `inaugurationTime` sea `null`**:
   - Muestra las fechas del evento y el aviso *"Muy pronto abriremos las puertas"*.
   - Los dígitos del contador permanecen ocultos.
2. **Al definir la hora (ejemplo: `'11:00'`)**:
   - El contador se activa automáticamente calculando el tiempo restante exacto considerando la zona horaria `America/Cancun`.
3. **Al llegar al momento de apertura**:
   - Detiene la cuenta regresiva y muestra *"¡Llegó el gran día!"*.

---

## ✂️ Promociones de Inauguración

Precios exclusivos válidos durante el evento:
1. **Diseño de cabello** — $2,200 MXN *(Para clientas nuevas. Morena Iluminada y Brunette en cabello virgen)*.
2. **Brazilian Blowout** — $1,500 MXN *(Cualquier largo)*.
3. **Tratamiento de hidratación con corte** — $1,000 MXN *(Promoción 2×1 con consulta de condiciones vía WhatsApp)*.
4. **Retoque de tinte con hidratación profunda** — $500 MXN.
5. **Tinte completo** — $1,000 MXN.

---

## 📋 Pendientes de Negocio para el Cliente

Antes del lanzamiento oficial, Miller Greiseland debe confirmar:
1. **Hora exacta de inauguración**: Para activar la cuenta regresiva (ej. 10:00, 11:00, etc.).
2. **Alcance de los 5 lugares anunciados**: Si son 5 lugares globales para el evento, por día, o por promoción.
3. **Condiciones del 2×1**: Si la promoción de hidratación con corte aplica para 2 personas o para 2 sesiones/servicios.
