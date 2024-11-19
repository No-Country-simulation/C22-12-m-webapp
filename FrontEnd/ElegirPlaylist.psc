Proceso ElegirPlaylist
	Definir estado_animo Como Entero;
	Definir respuesta Como Entero;
	Escribir '�Cu�l es tu estado emocional actual?';
	Escribir '1. Alegre';
	Escribir '2. Reflexivo';
	Escribir '3. Relajado';
	Escribir '4. Euf�rico';
	Escribir '5. Rom�ntico';
	Leer estado_animo;
	Segun estado_animo  Hacer
		1:
			// Alegre  
			Escribir '�Quieres m�sica para bailar o cantar?';
			Escribir '1. Bailar';
			Escribir '2. Cantar';
			Leer respuesta;
			Segun respuesta  Hacer
				1:
					Escribir 'Recomiendo una playlist de m�sica bailable.';
				2:
					Escribir 'Recomiendo una playlist de canciones animadas para cantar.';
			FinSegun
		2:
			// Reflexivo  
			Escribir '�Buscas algo mel�dico o instrumental?';
			Escribir '1. Mel�dico';
			Escribir '2. Instrumental';
			Leer respuesta;
			Segun respuesta  Hacer
				1:
					Escribir 'Recomiendo una playlist de baladas reflexivas.';
				2:
					Escribir 'Recomiendo una playlist de m�sica instrumental para meditar.';
			FinSegun
		3:
			// Relajado  
			Escribir '�Qu� actividad deseas acompa�ar con m�sica?';
			Escribir '1. Meditaci�n';
			Escribir '2. Lectura';
			Leer respuesta;
			Segun respuesta  Hacer
				1:
					Escribir 'Recomiendo una playlist de m�sica suave para meditar.';
				2:
					Escribir 'Recomiendo una playlist de m�sica suave para leer.';
			FinSegun
		4:
			// Euf�rico  
			Escribir '�Quieres algo con buen ritmo o m�sica para hacer deporte?';
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
			// Rom�ntico  
			Escribir '�Prefieres algo cl�sico o moderno?';
			Escribir '1. Cl�sico';
			Escribir '2. Moderno';
			Leer respuesta;
			Segun respuesta  Hacer
				1:
					Escribir 'Recomiendo una playlist de baladas rom�nticas cl�sicas.';
				2:
					Escribir 'Recomiendo una playlist de hits rom�nticos actuales.';
			FinSegun
		De Otro Modo:
			Escribir 'Estado emocional no reconocido. Intenta de nuevo.';
	FinSegun
FinProceso
