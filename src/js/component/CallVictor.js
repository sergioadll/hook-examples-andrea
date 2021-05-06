// Importamos useState y useEffect
import React, { useState, useEffect } from "react";

export function CallVictor() {
	// Definimos las variables de estado con el hook useState
	// const [<Variable>, <Función que cambia el valor de la variable>] = useState(<Valor inicial de la Variable>);
	const [name, setName] = useState();
	const [callVictor, setCallVictor] = useState(false);

	// useEffect( función flecha dentro )
	useEffect(() => {
		if (callVictor) {
			setName("Victor");
		} else {
			setName("Andrea");
		}
		console.log("useEffect is executing now!");
	}, [callVictor]);
	// Aquí el useEffect está escuchando a la variable de estado callVictor y se ejecuta cuando su valor cambia
	// , [] *para que se ejecute sólo cuando carga la primera vez

	const changeName = () => {
		if (name === "Andrea") {
			setName("Sergio");
		} else {
			setName("Andrea");
		}
	};

	return (
		<div className="text-center mt-5 bg-success">
			<h2>{name}</h2>
			<button id="1" onClick={changeName}>
				Cambiar nombre
			</button>
			{/* Cambia el valor de callVictor al contrario true ==> false y viceversa
            Al cambiar el valor ejecuta el useEffect */}
			<button id="1" onClick={() => setCallVictor(!callVictor)}>
				Llamar a victor
			</button>
		</div>
	);
}
