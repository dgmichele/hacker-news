<h1>HackerNews</h1>
<p>Questo è il 3° progetto eseguito per il Master in Sviluppo web di Start2impact.</p>

<h2>🤔 Di cosa si tratta?</h2>
<p>Questa applicazione JavaScript mostra le ultime notizie in campo tech utilizzando l'API di Hacker News. Le notizie vengono caricate in blocchi da 10 e gli utenti possono cliccare su un pulsante per caricare ulteriori notizie.</p>

<h2>💡 Funzionalità</h2>
<ul>
  <li><strong>Caricamento dinamico delle notizie:</strong> L'app carica inizialmente un blocco di 10 notizie e, tramite il pulsante "Load More", consente di caricare altri blocchi da 10.</li>
  <li><strong>Visualizzazione dettagliata:</strong> Per ogni notizia vengono visualizzati il titolo, la data di pubblicazione e un link per leggere l'articolo completo.</li>
  <li><strong>Variabili d’ambiente:</strong> Utilizza Dotenv per accedere all'URL dell'API, configurabile tramite API_URL nel file .env.</li>
</ul>

<h2>🛠️ Struttura del progetto</h2>
<ul>
  <li><strong><code>fetchNewsID()</code>:</strong> Recupera l'elenco degli ID delle ultime notizie.</li>
  <li><strong><code>fetchNewsDetails()</code>:</strong> Per ogni ID, ottiene i dettagli della notizia come titolo, data e link.</li>
  <li><strong><code>loadMoreNews()</code>:</strong> Carica e mostra un blocco di 10 notizie alla volta.</li>
  <li><strong><code>displayNews()</code>:</strong> Crea e visualizza il layout di una singola notizia nel contenitore della pagina.</li>
</ul>

<h2>⚙️ Dipendenze</h2>
<ul>
  <li><strong>Webpack:</strong> Per la gestione del bundling e delle risorse.</li>
  <li><strong>Dotenv:</strong> Per la configurazione delle variabili d’ambiente.</li>
</ul>

<h2>👨🏻‍💻 Testa il progetto</h2>
<p>Non ti resta che provare tu stesso, basta che clicchi il link qui in basso:</p>
<a href="https://dgmichele.github.io/hacker-news/"><strong>Vai al progetto ↗️</strong></a>
