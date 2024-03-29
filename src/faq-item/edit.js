/**
 * WordPress dependencies
 */
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

const Edit = ( { attributes, setAttributes, context } ) => {
	// Create a state to toggle the visibility of the answer.
	const [ isOpen, setIsOpen ] = useState( false );
	const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];

	// Get context values.
	const {
		otkQuestionBackgroundColor,
		otkQuestionTextColor,
		otkQuestionFontSize,
		otkBorderColor,
		otkBorderWidth,
	} = context;
	const borderWidthPX = otkBorderWidth + 'px';

	// Item template.
	const TEMPLATE = [ [ 'core/paragraph' ] ];

	return (
		<li className="otk-faq-item-block">
			<div
				className={ `otk-faq-item-header ${ isOpen ? 'opened' : '' }` }
				style={ {
					backgroundColor: otkQuestionBackgroundColor,
					borderBottom: `${ borderWidthPX } solid ${ otkBorderColor }`,
				} }
				onClick={ () => setIsOpen( ! isOpen ) }
				onKeyDown={ ( event ) => {
					// Enter Key
					if ( event.keyCode === 13 ) {
						setIsOpen( ! isOpen );
					}
				} }
				role="button"
				tabIndex={ 0 }
			>
				<i
					style={ { backgroundColor: otkQuestionTextColor } }
					className="otk-faq-item-icon"
				/>
				<RichText
					tagName="h3"
					className="otk-faq-item-question"
					style={ {
						color: otkQuestionTextColor,
						fontSize: otkQuestionFontSize,
					} }
					placeholder="Question"
					onChange={ ( question ) => setAttributes( { question } ) }
					onReplace={ () => {} }
					onSplit={ () => {} }
					value={ attributes.question }
				/>
			</div>
			{ isOpen && (
				<div
					style={ {
						border: `${ borderWidthPX } solid ${ otkBorderColor }`,
					} }
					className={ `otk-faq-item-answer ${
						isOpen ? 'opened' : ''
					}` }
				>
					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
					/>
				</div>
			) }
		</li>
	);
};

export default Edit;
