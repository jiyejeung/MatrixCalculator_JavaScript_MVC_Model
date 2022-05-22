import Controller from '../controller/Controller.js';
import { combineElement, createElement } from '../utils/ElementTool.js';

export default class {
	constructor(h1NormalMatrixTitleText) {
		this.h1NormalMatrixTitleText = h1NormalMatrixTitleText;
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
	printRowAndColContainer() {
		const inputNormalMatrixRow = createElement('INPUT');
		const inputNormalMatrixCol = createElement('INPUT');

		inputNormalMatrixRow.className = 'inputNormalMatrixRow';
		inputNormalMatrixCol.className = 'inputNormalMatrixCol';

		inputNormalMatrixRow.setAttribute('placeholder', Controller.GENERAL_MATRIX.ROW_KEYWORD);
		inputNormalMatrixCol.setAttribute('placeholder', Controller.GENERAL_MATRIX.COL_KEYWORD);

		const fragment = combineElement([inputNormalMatrixRow, inputNormalMatrixCol]);

		return fragment;
	}
	printButtonContainer() {
		const buttonCreateNormalMatrix = createElement('BUTTON', Controller.GENERAL_MATRIX.CREATE_KEYWORD);
		const buttonRandomNormalMatrixContainer = this.printButton('buttonRandomNormalMatrixContainer', 'fa-solid fa-dice iDice');
		const buttonDeleteNormalMatrixContainer = this.printButton('buttonDeleteNormalMatrixContainer', 'fa-solid fa-trash-can iTrashCan');

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
