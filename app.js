const areas = {
	games: { label: "Games", symbol: "◉", color: "#37e6ff", description: "Spiele kurze Sessions, jage Highscores und sammle neue Erfolge.", modules: [["Arcade", "Browser-Games und Highscores"], ["Erfolge", "Ziele, Meilensteine und Belohnungen"], ["Rangliste", "Deine besten Ergebnisse"]] },
	puzzles: { label: "Rätsel", symbol: "◇", color: "#fb4fd2", description: "Trainiere Logik, Gedächtnis und Zahlenverständnis mit täglichen Herausforderungen.", modules: [["Tageschallenge", "Eine neue Aufgabe pro Tag"], ["Logik", "Muster, Regeln und Denkaufgaben"], ["Quiz", "Wissen in kurzen Runden"]] },
	school: { label: "Schule", symbol: "⌁", color: "#c8fb66", description: "Lerne in deinem Tempo, wiederhole Themen und entwickle dein Wissen weiter.", modules: [["Mathematik", "Aufgaben, Zahlen und Strategien"], ["Sprachen", "Deutsch und Englisch trainieren"], ["Lernkarten", "Wissen wiederholen und festigen"]] },
	coding: { label: "Coding", symbol: "</>", color: "#ffae5b", description: "Lerne HTML, CSS und JavaScript direkt mit eigenen Experimenten.", modules: [["HTML", "Struktur für deine Seite"], ["CSS", "Farben und Layout gestalten"], ["JavaScript", "Deine Seite lebendig machen"]] },
	tools: { label: "Tools", symbol: "⌘", color: "#a778ff", description: "Nützliche Werkzeuge für Fokus, Berechnungen und schnelle Gedanken.", modules: [["Rechnen", "Taschenrechner und Umrechner"], ["Fokus", "Timer und Stoppuhr"], ["Notizen", "Gedanken direkt festhalten"]] },
	creative: { label: "Kreativ", symbol: "✦", color: "#ffae5b", description: "Erschaffe eigene Dinge und erweitere deine Welt mit Ideen.", modules: [["Pixel-Art", "Kleine Welten Pixel für Pixel"], ["Zeichenfläche", "Skizzen und digitale Ideen"], ["Sound", "Musik-Tools für später"]] },
};

const achievements = [
	{ id: "first-zone", title: "Erste Verbindung", description: "Eine neue Zone betreten", unlocked: false },
	{ id: "explorer", title: "Netzwerker", description: "Drei Zonen entdecken", unlocked: false },
	{ id: "xp-300", title: "Signalverstärker", description: "300 XP erreichen", unlocked: false },
	{ id: "xp-600", title: "Level Up", description: "Level 3 erreichen", unlocked: false },
];

