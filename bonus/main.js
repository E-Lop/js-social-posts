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
Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
BONUS
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone. */

// ------------------------------------
// ANALISI
// ------------------------------------

// creao array per elementi del post (ID, nome autore, foto autore, data mm-dd-yyyy, testo del post, immagine, num. di like)
// creo funzione per stampare un singolo post
// gestione tasto Mi Piace

// ------------------------------------

// variabile che contiene il container di tutti i post
const postsContainer = document.querySelector('.posts-list');

const postsArray = [
  {
    id: 1,
    author: 'Phil Mangione',
    profilePic: 'https://unsplash.it/300/300?image=15',
    date: '06/25/2021',
    postText:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    image: 'https://unsplash.it/600/300?image=171',
    likesAmount: 80,
  },
  {
    id: 2,
    author: 'Sofia Perlari',
    profilePic: 'https://unsplash.it/300/300?image=16',
    date: '09/03/2021',
    postText:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    image: 'https://unsplash.it/600/300?image=171',
    likesAmount: 120,
  },
];

let idtest = postsArray;
// per ciascun elemento dell'array appendo un post al container
for (let i = 0; i < postsArray.length; i++) {
  const thisPost = postsArray[i];
  generatePost(thisPost);
}

// variabile per tutti i bottoni 'Mi Piace'
const allLikeBtns = document.querySelectorAll('.like-button__label');
// variabile per tutti i contatori di like
const allLikeCounters = document.querySelectorAll('.js-likes-counter');

// al ogni click su un bottone 'Mi piace' aggiungo la classe like-button--liked e aumento il relativo counter, se riclicco rimuovo la classe e il counter decresce
for (let j = 0; j < allLikeBtns.length; j++) {
  const thisLikeButton = allLikeBtns[j];

  thisLikeButton.addEventListener('click', function (event) {
    // reset dell'evento di click
    event.preventDefault();

    if (!this.classList.contains('like-button--liked')) {
      thisLikeButton.classList.add('like-button--liked');
      const relatedCounter = allLikeCounters[j];
      relatedCounter.innerHTML++;
      console.log('this', thisLikeButton.classList);
    } else {
      thisLikeButton.classList.remove('like-button--liked');
      const relatedCounter = allLikeCounters[j];
      relatedCounter.innerHTML--;
      console.log('this', thisLikeButton.classList);
    }
  });
}

// ------------------------------------
// FUNCTIONS
// ------------------------------------

// funzione che genera un post a partire dai dati contenuti nell'array in argomento
function generatePost(thisPost) {
  const postToDraw = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${thisPost.profilePic}" alt=${thisPost.author}>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${thisPost.author}</div>
                        <div class="post-meta__time">${thisPost.date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${thisPost.postText}</div>
            <div class="post__image">
                <img src="${thisPost.image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${thisPost.likesAmount}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;

  // concatenazione in HTML
  postsContainer.innerHTML += postToDraw;
}
