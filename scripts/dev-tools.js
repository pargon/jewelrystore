#!/usr/bin/env node

/**
 * SCRIPT DE HERRAMIENTAS DE DESARROLLO
 * Proporciona varias opciones para el flujo de trabajo de desarrollo
 */

const { exec } = require('child_process');
const process = require('process');

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
    const childProcess = exec(command, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stdout, stderr });
      } else {
        resolve({ stdout, stderr });
      }
    });

    // Mostrar output en tiempo real
    childProcess.stdout.on('data', (data) => {
      process.stdout.write(data);
    });

    childProcess.stderr.on('data', (data) => {
      process.stderr.write(data);
    });
  });
};

// Mostrar menú de opciones
const showMenu = () => {
  colorLog('\n🛠️  HERRAMIENTAS DE DESARROLLO - Diamond Jewelry', 'bright');
  colorLog('================================================', 'blue');
  colorLog('1. 🔍 Ejecutar solo ESLint', 'cyan');
  colorLog('2. 🔧 Ejecutar ESLint con corrección automática', 'cyan');
  colorLog('3. 🏗️  Build seguro (Lint + Build)', 'cyan');
  colorLog('4. ✨ Build completo (Lint:fix + Build)', 'cyan');
  colorLog('5. 🚀 Preparar para deployment', 'cyan');
  colorLog('6. ❌ Salir', 'red');
  colorLog('================================================', 'blue');
  colorLog('Selecciona una opción (1-6): ', 'yellow');
};

// Ejecutar acción basada en la opción
const executeAction = async (option) => {
  const startTime = Date.now();

  try {
    switch (option) {
      case '1':
        colorLog('\n🔍 Ejecutando ESLint...', 'cyan');
        await execPromise('npm run lint');
        colorLog('\n✅ ESLint completado!', 'green');
        break;

      case '2':
        colorLog('\n🔧 Ejecutando ESLint con corrección automática...', 'cyan');
        await execPromise('npm run lint:fix');
        colorLog('\n✅ ESLint con fix completado!', 'green');
        break;

      case '3':
        colorLog('\n🏗️  Ejecutando Build Seguro...', 'cyan');
        await execPromise('npm run build:safe');
        break;

      case '4':
        colorLog('\n✨ Ejecutando Build Completo...', 'cyan');
        await execPromise('npm run build:full');
        colorLog('\n✅ Build completo exitoso!', 'green');
        break;

      case '5':
        colorLog('\n🚀 Preparando para deployment...', 'cyan');
        await execPromise('npm run deploy');
        break;

      case '6':
        colorLog('\n👋 ¡Hasta luego!', 'magenta');
        process.exit(0);
        break;

      default:
        colorLog('\n❌ Opción inválida. Intenta nuevamente.', 'red');
        return false;
    }

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    colorLog(`\n⏱️  Tiempo: ${duration}s`, 'magenta');
    return true;

  } catch (error) {
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    colorLog('\n❌ Error en la ejecución!', 'red');
    colorLog(`⏱️  Tiempo: ${duration}s`, 'magenta');
    
    if (error.stdout && error.stdout.includes('eslint')) {
      colorLog('💡 Ejecuta la opción 2 para corregir automáticamente', 'yellow');
    }
    
    return false;
  }
};

// Función principal interactiva
const main = async () => {
  const args = process.argv.slice(2);
  
  // Si se pasa un argumento, ejecutar directamente
  if (args.length > 0) {
    const option = args[0];
    await executeAction(option);
    return;
  }

  // Modo interactivo
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const askOption = () => {
    showMenu();
    rl.question('', async (option) => {
      const success = await executeAction(option.trim());
      
      if (option !== '6' && success) {
        colorLog('\n¿Deseas ejecutar otra acción? (y/n): ', 'yellow');
        rl.question('', (answer) => {
          if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 's') {
            askOption();
          } else {
            colorLog('\n👋 ¡Hasta luego!', 'magenta');
            rl.close();
          }
        });
      } else if (option !== '6') {
        askOption();
      } else {
        rl.close();
      }
    });
  };

  askOption();
};

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = { executeAction, showMenu };