const state = {
	xp: 120, discovered: new Set(["dashboard"]), activity: ["CyberWorld-Profil initialisiert."],
	reactionActive: false, reactionStart: 0, reactionTimeout: null, puzzleSolved: false, schoolGrade: "1", schoolQuestion: null,
	timerSeconds: 300, timerHandle: null, stopwatchSeconds: 0, stopwatchHandle: null, pixelColor: "#37e6ff",
};
const codingLessons = {
	html: { label: "HTML", explanation: "HTML beschreibt, welche Inhalte auf deiner Seite stehen.", html: "<h1>Meine erste Website</h1>\n<p>Ich lerne Programmieren in CyberWorld.</p>\n<button>Hallo!</button>", css: "body { font-family: sans-serif; padding: 24px; }\nh1 { color: #0b7285; }", js: "" },
	css: { label: "CSS", explanation: "CSS entscheidet, wie HTML aussieht: Farben, Abstände und Layout.", html: "<main class=\"karte\">\n  <h1>Neon Studio</h1>\n  <p>Mein Design mit CSS.</p>\n</main>", css: "body { background: #101424; padding: 28px; font-family: sans-serif; }\n.karte { padding: 24px; border: 2px solid #37e6ff; border-radius: 12px; background: #e8fbff; color: #10233c; }\nh1 { color: #b0006f; }", js: "" },
	javascript: { label: "JavaScript", explanation: "JavaScript reagiert auf Aktionen und verändert deine Seite.", html: "<h1 id=\"titel\">Klicke den Button</h1>\n<button id=\"zaehler\">0 Klicks</button>", css: "body { padding: 24px; font-family: sans-serif; }\nbutton { padding: 10px 14px; border: 0; border-radius: 6px; background: #37e6ff; font-weight: bold; cursor: pointer; }", js: "let klicks = 0;\nconst button = document.querySelector('#zaehler');\nbutton.addEventListener('click', () => {\n  klicks += 1;\n  button.textContent = `${klicks} Klicks`;\n  document.querySelector('#titel').textContent = 'JavaScript funktioniert!';\n});" },
};
const guidedProjects = {
	portfolio: {
		title: "Portfolio-Seite", description: "Baue eine persönliche Seite mit Vorstellung, Projekten und Kontakt.",
		steps: [
			{ title: "Inhalt planen", explanation: "Wir beginnen mit HTML. main fasst den Hauptinhalt zusammen, h1 ist dein Name und p erklärt kurz, wer du bist.", html: "<main>\n  <h1>Alex' Portfolio</h1>\n  <p>Ich lerne Webentwicklung und baue eigene Seiten.</p>\n</main>", css: "body { font-family: sans-serif; padding: 32px; }", js: "" },
			{ title: "Bereiche erstellen", explanation: "section gruppiert thematisch zusammengehörende Inhalte. Mit h2 bekommt jeder Bereich eine klare Überschrift.", html: "<main>\n  <h1>Alex' Portfolio</h1>\n  <p>Ich lerne Webentwicklung.</p>\n  <section>\n    <h2>Meine Projekte</h2>\n    <p>Eine Wetter-App und ein kleines Spiel.</p>\n  </section>\n</main>", css: "body { font-family: sans-serif; padding: 32px; }\nsection { margin-top: 28px; }", js: "" },
			{ title: "Design gestalten", explanation: "CSS verwandelt die Struktur in ein Layout. background färbt die Fläche, padding schafft Abstand und border-radius rundet die Karte.", html: "<main class=\"portfolio\">\n  <h1>Alex' Portfolio</h1>\n  <p>Ich lerne Webentwicklung.</p>\n  <section>\n    <h2>Meine Projekte</h2>\n    <p>Eine Wetter-App und ein kleines Spiel.</p>\n  </section>\n</main>", css: "body { margin: 0; padding: 32px; background: #eaf8ff; font-family: sans-serif; }\n.portfolio { max-width: 620px; padding: 28px; border-radius: 16px; background: white; color: #18324a; }\nh1 { color: #007c91; }\nsection { margin-top: 28px; padding: 18px; background: #eef1ff; border-radius: 10px; }", js: "" },
			{ title: "Kontakt interaktiv machen", explanation: "JavaScript sucht den Button mit querySelector. addEventListener wartet auf einen Klick und textContent verändert den Text danach.", html: "<main class=\"portfolio\">\n  <h1>Alex' Portfolio</h1>\n  <p>Ich lerne Webentwicklung.</p>\n  <section>\n    <h2>Meine Projekte</h2>\n    <p>Eine Wetter-App und ein kleines Spiel.</p>\n  </section>\n  <button id=\"kontakt\">Kontakt aufnehmen</button>\n</main>", css: "body { margin: 0; padding: 32px; background: #eaf8ff; font-family: sans-serif; }\n.portfolio { max-width: 620px; padding: 28px; border-radius: 16px; background: white; color: #18324a; }\nh1 { color: #007c91; }\nbutton { margin-top: 22px; padding: 11px 16px; border: 0; border-radius: 7px; background: #007c91; color: white; font-weight: bold; cursor: pointer; }", js: "document.querySelector('#kontakt').addEventListener('click', () => {\n  document.querySelector('#kontakt').textContent = 'Nachricht gesendet!';\n});" },
		],
	},
	quiz: {
		title: "Mini-Quiz", description: "Programmiere ein kleines Wissensspiel mit Frage, Antwort und Ergebnis.",
		steps: [
			{ title: "Frage aufbauen", explanation: "HTML legt die Inhalte fest. Ein button ist die mögliche Antwort, die später auf einen Klick reagieren kann.", html: "<main>\n  <h1>Mini-Quiz</h1>\n  <p>Welche Sprache gestaltet das Aussehen einer Website?</p>\n  <button>CSS</button>\n</main>", css: "body { font-family: sans-serif; padding: 32px; }", js: "" },
			{ title: "Antworten ordnen", explanation: "Mehrere Buttons geben Auswahlmöglichkeiten. Das Element mit id=ergebnis ist zunächst leer und zeigt später die Rückmeldung.", html: "<main>\n  <h1>Mini-Quiz</h1>\n  <p>Welche Sprache gestaltet das Aussehen einer Website?</p>\n  <button>HTML</button> <button>CSS</button> <button>Java</button>\n  <p id=\"ergebnis\"></p>\n</main>", css: "body { font-family: sans-serif; padding: 32px; }", js: "" },
			{ title: "Spiel gestalten", explanation: "CSS macht aus der Aufgabe ein kleines Spiel. display, gap und Farben helfen dabei, die Antworten deutlich lesbar anzuordnen.", html: "<main class=\"quiz\">\n  <h1>Mini-Quiz</h1>\n  <p>Welche Sprache gestaltet das Aussehen einer Website?</p>\n  <div class=\"antworten\"><button>HTML</button><button id=\"richtig\">CSS</button><button>Java</button></div>\n  <p id=\"ergebnis\"></p>\n</main>", css: "body { padding: 32px; background: #16142b; font-family: sans-serif; }\n.quiz { max-width: 540px; padding: 28px; border-radius: 16px; background: #fff; }\n.antworten { display: flex; gap: 10px; flex-wrap: wrap; }\nbutton { padding: 10px 14px; border: 1px solid #6d4aff; border-radius: 6px; background: white; cursor: pointer; }", js: "" },
			{ title: "Antwort prüfen", explanation: "JavaScript reagiert nun auf den richtigen Button. Über die ID ergebnis schreiben wir eine Rückmeldung auf die Seite.", html: "<main class=\"quiz\">\n  <h1>Mini-Quiz</h1>\n  <p>Welche Sprache gestaltet das Aussehen einer Website?</p>\n  <div class=\"antworten\"><button>HTML</button><button id=\"richtig\">CSS</button><button>Java</button></div>\n  <p id=\"ergebnis\"></p>\n</main>", css: "body { padding: 32px; background: #16142b; font-family: sans-serif; }\n.quiz { max-width: 540px; padding: 28px; border-radius: 16px; background: #fff; }\n.antworten { display: flex; gap: 10px; flex-wrap: wrap; }\nbutton { padding: 10px 14px; border: 1px solid #6d4aff; border-radius: 6px; background: white; cursor: pointer; }", js: "document.querySelector('#richtig').addEventListener('click', () => {\n  document.querySelector('#ergebnis').textContent = 'Richtig! CSS gestaltet Webseiten.';\n});" },
		],
	},
};
const levelForXp = (xp) => Math.floor(xp / 300) + 1;
const xpForNextLevel = (xp) => levelForXp(xp) * 300;

