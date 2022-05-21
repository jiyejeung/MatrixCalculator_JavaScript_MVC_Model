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
		const buttonRandomNormalMatrixContainer = createElement('BUTTON');
		const buttonDeleteNormalMatrixContainer = createElement('BUTTON');
		const iTrashCan = createElement('I');
		const iDice = createElement('I');

		buttonCreateNormalMatrix.className = 'buttonCreateNormalMatrix';
		buttonRandomNormalMatrixContainer.className = 'buttonRandomNormalMatrixContainer';
		buttonDeleteNormalMatrixContainer.className = 'buttonDeleteNormalMatrixContainer';
		iTrashCan.className = '';
		iDice.className = '';

		buttonDeleteNormalMatrixContainer.appendChild(iTrashCan);
		buttonRandomNormalMatrixContainer.appendChild(iDice);

		const fragment = combineElement([buttonCreateNormalMatrix, buttonRandomNormalMatrixContainer, buttonDeleteNormalMatrixContainer]);

		return fragment;
	}
}
