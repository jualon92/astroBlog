---
layout: $/layouts/post.astro
title: Arduino + Web Challenge Parte0
description: Enviar lecturas de sensores a web y mostrarlos sin perder la cabeza!
tags:
  - arduino
  - next SSG
  - react
  - SWR
  - roomReadings
author: Juan Ignacio Londra 
date: 2022-12-20 
image: https://images.unsplash.com/photo-1589409514187-c21d14df0d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
category: proyectos
---

## De que trata todo esto?
Esto es una especie de diario sobre  las idas y vueltas al utilizar arduino para llevar datos a la web!


## Como comenzo todo...
Vemos un kit en mercadolibre de arduino, 
mas tarde un par de videos de youtube se escabullen en nuestra playlist, 
y asi  nos encontramos divagando en proyectos de alguna clase de mad scientist del tercer mundo.

Un par de busquedas en google mas tarde... 
Y todo lo que encontramos puede resumirse en guias algo similares:
  1. utilizar sensores de temperatura/gas
  2. feedback mediante display o buzzer 
  3. si somos poco afortunados: calibrar el output analogico de un sensor mediante excel y magia negra.  

## El primer paso
Armamos nuestro primer sensor y lo vemos haciendo de las suyas en el display.

Poco tiempo despues; nos surge la duda: y si pudieramos verlo remoto, como el pronostico de la TV? 
y si fuera mas alla del pronostico de la TV, y nos mostrara todas las mediciones del dia? 
quien sabe.. si de todos esos puntos no podemos hacer promedio, maximos y minimos, graficos....
 


## WAIT!
Podriamos no reinventar la rueda.  
Arduino cloud nos permite dejarle la responsabilidad de procesar lecturas y mostrarlas. 
https://cloud.arduino.cc/ 

Pero queremos hacer algo nuestro, tener nuestro sitio web aunque se componga de una tabla html sacada directo del 2000.

 