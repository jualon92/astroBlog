---
layout: $/layouts/post.astro
title: Arduino + Web Challenge Parte1
description: Enviar lecturas de sensores a web y mostrarlos sin perder la cabeza!
tags:
  - arduino
  - next SSG
  - react
  - SWR
  - roomReadings
author: Juan Ignacio Londra 
date: 2022-12-30 
image: https://images.unsplash.com/photo-1589409514187-c21d14df0d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
category: proyectos
---
 
 
# Las bases
Lo que se buscaba era medir la temperatura en la habitacion, mostrarlas en una tabla, en tiempo real, como si fuera un pronostico de la tv.

 

## Primer intento  - React + Spring Boot en Heroku
 - Spring boot fue una experiencia agradable en comparacion a Express.

 - React no me dejo un buen gusto, quizas el problema no era con react sino con el concepto de SPA.
El usuario era recibido con una barra de carga hasta que los datos estuviesen disponibles. 

Me parecia cluncky, uno no cambia de canal y espera que el canal cargue.. - Deberia ser instantaneo! 

 - Heroku me parecio molesto. Y dentro de poco va a dejar de existir :(  . 

## Segundo intento
Los nuevos must have entonces cambiaron a:
 - El usuario al entrar deberia encontrarse ya con los datos esperandolo. Un buen rating de First Conteful Paint  
 - La tabla con cientos de datos deberia ser liviana de utilizar para el usuario 


## Ultimos pasos
Tiempo despues me encontraba utilizando next para el trabajo,
y me vino como anillo al dedo utilizarlo como static site generator.

### Resultados
La barra de carga ya no es requerida, se cargan los datos necesarios para recibir al usuario. 
El resto de las entradas de tabla  se trae under the hood  mediante SWR


### Tablas y sus riesgos
Agregue una libreria de tabla virtualizada, ya que me tope con problemas de rendimiento en el trabajo con tablas
  al mostrar +100 entradas.

No queria toparme dos veces con ese problema que requiere tantas vueltas.


### Desafios
Comence con el sensor de temperatura y humedad, y fui expandiendo.

Lo que mas me costo fue acostumbrarme a utilizar ; en C++ , diferencias entre lecturas analogicas y digitales,
el terror de haber quemado arduino al invertir positivo con negativo...
 

# En resumen


 - Al hacer un site estatico, next hace todo por nosotros. Le pedimos a next que cargue los primeros datos de la tabla para que aparezcan ya servidos. La experiencia de la primer visita mejora

 - utilizar SWR para hacer fetch por lo bajo es simple, el usuario no tiene por que enterarse. No tenemos que utilizar useEffect, encargarnos de politicas de cache

 - Una libreria  de tablas (en este caso React virtuoso) nos puede ahorrar muchos dolores de cabezas al crecer la cantidad de datos mostrados,o en low powered devices como celulares.

 - Utilizar next + vercel nos ahorra tener que utilizar Heroku o similares.

 
## Fotos 
 

## Pendientes
 - Tapar con cinta negra los led para dormir en paz.

 - Estaria bueno ver como despegarse un poco de la tabla, y dibujar graficos del ultimo mes o semana.



 