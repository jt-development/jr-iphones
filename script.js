document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.aviso') || []).forEach(($delete) => {
    $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      document.querySelectorAll('.notification')[0].remove();
    });
  });
});

function calculaJuros() {
	let valorFinanciado =  parseFloat(document.querySelector('#valor').value)
	let parcelas =  parseInt(document.querySelector('#parcelas').value)

		if(!valorFinanciado){
			document.querySelector('.aviso').innerHTML = `<div class="notification is-danger">
			<button class="delete"></button> É necessario informar um valor antes de calcular</div>`
		}else{
			let juros = (parcelas + 2) /100
			let valorDaParcela = ((valorFinanciado * juros) + valorFinanciado) / parcelas
			valorDaParcela = valorDaParcela.toFixed(2)
			document.querySelector('.aviso').innerHTML = `<div class="notification is-success">
			<button class="delete"></button></button> ${parcelas} Vezes de R$${valorDaParcela}</div>`
			//document.querySelector('.aviso').innerHTML = `<strong>R$ ${valorFinanciado} em ${parcelas}X fica... ${valorDaParcela}</strong>`
		}
}

//document.querySelectorAll('.notification .delete')
//parentNode.removeChild($notification);