const elements = {
	nav: document.querySelector("#main-nav"), zoneGrid: document.querySelector("#zone-grid"), activityList: document.querySelector("#activity-list"),
	levelValue: document.querySelector("#level-value"), sidebarLevel: document.querySelector("#sidebar-level"), xpValue: document.querySelector("#xp-value"), xpTarget: document.querySelector("#xp-target"),
	headerXp: document.querySelector("#header-xp"), headerNextLevel: document.querySelector("#header-next-level"), xpProgress: document.querySelector("#xp-progress"),
	achievementCount: document.querySelector("#achievement-count"), achievementTotal: document.querySelector("#achievement-total"), zonesCount: document.querySelector("#zones-count"), menuToggle: document.querySelector("#menu-toggle"), sidebar: document.querySelector(".sidebar"),
	cyberGlobe: document.querySelector("#cyber-globe"),
};

const codingMarker = document.querySelector(".coding-marker");
codingMarker?.addEventListener("pointerdown", (event) => event.stopPropagation());

function buildZoneCards() {
	elements.zoneGrid.replaceChildren(...Object.entries(areas).map(([id, area]) => {
		const button = document.createElement("button");
		button.className = "zone-card"; button.type = "button"; button.dataset.view = id; button.style.setProperty("--accent", area.color); button.style.color = area.color;
		button.innerHTML = `<span class="zone-symbol">${area.symbol}</span><h3>${area.label}</h3><p>${area.description}</p><small>ZONE ÖFFNEN →</small>`;
		return button;
	}));
}

