<?php
/**
 * Plugin Name: WP Interactivity FAQ Block
 * Description: A FAQ block with the Interactivity API
 * Version: 1.0.0
 * Requires at least: 6.4.0
 * Requires PHP: 8.1
 * Author: OtakuPahp LLC
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: wp-faq-block
 *
 * @package wp-faq-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Define plugin path constants.
define( 'OTK_LLC_FAQ_BLOCK_PATH', plugin_dir_path( __FILE__ ) );
define( 'OTK_LLC_FAQ_BLOCK_URL', plugin_dir_url( __FILE__ ) );

/**
 * Initializes the FAQ block.
 *
 * This function registers the main block and the inner block for the FAQ functionality.
 *
 * @since 1.0.0
 *
 * @return void
 */
function otk_llc_faq_block_init() : void {

	// Register the block collection with the main block and the inner block.
	register_block_type( OTK_LLC_FAQ_BLOCK_PATH . '/build/faq-block' );
	register_block_type( OTK_LLC_FAQ_BLOCK_PATH . '/build/faq-item' );

	if (function_exists('gutenberg_register_module')) {
		gutenberg_register_module(
			'otk-faq-block-view',
			OTK_LLC_FAQ_BLOCK_URL . 'src/view.js',
			array( '@wordpress/interactivity' ),
			'1.0.0'
		);
	}
}
add_action( 'init', 'otk_llc_faq_block_init' );
