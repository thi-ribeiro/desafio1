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
