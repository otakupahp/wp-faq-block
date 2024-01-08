/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { useState } from '@wordpress/element'

const Edit = ( { attributes, setAttributes } ) => {

	// Create a state to toggle the visibility of the answer.
	const [ isOpen, setIsOpen ] = useState( false );

	return (
		<li className="otk-faq-item-block">
			<div
				className="otk-faq-item-header"
				onClick={ () => setIsOpen( ! isOpen ) }
			>
				<i className={`otk-faq-item-icon ${isOpen ? 'opened' : ''}`}/>
				<RichText
					tagName="h3"
					className="otk-faq-item-question"
					placeholder="Question"
					onChange={ ( question ) => setAttributes( { question } ) }
					value={ attributes.question }
				/>
			</div>
			{
				isOpen &&
				<RichText
					tagName="div"
					className="otk-faq-item-answer"
					placeholder="Answer"
					onChange={ ( answer ) => setAttributes( { answer } ) }
					value={ attributes.answer }
				/>
			}
		</li>
	);
}

export default Edit;
