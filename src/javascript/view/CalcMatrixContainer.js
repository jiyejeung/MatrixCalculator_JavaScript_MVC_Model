import { combineElement, createElement } from '../utils/ElementTool.js';

export default class {
	constructor(h1CalcMatrixTitleText) {
		this.h1CalcMatrixTitleText = h1CalcMatrixTitleText;
	}
	printCalcMatrixContainer() {
		const sectionCalcMatrixContainer = createElement('SECTION');
		sectionCalcMatrixContainer.className = 'sectionCalcMatrixContainer';

		sectionCalcMatrixContainer.append(this.printTitle(), this.printMatrixTopContainer(), this.printMatrixBottomContainer());

		return sectionCalcMatrixContainer;
	}
	printTitle() {
		const h1CalcMatrixTitle = createElement('H1', this.h1CalcMatrixTitleText);
		h1CalcMatrixTitle.className = 'h1CalcMatrixTitle';

		return h1CalcMatrixTitle;
	}
	printMatrixTopContainer() {
		const divTopCalcMatrixContainer = createElement('DIV');
		divTopCalcMatrixContainer.className = 'divTopCalcMatrixContainer';

		return divTopCalcMatrixContainer;
	}
	printDisplayMatrixContainer() {
		return;
	}
	printMatrixBottomContainer() {
		const divBottomCalcMatrixContainer = createElement('DIV');
		const fragment = combineElement([
			this.printMatrixButtonContainer('buttonCalcPlus', 'fa-solid fa-square-plus iCalcPlus'),
			this.printMatrixButtonContainer('buttonCalcMinus', 'fa-solid fa-square-minus iCalcMinus'),
			this.printMatrixButtonContainer('buttonCalcMultiply', 'fa-solid fa-square-xmark iCalcMultiply'),
		]);

		divBottomCalcMatrixContainer.appendChild(fragment);

		return divBottomCalcMatrixContainer;
	}
	printMatrixButtonContainer(firstArg, iCalcClassName) {
		const buttonCalcMatrixContainer = createElement('BUTTON');
		const iCalc = createElement('I');

		buttonCalcMatrixContainer.className = firstArg;
		iCalc.className = iCalcClassName;

		buttonCalcMatrixContainer.appendChild(iCalc);

		return buttonCalcMatrixContainer;
	}
}
