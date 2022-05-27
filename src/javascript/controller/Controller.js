import Constants from '../model/Constants.js';
import { $, $$, combineElement } from '../utils/ElementTool.js';
import CalcMatrixContainer from '../view/CalcMatrixContainer.js';
import Modal from '../view/Modal.js';
import NormalMatrixContainer from '../view/NormalMatrixContainer.js';

export default Object.freeze({
	normalFirstMatrixContainer: new NormalMatrixContainer('First Matrix'),
	normalSecondMatrixContainer: new NormalMatrixContainer('Second Matrix'),
	init() {
		$('#app').append(this.normalFirstMatrixContainer.printNormalMatrixContainer(), this.normalSecondMatrixContainer.printNormalMatrixContainer(), CalcMatrixContainer.printCalcMatrixContainer());
		this.printMatrix();
	},
	printMatrix() {
		$$('.buttonCreateNormalMatrix').forEach((button, index) => {
			button.addEventListener('click', () => {
				this.confirmNumber($$('.inputNormalMatrixRow')[index].value, $$('.inputNormalMatrixCol')[index].value, index);
			});
		});
	},
	confirmNumber(firstArg, secondArg, index) {
		if (/^[1-9]+$/.test(firstArg) && /^[1-9]+$/.test(secondArg)) {
			this.normalFirstMatrixContainer.printInputMatrixItems(this.normalFirstMatrixContainer.createInputMatrixItems(parseInt(firstArg), parseInt(secondArg)), index);
			// input의 value를 View에 보내주고, 보내준 값을 토대로 matrix를 생성해야함.
			// createButton을 숨기고, reset, delete button을 보여줘야함.
			console.log(firstArg, secondArg);
			return;
		} else if (firstArg === '' || secondArg === '') {
			$$('.inputNormalMatrixRow')[index].value = '';
			$$('.inputNormalMatrixCol')[index].value = '';
			Modal.printModal(`${Constants.WARNING_KEYWORD.WARNING01} ${Constants.WARNING_KEYWORD.WARNING02}`);
			return;
		} else if (!/^[1-9]+$/.test(firstArg) || !/^[1-9]+$/.test(secondArg)) {
			$$('.inputNormalMatrixRow')[index].value = '';
			$$('.inputNormalMatrixCol')[index].value = '';
			Modal.printModal(Constants.WARNING_KEYWORD.WARNING02);
			return;
		}
	},
	deleteModal() {
		$('.buttonDeleteModalContainer').addEventListener('click', () => {
			Modal.removeModal();
		});
	},
	get GENERAL_MATRIX() {
		return Constants.GENERAL_MATRIX;
	},
	get CALC_MATRIX() {
		return Constants.CALC_MATRIX;
	},
	get WARNING_KEYWORD() {
		return Constants.WARNING_KEYWORD;
	},
});
