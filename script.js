document.addEventListener('DOMContentLoaded', () => {
	(document.querySelectorAll('.aviso') || []).forEach(($delete) => {
		$notification = $delete.parentNode;

		$delete.addEventListener('click', () => {
			document.querySelectorAll('.notification')[0].remove();
		});
	});
});


function calculaJuros() {
	let taxasJuros = [4, 4.8, 5.6, 6.4, 7.2, 6.9, 7.7, 8.5, 9.2, 11.1, 11.09];
	
	let valorFinanciado = document.querySelector('#valor').value;
	valorFinanciado = valorFinanciado.replace('.', '')
	valorFinanciado = valorFinanciado.replace(',', '.')
	valorFinanciado = parseFloat(valorFinanciado)

	const parcelas = parseInt(document.querySelector('#parcelas').value);

	if (!valorFinanciado) {
		document.querySelector('.aviso').innerHTML = `<div class="notification is-danger">
			<button class="delete"></button> É necessário informar um valor antes de calcular</div>`;
	} else {

		let juros = taxasJuros[parcelas - 2] / 100
		let valorDaParcela = ((valorFinanciado * juros) + valorFinanciado) / parcelas;
		valorDaParcela = valorDaParcela.toFixed(2);
		valorDaParcela = Number(valorDaParcela).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
		
		
		let aviso = document.querySelector('.aviso');

		const enunciado = `O parcelamento em 21x é válido apenas para cartões Visa ou 
		Master, os demais são válidos em até 18x com restrição para bancos digitais Ex.: Digio, Pag, Inter... `;

		let msg1 = `
		<div class="notification is-success">
		<button class="delete"></button></button> 
		${parcelas} Vezes de ${valorDaParcela}
		</div>`;

		let msg2 = `
		<div class="notification is-info" id="enunciado" >
		<button class="delete"></button></button>
		<strong >Lembrete</strong> 
		<p>${enunciado}</p>
		</div>
		<div class="notification is-success">
		<button class="delete"></button></button> 
		${parcelas} Vezes de ${valorDaParcela}
		</div>`;
		
		aviso.innerHTML = parcelas > 12 ? msg2 : msg1;
		
		window.location.href = '#enunciado'
	}

}
