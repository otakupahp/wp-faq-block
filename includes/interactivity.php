<?php
/**
 * Add interactivity to the block.
 *
 * @var string $content The block default content.
 * @var array $attributes The block attributes.
 */

// Prepare the global context.
$global_context = $attributes;
unset($global_context['align']);

// Use the WP_HTML_Tag_Processor to process the content.
$content_processor = new WP_HTML_Tag_Processor($content);

// Query the content for the block group.
$query_faq_block = array(
    'tag_name' => 'UL',
    'class_name' => 'wp-block-otk-faq-block'
);

// Add the store the wrapper.
if ($content_processor->next_tag($query_faq_block)) {
    $content_processor->set_attribute('data-wp-interactive', '{"namespace":"otk-faq-block"}');
    $content_processor->set_attribute(
        'data-wp-context',
        wp_json_encode($global_context)
    );
}

// Query the content for the block item and add interactivity
$query_item = array(
    'tag_name' => 'LI',
    'class_name' => 'otk-faq-item-block'
);
while ($content_processor->next_tag($query_item)) {
    // Generate unique id for aria-controls.
    $unique_id = wp_unique_id('li-');

    // Add context to the block item.
    $content_processor->set_attribute(
        'data-wp-context',
        '{"isOpen":false,"contentHeight":0}'
    );

    // Add context to the block item.
    $content_processor->set_attribute(
        'data-wp-key',
        'item-' . $unique_id
    );

    // Get the header element.
    $query_header = array(
        'tag_name' => 'DIV',
        'class_name' => 'otk-faq-item-header'
    );
    if ($content_processor->next_tag($query_header)) {
        // Set the aria attribute.
        $content_processor->set_attribute(
            'data-wp-bind--aria-expanded',
            'context.isOpen'
        );

        // Set the toggle action.
        $content_processor->set_attribute(
            'data-wp-on--click',
            'actions.toggle'
        );

        // Set aria controls
        $content_processor->set_attribute(
            'data-wp-aria-controls',
            'answer-' . $unique_id
        );

        // Set background color.
        $content_processor->set_attribute(
            'data-wp-style--background-color',
            'context.questionBackgroundColor'
        );

        // Get the icon element.
        $query_icon = array(
            'tag_name' => 'I',
            'class_name' => 'otk-faq-item-icon'
        );
        if ($content_processor->next_tag($query_icon)) {

            // Set the open conditional class.
            $content_processor->set_attribute(
                'data-wp-class--opened',
                'context.isOpen'
            );

            // Set text color.
            $content_processor->set_attribute(
                'data-wp-style--background-color',
                'context.questionTextColor'
            );
        }

        // Get the question element.
        $query_question = array(
            'tag_name' => 'h3',
            'class_name' => 'otk-faq-item-question'
        );
        if ($content_processor->next_tag($query_question)) {
            // Set text color.
            $content_processor->set_attribute(
                'data-wp-style--color',
                'context.questionTextColor'
            );
        }
    }

    // Get the answer element.
    $query_content = array(
        'tag_name' => 'DIV',
        'class_name' => 'otk-faq-item-answer'
    );
    if ($content_processor->next_tag($query_content)) {
        // Set item id.
        $content_processor->set_attribute(
            'id',
            'answer-' . $unique_id
        );

        // Set background color.
        $content_processor->set_attribute(
            'data-wp-style--background-color',
            'context.answerBackgroundColor'
        );

        // Set text color.
        $content_processor->set_attribute(
            'data-wp-style--color',
            'context.answerTextColor'
        );

	    // Set the open conditional class.
	    $content_processor->set_attribute(
		    'data-wp-class--opened',
		    'context.isOpen'
	    );

	    // Set the height style.
	    $content_processor->set_attribute(
		    'data-wp-style--height',
		    'context.contentHeight'
	    );
    }
}

// Return the updated content.
echo $content_processor->get_updated_html();
