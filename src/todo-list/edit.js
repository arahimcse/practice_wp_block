/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps,
	RichText,
	InspectorControls
 } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

/**
 * 
 * @returns {currentdate}
 */

import {
	CheckboxControl,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
		const {
			content,
			checkboxField,
			radioField,
			textField,
			toggleField,
			selectField,
		} = attributes;

		function onChangeContent( newContent ) {
			setAttributes( { content: newContent } );
		}

		function onChangeCheckboxField( newValue ) {
			setAttributes( { checkboxField: newValue } );
		}

		function onChangeRadioField( newValue ) {
			setAttributes( { radioField: newValue } );
		}

		function onChangeTextField( newValue ) {
			setAttributes( { textField: newValue } );
		}

		function onChangeToggleField( newValue ) {
			setAttributes( { toggleField: newValue } );
		}

		function onChangeSelectField( newValue ) {
			setAttributes( { selectField: newValue } );
		}
		console.log(selectField);
	return (
		<>
				<InspectorControls>
					<PanelBody title={ __( 'Settings' ) }>
						<CheckboxControl
							__nextHasNoMarginBottom
							heading='Checkbox Field'
							label="Tick Me"
							help="Additional help text"
							checked={ checkboxField }
							onChange={ onChangeCheckboxField }
						/>

						<RadioControl
							label="Radio Field"
							selected={ radioField }
							options={ [
								{ label: 'Yes', value: 'yes' },
								{ label: 'No', value: 'no' },
							] }
							onChange={ onChangeRadioField }
						/>

						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label="Text Field"
							help="Additional help text"
							value={ textField }
							onChange={ onChangeTextField }
						/>

						<ToggleControl
							__nextHasNoMarginBottom
							label="Toggle Field"
							checked={ toggleField }
							onChange={ onChangeToggleField }
						/>

						<SelectControl
							__nextHasNoMarginBottom
							label="Select Control"
							value={ selectField }
							options={ [
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							] }
							onChange={ onChangeSelectField }
						/>
					</PanelBody>
				</InspectorControls>

				<RichText
					{ ...blockProps }
					key="editable"
					tagName="p"
					onChange={ onChangeContent }
					value={ selectField  || 'Add content'}
					placeholder="Enter your text here..."
				/>
			</>
	);
}
