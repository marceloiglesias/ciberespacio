/**
 * Script para obtener automáticamente los nombres de campos de Zoho Forms
 *
 * CÓMO USAR:
 * 1. Abre el formulario de Zoho en tu navegador:
 *    https://forms.zohopublic.com/julioiglesiascibere1/form/ContactUs/formperma/ureW1KKpkQJID7CeMzhKuj6moDq8DdhHHjJwETUcos0
 *
 * 2. Abre la consola del navegador (F12)
 *
 * 3. Copia y pega TODO este archivo en la consola
 *
 * 4. Presiona Enter
 *
 * 5. El script mostrará los nombres de los campos en formato JavaScript
 *    listo para copiar y pegar en Contact.jsx
 */

(function () {
  console.log('🔍 Buscando campos del formulario de Zoho...\n');

  // Buscar todos los inputs, textareas y selects
  const inputs = document.querySelectorAll('input[name], textarea[name], select[name]');

  if (inputs.length === 0) {
    console.error('❌ No se encontraron campos. Asegúrate de estar en la página del formulario de Zoho.');
    return;
  }

  console.log(`✅ Se encontraron ${inputs.length} campos\n`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // Objeto para almacenar los campos relevantes
  const fieldMapping = {};

  // Analizar cada campo
  inputs.forEach((input, index) => {
    const name = input.getAttribute('name');
    const type = input.type || input.tagName.toLowerCase();
    const label = input.getAttribute('placeholder') ||
      input.getAttribute('aria-label') ||
      input.id ||
      'Campo sin etiqueta';

    console.log(`Campo ${index + 1}:`);
    console.log(`  Nombre: "${name}"`);
    console.log(`  Tipo: ${type}`);
    console.log(`  Etiqueta: ${label}`);
    console.log('');

    // Intentar mapear campos comunes
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('name') || lowerLabel.includes('nombre')) {
      fieldMapping.name = name;
    } else if (lowerLabel.includes('email') || lowerLabel.includes('correo')) {
      fieldMapping.email = name;
    } else if (lowerLabel.includes('company') || lowerLabel.includes('empresa')) {
      fieldMapping.company = name;
    } else if (lowerLabel.includes('message') || lowerLabel.includes('mensaje')) {
      fieldMapping.message = name;
    }
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('📋 CÓDIGO PARA COPIAR EN Contact.jsx:\n');
  console.log('Reemplaza las líneas 34-37 con este código:\n');
  console.log('const fields = {');

  if (fieldMapping.name) {
    console.log(`  '${fieldMapping.name}': formData.name,     // Nombre completo`);
  } else {
    console.log(`  'NOMBRE_DEL_CAMPO': formData.name,     // ⚠️ MANUAL: Busca el campo de nombre`);
  }

  if (fieldMapping.email) {
    console.log(`  '${fieldMapping.email}': formData.email,         // Email`);
  } else {
    console.log(`  'NOMBRE_DEL_CAMPO': formData.email,         // ⚠️ MANUAL: Busca el campo de email`);
  }

  if (fieldMapping.company) {
    console.log(`  '${fieldMapping.company}': formData.company, // Empresa`);
  } else {
    console.log(`  'NOMBRE_DEL_CAMPO': formData.company, // ⚠️ MANUAL: Busca el campo de empresa`);
  }

  if (fieldMapping.message) {
    console.log(`  '${fieldMapping.message}': formData.message    // Mensaje`);
  } else {
    console.log(`  'NOMBRE_DEL_CAMPO': formData.message    // ⚠️ MANUAL: Busca el campo de mensaje`);
  }

  console.log('}');
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // Crear objeto para copiar
  const copyableMapping = {};
  if (fieldMapping.name) copyableMapping['Nombre'] = fieldMapping.name;
  if (fieldMapping.email) copyableMapping['Email'] = fieldMapping.email;
  if (fieldMapping.company) copyableMapping['Empresa'] = fieldMapping.company;
  if (fieldMapping.message) copyableMapping['Mensaje'] = fieldMapping.message;

  console.log('📝 Mapeo de campos encontrado:');
  console.table(copyableMapping);

  console.log('\n✅ ¡Listo! Copia el código de arriba y pégalo en Contact.jsx');

  // Guardar en window para fácil acceso
  window.zohoFields = fieldMapping;
  console.log('\n💡 Tip: Los nombres también están disponibles en window.zohoFields');
})();
