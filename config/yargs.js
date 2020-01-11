const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    default: true,
    alias: 'c',
};

const argv = require('yargs')
    .command('crear', 'Crear un Elemento', {
        descripcion
    })
    .command('listar', 'Lista las Tablas Creadas', {
        descripcion
    })
    .command('actualizar', 'Actualiza las Tablas', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una Tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}