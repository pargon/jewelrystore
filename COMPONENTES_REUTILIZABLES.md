# COMPONENTES REUTILIZABLES - DOCUMENTACIÓN

## 📦 Arquitectura Modular

### Ubicación
```
src/components/shared/
├── PageHeader.tsx       ✅ Hero section para páginas
├── CategoryFilters.tsx  ✅ Filtros de categorías  
├── ProductCard.tsx      ✅ Tarjeta individual de producto
├── ProductGrid.tsx      ✅ Grid responsivo de productos
├── CTASection.tsx       ✅ Sección de llamada a la acción
└── index.ts            ✅ Exportaciones centralizadas
```

## 🔧 Componentes Disponibles

### 1. PageHeader
**Propósito**: Hero section reutilizable para páginas de categorías
```tsx
// Uso básico (gradiente neutral por defecto)
<PageHeader
  title="Relojes de Lujo"
  description="Descripción de la página..."
/>

// Uso con personalización (opcional)
<PageHeader
  title="Relojes de Lujo"
  description="Descripción..."
  bgGradient="from-blue-100 to-indigo-100"
  textColor="text-indigo-800"
/>

// Uso con tema predefinido (opcional)
import { getPageTheme } from '../components/shared';
const theme = getPageTheme('relojes');
<PageHeader
  title="Relojes de Lujo"
  description="..."
  {...theme.pageHeader}
/>
```

### Temas Predefinidos
```tsx
// Disponibles: 'default', 'relojes', 'smartwatches', 'alianzas', 'composturas', 'contacto'
const theme = getPageTheme('smartwatches');
// theme.pageHeader = { bgGradient: 'from-green-100 to-teal-100', textColor: 'text-teal-800' }
// theme.ctaSection = { bgGradient: 'from-green-200 to-teal-200', textColor: 'text-teal-800' }
```

### 2. CategoryFilters  
**Propósito**: Filtros interactivos de categorías
```tsx
<CategoryFilters
  filters={[
    { id: 'todos', label: 'Todos', color: 'bg-indigo-200...', isActive: true },
    { id: 'lujo', label: 'Lujo', color: 'bg-rose-100...' }
  ]}
  onFilterClick={(filterId) => setActiveFilter(filterId)}
/>
```

### 3. ProductCard
**Propósito**: Tarjeta individual de producto
```tsx
<ProductCard
  product={{
    id: 1,
    name: "Producto",
    price: "$100",
    image: "...",
    description: "...",
    category: "categoria",
    brand: "marca"
  }}
  onViewDetails={(product) => console.log(product)}
  onAddToCart={(product) => console.log(product)}
  showAddButton={true} // opcional
/>
```

### 4. ProductGrid
**Propósito**: Grid responsivo para mostrar productos
```tsx
<ProductGrid
  products={filteredProducts}
  onViewDetails={handleViewDetails}
  onAddToCart={handleAddToCart}
  columns="3" // '1', '2', '3', '4', 'auto'
  showAddButton={true} // opcional
/>
```

### 5. CTASection
**Propósito**: Sección de llamada a la acción
```tsx
<CTASection
  title="¿Necesitas Asesoría?"
  description="Descripción..."
  buttonText="Contactar Asesor"
  onButtonClick={() => navigate('/contacto')}
  icon="⌚" // opcional
  bgGradient="from-indigo-200 to-purple-200" // opcional
  textColor="text-indigo-800" // opcional
/>
```

## 🎯 Ventajas de la Arquitectura Modular

### ✅ Reutilización
- **PageHeader**: Se puede usar en Relojes, Smartwatches, Alianzas, etc.
- **ProductGrid**: Funciona para cualquier tipo de producto
- **CategoryFilters**: Adaptable a cualquier sistema de filtros
- **CTASection**: Reutilizable en cualquier página

### ✅ Mantenimiento
- **Un solo lugar para cambios**: Modificar ProductCard actualiza todas las páginas
- **Consistencia de UI**: Todos los productos se ven igual
- **Fácil testing**: Cada componente se puede testear por separado

### ✅ Escalabilidad
- **Nuevas páginas**: Solo configurar datos, componentes ya listos
- **Nuevas funcionalidades**: Agregar props sin romper páginas existentes
- **Theming**: Cambios de colores/estilos centralizados

## 🚀 Uso en Otras Páginas

### Smartwatches.tsx (Ejemplo)
```tsx
import { PageHeader, CategoryFilters, ProductGrid, CTASection } from '../components/shared';

// Solo cambiar datos y configuración:
<PageHeader
  title="Smartwatches"
  description="Tecnología avanzada en tu muñeca..."
  bgGradient="from-green-100 to-teal-100"
/>

<ProductGrid
  products={smartwatchesData}
  columns="4"
/>

<CTASection
  title="¿Buscas un Smartwatch?"
  icon="📱"
  bgGradient="from-green-200 to-teal-200"
/>
```

### Alianzas.tsx (Ejemplo)  
```tsx
<PageHeader
  title="Alianzas de Oro"
  description="Alianzas 18K hechas a medida..."
  bgGradient="from-yellow-100 to-amber-100"
/>

<ProductGrid
  products={alianzasData}
  columns="2"
  showAddButton={false} // Solo consultas
/>

<CTASection
  title="Diseña tu Alianza"
  icon="💍"
  buttonText="Solicitar Cotización"
/>
```

## 📊 Estado del Refactor

### ✅ Completado
- **Relojes.tsx**: Refactorizado con arquitectura modular
- **5 componentes reutilizables**: Creados y documentados  
- **Filtros funcionales**: Sistema de filtrado implementado
- **Navegación integrada**: useNavigate para CTA

### 🔄 Próximos Pasos
1. **Smartwatches.tsx**: Aplicar misma arquitectura
2. **Alianzas.tsx**: Refactorizar con componentes
3. **Composturas.tsx**: Adaptar para servicios
4. **Contacto.tsx**: Usar CTASection si aplica

### 🎨 Personalización por Página

#### Opción 1: Por Defecto (Recomendado)
```tsx
// Usa gradientes neutros grises - Funciona para todas las páginas
<PageHeader title="Mi Página" description="..." />
<CTASection title="CTA" description="..." buttonText="Botón" />
```

#### Opción 2: Temas Predefinidos  
```tsx
// Para páginas que necesiten identidad visual específica
const theme = getPageTheme('smartwatches');
<PageHeader title="Smartwatches" {...theme.pageHeader} />
<CTASection title="CTA" {...theme.ctaSection} />
```

#### Opción 3: Personalización Manual
```tsx
// Para casos especiales únicos
<PageHeader 
  title="Página Especial"
  bgGradient="from-purple-100 to-pink-100"
  textColor="text-purple-800"
/>
```

**📋 Recomendación**: Usar **Opción 1** por defecto. Solo usar temas cuando la página realmente necesite diferenciación visual.

---
**Status**: ✅ Relojes refactorizado - Componentes reutilizables listos
