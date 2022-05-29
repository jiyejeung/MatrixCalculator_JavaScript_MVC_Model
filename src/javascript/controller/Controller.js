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
	resetNormalMatrixContainer(index) {
		NormalMatrixContainer.resetInputMatrixItems(index);
		switch (index) {
			case 0:
				this.normalFirstMatrixContainer.toggleButtons(index);
				break;
			default:
				this.normalSecondMatrixContainer.toggleButtons(index);
				break;
		}
	},
	confirmNumber(rowValue, colValue, index) {
		if (/^[1-9]+$/.test(rowValue) && /^[1-9]+$/.test(colValue)) {
			this.resetNormalMatrixContainer(index);
			NormalMatrixContainer.printInputMatrixItems(NormalMatrixContainer.createInputMatrixItems(parseInt(rowValue), parseInt(colValue)), index);
			NormalMatrixContainer.setReadOnly(index);
			return;
		} else if (rowValue === '' || colValue === '') {
			NormalMatrixContainer.resetInputRowAndCol(index);
			Modal.printModal(`${Constants.WARNING_KEYWORD.WARNING01} ${Constants.WARNING_KEYWORD.WARNING02}`);
			return;
		} else if (!/^[1-9]+$/.test(rowValue) || !/^[1-9]+$/.test(colValue)) {
			NormalMatrixContainer.resetInputRowAndCol(index);
			Modal.printModal(Constants.WARNING_KEYWORD.WARNING02);
			return;
		}
	},
	deleteInputMatrixItems() {
		$$('.buttonDeleteNormalMatrixContainer').forEach(
			(button, index) =>
				void button.addEventListener('click', () => {
					this.resetNormalMatrixContainer(index);
					NormalMatrixContainer.resetInputRowAndCol(index);
					NormalMatrixContainer.setNotReadOnly(index);
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
	confirmExistMatrix() {},
	confirmSameRowAndCol() {
		const row = $$('.inputNormalMatrixRow');
		const col = $$('.inputNormalMatrixCol');
		if (row[0].value === row[1].value && row[1] === col[1].value) {
			// input 태그들을 모두 초기화해야함
			// input 태그들을 생성해야함
			// input 첫번째와 두번째의 값을 합쳐 value에 넣어야함
		} else {
		}
	},
	calcPlus() {
		$('.buttonCalcPlus').addEventListener(
			'click',
			() =>
				void (
					{
						// divDisplayMatrixContainer 안에 input태그들이 존재하는지 확인해야함
						// input 첫번째와 두번째의 값이 같은지 확인해야함
						// divDisplayMatrixContainer input 안에 빈 값은 없는지 확인해야함
						// divDisplayMatrixContainer input 안에 두자리 이상의 값이 있는지, 없는지 확인해야함
					}
				)
		);
	},
	calcMinus() {
		$('.buttonCalcMinus').addEventListener('click', () => void {});
	},
	calcMultiply() {
		$('.buttonCalcMultiply').addEventListener('click', () => void {});
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
