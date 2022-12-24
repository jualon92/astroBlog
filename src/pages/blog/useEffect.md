---
layout: $/layouts/post.astro
title: React useEffect madness
description:  useEffect para Data Fetching y technical debt 
tags:
  - web app
  - next 
  - desarrollo 
  - react
  - SWR
  - data 
author: Juan Ignacio Londra 
date: 2022-12-24
image: https://images.unsplash.com/photo-1589409514187-c21d14df0d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
category: trabajo
---


# useEffect nos ofrece una solucion...
Nos encontramos enredados en el nuevo proyecto apenas comenzamos, pero podriamos lograr salir de todo aquel enredo:

Utilizando  useEffect,  agregando varios estados como dependencia, fetchs de por medio, loading bar antes del fetch   
Agregamos funciones auxiliares, if, loops, mas funciones... y lo logramos... 
 
Se siente algo asi
 
<iframe width="1280" height="720" src="https://www.youtube.com/embed/e1GmgE7Men0" title="A Glimpse of Light" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  
  
## Similitudes
En ese escenario, hay ciertas elementos que se repiten:

 - React y useEffect para fetch inicial y siguientes rerenders utilizando dependencias.

 -  Heavy en algoritmos, for loop, if anidados 

 - Funciones egoistas que quieren hacer todo por si solas  

 - Muchos states a seguir, que son heredados por componentes, para volver todo una ensalada ilegible.


## Dificultades a encontrar
 
Antes de dar mi pov de porque useEffect es una receta de problemas al largo plazo, lets the expert do the talking:
https://www.reddit.com/r/reactjs/comments/vi6q6f/what_is_the_recommended_way_to_load_data_for/


>Slow navigations between screens. If you have parent and child components both doing fetching in effects, then the child component can’t even start fetching until the parent component finishes fetching. These types of performance problems are very common in single-page apps and cause a lot more slowness than “excessive re-rendering” that people tend to focus on. 


>Race conditions. If you don't write a cleanup function that ignores stale responses, you'll likely introduce bugs when responses arrive in a different order. This article explains it well.

 
### Como useEffect puede dejarnos un sabor amargo
Se busca en el proyecto:


1. seccion A con su tabla A
2. seccion B con su tabla B
3. Datos deben ser siempre los mas reciente. No se puede correr el riesgo de mostrar data ya no valida.


Si utilizamos useEffect, cada vez que pasamos de una a otra la tabla debe reconstruirse con fresh data.


Podemos :

A. usar una  loading bar para mostrarla al terminar carga(si la aplicacion es local por ethernet, nos encontrariamos con la fea experiencia de un flash)

B. No usar loading bar, y al reconstruirse, la tabla aparece delante nuestro de la nada, como un pop up. 
Luego ocurre un movimiento brusco, la tabla se ajusta de tener 0 items a los items que llegan.


Ambas opciones nos dejan un sabor amargo, no se  siente como una SPA. 

<b>La tabla deberia estar siempre ahi, esperandonos con los datos listos.</b>

# La mejor solucion es la que nos hace bostezar 
Fetchear data, administrar el cache, revalidar, evitar fetchs duplicados, evitar race conditions, evitar rerender innecesarios, actualizar data cada n tiempo o x accion, conservar state de data en varias ventanas..  
Es desafiante de abordar, pero vale la pena? estamos seguros de haberlo abordado bien? que caso no contemplamos?

Por que no abandonar la idea de reinventar la rueda, y permitirnos que una herramienta como SWR haga el heavy lifting?
 

##  SWR (STALE-WHILE-REVALIDATE)
 - Con SWR, podemos utilizar los datos guardados del ultimo fetch, y presentar la tabla en inmediato al usuario. 

 - En simultaneo SWR verifica que la data sea la mas reciente. Si no lo es, efectua revalidacion. Lo importante de esto es que la tabla sigue estando donde esta, sus datos cambiaron en la revalidacion pero no volvio a montarse el componente.

 - Cada n tiempo o alguna accion(minimizar cliente, cambiar de pagina) SWR revalida para mantener data actualizada. Lo que hace encontrarse con una revalidacion enfrente nuestro una ocurrencia no usual.


 - <b>Mutate</b>: 
Si queremos que en la seccion b se altere datos de la seccion a. Simplemente llamamos mutate(apiRoute, data). No necesitamos hacer un breadcrumbs de props. 

 - Operaciones que supondrian una barra de carga:
Al borrar un item, deberiamos recibir la nueva lista de items, cargar un spinner y rehacer la tabla.
Con SWR podemos utilizar OptimisticUI y que confie en nosotros que el nuevo data[] sera el valor del fetch. El usuario no tendra que esperar el nuevo array.


 # Conclusion
 Asi delegamos a SWR la responsabilidad de hacer fetch, y manejar los datos entre componentes.  
 
 No necesitamos una ensalada de props, borramos todos los states y logica de useEffect.. 
 Para volver una experiencia de desarrollo mas aburrida, mas repleta de bostezos, y al mismo tiempo mas amable con la experiencia de usuario como tambien con los futuros lectores.

 
 



 



