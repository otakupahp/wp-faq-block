/**
 * WordPress dependencies
 */
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { useState } from '@wordpress/element'

const Edit = ( { attributes, setAttributes } ) => {

	// Create a state to toggle the visibility of the answer.
	const [ isOpen, setIsOpen ] = useState( false );
	const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];

	return (
		<li className="otk-faq-item-block" >
			<div
				className={`otk-faq-item-header ${isOpen ? 'opened' : ''}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<i className="otk-faq-item-icon"/>
				<RichText
					tagName="h3"
					className="otk-faq-item-question"
					placeholder="Question"
					onChange={(question) => setAttributes({ question })}
					value={attributes.question}
				/>
			</div>
			{
				isOpen &&
				<div className="otk-faq-item-answer">
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
					/>
				</div>
			}
		</li>
);
}

export default Edit;
