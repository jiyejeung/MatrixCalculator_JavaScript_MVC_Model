import Controller from '../controller/Controller.js';
import { $, createElement, removeElement } from '../utils/ElementTool.js';

export default Object.freeze({
	printModal(innerText) {
		const divModalWrapperContainer = createElement('DIV');
		const divModalContainer = createElement('DIV', innerText);

		divModalWrapperContainer.className = 'divModalWrapperContainer';
		divModalContainer.className = 'divModalContainer';

		divModalContainer.appendChild(this.printDeleteButton());
		divModalWrapperContainer.appendChild(divModalContainer);

		$('#app').appendChild(divModalWrapperContainer);

		Controller.deleteModal();
	},
	printDeleteButton() {
		const buttonDeleteModalContainer = createElement('BUTTON');
		const iDeleteModal = createElement('I');

		buttonDeleteModalContainer.className = 'buttonDeleteModalContainer';
		iDeleteModal.className = 'fas fa-times-circle iDeleteModal';

		buttonDeleteModalContainer.appendChild(iDeleteModal);

		return buttonDeleteModalContainer;
	},
	removeModal() {
		removeElement('#app', '.divModalWrapperContainer');
	},
});
