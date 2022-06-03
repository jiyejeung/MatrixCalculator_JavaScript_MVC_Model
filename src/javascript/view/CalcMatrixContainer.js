import Controller from '../controller/Controller.js';
import { $, $$, combineElement, createElement } from '../utils/ElementTool.js';

export default Object.seal({
	calcHandler: true,
	printCalcMatrixContainer() {
		const sectionCalcMatrixContainer = createElement('SECTION');
		sectionCalcMatrixContainer.className = 'sectionCalcMatrixContainer';

		sectionCalcMatrixContainer.append(this.printMatrixTopContainer(), this.printMatrixBottomContainer());

		return sectionCalcMatrixContainer;
	},
	printMatrixTopContainer() {
		const divTopCalcMatrixContainer = createElement('DIV');
		const divTopCalcMatrixButtonContainer = createElement('DIV');

		divTopCalcMatrixContainer.className = 'divTopCalcMatrixContainer';
		divTopCalcMatrixButtonContainer.className = 'divTopCalcMatrixButtonContainer';

		divTopCalcMatrixButtonContainer.append(
			this.printMatrixButtonContainer('buttonCalcPlus', 'fa-solid fa-square-plus iCalcPlus'),
			this.printMatrixButtonContainer('buttonCalcMinus', 'fa-solid fa-square-minus iCalcMinus'),
			this.printMatrixButtonContainer('buttonCalcMultiply', 'fa-solid fa-square-xmark iCalcMultiply')
		);
		divTopCalcMatrixContainer.append(this.printTitle(), this.printAuthor(), divTopCalcMatrixButtonContainer);

		return divTopCalcMatrixContainer;
	},
	printTitle() {
		const h1CalcMatrixTitle = createElement('H1', Controller.CALC_MATRIX.CALC_MATRIX_TITLE);
		h1CalcMatrixTitle.className = 'h1CalcMatrixTitle';

		return h1CalcMatrixTitle;
	},
	printAuthor() {
		const h2CalcMatrixAuthor = createElement('H2', `Created by ${Controller.CALC_MATRIX.AUTHOR[0]}, ${Controller.CALC_MATRIX.AUTHOR[1]}`);
		h2CalcMatrixAuthor.className = 'h2CalcMatrixAuthor';

		return h2CalcMatrixAuthor;
	},
	printMatrixButtonContainer(firstArg, iCalcClassName) {
		const buttonCalcMatrixContainer = createElement('BUTTON');
		const iCalc = createElement('I');

		buttonCalcMatrixContainer.className = firstArg;
		iCalc.className = iCalcClassName;

		buttonCalcMatrixContainer.appendChild(iCalc);

		return buttonCalcMatrixContainer;
	},
	printMatrixBottomContainer() {
		const divBottomCalcMatrixContainer = createElement('DIV');
		divBottomCalcMatrixContainer.className = 'divBottomCalcMatrixContainer';
		divBottomCalcMatrixContainer.appendChild(this.printDisplayMatrixContainer());

		return divBottomCalcMatrixContainer;
	},
	printDisplayMatrixContainer() {
		const divDisplayMatrixContainer = createElement('DIV');
		divDisplayMatrixContainer.className = 'divDisplayCalcMatrixContainer';

		return divDisplayMatrixContainer;
	},
	createInputMatrixItem() {
		const inputMatrixItem = createElement('INPUT');

		inputMatrixItem.className = 'inputCalcMatrixItem';

		inputMatrixItem.setAttribute('readOnly', 'readOnly');

		return inputMatrixItem;
	},
	createBr() {
		return createElement('BR');
	},
	createInputCalcMatrixItems(rowValue, colValue) {
		let elements = new Array(+rowValue).fill(0).map(() => new Array(+colValue).fill(0).map(() => this.createInputMatrixItem()));
		elements.forEach(arr => void arr.push(this.createBr()));

		return elements.flat();
	},
	resetInputMatrixItems() {
		$$('.divDisplayCalcMatrixContainer input')?.forEach(input => void input.remove());
		$$('.divDisplayCalcMatrixContainer br')?.forEach(br => void br.remove());
	},
	printInputMatrixItems(elements) {
		this.resetInputMatrixItems();
		$('.divDisplayCalcMatrixContainer').appendChild(combineElement(elements));
	},
	calcPlusInputMatrixItems() {
		$$('.divDisplayCalcMatrixContainer input').forEach((input, index) => void (input.value = Controller.getFirstMatrixInputValues().flat()[index] + Controller.getSecondMatrixInputValue().flat()[index]));
	},
	calcMinusInputMatrixItems() {
		$$('.divDisplayCalcMatrixContainer input').forEach((input, index) => void (input.value = Controller.getFirstMatrixInputValues().flat()[index] - Controller.getSecondMatrixInputValue().flat()[index]));
	},
	calcMultiplyInputMatrixItems() {},
});
