document.addEventListener('DOMContentLoaded', () => {
	(document.querySelectorAll('.aviso') || []).forEach(($delete) => {
		$notification = $delete.parentNode;

		$delete.addEventListener('click', () => {
			document.querySelectorAll('.notification')[0].remove();
		});
	});
});


function calculaJuros() {
	const taxasMaster = [3.87, 4.36, 4.85, 5.35, 5.84, 6.43, 6.92, 7.41, 7.91, 8.40, 8.89];
	const taxaDesc = 0.8;
	const taxasJuros = taxasMaster.map(taxa => (taxa + taxaDesc).toFixed(2)).map(Number);

	const valorFinanciado = parseFloat(document.querySelector('#valor').value);
	const parcelas = parseInt(document.querySelector('#parcelas').value);

	if (!valorFinanciado) {
		document.querySelector('.aviso').innerHTML = `<div class="notification is-danger">
			<button class="delete"></button> É necessário informar um valor antes de calcular</div>`;
	} else {

		let juros = taxasJuros[parcelas - 2] / 100
		let valorDaParcela = ((valorFinanciado * juros) + valorFinanciado) / parcelas;
		valorDaParcela = valorDaParcela.toFixed(2);

		document.querySelector('.aviso').innerHTML = `<div class="notification is-success">
			<button class="delete"></button></button> ${parcelas} Vezes de R$${valorDaParcela}</div>`;
		document.querySelector('#valor').value = "";
	}

}