function buildAreaViews() {
	const panels = {
		games: `<div class="zone-heading"><p class="eyebrow">Zone Games</p><h1 id="games-title">Arcade.<br><em>Reagiere schnell.</em></h1><p class="section-lead">Sammle XP mit kurzen Browser-Games. Dein Bestwert bleibt während der Sitzung erhalten.</p></div><section class="tool-surface" style="--accent:#37e6ff"><div><p class="eyebrow">Reaktions-Test</p><h2>Signaljagd</h2><p id="reaction-copy">Starte den Test. Warte auf das grüne Signal und tippe dann so schnell wie möglich.</p><button class="primary-action" type="button" data-action="reaction-start">Test starten</button></div><button class="reaction-pad" id="reaction-pad" type="button" disabled>WARTEN</button><p class="result-line" id="reaction-result"></p></section>`,
		puzzles: `<div class="zone-heading"><p class="eyebrow">Zone Rätsel</p><h1 id="puzzles-title">Knoten lösen.<br><em>Klare Gedanken.</em></h1><p class="section-lead">Eine tägliche Mini-Challenge als Ausgangspunkt für spätere Rätsel, Quiz und Memory-Module.</p></div><section class="tool-surface" style="--accent:#fb4fd2"><div><p class="eyebrow">Tageschallenge</p><h2>Zahlenfolge</h2><p>Welche Zahl folgt? <strong>3, 6, 12, 24, ?</strong></p><form id="puzzle-form" class="inline-form"><input id="puzzle-answer" type="number" placeholder="Antwort" required><button type="submit">Prüfen</button></form><p class="result-line" id="puzzle-result"></p></div><div class="challenge-badge">+40<br><small>XP</small></div></section>`,
		school: `<div class="zone-heading"><p class="eyebrow">Zone Schule</p><h1 id="school-title">Lernen.<br><em>Leveln.</em></h1><p class="section-lead">Wähle deine Klasse. Die Kopfrechenaufgaben passen sich an und nach jeder richtigen Antwort geht es direkt weiter.</p></div><section class="tool-surface" style="--accent:#c8fb66"><div><p class="eyebrow">Mathematik</p><h2>Kopfrechnen</h2><label class="school-grade-label" for="school-grade">Meine Klasse<select id="school-grade"><option value="1">1. Klasse</option><option value="2">2. Klasse</option><option value="3">3. Klasse</option><option value="4">4. Klasse</option><option value="5">5. Klasse</option><option value="6">6. Klasse</option><option value="7">7. Klasse</option><option value="8">8. Klasse</option></select></label><p id="school-task" class="school-task"></p><form id="school-form" class="inline-form"><input id="school-answer" type="number" inputmode="decimal" placeholder="Antwort" required><button type="submit">Prüfen</button></form><p class="result-line" id="school-result"></p></div><div class="challenge-badge">+25<br><small>XP</small></div></section>`,
		coding: `<div class="zone-heading"><p class="eyebrow">Coding Campus</p><h1 id="coding-title">Code schreiben.<br><em>Sofort sehen.</em></h1><p class="section-lead">Entscheide selbst: Lerne erst die Bausteine kennen oder schreibe direkt eigenen Code.</p></div><div class="coding-mode-toggle" role="group" aria-label="Coding-Modus auswählen"><button class="is-active" type="button" data-action="coding-mode" data-mode="practice">Programmieren</button><button type="button" data-action="coding-mode" data-mode="learn">Lernen</button></div><section class="coding-lab coding-practice"><div class="lesson-sidebar"><p class="eyebrow">Lernpfad</p><div class="lesson-tabs"><button type="button" data-action="coding-lesson" data-lesson="html">01 HTML</button><button type="button" data-action="coding-lesson" data-lesson="css">02 CSS</button><button type="button" data-action="coding-lesson" data-lesson="javascript">03 JavaScript</button></div><p id="coding-explanation" class="lesson-explanation"></p><button class="primary-action" type="button" data-action="run-code">Code ausführen</button><p class="result-line" id="coding-result"></p></div><div class="code-workspace"><div class="editor-grid"><label>HTML<textarea id="html-editor" spellcheck="false"></textarea></label><label>CSS<textarea id="css-editor" spellcheck="false"></textarea></label><label>JavaScript<textarea id="js-editor" spellcheck="false"></textarea></label></div><div class="preview-pane"><span>LIVE-VORSCHAU</span><iframe id="code-preview" title="Vorschau deines Codes" sandbox="allow-scripts"></iframe></div></div></section><section class="coding-learn" hidden><div class="learn-intro"><p class="eyebrow">Bausteine verstehen</p><h2>Was macht welcher Code?</h2><p>Wähle einen Baustein und sieh dir seine Aufgabe direkt an. Danach kannst du ihn im Programmiermodus selbst verändern.</p></div><div class="reference-grid"><article class="reference-card"><span class="reference-language">HTML</span><h3>&lt;h1&gt;Titel&lt;/h1&gt;</h3><p>Erstellt eine große Überschrift. Sie beschreibt das wichtigste Thema einer Seite.</p><code>&lt;p&gt;Text&lt;/p&gt;</code><p>Erstellt einen normalen Absatz für zusammenhängenden Text.</p><code>&lt;button&gt;Klick mich&lt;/button&gt;</code><p>Erstellt eine Schaltfläche, die später mit JavaScript reagieren kann.</p><button type="button" data-action="coding-learn-example" data-lesson="html">Im Editor ausprobieren</button></article><article class="reference-card"><span class="reference-language css-reference">CSS</span><h3>color: #0b7285;</h3><p>Legt die Farbe eines Textes fest. Hier bekommt der Text ein Türkis.</p><code>padding: 24px;</code><p>Erzeugt Innenabstand, damit Inhalt nicht direkt am Rand klebt.</p><code>border-radius: 12px;</code><p>Rundet Ecken ab, zum Beispiel bei Karten oder Buttons.</p><button type="button" data-action="coding-learn-example" data-lesson="css">Im Editor ausprobieren</button></article><article class="reference-card"><span class="reference-language js-reference">JAVASCRIPT</span><h3>addEventListener('click', ...)</h3><p>Wartet darauf, dass jemand auf ein Element klickt, und führt dann Code aus.</p><code>document.querySelector('#id')</code><p>Findet ein HTML-Element über seine ID, damit JavaScript es verändern kann.</p><code>textContent = 'Neu!'</code><p>Ändert den sichtbaren Text eines Elements auf der Seite.</p><button type="button" data-action="coding-learn-example" data-lesson="javascript">Im Editor ausprobieren</button></article></div></section>`,
		tools: `<div class="zone-heading"><p class="eyebrow">Zone Tools</p><h1 id="tools-title">Werkzeuge.<br><em>Sofort bereit.</em></h1><p class="section-lead">Kleine Werkzeuge für Konzentration und schnelle Berechnungen. Notizen werden lokal in dieser Sitzung gehalten.</p></div><div class="functional-grid"><section class="functional-card"><p class="eyebrow">Rechner</p><h2>Berechnung</h2><form id="calculator-form" class="stack-form"><input id="calc-expression" inputmode="text" placeholder="z. B. (12 + 8) / 2" required><button type="submit">Berechnen</button></form><p class="result-line" id="calc-result"></p></section><section class="functional-card"><p class="eyebrow">Fokus</p><h2>Timer & Stoppuhr</h2><div class="clock" id="timer-display">05:00</div><div class="button-row"><button data-action="timer-toggle" type="button">Start / Pause</button><button data-action="timer-reset" type="button">Reset</button></div><div class="clock small" id="stopwatch-display">00:00</div><div class="button-row"><button data-action="stopwatch-toggle" type="button">Stoppuhr</button><button data-action="stopwatch-reset" type="button">Reset</button></div></section><section class="functional-card"><p class="eyebrow">Notizen</p><h2>Gedankenbox</h2><textarea id="notes-input" placeholder="Schreib etwas auf..."></textarea><button data-action="save-note" type="button">Notiz speichern</button><p class="result-line" id="notes-result"></p></section></div>`,
		creative: `<div class="zone-heading"><p class="eyebrow">Zone Kreativ</p><h1 id="creative-title">Pixel setzen.<br><em>Welt gestalten.</em></h1><p class="section-lead">Ein kleines Pixel-Art-Feld als erster kreativer Baustein. Wähle eine Farbe, male und speichere dein Motiv als Muster.</p></div><section class="pixel-studio"><div><p class="eyebrow">Pixel-Art Editor</p><h2>Neon Canvas</h2><div class="color-row"><button class="color-swatch is-selected" data-color="#37e6ff" style="--swatch:#37e6ff" aria-label="Cyan auswählen"></button><button class="color-swatch" data-color="#fb4fd2" style="--swatch:#fb4fd2" aria-label="Pink auswählen"></button><button class="color-swatch" data-color="#c8fb66" style="--swatch:#c8fb66" aria-label="Lime auswählen"></button><button class="color-swatch" data-color="#a778ff" style="--swatch:#a778ff" aria-label="Violett auswählen"></button><button class="clear-button" data-action="pixel-clear" type="button">Leeren</button></div><button class="primary-action" data-action="pixel-save" type="button">Kunstwerk speichern</button><p class="result-line" id="pixel-result"></p></div><div class="pixel-grid" id="pixel-grid" aria-label="Pixel-Zeichenfeld"></div></section>`,
	};
	Object.entries(areas).forEach(([id, area]) => { document.querySelector(`[data-view-panel="${id}"]`).innerHTML = panels[id]; });
	buildPixelGrid();
	buildGuidedProjects();
	generateSchoolQuestion();
}

