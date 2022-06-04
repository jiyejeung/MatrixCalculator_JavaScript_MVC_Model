import Controller from '../controller/Controller.js';
import { $$, combineElement, createElement } from '../utils/ElementTool.js';

export default class NormalMatrixContainer {
	constructor(h1NormalMatrixTitleText) {
		this.h1NormalMatrixTitleText = h1NormalMatrixTitleText;
		this.toggleButtonsHandler = true;
	}
	printNormalMatrixContainer() {
		const sectionMatrixContainer = createElement('SECTION');
		sectionMatrixContainer.className = 'sectionMatrixContainer';

		sectionMatrixContainer.append(this.printMatrixTopContainer(), this.printMatrixBottomContainer());

		return sectionMatrixContainer;
	}
	printTitle() {
		const h1NormalMatrixTitle = createElement('H1', this.h1NormalMatrixTitleText);
		h1NormalMatrixTitle.className = 'h1NormalMatrixTitle';

		return h1NormalMatrixTitle;
	}
	printMatrixTopContainer() {
		const divTopNormalMatrixContainer = createElement('DIV');
		divTopNormalMatrixContainer.className = 'divTopNormalMatrixContainer';
		divTopNormalMatrixContainer.appendChild(this.printDisplayMatrixContainer());

		return divTopNormalMatrixContainer;
	}
	printDisplayMatrixContainer() {
		const divDisplayMatrixContainer = createElement('DIV');
		divDisplayMatrixContainer.className = 'divDisplayMatrixContainer';

		return divDisplayMatrixContainer;
	}
	static createInputMatrixItem() {
		const inputMatrixItem = createElement('INPUT');

		inputMatrixItem.className = 'inputMatrixItem';

		inputMatrixItem.setAttribute('value', '0');
		inputMatrixItem.setAttribute('maxLength', '3');

		return inputMatrixItem;
	}
	static createBr() {
		return createElement('BR');
	}
	static resetInputMatrixItems(index) {
		$$('.divDisplayMatrixContainer')
			[index].querySelectorAll('input')
			?.forEach(input => void input.remove());
		$$('.divDisplayMatrixContainer')
			[index].querySelectorAll('br')
			?.forEach(br => void br.remove());
	}
	static createInputMatrixItems(rowValue, colValue) {
		const elements = new Array(+rowValue).fill(0).map(() => new Array(+colValue).fill(0).map(() => NormalMatrixContainer.createInputMatrixItem()));
		elements.forEach(arr => void arr.push(NormalMatrixContainer.createBr()));

		return elements.flat();
	}
	static printInputMatrixItems(elements, index) {
		$$('.divDisplayMatrixContainer')[index].appendChild(combineElement(elements));
	}
	static printRandomNumber() {
		return Math.floor(Math.random() * 2) ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100);
	}
	static inputRandomNumber(index) {
		$$('.divDisplayMatrixContainer')
			[index].querySelectorAll('.inputMatrixItem')
			.forEach(input => void (input.value = NormalMatrixContainer.printRandomNumber()));
	}
	static resetInputRowAndCol(index) {
		$$('.inputNormalMatrixRow')[index].value = '';
		$$('.inputNormalMatrixCol')[index].value = '';
	}
	static setReadOnly(index) {
		$$('.inputNormalMatrixRow')[index].setAttribute('readOnly', 'readOnly');
		$$('.inputNormalMatrixCol')[index].setAttribute('readOnly', 'readOnly');
	}
	static setNotReadOnly(index) {
		$$('.inputNormalMatrixRow')[index].removeAttribute('readOnly');
		$$('.inputNormalMatrixCol')[index].removeAttribute('readOnly');
	}
	printRowAndColContainer() {
		const inputNormalMatrixRow = createElement('INPUT');
		const inputNormalMatrixCol = createElement('INPUT');

		inputNormalMatrixRow.className = 'inputNormalMatrixRow';
		inputNormalMatrixCol.className = 'inputNormalMatrixCol';

		inputNormalMatrixRow.setAttribute('placeholder', Controller.GENERAL_MATRIX.ROW_KEYWORD);
		inputNormalMatrixCol.setAttribute('placeholder', Controller.GENERAL_MATRIX.COL_KEYWORD);

		inputNormalMatrixRow.setAttribute('maxLength', '1');
		inputNormalMatrixCol.setAttribute('maxLength', '1');

		const fragment = combineElement([inputNormalMatrixRow, inputNormalMatrixCol]);

		return fragment;
	}
	printButton(buttonClassName, iClassName) {
		const buttonNormal = createElement('BUTTON');
		const iNormal = createElement('I');

		buttonNormal.className = buttonClassName;
		iNormal.className = iClassName;

		buttonNormal.appendChild(iNormal);

		return buttonNormal;
	}
	printButtonContainer() {
		const buttonCreateNormalMatrix = createElement('BUTTON', Controller.GENERAL_MATRIX.CREATE_KEYWORD);
		const buttonRandomNormalMatrixContainer = this.printButton('buttonRandomNormalMatrixContainer', 'fa-solid fa-dice iDice');
		const buttonDeleteNormalMatrixContainer = this.printButton('buttonDeleteNormalMatrixContainer', 'fa-solid fa-trash-can iTrashCan');

		buttonCreateNormalMatrix.className = 'buttonCreateNormalMatrix';

		const fragment = combineElement([buttonCreateNormalMatrix, buttonRandomNormalMatrixContainer, buttonDeleteNormalMatrixContainer]);

		return fragment;
	}
	printMatrixBottomContainer() {
		const divBottomNormalMatrixContainer = createElement('DIV');
		const divBottomTopNormalMatrixContainer = createElement('DIV');
		const divBottomBottomNormalMatrixContainer = createElement('DIV');

		divBottomNormalMatrixContainer.className = 'divBottomNormalMatrixContainer';
		divBottomTopNormalMatrixContainer.className = 'divBottomTopNormalMatrixContainer';
		divBottomBottomNormalMatrixContainer.className = 'divBottomBottomNormalMatrixContainer';

		divBottomTopNormalMatrixContainer.appendChild(this.printRowAndColContainer());
		divBottomBottomNormalMatrixContainer.appendChild(this.printButtonContainer());

		divBottomNormalMatrixContainer.append(this.printTitle(), divBottomTopNormalMatrixContainer, divBottomBottomNormalMatrixContainer);

		return divBottomNormalMatrixContainer;
	}
	toggleButtons(index) {
		if (this.toggleButtonsHandler) {
			$$('.buttonCreateNormalMatrix')[index].style.display = 'none';
			$$('.buttonDeleteNormalMatrixContainer')[index].style.display = 'inline-block';
			$$('.buttonRandomNormalMatrixContainer')[index].style.display = 'inline-block';
			this.toggleButtonsHandler = false;
		} else {
			$$('.buttonCreateNormalMatrix')[index].style.display = 'inline-block';
			$$('.buttonDeleteNormalMatrixContainer')[index].style.display = 'none';
			$$('.buttonRandomNormalMatrixContainer')[index].style.display = 'none';
			this.toggleButtonsHandler = true;
			console.log(this.h1NormalMatrixTitleText, this.toggleButtonsHandler);
		}
	}
	static getInputMatrixItemValues() {
		const firstMatrixValues = $$('.divDisplayMatrixContainer')[0]
			.querySelectorAll('input')
			.map(input => +input.value);
		const secondMatrixValues = $$('.divDisplayMatrixContainer')[1]
			.querySelectorAll('input')
			.map(input => +input.value);

		return [firstMatrixValues, secondMatrixValues];
	}

	static getInputMatrixItemValues(rowValue, colValue) {
		const firstMatrixValues = new Array(rowValue).fill(0).map(() => new Array(colValue).fill(0));
		const secondMatrixValues = new Array(rowValue).fill(0).map(() => new Array(colValue).fill(0));

		let firstIndex = 0;
		let secondIndex = 0;

		firstMatrixValues.forEach(
			arr =>
				void arr.map(() => {
					let value = $$('.divDisplayMatrixContainer')[0]
						.querySelectorAll('input')
						.map(input => +input.value)[firstIndex];
					firstIndex++;

					return value;
				})
		);
		secondMatrixValues.forEach(
			arr =>
				void arr.map(() => {
					let value = $$('.divDisplayMatrixContainer')[1]
						.querySelectorAll('input')
						.map(input => +input.value)[secondIndex];
					secondIndex++;
					return value;
				})
		);

		return [firstMatrixValues, secondMatrixValues];
	}
}
