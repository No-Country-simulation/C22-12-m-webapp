Proceso ElegirPlaylist
	Definir estado_animo Como Entero;
	Definir respuesta Como Entero;
	Escribir '¿Cuál es tu estado emocional actual?';
	Escribir '1. Alegre';
	Escribir '2. Reflexivo';
	Escribir '3. Relajado';
	Escribir '4. Eufórico';
	Escribir '5. Romántico';
	Leer estado_animo;
	Segun estado_animo  Hacer
		1:
			// Alegre  
			Escribir '¿Quieres música para bailar o cantar?';
			Escribir '1. Bailar';
			Escribir '2. Cantar';
			Leer respuesta;
			Segun respuesta  Hacer
				1:
					Escribir 'Recomiendo una playlist de música bailable.';
				2:
					Escribir 'Recomiendo una playlist de canciones animadas para cantar.';
			FinSegun
		2:
			// Reflexivo  
			Escribir '¿Buscas algo melódico o instrumental?';
			Escribir '1. Melódico';
			Escribir '2. Instrumental';
			Leer respuesta;
			Segun respuesta  Hacer
				1:
					Escribir 'Recomiendo una playlist de baladas reflexivas.';
				2:
					Escribir 'Recomiendo una playlist de música instrumental para meditar.';
			FinSegun
		3:
			// Relajado  
			Escribir '¿Qué actividad deseas acompañar con música?';
			Escribir '1. Meditación';
			Escribir '2. Lectura';
			Leer respuesta;
			Segun respuesta  Hacer
				1:
					Escribir 'Recomiendo una playlist de música suave para meditar.';
				2:
					Escribir 'Recomiendo una playlist de música suave para leer.';
			FinSegun
		4:
			// Eufórico  
			Escribir '¿Quieres algo con buen ritmo o música para hacer deporte?';
			Escribir '1. Buen ritmo';
			Escribir '2. Mezcla';
			Leer respuesta;
			Segun respuesta  Hacer
				1:
					Escribir 'Recomiendo una playlist de pop activo.';
				2:
					Escribir 'Recomiendo una playlist de Electronic Dance Music (EDM).';
			FinSegun
		5:
			// Romántico  
			Escribir '¿Prefieres algo clásico o moderno?';
			Escribir '1. Clásico';
			Escribir '2. Moderno';
			Leer respuesta;
			Segun respuesta  Hacer
				1:
					Escribir 'Recomiendo una playlist de baladas románticas clásicas.';
				2:
					Escribir 'Recomiendo una playlist de hits románticos actuales.';
			FinSegun
		De Otro Modo:
			Escribir 'Estado emocional no reconocido. Intenta de nuevo.';
	FinSegun
FinProceso