function buildPixelGrid() {
	const grid = document.querySelector("#pixel-grid");
	if (!grid) return;
	grid.replaceChildren(...Array.from({ length: 144 }, (_, index) => { const pixel = document.createElement("button"); pixel.type = "button"; pixel.className = "pixel"; pixel.dataset.pixel = index; pixel.setAttribute("aria-label", `Pixel ${index + 1}`); return pixel; }));
}

function randomNumber(minimum, maximum) { return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; }

function generateSchoolQuestion() {
	const grade = Number(state.schoolGrade);
	let first; let second; let operator; let answer; let hint;
	if (grade <= 2) {
		first = randomNumber(3, grade === 1 ? 20 : 50); second = randomNumber(1, first); operator = Math.random() < .5 ? "+" : "−";
		if (operator === "+") { second = randomNumber(1, grade === 1 ? 20 : 50); answer = first + second; } else answer = first - second;
		hint = "Plus und Minus bis " + (grade === 1 ? "40" : "100");
	} else if (grade <= 4) {
		first = randomNumber(2, 12); second = randomNumber(2, grade === 3 ? 10 : 12); operator = Math.random() < .5 ? "×" : "÷";
		if (operator === "÷") { answer = first; first *= second; } else answer = first * second;
		hint = "Einmaleins und einfache Division";
	} else if (grade <= 6) {
		first = randomNumber(20, 200); second = randomNumber(2, 10); operator = Math.random() < .5 ? "×" : "÷";
		if (operator === "÷") { answer = first; first *= second; } else answer = first * second;
		hint = "Mal- und Geteiltaufgaben";
	} else {
		const percent = [10, 20, 25, 50][randomNumber(0, 3)]; first = randomNumber(2, 12) * 20; second = percent; operator = "% von"; answer = first * percent / 100;
		hint = "Prozentrechnen mit einfachen Werten";
	}
	let explanation;
	if (operator === "+") explanation = `${first} + ${second} = ${answer}. Du kannst erst ${first} nehmen und dann ${second} dazuzählen.`;
	else if (operator === "−") explanation = `${first} − ${second} = ${answer}. Ziehe ${second} schrittweise von ${first} ab.`;
	else if (operator === "×") explanation = `${first} × ${second} = ${answer}. Das bedeutet: ${first} wird ${second}-mal addiert.`;
	else if (operator === "÷") explanation = `${first} ÷ ${second} = ${answer}. Überlege: Wie oft passt ${second} in ${first}?`;
	else explanation = `${second} % von ${first} = ${answer}. Rechne ${first} ÷ 100 × ${second}.`;
	state.schoolQuestion = { answer, task: operator === "% von" ? `${second} % von ${first} = ?` : `${first} ${operator} ${second} = ?`, hint, explanation };
	const task = document.querySelector("#school-task");
	if (task) task.textContent = `${hint}: ${state.schoolQuestion.task}`;
	const answerInput = document.querySelector("#school-answer");
	if (answerInput) { answerInput.value = ""; answerInput.focus(); }
	const result = document.querySelector("#school-result");
	if (result) result.textContent = "";
}

