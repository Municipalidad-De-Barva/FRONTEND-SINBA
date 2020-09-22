/*
formulario.addEventListener("submit", function (e) {
	console.log("he clickeado");
	e.preventDefault();
	

	var datos = new FormData(formulario);
	console.log(datos);
	console.log(JSON.stringify(datos));

	fetch("http://localhost:3001/", {
		method: "POST",
		body: datos,
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});
});*/
/*
var bot = FormPatComUnificado.getElementById("bt1");

bot.onclick(function (e) {
	console.log("he clickeado");
});*/

export const prueba = (e) => {
	console.log("he clickeado HERE");
	e.preventDefault();
};
