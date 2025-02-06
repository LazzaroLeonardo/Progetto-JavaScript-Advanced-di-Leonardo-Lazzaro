// Funzione principale per cercare i libri in base alla categoria
// Main function to search books by category
async function searchBooks() {
    const category = document.getElementById('category').value.trim(); // Ottiene la categoria inserita dall'utente  // Get the category entered by the user
    const resultsContainer = document.getElementById('results'); // Contenitore dei risultati  // Results container
    const loader = document.getElementById('loader'); // Loader per mostrare il caricamento  // Loader to show loading
    resultsContainer.innerHTML = ''; // Pulisce i risultati precedenti  // Clear previous results

    // Verifica che la categoria non sia vuota
    // Check that the category is not empty
    if (category === '') {
        showError('Inserisci una categoria valida.');
        return;
    }

    loader.classList.remove('hidden'); // Mostra il loader solo quando si inizia la ricerca  // Show the loader only when starting the search

    try {
        // Recupera i dati dalla API di Open Library
        // Retrieve data from Open Library API
        const response = await fetch(`https://openlibrary.org/subjects/${category}.json`);
        if (!response.ok) {
            throw new Error(`Errore durante il recupero dei dati dalla categoria: ${category}`);
        }

        const data = await response.json(); // Converte la risposta in formato JSON  // Convert the response to JSON format
        loader.classList.add('hidden'); // Nasconde il loader dopo aver ricevuto la risposta // Hide the loader after receiving the response

        // Se non ci sono libri per la categoria
        // If there are no books for the category
        if (!data.works || data.works.length === 0) {
            showError('Nessun libro trovato per questa categoria.');
            return;
        }

        // Ciclo per ogni libro trovato
        // Loop for each book found
        data.works.forEach(book => {
            const bookElement = document.createElement('div'); // Crea un contenitore per ogni libro  // Create a container for each book
            bookElement.className = 'book'; // Aggiunge classe per il box del libro  // Add class for book box

            const titleElement = document.createElement('div'); // Crea un elemento per il titolo  // Create a title element
            titleElement.className = 'book-title';
            titleElement.textContent = book.title; // Imposta il titolo del libro  // Set the book title

            // Ottiene gli autori, se disponibili
            // Get authors, if available
            const authors = book.authors ? book.authors.map(author => author.name).join(', ') : 'Autore sconosciuto'; // Se non ci sono autori, scrive "Autore sconosciuto"
            const authorsElement = document.createElement('p'); // Crea un paragrafo per gli autori  // Create a paragraph for authors
            authorsElement.textContent = `Autori: ${authors}`; // Mostra gli autori  // Show authors

            // Bottone per mostrare la descrizione
            // Button to show description
            const descButton = document.createElement('button');
            descButton.className = 'desc-button';
            descButton.textContent = 'Mostra descrizione'; // Testo del bottone  // Button text
            descButton.onclick = () => fetchDescription(book.key, bookElement, descButton); // Aggiunge funzione per mostrare la descrizione  // Add function to show description

            // Aggiunge gli elementi creati al contenitore del libro
            // Add the created elements to the book container
            bookElement.appendChild(titleElement);
            bookElement.appendChild(authorsElement);
            bookElement.appendChild(descButton);

            // Aggiunge il contenitore del libro ai risultati
            // Add the book container to the results
            resultsContainer.appendChild(bookElement);
        });

    } catch (error) {
        console.error('Errore:', error); // Log dell'errore  // Error log
        loader.classList.add('hidden'); // Nasconde il loader anche in caso di errore  // Hide the loader even on error
        showError('Si è verificato un errore durante la ricerca.'); // Mostra errore  // Show error
    }
}

// Funzione per recuperare e mostrare la descrizione di un libro
// Function to retrieve and display the description of a book
async function fetchDescription(bookKey, bookElement, button) {
    try {
        // Recupera la descrizione del libro usando la sua chiave
        // Retrieve the book description using its key
        const response = await fetch(`https://openlibrary.org${bookKey}.json`);
        if (!response.ok) {
            throw new Error(`Errore durante il recupero della descrizione del libro con key: ${bookKey}`);
        }

        const data = await response.json(); // Converte la risposta in formato JSON  // Convert the response to JSON format
        let description = 'Descrizione non disponibile.'; // Default se la descrizione non esiste  // Default if description does not exist

        // Verifica se esiste una descrizione
        // Check if a description exists
        if (data.description) {
            description = typeof data.description === 'string' ? data.description : data.description.value; // Ottieni la descrizione  // Get the description
        }

        // Crea l'elemento per la descrizione
        // Create the element for the description
        const descriptionElement = document.createElement('div');
        descriptionElement.className = 'description';
        descriptionElement.textContent = description; // Aggiungi il testo della descrizione  // Add description text

        // Crea il pulsante per chiudere la descrizione
        // Create the button to close the description
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.textContent = 'X'; // Testo del pulsante di chiusura  // Close button text
        closeButton.onclick = () => {
            bookElement.removeChild(descriptionElement); // Rimuove la descrizione  // Removes the description
            bookElement.removeChild(closeButton); // Rimuove il pulsante di chiusura  // Removes the close button
            button.disabled = false; // Riattiva il pulsante di descrizione  // Reactivate the description button
        };

        // Aggiunge descrizione e pulsante di chiusura al contenitore del libro
        // Add description and close button to book container
        bookElement.appendChild(descriptionElement);
        bookElement.appendChild(closeButton);

        // Disabilita il pulsante dopo l'apertura della descrizione
        // Disable button after description opens
        button.disabled = true;

    } catch (error) {
        console.error('Errore:', error); // Log dell'errore  // Error log
        showError('Impossibile recuperare la descrizione del libro.'); // Mostra un messaggio di errore  // Show an error message
    }
}

// Funzione per mostrare i messaggi di errore
// Function to show error messages
function showError(message) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<p class="error-message" aria-live="assertive">${message}</p>`; // Mostra il messaggio di errore
}