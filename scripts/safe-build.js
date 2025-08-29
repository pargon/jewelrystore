#!/usr/bin/env node

/**
 * SCRIPT DE BUILD SEGURO
 * Ejecuta ESLint primero y solo continúa con build si pasa
 * Proporciona feedback visual y manejo de errores
 */

const { exec } = require('child_process');

// Colores para output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// Función para imprimir con colores
const colorLog = (message, color = 'reset') => {
  // eslint-disable-next-line no-console
  console.log(`${colors[color]}${message}${colors.reset}`);
};

// Función para ejecutar comandos con promesas
const execPromise = (command) => {
  return new Promise((resolve, reject) => {
    const process = exec(command, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stdout, stderr });
      } else {
        resolve({ stdout, stderr });
      }
    });

    // Mostrar output en tiempo real
    process.stdout.on('data', (data) => {
      process.stdout.write(data);
    });

    process.stderr.on('data', (data) => {
      process.stderr.write(data);
    });
  });
};

// Función principal
const safeBuild = async () => {
  const startTime = Date.now();

  try {
    colorLog('\n🔍 PASO 1: Ejecutando ESLint...', 'cyan');
    colorLog('==========================================', 'blue');
    
    await execPromise('npm run lint');
    
    colorLog('\n✅ ESLint pasó sin errores!', 'green');
    colorLog('==========================================', 'blue');

    colorLog('\n🏗️  PASO 2: Ejecutando Build...', 'cyan');
    colorLog('==========================================', 'blue');
    
    await execPromise('npm run build');
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    colorLog('\n🎉 BUILD COMPLETADO EXITOSAMENTE!', 'green');
    colorLog('==========================================', 'green');
    colorLog(`⏱️  Tiempo total: ${duration}s`, 'magenta');
    colorLog('🚀 El proyecto está listo para deployment!', 'green');
    colorLog('==========================================', 'green');

  } catch (error) {
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    colorLog('\n❌ BUILD FALLÓ!', 'red');
    colorLog('==========================================', 'red');
    colorLog(`⏱️  Tiempo transcurrido: ${duration}s`, 'magenta');
    
    if (error.stdout && error.stdout.includes('eslint')) {
      colorLog('🚨 Error en ESLint - Build cancelado por problemas de código', 'red');
      colorLog('💡 Ejecuta "npm run lint:fix" para corregir automáticamente', 'yellow');
    } else {
      colorLog('🚨 Error en el proceso de Build', 'red');
    }
    
    colorLog('==========================================', 'red');
    process.exit(1);
  }
};

// Ejecutar si es llamado directamente
if (require.main === module) {
  colorLog('\n🚀 INICIANDO BUILD SEGURO', 'bright');
  colorLog('Diamond Jewelry - Build Process', 'cyan');
  colorLog('==========================================', 'blue');
  safeBuild();
}

module.exports = { safeBuild };
