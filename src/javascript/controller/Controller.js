import Constants from '../model/Constants.js';
import { $, $$ } from '../utils/ElementTool.js';
import CalcMatrixContainer from '../view/CalcMatrixContainer.js';
import NormalMatrixContainer from '../view/NormalMatrixContainer.js';

export default class {
	constructor() {
		this.init();
	}
	init() {
		const normalFirstMatrixContainer = new NormalMatrixContainer('First Matrix');
		const normalSecondMatrixContainer = new NormalMatrixContainer('Second Matrix');

		$('#app').append(normalFirstMatrixContainer.printNormalMatrixContainer(), normalSecondMatrixContainer.printNormalMatrixContainer(), CalcMatrixContainer.printCalcMatrixContainer());
		this.printMatrix();
	}
	printMatrix() {
		$$('.buttonCreateNormalMatrix').forEach((button, index) => {
			button.addEventListener('click', () => {
				this.confirmNumber($$('.inputNormalMatrixRow')[index].value, $$('.inputNormalMatrixCol')[index].value);
			});
		});
	}
	confirmNumber(firstArg, secondArg) {
		if (/^[1-9]+$/.test(firstArg) && /^[1-9]+$/.test(secondArg)) {
			// input의 value를 View에 보내주고, 보내준 값을 토대로 matrix를 생성해야함.
			// createButton을 숨기고, reset, delete button을 보여줘야함.
			console.log(firstArg, secondArg);
			return;
		} else if (!/^[1-9]+$/.test(firstArg)) {
			// firstValue의 값을 지워야함.
			console.log('false');
		} else if (!/^[1-9]+$/.test(secondArg)) {
			// firstValue의 값을 지워야함.
		}
		// modal 창을 띄워야함.
	}
	static get GENERAL_MATRIX() {
		return Constants.GENERAL_MATRIX;
	}
	static get CALC_MATRIX() {
		return Constants.CALC_MATRIX;
	}
	static get WARNING_KEYWORD() {
		return Constants.WARNING_KEYWORD;
	}
}
