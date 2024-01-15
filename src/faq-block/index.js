/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import './style.scss';
import './editor.scss';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';

registerBlockType( metadata.name, {
	edit: Edit,
	save: Save,
} );
