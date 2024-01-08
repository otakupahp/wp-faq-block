<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * @var array $attributes	The block attributes.
 * @var string $content The block default content.
 * @var WP_Block $block The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Don't modify the content for admin.
if( is_admin() ) {
	echo $content;
	return;
}

// Enqueue the view file.
if (function_exists('gutenberg_enqueue_module')) {
	gutenberg_enqueue_module( 'otk-faq-block-view' );
}

// If the content is empty, show the placeholder.
if( empty( $content ) ) {
	$content = '<p class="wp-block-otk-faq-block-placeholder">' . __( 'Add your FAQ here.', 'otk-faq-block' ) . '</p>';
}

// Add interactivity to the block from the includes/interactivity.php file.
include_once( OTK_LLC_FAQ_BLOCK_PATH . '/includes/interactivity.php' );
