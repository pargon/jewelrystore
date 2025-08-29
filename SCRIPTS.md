# Diamond Jewelry Frontend - Scripts de Desarrollo

Este proyecto incluye varios scripts optimizados para mejorar el flujo de trabajo de desarrollo con **controles de calidad automatizados**.

## 🚀 Scripts Principales

### Scripts Básicos
- `npm start` - Inicia el servidor de desarrollo
- `npm test` - Ejecuta los tests
- `npm run build` - Build básico (sin verificaciones previas)

### Scripts de Linting
- `npm run lint` - Ejecuta ESLint para verificar la calidad del código
- `npm run lint:fix` - Ejecuta ESLint y corrige automáticamente los problemas que puede resolver

### Scripts de Build Seguro
- `npm run build:safe` - **RECOMENDADO** - Build con verificación previa de ESLint
- `npm run build:full` - Build después de corregir automáticamente problemas de lint
- `npm run prebuild` - Se ejecuta automáticamente antes del build normal
- `npm run prepare` - Prepara el código (lint + build)

### Scripts de Deployment
- `npm run deploy` - Pipeline completo de deployment (lint + build + mensaje de éxito)
- `npm run check` - Verificación rápida de calidad del código

## 🛠️ Herramientas de Desarrollo Avanzadas

### Script Interactivo
```bash
npm run dev
```
Abre un menú interactivo con opciones:
1. 🔍 Ejecutar solo ESLint
2. 🔧 Ejecutar ESLint con corrección automática  
3. 🏗️ Build seguro (Lint + Build)
4. ✨ Build completo (Lint:fix + Build)
5. 🚀 Preparar para deployment
6. ❌ Salir

### Scripts Rápidos (sin menú)
- `npm run quick-check` - Solo ESLint
- `npm run quick-fix` - ESLint con fix automático
- `npm run quick-build` - Build seguro directo
- `npm run quick-deploy` - Deployment directo

## ⚡ Flujo de Trabajo Recomendado

### Para Desarrollo Diario
```bash
# Verificar código antes de commit
npm run quick-check

# Corregir problemas automáticamente
npm run quick-fix
```

### Para Build y Deployment
```bash
# Build seguro (RECOMENDADO)
npm run build:safe

# O usar el pipeline completo de deployment
npm run deploy
```

### Para Explorar Opciones
```bash
# Abrir menú interactivo
npm run dev
```

## 🔧 Configuración de ESLint

El proyecto incluye configuración ESLint optimizada para React + TypeScript:
- Reglas de calidad de código
- Detección de problemas comunes
- Ignora archivos de build y dependencias
- Compatible con las mejores prácticas de React

## 💡 Consejos

1. **Siempre usa `npm run build:safe`** en lugar de `npm run build` para asegurar calidad
2. **Ejecuta `npm run quick-check`** antes de hacer commits
3. **Usa `npm run quick-fix`** para corregir problemas menores automáticamente
4. **El script `npm run dev`** es útil cuando trabajas en múltiples tareas

## 🚨 Manejo de Errores

Los scripts están diseñados para:
- ✅ **Detener el build si hay errores de lint**
- ✅ **Proporcionar feedback visual claro**
- ✅ **Mostrar sugerencias de corrección**
- ✅ **Medir tiempo de ejecución**

Si un script falla:
1. Lee el mensaje de error específico
2. Usa `npm run quick-fix` para correcciones automáticas
3. Revisa manualmente los errores que no se pueden auto-corregir
4. Vuelve a ejecutar el script

## 📁 Estructura de Scripts

```
scripts/
├── safe-build.js    # Script principal de build seguro
└── dev-tools.js     # Herramientas interactivas de desarrollo
```

---

**¡Happy Coding!** 💎✨
