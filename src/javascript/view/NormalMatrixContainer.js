import { combineElement, createElement } from '../utils/ElementTool.js';

export default class {
	constructor(h1NormalMatrixTitleText) {
		this.h1NormalMatrixTitleText = h1NormalMatrixTitleText;
	}
	printNormalMatrixContainer() {
		const sectionMatrixContainer = createElement('SECTION');
		sectionMatrixContainer.className = 'sectionMatrixContainer';
		sectionMatrixContainer.appendChild(this.printTitle());
		sectionMatrixContainer.appendChild(this.printMatrixTopContainer());
		sectionMatrixContainer.appendChild(this.printMatrixBottomContainer());

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

		return divTopNormalMatrixContainer;
	}
	printDisplayMatrixContainer() {
		return;
	}
	printMatrixBottomContainer() {
		const divBottomNormalMatrixContainer = createElement('DIV');
		const divBottomTopNormalMatrixContainer = createElement('DIV');
		const divBottomBottomNormalMatrixContainer = createElement('DIV');

		divBottomTopNormalMatrixContainer.appendChild(this.printRowAndColContainer());
		divBottomBottomNormalMatrixContainer.appendChild(this.printButtonContainer());

		divBottomNormalMatrixContainer.appendChild(divBottomTopNormalMatrixContainer);
		divBottomNormalMatrixContainer.appendChild(divBottomBottomNormalMatrixContainer);

		return divBottomNormalMatrixContainer;
	}
	printRowAndColContainer() {
		const inputNormalMatrixRow = createElement('INPUT');
		const inputNormalMatrixCol = createElement('INPUT');

		inputNormalMatrixRow.className = 'inputNormalMatrixRow';
		inputNormalMatrixCol.className = 'inputNormalMatrixCol';

		inputNormalMatrixRow.setAttribute('placeholder', 'ROW');
		inputNormalMatrixCol.setAttribute('placeholder', 'COL');

		const fragment = combineElement([inputNormalMatrixRow, inputNormalMatrixCol]);

		return fragment;
	}
	printButtonContainer() {
		const buttonCreateNormalMatrix = createElement('BUTTON', 'CREATE');
		const buttonRandomNormalMatrixContainer = this.printButton('buttonRandomNormalMatrixContainer', 'fa-solid fa-dice');
		const buttonDeleteNormalMatrixContainer = this.printButton('buttonDeleteNormalMatrixContainer', 'fa-solid fa-trash-can');

		buttonCreateNormalMatrix.className = 'buttonCreateNormalMatrix';

		const fragment = combineElement([buttonCreateNormalMatrix, buttonRandomNormalMatrixContainer, buttonDeleteNormalMatrixContainer]);

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
}
