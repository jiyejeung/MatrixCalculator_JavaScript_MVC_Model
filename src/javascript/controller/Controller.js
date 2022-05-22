import Constants from '../model/Constants.js';
import { $ } from '../utils/ElementTool.js';
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
