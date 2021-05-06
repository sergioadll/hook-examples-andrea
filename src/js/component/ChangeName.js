// Importamos useState
import React, { useState } from "react";

export function ChangeName() {
	// Definimos las variables de estado con el hook useState
	// const [<Variable>, <Función que cambia el valor de la variable>] = useState(<Valor inicial de la Variable>);
	const [name, setName] = useState("Andrea");

	const changeName = () => {
		if (name === "Andrea") {
			setName("Sergio");
		} else {
			setName("Andrea");
		}
	};

	return (
		<div className="text-center mt-5 bg-info">
			<h2>{name}</h2>
			{/* Dos maneras de pasarle la función como parámetro al onClick */}
			<button id="1" onClick={changeName}>
				Cambiar nombre 1
			</button>
			<button id="2" onClick={() => changeName()}>
				Cambiar nombre 2
			</button>
		</div>
	);
}
