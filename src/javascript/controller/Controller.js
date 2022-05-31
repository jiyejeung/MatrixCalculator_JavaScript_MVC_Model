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
	randomInputMatrixItems() {
		$$('.buttonRandomNormalMatrixContainer').forEach((button, index) => void button.addEventListener('click', () => void NormalMatrixContainer.inputRandomNumber(index)));
	},
	confirmExistMatrix() {
		if (CalcMatrixContainer.calcHandler && $$('.divDisplayMatrixContainer').some((divDisplay) => divDisplay.querySelector('input') == null)) {
			Modal.printModal(Constants.WARNING_KEYWORD.WARNING07);
			CalcMatrixContainer.calcHandler = false;
		}
	},
	confirmSameRowAndCol() {
		if (CalcMatrixContainer.calcHandler && ($$('.inputNormalMatrixRow')[0].value !== $$('.inputNormalMatrixRow')[1].value || $$('.inputNormalMatrixCol')[0].value !== $$('.inputNormalMatrixCol')[1].value)) {
			Modal.printModal(Constants.WARNING_KEYWORD.WARNING04);
			CalcMatrixContainer.calcHandler = false;
		}
	},
	confirmWrongValue() {
		if (CalcMatrixContainer.calcHandler && $$('.divDisplayMatrixContainer').some((divDisplay) => Array.from(divDisplay.querySelectorAll('input')).some((input) => !/^-?\d{1}$|^-?\d{2}$/g.test(input.value)))) {
			Modal.printModal(Constants.WARNING_KEYWORD.WARNING03);
			CalcMatrixContainer.calcHandler = false;
		}
	},
	confirmThreeFigures() {
		if (CalcMatrixContainer.calcHandler && $$('.divDisplayMatrixContainer').some((divDisplay) => Array.from(divDisplay.querySelectorAll('input')).some((input) => /^\d{3}$/g.test(input.value)))) {
			Modal.printModal(Constants.WARNING_KEYWORD.WARNING03);
			CalcMatrixContainer.calcHandler = false;
		}
	},
	calcPlus() {
		$('.buttonCalcPlus').addEventListener('click', () => {
			this.confirmExistMatrix();
			this.confirmSameRowAndCol();
			this.confirmWrongValue();
			this.confirmThreeFigures();
			if (CalcMatrixContainer.calcHandler) {
				console.log('good');
			} else {
				console.log('bad');
			}
			// ---- //
			// input 태그들을 모두 초기화해야함
			// input 태그들을 생성해야함
			// input 첫번째와 두번째의 값을 합쳐 value에 넣어야함
		});
	},
	calcMinus() {
		$('.buttonCalcMinus').addEventListener('click', () => ({
			// divDisplayMatrixContainer 안에 input태그들이 존재하는지 확인해야함
			// input 첫번째와 두번째의 값이 같은지 확인해야함
			// divDisplayMatrixContainer input 안에 빈 값은 없는지 확인해야함, 잘못된 값이 있는지 확인해야함
			// divDisplayMatrixContainer input 안에 두자리 이상의 값이 있는지, 없는지 확인해야함
		}));
	},
	calcMultiply() {
		$('.buttonCalcMultiply').addEventListener('click', () => {});
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
