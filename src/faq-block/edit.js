/**
 * WordPress dependencies
 */
import { InspectorControls, PanelColorSettings, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow, FontSizePicker } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const Edit = ( { attributes, setAttributes } ) => {

	/**
	 * Allowed blocks
	 *
	 * @constant
	 * @type {string[]}
	 */
	const ALLOWED_BLOCKS = [ 'otk-llc/faq-item-block' ];

	const {
		questionBackgroundColor,
		questionTextColor,
		questionFontSize,
		borderColor
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

	// Get fontSizes from the core/block-editor settings
	const { fontSizes } = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSettings();
	}, [] );
	const fontSizeFallback = 16;

	return (
		<>
			<InspectorControls>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						colorSettings={ [
							{
								value: questionBackgroundColor,
								onChange: ( color ) => setAttributes( { questionBackgroundColor: color } ),
								label: __( 'Question Background Color' ),
							},
							{
								value: questionTextColor,
								onChange: ( color ) => setAttributes( { questionTextColor: color } ),
								label: __( 'Question Text Color' ),
							},
							{
								value: borderColor,
								onChange: ( color ) => setAttributes( { borderColor: color } ),
								label: __( 'Border Color' ),
							},
						] }
					/>
					<PanelBody
						title={ __( 'Fonts Settings' ) }
						opened={ true }
					>
						<FontSizePicker
							fontSizes={ fontSizes }
							fallbackFontSize={ fontSizeFallback }
							value={ questionFontSize }
							onChange={ ( size ) => setAttributes( { questionFontSize: size } ) }
							withSlider
						/>
					</PanelBody>
			</InspectorControls>
			<ul { ...innerBlocksProps } />
		</>
	);
}

export default Edit;
