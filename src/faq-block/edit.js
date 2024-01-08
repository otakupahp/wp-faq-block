/**
 * WordPress dependencies
 */
import { InspectorControls, PanelColorSettings, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Allowed blocks
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [ 'otk-llc/faq-item-block' ];

const Edit = ( { attributes, setAttributes } ) => {
	const {
		questionBackgroundColor,
		questionTextColor,
		answerBackgroundColor,
		answerTextColor
	} = attributes;
	const blockProps = useBlockProps( {
		className: 'wp-block-otk-faq-block',
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: [
			[ 'otk-llc/faq-item-block' ],
			[ 'otk-llc/faq-item-block' ],
			[ 'otk-llc/faq-item-block' ],
		],
		templateLock: false,
	} );
	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Question Settings' ) }
					colorSettings={ [
						{
							value: questionBackgroundColor,
							onChange: ( color ) => setAttributes( { questionBackgroundColor: color } ),
							label: __( 'Background Color' ),
						},
						{
							value: questionTextColor,
							onChange: ( color ) => setAttributes( { questionTextColor: color } ),
							label: __( 'Text Color' ),
						},
					] }
				/>
				<PanelColorSettings
					title={ __( 'Answer Settings' ) }
					colorSettings={ [
						{
							value: answerBackgroundColor,
							onChange: ( color ) => setAttributes( { answerBackgroundColor: color } ),
							label: __( 'Background Color' ),
						},
						{
							value: answerTextColor,
							onChange: ( color ) => setAttributes( { answerTextColor: color } ),
							label: __( 'Text Color' ),
						},
					] }
				/>
			</InspectorControls>
			<ul { ...innerBlocksProps } />
		</>
	);
}

export default Edit;
