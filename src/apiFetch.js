var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
	e.preventDefault();
	console.log("he clickeado");

	var datos = new FormData(formulario);
	console.log(datos);
	console.log(JSON.stringify(datos));

	fetch("locahost", {
		method: "POST",
		body: datos,
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});
});
