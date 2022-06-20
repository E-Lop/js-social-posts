/* Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. */

// ------------------------------------
// ANALISI
// ------------------------------------

// creo variabile con numero progressivo per ID
// creao array per elementi del post (ID, nome autore, foto autore, data mm-dd-yyyy, testo del post, immagine, num. di like)
// creo funzione per stampare un singolo post
// gestione tasto Mi Piace

// ------------------------------------

// variabile che contiene ID progressivo
let progID = 0;

const postsArray = {
  id: progID,
  author: 'Phil Mangione',
  profilePic: 'https://unsplash.it/300/300?image=15',
  date: '06/25/2021',
  postText: 'Lorem Ipsum Dolor',
  image: 'https://unsplash.it/600/300?image=171',
  likesAmount: 80,
};