function buildGuidedProjects() {
	const learningArea = document.querySelector(".coding-learn");
	if (!learningArea) return;
	const guide = document.createElement("section");
	guide.className = "guided-projects";
	guide.innerHTML = `<div class="guided-heading"><p class="eyebrow">Website bauen</p><h2>Wähle dein erstes Projekt.</h2><p>Du baust die Seite Schritt für Schritt und siehst nach jeder Stufe ein funktionierendes Ergebnis.</p></div><div class="project-picker">${Object.entries(guidedProjects).map(([id, project]) => `<button type="button" data-action="guided-project" data-project="${id}"><strong>${project.title}</strong><span>${project.description}</span><small>4 SCHRITTE</small></button>`).join("")}</div><div class="guided-lesson" id="guided-lesson" hidden></div>`;
	learningArea.prepend(guide);
}

function showGuidedProject(projectId, stepIndex = 0) {
	const project = guidedProjects[projectId];
	if (!project) return;
	const step = project.steps[stepIndex];
	const lesson = document.querySelector("#guided-lesson");
	const useCases = [
		"Du nutzt diese HTML-Grundstruktur auch für Startseiten, Blog-Beiträge, Produktseiten und Profile.",
		"Solche Bereiche helfen auch bei Speisekarten, FAQ-Abschnitten, Bildergalerien und Listen von Angeboten.",
		"Diese CSS-Regeln kannst du für Karten, Navigationen, Formulare und fast jedes Layout wiederverwenden.",
		"Diese JavaScript-Technik eignet sich auch für Menüs, Formulare, Punkte-Zähler, Filter und kleine Spiele.",
	];
	const code = [step.html && `HTML\n${step.html}`, step.css && `CSS\n${step.css}`, step.js && `JAVASCRIPT\n${step.js}`].filter(Boolean).join("\n\n");
	lesson.hidden = false;
	lesson.innerHTML = `<div><p class="eyebrow">${project.title} · Schritt ${stepIndex + 1} von ${project.steps.length}</p><h3>${step.title}</h3><p>${step.explanation}</p><div class="guided-code"><span>CODE IN DIESEM SCHRITT</span><pre></pre></div><div class="guided-use"><strong>Dafür kannst du es noch benutzen</strong><p>${useCases[stepIndex]}</p></div></div><div class="guided-actions"><button type="button" data-action="guided-previous" data-project="${projectId}" data-step="${stepIndex}" ${stepIndex === 0 ? "disabled" : ""}>Zurück</button><button class="primary-action" type="button" data-action="guided-try" data-project="${projectId}" data-step="${stepIndex}">Im Editor öffnen</button><button type="button" data-action="guided-next" data-project="${projectId}" data-step="${stepIndex}" ${stepIndex === project.steps.length - 1 ? "disabled" : ""}>Weiter</button></div>`;
	lesson.querySelector("pre").textContent = code;
}

function loadGuidedStep(projectId, stepIndex) {
	const step = guidedProjects[projectId]?.steps[stepIndex];
	if (!step) return;
	document.querySelector("#html-editor").value = step.html;
	document.querySelector("#css-editor").value = step.css;
	document.querySelector("#js-editor").value = step.js;
	document.querySelector("#coding-explanation").textContent = step.explanation;
	runCode();
}

function loadCodingLesson(lessonId) {
	const lesson = codingLessons[lessonId];
	if (!lesson) return;
	document.querySelector("#html-editor").value = lesson.html;
	document.querySelector("#css-editor").value = lesson.css;
	document.querySelector("#js-editor").value = lesson.js;
	document.querySelector("#coding-explanation").textContent = lesson.explanation;
	document.querySelectorAll("[data-lesson]").forEach((button) => button.classList.toggle("is-active", button.dataset.lesson === lessonId));
	runCode();
}

function runCode() {
	const preview = document.querySelector("#code-preview");
	if (!preview) return;
	const html = document.querySelector("#html-editor").value;
	const css = document.querySelector("#css-editor").value;
	const javascript = document.querySelector("#js-editor").value.replace(/<\/script/gi, "<\\/script");
	preview.srcdoc = `<!doctype html><html><head><style>${css}</style></head><body>${html}<script>${javascript}</script></body></html>`;
	document.querySelector("#coding-result").textContent = "Vorschau aktualisiert.";
}

function showCodingMode(mode) {
	const isLearning = mode === "learn";
	document.querySelector(".coding-practice").hidden = isLearning;
	document.querySelector(".coding-learn").hidden = !isLearning;
	document.querySelectorAll("[data-mode]").forEach((button) => button.classList.toggle("is-active", button.dataset.mode === mode));
}

