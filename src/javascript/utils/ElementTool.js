export const $ = (element) => document.querySelector(element);

export const $$ = (elements) => document.querySelectorAll(elements);

export const createElement = (tagName, tagText = '') => {
	const element = document.createElement(tagName);
	element.textContent = tagText;

	return element;
};

export const combineElement = (elements) => {
	const fragment = document.createDocumentFragment();
	elements.forEach((element) => fragment.append(element));

	return fragment;
};

export const removeElement = (parentSelector, selfSelector) => void document.querySelector(parentSelector).querySelector(selfSelector).remove();

export const removeElements = (parentSelector, selfSelector) =>
	void document
		.querySelector(parentSelector)
		.querySelectorAll(selfSelector)
		.forEach((element) => void element.remove());
