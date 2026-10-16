/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = [
   {
      nome: "Cuffie Wireless",
      categoria: "Elettronica",
      prezzo: 89.90,
      rating: 4,
      immagine: "cuffie.jpg",
      disponibile: true
   },

   {
      nome: "Tablet 10 pollici",
      categoria: "Elettronica",
      prezzo: 199.00, rating: 5,
      immagine: "tablet.jpg",
      disponibile: true
   },

   {
      nome: "Il romanzo dell'anno",
      categoria: "Libri",
      prezzo: 14.90, rating: 4,
      immagine: "libro.jpg",
      disponibile: true
   },

   {
      nome: "Zaino da viaggio 30L",
      categoria: "Abbigliamento",
      prezzo: 49.99,
      rating: 4,
      immagine: "zaino.jpg",
      disponibile: true
   },
   {
      nome: "Smartphone 5G",
      categoria: "Elettronica",
      prezzo: 299.99,
      rating: 5,
      immagine: "telefono.jpg",
      disponibile: false
   },

   {
      nome: "Mouse Gaming",
      categoria: "Elettronica",
      prezzo: 24.50,
      rating: 4,
      immagine: "mouse.jpg",
      disponibile: true
   },

   {
      nome: "Tastiera Meccanica",
      categoria: "Elettronica",
      prezzo: 59.90,
      rating: 3,
      immagine: "tastiera.jpg",
      disponibile: true
   },

   {
      nome: "Manuale HTML/CSS",
      categoria: "Libri",
      prezzo: 29.00,
      rating: 5,
      immagine: "libro-code.jpg",
      disponibile: true
   },

   {
      nome: "Orologio Smartwatch",
      categoria: "Elettronica",
      prezzo: 129.00,
      rating: 4,
      immagine: "orologio.jpg",
      disponibile: true
   },

   {
      nome: "Felpa con cappuccio",
      categoria: "Abbigliamento",
      prezzo: 39.99,
      rating: 4,
      immagine: "felpa.jpg",
      disponibile: true
   },

   {
      nome: "Borraccia Termica",
      categoria: "Casa",
      prezzo: 18.50,
      rating: 5,
      immagine: "borraccia.jpg",
      disponibile: false
   },
   {
      nome: "Cuffie In-Ear",
      categoria: "Elettronica",
      prezzo: 19.99,
      rating: 3,
      immagine: "auricolari.jpg",
      disponibile: true
   }
];



/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function formattaPrezzo(prezzo) {
   const prezzoFormattato = prezzo.toFixed(2).replace('.', ',');
   return `€ ${prezzoFormattato}`;
}/*toFixed Prende il numero di partenza e lo blocca 
a esattamente due cifre decimali dopo il punto.*/


for (let i = 0; i < prodotti.length; i++) {
   console.log(formattaPrezzo(prodotti[i].prezzo));
}

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function stelline(rating) {
   if (rating === 5) return "★★★★★";
   if (rating === 4) return "★★★★☆";
   if (rating === 3) return "★★★☆☆";
   if (rating === 2) return "★★☆☆☆";
   if (rating === 1) return "★☆☆☆☆";
}


for (let i = 0; i < prodotti.length; i++) {
   let voto = prodotti[i].rating;
   console.log(prodotti[i].nome + ": " + stelline(voto));
}


/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function filtraPerCategoria(categoriaCercata) {
   let listaFiltrata = []; 
   for (let i = 0; i < prodotti.length; i++) {
      
      if (prodotti[i].categoria === categoriaCercata) {
         listaFiltrata.push(prodotti[i]); 
      }
   }

   return listaFiltrata; 
}


console.log(filtraPerCategoria("Elettronica"));



/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */



function filtrato(i) {
   return (prodotti[i].nome)
}


for (let i = 0; i < prodotti.length; i++) {
   if (prodotti[i].rating >= 3) {
      console.log(filtrato(i))

   }
}







/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
