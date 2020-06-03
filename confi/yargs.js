const descripcion ={
    demand: true,
    alias : 'd',
    desc: 'Descripcion de la tarea por hacer'
}; 
const completado ={
    default : true,
    alias : 'c',
     desc: 'Marca como completada una tarea'
}; 

const argv = require('yargs')
.command('crear','Crear un elemento por hacer',{
    descripcion 
})
.command('actualizar', 'Actualiza el estado de la tarea por hacer',{
    descripcion,
    completado
})
.command('borrar', 'borrar una tarea especifica',{
    descripcion
})
.help()
.argv; //

module.exports ={
    argv
}


/*
const argv = require('yargs')
.command('crear','Crear un elemento por hacer',{
    descripcion :{
        demand: true,
        alias : 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
})
.command('actualizar', 'Actualiza el estado de la tarea por hacer',{
    descripcion :{
        demand: true,
        alias : 'd',
        desc: 'Descripcion de la tarea por hacer'
    }, 
    completado :{
        default : true,
        alias : 'c',
        desc: 'Marca como completada una tarea'
    }
})
.command('borrar', 'borrar una tarea especifica',{
    descripcion :{
        demand : true,
        alias : 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
})
.help()
.argv; //
*/
