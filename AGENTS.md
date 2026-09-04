# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto arrancable. Si el adjunto es una carcasa (docs/placeholders),
el asistente debe materializar la estructura del stack del briefing, sin resolver las fases del reto.

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
API REST con Express, TypeScript y Jest

### Reto
- Tema: TypeScript Express
- Seniority: junior-l1
- Tipo: practical
- Título: Implementación de una API REST en Express con TypeScript
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición y persistencia de productos — objetivo: Crear y persistir productos en el catálogo con validación de campos. — entregable (NO resolver): Endpoint POST funcional para crear productos con validación y persistencia.
- Fase 2: Gestión de errores y respuestas — objetivo: Mejorar la gestión de errores y asegurar que las respuestas sean coherentes y útiles para el cliente. — entregable (NO resolver): Middleware de manejo de errores implementado y probado con diferentes escenarios.
- Fase 3: Optimización y escalabilidad — objetivo: Optimizar la API para manejar un alto throughput y asegurar su escalabilidad. — entregable (NO resolver): API optimizada y escalable con métricas de rendimiento implementadas y probadas en un entorno de alta carga.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: src/index.ts ===
import express from 'express';
import productRoutes from './routes/productRoutes';

const app = express();
app.use(express.json());
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// === ARCHIVO: src/controllers/productController.ts ===
import { Request, Response } from 'express';
import { ProductService } from '../services/productService';
import { Product } from '../models/productModel';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product: Product = req.body;
    const newProduct = await ProductService.createProduct(product);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// === ARCHIVO: src/middlewares/errorHandler.ts ===
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
};

// === ARCHIVO: src/models/productModel.ts ===
export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

// === ARCHIVO: src/routes/productRoutes.ts ===
import express from 'express';
import { createProduct } from '../controllers/productController';
import { errorHandler } from '../middlewares/errorHandler';

const router = express.Router();

router.post('/', createProduct);
router.use(errorHandler);

export default router;

// === ARCHIVO: src/services/productService.ts ===
import { Product } from '../models/productModel';
import { validationUtils } from '../utils/validationUtils';

const products: Product[] = [];

export class ProductService {
  static async createProduct(product: Product): Promise<Product> {
    validationUtils.validateProduct(product);
    const existingProduct = products.find(p => p.name === product.name);
    if (existingProduct) {
      throw new Error('Product name already exists');
    }
    if (product.price < 0) {
      throw new Error('Price cannot be negative');
    }
    product.id = Date.now().toString();
    products.push(product);
    return product;
  }
}

// === ARCHIVO: src/utils/validationUtils.ts ===
import { Product } from '../models/productModel';

export const validationUtils = {
  validateProduct(product: Product) {
    if (!product.name ||!product.price ||!product.stock ||!product.category) {
      throw new Error('All fields are required');
    }
  }
};

// === ARCHIVO: tests/product.test.ts ===
import { createProduct } from '../src/controllers/productController';
import { ProductService } from '../src/services/productService';
import { Product } from '../src/models/productModel';
import request from 'supertest';
import express from 'express';

jest.mock('../src/services/productService');

const app = express();
app.use(express.json());
app.post('/products', createProduct);

describe('Product Controller', () => {
  it('should create a new product', async () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Test Product',
      price: 100,
      stock: 10,
      category: 'Test Category'
    };
    (ProductService.createProduct as jest.Mock).mockResolvedValue(mockProduct);
    const response = await request(app)
     .post('/products')
     .send(mockProduct);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(mockProduct);
  });

  it('should return an error for duplicate product name', async () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Test Product',
      price: 100,
      stock: 10,
      category: 'Test Category'
    };
    (ProductService.createProduct as jest.Mock).mockRejectedValue(new Error('Product name already exists'));
    const response = await request(app)
     .post('/products')
     .send(mockProduct);
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Product name already exists');
  });
});

```