function renderProgress() {
	const level = levelForXp(state.xp); const target = xpForNextLevel(state.xp); const levelBase = (level - 1) * 300;
	elements.levelValue.textContent = level; elements.sidebarLevel.textContent = `Level ${level}`; elements.xpValue.textContent = state.xp; elements.xpTarget.textContent = target;
	elements.headerXp.textContent = state.xp; elements.headerNextLevel.textContent = target; elements.xpProgress.style.width = `${((state.xp - levelBase) / 300) * 100}%`;
	const unlocked = achievements.filter((achievement) => achievement.unlocked).length; elements.achievementCount.textContent = unlocked; elements.achievementTotal.textContent = achievements.length; elements.zonesCount.textContent = state.discovered.size;
}

function renderActivity() {
	elements.activityList.replaceChildren(...state.activity.slice(0, 5).map((text, index) => { const item = document.createElement("li"); item.innerHTML = `<time>${index === 0 ? "Jetzt" : `+${index}`}</time><span>${text}</span>`; return item; }));
}

function unlockAchievements() {
	const checks = { "first-zone": state.discovered.size >= 2, explorer: state.discovered.size >= 4, "xp-300": state.xp >= 300, "xp-600": levelForXp(state.xp) >= 3 };
	achievements.forEach((achievement) => { if (!achievement.unlocked && checks[achievement.id]) { achievement.unlocked = true; state.activity.unshift(`Erfolg freigeschaltet: ${achievement.title}.`); } });
}

function addXp(amount, message) {
	state.xp += amount; state.activity.unshift(`${message} +${amount} XP.`); unlockAchievements(); renderProgress(); renderActivity();
}

function visitView(view) {
	const area = areas[view];
	document.querySelectorAll("[data-view-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.viewPanel === view));
	document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.view === view));
	if (area && !state.discovered.has(view)) { state.discovered.add(view); state.xp += 60; state.activity.unshift(`${area.label}-Zone entdeckt. +60 XP.`); unlockAchievements(); }
	renderProgress(); renderActivity(); elements.sidebar.classList.remove("is-open");
}

function handleClick(event) {
	const viewTrigger = event.target.closest("[data-view]");
	if (viewTrigger) { visitView(viewTrigger.dataset.view); if (viewTrigger.dataset.codingMode) showCodingMode(viewTrigger.dataset.codingMode); return; }
	const action = event.target.closest("[data-action]")?.dataset.action;
	if (action) handleAction(action, event.target.closest("[data-action]"));
	const color = event.target.closest("[data-color]");
	if (color) selectPixelColor(color);
	const pixel = event.target.closest("[data-pixel]");
	if (pixel) pixel.style.background = state.pixelColor;
	const pad = event.target.closest("#reaction-pad");
	if (pad) handleReactionTap();
}

function handleAction(action, trigger) {
	if (action === "reaction-start") startReaction();
	if (action === "coding-mode") showCodingMode(trigger.dataset.mode);
	if (action === "coding-lesson") loadCodingLesson(trigger.dataset.lesson);
	if (action === "coding-learn-example") { loadCodingLesson(trigger.dataset.lesson); showCodingMode("practice"); }
	if (action === "guided-project") showGuidedProject(trigger.dataset.project);
	if (action === "guided-previous") showGuidedProject(trigger.dataset.project, Number(trigger.dataset.step) - 1);
	if (action === "guided-next") showGuidedProject(trigger.dataset.project, Number(trigger.dataset.step) + 1);
	if (action === "guided-try") { loadGuidedStep(trigger.dataset.project, Number(trigger.dataset.step)); showCodingMode("practice"); }
	if (action === "run-code") runCode();
	if (action === "timer-toggle") toggleTimer();
	if (action === "timer-reset") { state.timerSeconds = 300; renderClocks(); }
	if (action === "stopwatch-toggle") toggleStopwatch();
	if (action === "stopwatch-reset") { state.stopwatchSeconds = 0; renderClocks(); }
	if (action === "save-note") { const note = document.querySelector("#notes-input").value.trim(); document.querySelector("#notes-result").textContent = note ? "Notiz in dieser Sitzung gespeichert." : "Schreib zuerst eine Notiz."; if (note) addXp(10, "Notiz gespeichert."); }
	if (action === "pixel-clear") document.querySelectorAll(".pixel").forEach((pixel) => { pixel.style.background = ""; });
	if (action === "pixel-save") { const usedPixels = [...document.querySelectorAll(".pixel")].filter((pixel) => pixel.style.background).length; const result = document.querySelector("#pixel-result"); result.textContent = usedPixels ? `${usedPixels} Pixel gesichert.` : "Setze zuerst ein paar Pixel."; if (usedPixels) addXp(25, "Pixel-Kunstwerk gespeichert."); }
}

