const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        //.then(archivo => console.log(`Archivo Creado: ${archivo}`))
        //.catch(err => console.log(err));
        //console.log('Crear por hacer');
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('====================');
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);

    default:
        console.log('Comando no existe');

}