/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

store( 'otk-faq-block', {
	actions: {
		toggle: () => {

			// Get the block-content object and it's scroll height
			const { ref } = getElement();
			const blockContent = ref.nextElementSibling;
			const blockContentScrollHeight = blockContent.scrollHeight + 20; // 20px is the padding of the block-content object

			// Obtain the context object
			const context = getContext();

			// Toggle the isOpen property of the context object
			context.isOpen = ! context.isOpen;

			// Set the height of the block-content object depending on the isOpen property
			context.contentHeight = context.isOpen
				? blockContentScrollHeight
				: 0;
		},
	},
} );
