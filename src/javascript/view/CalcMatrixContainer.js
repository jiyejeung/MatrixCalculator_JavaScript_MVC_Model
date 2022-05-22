import Constants from '../model/Constants.js';
import { createElement } from '../utils/ElementTool.js';

export default Object.freeze({
	printCalcMatrixContainer() {
		const sectionCalcMatrixContainer = createElement('SECTION');
		sectionCalcMatrixContainer.className = 'sectionCalcMatrixContainer';

		sectionCalcMatrixContainer.append(this.printMatrixTopContainer(), this.printMatrixBottomContainer());

		return sectionCalcMatrixContainer;
	},
	printMatrixTopContainer() {
		const divTopCalcMatrixContainer = createElement('DIV');
		divTopCalcMatrixContainer.className = 'divTopCalcMatrixContainer';

		return divTopCalcMatrixContainer;
	},
	printDisplayMatrixContainer() {
		return;
	},
	printMatrixBottomContainer() {
		const divBottomCalcMatrixContainer = createElement('DIV');
		const divBottomCalcMatrixButtonContainer = createElement('DIV');

		divBottomCalcMatrixContainer.className = 'divBottomCalcMatrixContainer';
		divBottomCalcMatrixButtonContainer.className = 'divBottomCalcMatrixButtonContainer';

		divBottomCalcMatrixButtonContainer.append(
			this.printMatrixButtonContainer('buttonCalcPlus', 'fa-solid fa-square-plus iCalcPlus'),
			this.printMatrixButtonContainer('buttonCalcMinus', 'fa-solid fa-square-minus iCalcMinus'),
			this.printMatrixButtonContainer('buttonCalcMultiply', 'fa-solid fa-square-xmark iCalcMultiply')
		);
		divBottomCalcMatrixContainer.append(this.printTitle(), divBottomCalcMatrixButtonContainer);

		return divBottomCalcMatrixContainer;
	},
	printTitle() {
		const h1CalcMatrixTitle = createElement('H1', Constants.CALC_MATRIX.CALC_MATRIX_TITLE);
		h1CalcMatrixTitle.className = 'h1CalcMatrixTitle';

		return h1CalcMatrixTitle;
	},
	printMatrixButtonContainer(firstArg, iCalcClassName) {
		const buttonCalcMatrixContainer = createElement('BUTTON');
		const iCalc = createElement('I');

		buttonCalcMatrixContainer.className = firstArg;
		iCalc.className = iCalcClassName;

		buttonCalcMatrixContainer.appendChild(iCalc);

		return buttonCalcMatrixContainer;
	},
});
