/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = () => {
	const blockProps = useBlockProps.save( {
		className: 'wp-block-otk-faq-block',
	} );

	return (
		<ul { ...blockProps }>
			<InnerBlocks.Content />
		</ul>
	);
};

export default Save;
