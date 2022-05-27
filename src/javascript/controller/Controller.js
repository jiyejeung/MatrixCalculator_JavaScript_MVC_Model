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
		this.randomInputMatrixItems();
	},
	printMatrix() {
		$$('.buttonCreateNormalMatrix').forEach(
			(button, index) =>
				void button.addEventListener('click', () => {
					this.confirmNumber($$('.inputNormalMatrixRow')[index].value, $$('.inputNormalMatrixCol')[index].value, index);
				})
		);
	},
	resetInputRowAndCol(index) {
		$$('.inputNormalMatrixRow')[index].value = '';
		$$('.inputNormalMatrixCol')[index].value = '';
	},
	setReadOnly(index) {
		$$('.inputNormalMatrixRow')[index].setAttribute('readOnly', 'readOnly');
		$$('.inputNormalMatrixCol')[index].setAttribute('readOnly', 'readOnly');
	},
	setNotReadOnly(index) {
		$$('.inputNormalMatrixRow')[index].removeAttribute('readOnly');
		$$('.inputNormalMatrixCol')[index].removeAttribute('readOnly');
	},
	confirmNumber(firstArg, secondArg, index) {
		if (/^[1-9]+$/.test(firstArg) && /^[1-9]+$/.test(secondArg)) {
			this.resetNormalMatrixContainer(index);
			this.normalFirstMatrixContainer.printInputMatrixItems(this.normalFirstMatrixContainer.createInputMatrixItems(parseInt(firstArg), parseInt(secondArg)), index);
			this.setReadOnly(index);
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
		$$('.buttonDeleteNormalMatrixContainer').forEach(
			(button, index) =>
				void button.addEventListener('click', () => {
					this.resetNormalMatrixContainer(index);
					this.resetInputRowAndCol(index);
					this.setNotReadOnly(index);
				})
		);
	},
	deleteModal() {
		$('.buttonDeleteModalContainer').addEventListener('click', () => {
			Modal.removeModal();
		});
	},
	printRandomNumber() {
		return Math.floor(Math.random() * 2) ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100);
	},
	inputRandomNumber(index) {
		$$('.divDisplayMatrixContainer')
			[index].querySelectorAll('.inputMatrixItem')
			.forEach((input) => void (input.value = this.printRandomNumber()));
	},
	randomInputMatrixItems() {
		$$('.buttonRandomNormalMatrixContainer').forEach((button, index) => void button.addEventListener('click', () => void this.inputRandomNumber(index)));
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
