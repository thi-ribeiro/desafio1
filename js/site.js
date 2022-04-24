let _replaceVogais = ['a', 'e', 'i', 'o', 'u'];
let _replacePalavras = ['ai', 'enter', 'imes', 'ober', 'ufat'];

let encriptoTexto = document.getElementById('criptoTextarea');
let resultado = document.getElementById('resultadoTextarea');

const cripto_decripto = (type) => {
	let texto = encriptoTexto.value;
	let txtSaida = '';

	for (let iText = 0; iText < texto.length; iText++) {
		//POSICAO DA LETRA NO TEXTO
		for (let iRep = 0; iRep < _replaceVogais.length; iRep++) {
			let pL = texto[iText];
			if (type) {
				let pLRP = _replacePalavras[iRep].charAt(
					_replacePalavras[iRep].length - 1
				);
				let pRF = _replacePalavras[iRep].length - 1;
				let pLF = texto[iText + pRF];
				//DECRYPT
				if (pL === _replaceVogais[iRep] && pLF === pLRP) {
					iText += _replacePalavras[iRep].length;
					txtSaida += _replaceVogais[iRep];
				}
			} else {
				//ENCRYPT
				if (pL === _replaceVogais[iRep]) {
					iText += _replaceVogais[iRep].length;
					txtSaida += _replacePalavras[iRep];
				}
			}
		}
		txtSaida += iText < texto.length ? texto[iText] : '';
	}
	type ? result(resultado, txtSaida) : result(resultado, txtSaida);
};

const result = (elemento, valor = '') => {
	valor = valor.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	elemento.value = valor;
};

const copyToClip = () => {
	navigator.clipboard.writeText(resultado.value);
};

const copyToCripDec = () => {
	encriptoTexto.value = resultado.value;
	resultado.value = '';
};
