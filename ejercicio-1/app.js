const fs = require('fs');
const path = require('path');
let dni = "";

/** Leer README */
//Iteracion 1
const fs = require('fs');

// Leer el archivo JSON
fs.readFile('hacienda.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Parsear el contenido del archivo JSON
    const jsonData = JSON.parse(data);

    // Mostrar todo el contenido del JSON
    console.log(jsonData);
});

//Iteracion 2
const fs = require('fs');

// Leer el archivo JSON
fs.readFile('hacienda.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Parsear el contenido del archivo JSON
    const jsonData = JSON.parse(data);

    // Recorrer el array y mostrar solo los nombres
    jsonData.forEach(persona => {
        console.log(persona.nombre);
    });
});


//iteracion 3


const fs = require('fs');

// Cambia este valor a un DNI que exista o no en el archivo JSON
const dniABuscar = '12345678A';

// Leer el archivo JSON
fs.readFile('hacienda.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Parsear el contenido del archivo JSON
    const jsonData = JSON.parse(data);

    // Buscar la persona por DNI
    const persona = jsonData.find(p => p.dni === dniABuscar);

    if (persona) {
        if (persona.notificaciones) {
            console.log(`La persona con DNI ${dniABuscar} tiene notificaciones pendientes con hacienda.`);
        } else {
            console.log(`La persona con DNI ${dniABuscar} no tiene notificaciones pendientes con hacienda.`);
        }
    } else {
        console.log(`No se encontró una persona con el DNI ${dniABuscar}.`);
    }
});

const fs = require('fs');

// Cambia este valor a un DNI que exista o no en el archivo JSON
const dniABuscar = '12345678A';

// Leer el archivo JSON
fs.readFile('hacienda.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Parsear el contenido del archivo JSON
    const jsonData = JSON.parse(data);

    // Buscar la persona por DNI
    const persona = jsonData.find(p => p.dni === dniABuscar);
    let mensaje;

    if (persona) {
        if (persona.notificaciones) {
            mensaje = `La persona con DNI ${dniABuscar} tiene notificaciones pendientes con hacienda.`;
        } else {
            mensaje = `La persona con DNI ${dniABuscar} no tiene notificaciones pendientes con hacienda.`;
        }
    } else {
        mensaje = `No se encontró una persona con el DNI ${dniABuscar}.`;
    }

    console.log(mensaje);

    // Guardar el mensaje en el archivo de texto
    fs.appendFile('notificaciones.txt', mensaje + '\n', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
        }
    });
});
