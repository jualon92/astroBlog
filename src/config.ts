import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'Blog'
    }, 
     lectura: {
        path: '/readingList',
        title: 'Libros'
    },  
    tags: {
        path: '/tags',
        title: 'tags'
    },
   
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Juan Ignacio Londra',
    title: 'Home',
    description: 'Have a nice cup of ☕ ',
    url: 'https://astro-ink.vercel.app',
    githubUrl: 'https://github.com/jualon92',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