function startReaction() { const pad = document.querySelector("#reaction-pad"); const result = document.querySelector("#reaction-result"); if (state.reactionActive) return; state.reactionActive = true; pad.disabled = true; pad.textContent = "WARTEN"; pad.classList.remove("is-ready"); result.textContent = "Signal wird aufgebaut..."; state.reactionTimeout = window.setTimeout(() => { state.reactionStart = performance.now(); pad.disabled = false; pad.textContent = "JETZT!"; pad.classList.add("is-ready"); result.textContent = "Tippe sofort!"; }, 900 + Math.random() * 1800); }
function handleReactionTap() { const pad = document.querySelector("#reaction-pad"); const result = document.querySelector("#reaction-result"); if (!pad.classList.contains("is-ready")) return; const reaction = Math.round(performance.now() - state.reactionStart); state.reactionActive = false; pad.disabled = true; pad.classList.remove("is-ready"); pad.textContent = "GESCHAFFT"; result.textContent = `${reaction} ms - starke Reaktion.`; addXp(reaction < 400 ? 35 : 20, "Signaljagd abgeschlossen."); }
function formatClock(seconds) { return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`; }
function renderClocks() { document.querySelector("#timer-display").textContent = formatClock(state.timerSeconds); document.querySelector("#stopwatch-display").textContent = formatClock(state.stopwatchSeconds); }
function toggleTimer() { if (state.timerHandle) { clearInterval(state.timerHandle); state.timerHandle = null; return; } state.timerHandle = window.setInterval(() => { state.timerSeconds = Math.max(0, state.timerSeconds - 1); renderClocks(); if (!state.timerSeconds) { clearInterval(state.timerHandle); state.timerHandle = null; addXp(15, "Fokus-Timer beendet."); } }, 1000); }
function toggleStopwatch() { if (state.stopwatchHandle) { clearInterval(state.stopwatchHandle); state.stopwatchHandle = null; return; } state.stopwatchHandle = window.setInterval(() => { state.stopwatchSeconds += 1; renderClocks(); }, 1000); }
function selectPixelColor(button) { state.pixelColor = button.dataset.color; document.querySelectorAll(".color-swatch").forEach((swatch) => swatch.classList.toggle("is-selected", swatch === button)); }

function handleSubmit(event) {
	if (event.target.id === "puzzle-form") { event.preventDefault(); const result = document.querySelector("#puzzle-result"); if (Number(document.querySelector("#puzzle-answer").value) === 48 && !state.puzzleSolved) { state.puzzleSolved = true; result.textContent = "Korrekt: Verdopplung erkannt."; addXp(40, "Tageschallenge gelöst."); } else { result.textContent = state.puzzleSolved ? "Diese Challenge ist bereits gelöst." : "Noch nicht. Schau auf die Regel zwischen den Zahlen."; } }
	if (event.target.id === "school-form") { event.preventDefault(); const result = document.querySelector("#school-result"); const answer = Number(document.querySelector("#school-answer").value); if (answer === state.schoolQuestion.answer) { result.textContent = "Richtig! Die nächste Aufgabe kommt sofort."; addXp(25, "Kopfrechenaufgabe gelöst."); window.setTimeout(generateSchoolQuestion, 650); } else { result.textContent = `Noch nicht richtig. ${state.schoolQuestion.explanation}`; } }
	if (event.target.id === "calculator-form") { event.preventDefault(); const input = document.querySelector("#calc-expression").value; const result = document.querySelector("#calc-result"); if (!/^[\d\s+\-*/().]+$/.test(input)) { result.textContent = "Bitte nutze nur Zahlen und Rechenzeichen."; return; } try { const value = Function(`"use strict"; return (${input})`)(); result.textContent = `Ergebnis: ${Number(value).toLocaleString("de-DE")}`; } catch { result.textContent = "Diese Rechnung ist nicht gültig."; } }
}

buildZoneCards(); buildAreaViews(); loadCodingLesson("html"); renderProgress(); renderActivity();
document.addEventListener("click", handleClick);
document.addEventListener("submit", handleSubmit);
document.addEventListener("change", (event) => { if (event.target.id === "school-grade") { state.schoolGrade = event.target.value; document.querySelector("#school-result").textContent = "Neue Klassenstufe gewählt."; generateSchoolQuestion(); } });
elements.menuToggle.addEventListener("click", () => elements.sidebar.classList.toggle("is-open"));

function enableGlobeRotation() {
	const globe = elements.cyberGlobe;
	if (!globe) return;
	let isDragging = false;
	let startX = 0;
	let startY = 0;
	let rotationX = 0;
	let rotationY = 0;

	globe.addEventListener("pointerdown", (event) => {
		isDragging = true;
		startX = event.clientX;
		startY = event.clientY;
		globe.setPointerCapture(event.pointerId);
		globe.classList.add("is-dragging");
	});

	globe.addEventListener("pointermove", (event) => {
		if (!isDragging) return;
		rotationY += (event.clientX - startX) * 0.45;
		rotationX = Math.max(-34, Math.min(34, rotationX - (event.clientY - startY) * 0.3));
		startX = event.clientX;
		startY = event.clientY;
		globe.style.setProperty("--globe-x", `${rotationX}deg`);
		globe.style.setProperty("--globe-y", `${rotationY}deg`);
	});

	const finishRotation = () => { isDragging = false; globe.classList.remove("is-dragging"); };
	globe.addEventListener("pointerup", finishRotation);
	globe.addEventListener("pointercancel", finishRotation);
}

enableGlobeRotation();
