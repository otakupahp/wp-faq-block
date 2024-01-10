/**
 * WordPress dependencies
 */
import { InspectorControls, PanelColorSettings, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, FontSizePicker, RangeControl } from '@wordpress/components';
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

	// Get the values from the attributes.
	const {
		questionBackgroundColor,
		questionTextColor,
		questionFontSize,
		borderColor,
		borderWidth
	} = attributes;
	const borderWidthPX = borderWidth + 'px';

	// Get the block props.
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
				<PanelBody title={ __( 'Border Width' ) }>
					<RangeControl
						value={ borderWidth }
						initialPosition={ borderWidth }
						onChange={ ( width ) => setAttributes( { borderWidth: width } ) }
						min={ 0 }
						max={ 10 }
						allowReset
					/>
				</PanelBody>
				<PanelBody title={ __( 'Font Size' ) }>
					<FontSizePicker
						fontSizes={ fontSizes }
						value={ questionFontSize }
						onChange={ ( size ) => setAttributes( { questionFontSize: size } ) }
						withSlider
					/>
				</PanelBody>
			</InspectorControls>
			<ul
				style={{ borderColor: borderColor, borderWidth: borderWidthPX }}
				{ ...innerBlocksProps }
			/>
		</>
	);
}

export default Edit;
