---
layout: $/layouts/post.astro
title: Aplicaciones Web, Excel y Desafios
description: Vale la pena migrar de Excel a una Aplicacion Web?
tags:
  - ciberseguridad
  - excel
  - aplicaciones web
  - next
  - react
author: Juan Ignacio Londra 
date: 2023-01-15 
image: https://images.unsplash.com/photo-1589409514187-c21d14df0d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
category: proyectos
---
 
 
# Excel y su fama
Excel da una mala imagen, usualmente lo encontramos en tablas en la que todo lo fancy  puede  resumirse en colores extravagantes y mayusculas...

## Primer contacto
Nos encontramos con una tabla de un compañero, y por darle una mano terminamos agregandole dropdown + coloreado condicional..
Luego validacion de inputs, por que no? 
y para terminar, que algunos campos sean calculados por formula. 
 
No era tan malo como parecia... 


# Que ventajas  nos traeria migrar de excel a una Aplicacion web?
  
## Autenticacion y Autorizacion
 - Logear en una aplicacion web es seguro. Utilizarla no plantea riesgo, en comparacion a archivos del paquete Office, que en total corresponden al 38% de vulnerabilidades documentadas por mail https://www.cisco.com/c/dam/m/digital/elq-cmcglobal/witb/acr2018/acr2018final.pdf?dtid=odicdc000016&ccid=cc000160&oid=anrsc005679&ecid=8196&elqTrackId=686210143d34494fa27ff73da9690a5b&elqaid=9452&elqat=2
 - El proceso de ingresar datos es  simple , y cuenta con token JWT. Podemos utilizar librerias que ya hacen todo por nosotros como NextAuth
 - La pagina a mostrar es construida on the fly  en base al usuario ie: su rol define como se mostrara la pagina, que permisos tendra.
 

## Menos dolores de cabeza para el usuario
 - Abundan las historias  de como millones de dolares se esfumaron por alterar tablas de excel: https://www.linkedin.com/pulse/7-biggest-excel-mistakes-all-time-andrew-hoag
 - Mi experiencia fue encontrarme con una tabla de RRHH que tenia comas extras en los nombres; las desafortunadas personas pasaban a existir en un extraño estado de dualidad en el universo.

 En aplicaciones web el usuario no tiene control sobre la validacion y sus reglas.  

 - Podemos ir un paso mas alla y agregar validacion en backend, para cubrir el escenario potencial de una validacion front end que quedo corta.


## Menos Trabajo es (usualmente) Menos Riesgo
Campos que antes eran llenados a mano pasan a ser llenados automaticante  al construirse la pagina.  Por ejemplo:
 - La fecha del formulario siempre sera hoy y no deberia poder cambiarse
 - Los departamentos a elegir seran los asignados a la cuenta del usuario
 - La cantidad de horas de un trabajo puede presentarse como ecuacion Total = (hora de entrada - hora salida) - descanso
 
## Versionado
Al acceder a la aplicacion web, se encuentran con la mas reciente de manera automatica.

Se evitan:
 - Usuarios utilizando diferentes versiones de tabla, para luego ser mezcladas al almacenarse
 - Se agrega un nuevo campo a la tabla, pero no todos los usuarios recibieron excel nuevo

 
Si mañana quiere exportarse a DB los csv guardados, se encontrara que tienen campos diferentes. 

Si se tratan de campos innecesarios, un script de python puede generar un csv nuevo sin los campos extras.

Pero si el problema se trata de campos faltantes, no hay manera de generar datos del aire. Si pasaron semanas, la cantidad de datos faltantes seria enorme, y el tiempo de llenado manual se volveria una bola de nieve.


## Enviar y Recibir Excel  es mala idea!

Al pasar excel de un lado a otro, sea por cambios en el formulario o ser almacenados,  acostumbramos a los usuarios a recibir excel por mails.
<b>Esto implica un gran riesgo</b>, archivos del paquete office adjuntos a mail son uno de los principales vectores de ataques
https://www.welivesecurity.com/la-es/2017/11/17/vectores-ataque-documentos-de-office/

 
 
## Los datos en un solo lugar
Teniendo los datos en una db, contrapuesto a cientos de archivos xlsx nos ofrece varias ventajas:
 - Reducimos la superficie de ataque
 - Eliminamos el riesgo que usuarios pierdan o alteren por error archivos

Un servidor nos ofrece robustez, backups periodicos, y los usuarios tienen una preocupacion menos.
 

 

## Estadisticas
Podemos delegar al backend que lleve registro de cada subida de formulario con sus timestamp, validaciones fallidas, desglozarlo por usuario.


## No al desperdicio de hojas
Muchas veces nos tocan proyectos que usualmente seran impresos para luego ser firmados.
 - Con una aplicacion web podemos desdoblar lo que mostramos en pantalla de lo que sera impreso; con librerias como react-to-print
 -  Detectar que la tabla tiene mas datos de lo usual y ocupara 2 hojas. En respuesta, reducir el tamaño del font size y el padding.
 - La seccion firma no es necesaria mostrar por pantalla pero si al imprimir. Podemos elegir que solo se muestra en la version final antes de imprimir.
 
