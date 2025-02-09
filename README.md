# Progetto-JavaScript-Advanced-di-Leonardo-Lazzaro
***
## Javascript App ricerca libri
![meta](https://github.com/user-attachments/assets/3b7719ab-068a-45a0-bff2-825ce6c28ff2)

***
Questa app per la ricerca di libri è stata creata con i seguenti linguaggi di programmazione:
- Html
- Css
- Javascript

Descrizione:

Il Progetto del Book Finder, si compone essenzialmente di 3 file. Uno per la parte Html, uno per la parte Css e uno per la parte Javascript. I file css e js sono contenuti nella cartella src contente le sottocartelle css e js. La favicon e l’immagine per i metatag sono contenute nella cartella assets dentro alla sottocartella images. 

***

## In che cosa consiste il progetto
Questa applicazione web permette di cercare libri utilizzando le API di Open Library. Gli utenti possono inserire il titolo di una categoria di libri nella barra di ricerca per ottenere un elenco di risultati con informazioni essenziali come titolo, autore e descrizione. Le caratteristiche principali sono: layout ottimizzato per desktop, tablet e dispositivi mobili, con i risultati visualizzati in una lista per evitare sovrapposizioni. Ogni libro è mostrato in un box separato, con un pulsante per espandere la descrizione e una "X" per chiuderla. Il messaggio di caricamento appare solo durante la ricerca e scompare una volta ottenuti i risultati. Il titolo dell’app e la barra di ricerca sono centrati nella pagina per una disposizione chiara e intuitiva. Il progetto è realizzato solo con HTML, CSS e JavaScript puro, senza framework come React, Angular o Vue.

***

## Come è stato fatto
Il file HTML nella head contiene il titolo, il collegamento alla favicon, al file css e i metatag che servono a mostrare una breve didascalia e un’ immagine del book finder appena viene condiviso il link dove è hostato il progetto. Nel body ha un header che contiene il titolo dell'applicazione e sotto al di fuori di esso una barra di ricerca che permette di cercare i libri per categoria. Presenta poi due div, uno per il messaggio di caricamento della pagina e uno per far visualizzare i risultati della ricerca. Contiene infine il collegamento al file javascript. Il file CSS gestisce la parte grafica dell'applicazione. In breve: dispone il titolo e la barra di ricerca centralmente nella pagina, con una disposizione che si adatta a diverse risoluzioni. Centra anche i box dei libri con le descrizioni. Il file CSS contiene le media queries per adattare il layout a diverse larghezze di schermo (desktop, tablet, mobile), garantendo che l'applicazione sia facilmente fruibile su qualsiasi dispositivo. Include la formattazione del testo, dei box dei libri e dei bottoni. Contiene poi le regole per i bottoni e le descrizioni che hanno stili dinamici, cambiando aspetto quando l'utente interagisce con gli elementi. Si può quindi dire che gestisce e da le regole di stile a tutti gli elementi del book finder che vanno dal titolo iniziale e la barra di ricerca, al box dei libri, alle media queries per rendere l’app responsive. Il file JavaScript implementa la logica di ricerca e visualizzazione di libri basandosi sulla categoria inserita dall'utente. Utilizza l'API di Open Library per ottenere le informazioni sui libri e gestisce la presentazione dei dati nella pagina web. Include le funzionalità per: recuperare i libri per categoria, mostrare e nascondere il caricamento durante la richiesta, visualizzare i risultati in modo chiaro e interattivo, recuperare e visualizzare la descrizione dei libri su richiesta e gestire eventuali errori e migliorare l'accessibilità. 

***

## Come usare il book finder
Appena l’utente entra in pagina vedrà il book finder. Per cercare il libro desiderato bisogna cercarne la sua categoria ad esempio fantasy, history, drama ecc… Premendo il pulsante cerca partirà il caricamento della pagina che contattando l’Api mostrerà tutti i libri disponibili per quella categoria. L’utente poi facendo click sul pulsante mostra descrizione ne vedrà la descrizione e per chiuderla basta cliccare sulla X in alto alla pagina. N.B. perché la ricerca abbia effetto la categoria va inserita in minuscolo. Darà errore se si inserisce una categoria sbagliata, si preme cerca senza dare alcun valore o se la categoria inizia per lettera maiuscola. Infine per far funzionare l’app è richiesta una connessione internet

***

## Requisiti
E' necessaria una connessione di rete per poter utilizzare l'app per la ricerca dei libri. Non sono necessarie altre applicazioni o pacchetti aggiuntivi. 

***

## Dove testare il counter
Per provare il book finder:

[Book Finder Javascript](https://lazzaroleonardo.github.io/Progetto-JavaScript-Advanced-di-Leonardo-Lazzaro/ "Pagina dove provare il Book Finder Javascript")
