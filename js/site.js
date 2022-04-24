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

//------------- ALTERNATIVA ------------//
//
//texto
// .replaceAll('ai', 'a')
// .replaceAll('enter', 'e')
// .replaceAll('imes', 'i')
// .replaceAll('ober', 'o')
// .replaceAll('ufat', 'u');
//
//------------- Minha Alternativa --------//
// const cripto = () => {
// 	let texto = encriptoTexto.value
// 		.normalize('NFD')
// 		.replace(/[\u0300-\u036f]/g, '')
// 		.toLowerCase();
// 	let addToText = '';
// 	let posDe;
// 	[...texto].forEach((letra, iletra) => {
// 		_replaceVogais.forEach((vogal, iVogal) => {
// 			if (letra === vogal) {
// 				posDe = iletra;
// 				addToText += _replacePalavras[iVogal];
// 			}
// 		});
// 		if (iletra !== posDe) {
// 			addToText += letra;
// 		}
// 	});
// 	result(resultado, addToText);
// };
// //PALAVRAS COM PROBLEMA AO DESENCRIPTAR ... anim|ai|s oct|ober| |enter|obius
// const decripto = () => {
// 	let texto = encriptoTexto.value
// .normalize('NFD')
// .replace(/[\u0300-\u036f]/g, '')
// .toLowerCase(); //PREGUIÇA
// 	let textoCompleto = '';
// 	let posDe, posAte;
// 	[...texto].forEach((letra, iLetra) => {
// 		_replacePalavras.forEach((palavra, iPalvra) => {
// 			if (palavra === texto.substring(iLetra, palavra.length + iLetra)) {
// 				posDe = iLetra;
// 				posAte = palavra.length + iLetra;
// 				textoCompleto += letra;
// 			}
// 		});
// 		if (iLetra >= posAte) {
// 			textoCompleto += letra;
// 		} else if (posDe === undefined) {
// 			textoCompleto += letra;
// 		}
// 	});
// 	result(resultado, textoCompleto);
// };
