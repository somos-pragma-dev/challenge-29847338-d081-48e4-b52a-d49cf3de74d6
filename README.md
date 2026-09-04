# Implementación de una API REST en Express con TypeScript

Necesitamos una API REST que gestione productos en un catálogo. Los productos tienen un nombre, precio, stock y categoría. La API debe asegurar que no se permitan productos con nombres duplicados o precios negativos. Además, debe manejar adecuadamente los errores de validación y proporcionar respuestas coherentes al cliente. El catálogo opera en un entorno de alta concurrencia con un throughput esperado de 1 500 solicitudes por segundo en hora pico.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | TypeScript Express |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición y persistencia de productos

**Objetivo:** Crear y persistir productos en el catálogo con validación de campos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Diseña un endpoint POST para crear productos, asegurando que los campos nombre, precio, stock y categoría sean válidos.
- Implementa la persistencia de los productos en un almacenamiento provisional.
- Maneja los errores de validación y devuelva respuestas apropiadas al cliente.

**Entregable:** Endpoint POST funcional para crear productos con validación y persistencia.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejarías la concurrencia y la idempotencia en un entorno de alta carga.
- Piensa en los posibles errores de validación y cómo comunicarlos al cliente de manera efectiva.

</details>

### Fase 2: Gestión de errores y respuestas

**Objetivo:** Mejorar la gestión de errores y asegurar que las respuestas sean coherentes y útiles para el cliente.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa un middleware para manejar los errores de validación y otros errores comunes en la API.
- Asegúrate de que las respuestas de error incluyan información útil para el cliente.
- Prueba el endpoint con diferentes escenarios de error para asegurar que las respuestas sean coherentes.

**Entregable:** Middleware de manejo de errores implementado y probado con diferentes escenarios.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo categorizar y documentar los diferentes tipos de errores que pueden ocurrir.
- Piensa en cómo mejorar la experiencia del usuario a través de respuestas de error claras y útiles.

</details>

### Fase 3: Optimización y escalabilidad

**Objetivo:** Optimizar la API para manejar un alto throughput y asegurar su escalabilidad.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Añade métricas de rendimiento a la API para monitorear el throughput y la latencia.
- Optimiza el código para manejar un throughput de 1 500 solicitudes por segundo.
- Implementa estrategias de escalabilidad, como la distribución de carga o el uso de caché.
- Prueba la API en un entorno de alta carga para asegurar que cumple con las expectativas de rendimiento.

**Entregable:** API optimizada y escalable con métricas de rendimiento implementadas y probadas en un entorno de alta carga.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo usarías herramientas de monitoreo y profiling para identificar y solucionar cuellos de botella.
- Piensa en diferentes estrategias de escalabilidad y cómo implementarlas en tu API.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un endpoint en una API REST y cuál es su propósito?
- **paraQueSirve**: ¿Para qué sirve la validación de campos en una API REST?
- **comoSeUsa**: ¿Cómo se usa un middleware en Express para manejar errores?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir al crear un endpoint en Express y cómo se pueden manejar?
- **queDecisionesImplica**: ¿Qué decisiones implica la optimización y escalabilidad de una API REST?

## Criterios de Evaluacion

- Implementación correcta del endpoint POST para crear productos con validación y persistencia.
- Middleware de manejo de errores implementado y probado con diferentes escenarios.
- API optimizada y escalable con métricas de rendimiento implementadas y probadas en un entorno de alta carga.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
