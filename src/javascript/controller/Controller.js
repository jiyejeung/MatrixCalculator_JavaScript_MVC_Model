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
		this.deleteInputMatrixItems();
	},
	printMatrix() {
		$$('.buttonCreateNormalMatrix').forEach((button, index) => {
			button.addEventListener('click', () => {
				this.confirmNumber($$('.inputNormalMatrixRow')[index].value, $$('.inputNormalMatrixCol')[index].value, index);
			});
		});
	},
	resetInputRowAndCol(index) {
		$$('.inputNormalMatrixRow')[index].value = '';
		$$('.inputNormalMatrixCol')[index].value = '';
	},
	confirmNumber(firstArg, secondArg, index) {
		if (/^[1-9]+$/.test(firstArg) && /^[1-9]+$/.test(secondArg)) {
			this.resetNormalMatrixContainer(index);
			this.normalFirstMatrixContainer.printInputMatrixItems(this.normalFirstMatrixContainer.createInputMatrixItems(parseInt(firstArg), parseInt(secondArg)), index);
			console.log(firstArg, secondArg);
			return;
		} else if (firstArg === '' || secondArg === '') {
			this.resetInputRowAndCol(index);
			Modal.printModal(`${Constants.WARNING_KEYWORD.WARNING01} ${Constants.WARNING_KEYWORD.WARNING02}`);
			return;
		} else if (!/^[1-9]+$/.test(firstArg) || !/^[1-9]+$/.test(secondArg)) {
			this.resetInputRowAndCol(index);
			Modal.printModal(Constants.WARNING_KEYWORD.WARNING02);
			return;
		}
	},
	resetNormalMatrixContainer(index) {
		this.resetInputRowAndCol(index);
		switch (index) {
			case 0:
				this.normalFirstMatrixContainer.resetInputMatrixItems(index);
				this.normalFirstMatrixContainer.toggleButtons(index);
				break;
			default:
				this.normalSecondMatrixContainer.resetInputMatrixItems(index);
				this.normalSecondMatrixContainer.toggleButtons(index);
				break;
		}
	},
	deleteInputMatrixItems() {
		$$('.buttonDeleteNormalMatrixContainer').forEach((button, index) => {
			button.addEventListener('click', () => {
				this.resetNormalMatrixContainer(index);
				console.log('hello');
			});
		});
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
