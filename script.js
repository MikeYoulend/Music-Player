// Ottieni i riferimenti agli elementi HTML necessari
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Imposta il massimo e il valore iniziale della barra di avanzamento al caricamento della metadati della canzone
song.onloadedmetadata = function () {
	progress.max = song.duration;
	progress.value = song.currentTime;
};

// Aggiorna la barra di avanzamento durante la riproduzione della canzone
song.addEventListener("timeupdate", function () {
	progress.value = song.currentTime;
});

// Gestisce il clic sul pulsante di riproduzione/pausa
function playPause() {
	if (ctrlIcon.classList.contains("fa-pause")) {
		// Se la canzone è in pausa, la mette in pausa e aggiorna l'icona
		song.pause();
		ctrlIcon.classList.remove("fa-pause");
		ctrlIcon.classList.add("fa-play");
	} else {
		// Se la canzone è in riproduzione, la avvia e aggiorna l'icona
		song.play();
		ctrlIcon.classList.add("fa-pause");
		ctrlIcon.classList.remove("fa-play");
	}
}

// Aggiorna il tempo della canzone quando l'utente interagisce con la barra di avanzamento
progress.oninput = function () {
	song.currentTime = progress.value;
};

// Avvia la riproduzione dalla posizione desiderata quando l'utente rilascia la barra di avanzamento
progress.onchange = function () {
	song.play();
	song.currentTime = progress.value;
	ctrlIcon.classList.add("fa-pause");
	ctrlIcon.classList.remove("fa-play");
};
