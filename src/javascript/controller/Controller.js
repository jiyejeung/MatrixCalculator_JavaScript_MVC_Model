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
		const calcMatrixContainer = new CalcMatrixContainer('Result Matrix');

		$('#app').append(normalFirstMatrixContainer.printNormalMatrixContainer(), normalSecondMatrixContainer.printNormalMatrixContainer(), calcMatrixContainer.printCalcMatrixContainer());
	}
}
