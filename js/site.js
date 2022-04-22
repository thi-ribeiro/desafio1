let _replaceVogais = ['a', 'e', 'i', 'o', 'u'];
let _replacePalavras = ['ai', 'enter', 'imes', 'ober', 'ufat'];

let encriptoTexto = document.getElementById('criptoTextarea');
let resultado = document.getElementById('resultadoTextarea');

const cripto = () => {
	let texto = encriptoTexto.value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
	let addToText = '';
	let posDe;

	[...texto].forEach((letra, iletra) => {
		_replaceVogais.forEach((vogal, iVogal) => {
			if (letra === vogal) {
				posDe = iletra;
				addToText += _replacePalavras[iVogal];
			}
		});
		if (iletra !== posDe) {
			addToText += letra;
		}
	});

	resultado.value = '';
	resultado.value = addToText;
};

const decripto = () => {
	let texto = encriptoTexto.value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, ''); //PREGUIÇA
	let textoCompleto = '';

	let posDe, posAte;

	[...texto].forEach((letra, iLetra) => {
		//let posAtual = iLetra;
		_replacePalavras.forEach((palavra, iPalvra) => {
			if (palavra === texto.substring(iLetra, palavra.length + iLetra)) {
				posDe = iLetra;
				posAte = palavra.length + iLetra;
				textoCompleto += letra;
			}
		});
		if (iLetra >= posAte) {
			textoCompleto += letra;
		} else if (posDe === undefined) {
			textoCompleto += letra;
		}
	});

	resultado.value = '';
	resultado.value = textoCompleto;
};

const copyToClip = () => {
	navigator.clipboard.writeText(resultado.value);
};

const copyToCripDec = () => {
	encriptoTexto.value = resultado.value;
	resultado.value = '';
};

//------------- ALTERNATIVA ------------//
//texto
// .replaceAll('ai', 'a')
// .replaceAll('enter', 'e')
// .replaceAll('imes', 'i')
// .replaceAll('ober', 'o')
// .replaceAll('ufat', 'u');
