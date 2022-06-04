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
		this.calcPlus();
		this.calcMinus();
		this.calcMultiply();
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
			NormalMatrixContainer.printInputMatrixItems(NormalMatrixContainer.createInputMatrixItems(rowValue, colValue), index);
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
					CalcMatrixContainer.resetInputMatrixItems();
				})
		);
	},
	deleteModal() {
		$('.buttonDeleteModalContainer').addEventListener('click', () => {
			Modal.removeModal();
			CalcMatrixContainer.calcHandler = true;
		});
	},
	randomInputMatrixItems() {
		$$('.buttonRandomNormalMatrixContainer').forEach((button, index) => void button.addEventListener('click', () => void NormalMatrixContainer.inputRandomNumber(index)));
	},
	confirmExistMatrix() {
		if (CalcMatrixContainer.calcHandler && $$('.divDisplayMatrixContainer').some(divDisplay => divDisplay.querySelector('input') == null)) {
			Modal.printModal(Constants.WARNING_KEYWORD.WARNING07);
			CalcMatrixContainer.calcHandler = false;
		}
	},
	confirmSameRowAndCol(modalText) {
		if (CalcMatrixContainer.calcHandler && ($$('.inputNormalMatrixRow')[0].value !== $$('.inputNormalMatrixRow')[1].value || $$('.inputNormalMatrixCol')[0].value !== $$('.inputNormalMatrixCol')[1].value)) {
			Modal.printModal(modalText); // 행렬의 덧셈을 위해서 행과 열을 같게 해주세요 // 행렬의 마이너스를 위해서 행과 열을 같게 해주세요
			CalcMatrixContainer.calcHandler = false;
		}
	},
	confirmWrongValue() {
		if (CalcMatrixContainer.calcHandler && $$('.divDisplayMatrixContainer').some(divDisplay => Array.from(divDisplay.querySelectorAll('input')).some(input => !/^-?\d{1}$|^-?\d{2}$/g.test(input.value)))) {
			Modal.printModal(Constants.WARNING_KEYWORD.WARNING03);
			CalcMatrixContainer.calcHandler = false;
		}
	},
	confirmThreeFigures() {
		if (CalcMatrixContainer.calcHandler && $$('.divDisplayMatrixContainer').some(divDisplay => Array.from(divDisplay.querySelectorAll('input')).some(input => /^\d{3}$/g.test(input.value)))) {
			Modal.printModal(Constants.WARNING_KEYWORD.WARNING03);
			CalcMatrixContainer.calcHandler = false;
		}
	},
	confirmSameFirstRowAndSecondCol() {
		if (CalcMatrixContainer.calcHandler && $$('.inputNormalMatrixCol')[0].value !== $$('.inputNormalMatrixRow')[1].value) {
			Modal.printModal(Constants.WARNING_KEYWORD.WARNING06);
			CalcMatrixContainer.calcHandler = false;
		}
	},
	confirmForCalcPlusOrMinus(modalText) {
		this.confirmExistMatrix();
		this.confirmSameRowAndCol(modalText);
		this.confirmWrongValue();
		this.confirmThreeFigures();
	},
	confirmForCalcMultiply() {
		this.confirmExistMatrix();
		this.confirmSameFirstRowAndSecondCol();
		this.confirmWrongValue();
		this.confirmThreeFigures();
	},
	getFirstMatrixInputValues() {
		const rowValue = $$('.inputNormalMatrixRow')[0].value;
		const colValue = $$('.inputNormalMatrixCol')[0].value;
		let index = -1;
		const firstMatrixInputValues = new Array(+rowValue).fill(0).map(() =>
			new Array(+colValue).fill(0).map(() => {
				index++;
				return +$$('.divDisplayMatrixContainer')[0].querySelectorAll('input')[index].value;
			})
		);

		return firstMatrixInputValues;
	},
	getSecondMatrixInputValues() {
		const rowValue = $$('.inputNormalMatrixRow')[1].value;
		const colValue = $$('.inputNormalMatrixCol')[1].value;
		let index = -1;
		const secondMatrixInputValues = new Array(+rowValue).fill(0).map(() =>
			new Array(+colValue).fill(0).map(() => {
				index++;
				return +$$('.divDisplayMatrixContainer')[1].querySelectorAll('input')[index].value;
			})
		);

		return secondMatrixInputValues;
	},
	calcPlus() {
		$('.buttonCalcPlus').addEventListener('click', () => {
			this.confirmForCalcPlusOrMinus(Constants.WARNING_KEYWORD.WARNING04);
			CalcMatrixContainer.calcHandler &&
				(CalcMatrixContainer.printInputMatrixItems(CalcMatrixContainer.createInputCalcMatrixItems($$('.inputNormalMatrixRow')[0].value, $$('.inputNormalMatrixCol')[0].value)),
				CalcMatrixContainer.calcPlusInputMatrixItems());
		});
	},
	calcMinus() {
		$('.buttonCalcMinus').addEventListener('click', () => {
			this.confirmForCalcPlusOrMinus(Constants.WARNING_KEYWORD.WARNING05);
			CalcMatrixContainer.calcHandler &&
				(CalcMatrixContainer.printInputMatrixItems(CalcMatrixContainer.createInputCalcMatrixItems($$('.inputNormalMatrixRow')[0].value, $$('.inputNormalMatrixCol')[0].value)),
				CalcMatrixContainer.calcMinusInputMatrixItems());
		});
	},
	calcMultiply() {
		$('.buttonCalcMultiply').addEventListener('click', () => {
			this.confirmForCalcMultiply();
			CalcMatrixContainer.calcHandler &&
				(CalcMatrixContainer.printInputMatrixItems(CalcMatrixContainer.createInputCalcMatrixItems($$('.inputNormalMatrixRow')[0].value, $$('.inputNormalMatrixCol')[1].value)),
				CalcMatrixContainer.calcMultiplyInputMatrixItems());
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
