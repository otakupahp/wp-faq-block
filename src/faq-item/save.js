/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
const Save = ( { attributes } ) => {
	return (
		<li className="otk-faq-item-block">
			<div className="otk-faq-item-header">
				<i className="otk-faq-item-icon"/>
				<RichText.Content
					tagName="h3"
					className="otk-faq-item-question"
					value={attributes.question}
				/>
			</div>
			<RichText.Content
				tagName="div"
				className="otk-faq-item-answer"
				value={attributes.answer}
			/>
		</li>
	);
}

export default Save;
