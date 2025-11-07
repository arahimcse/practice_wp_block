<?php
// This file is generated. Do not modify it manually.
return array(
	'todo-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/todo-list',
		'version' => '0.1.0',
		'title' => 'Todo List',
		'category' => 'widgets',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => true,
			'typography' => array(
				'fitText' => true,
				'fontSize' => true,
				'lineHeight' => true,
				'textAlign' => true
			),
			'color' => array(
				'background' => true,
				'text' => true,
				'link' => true
			),
			'layout' => true,
			'dimensions' => array(
				'aspectRatio' => true,
				'minHeight' => true
			),
			'shadow' => true,
			'position' => array(
				'sticky' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'align' => true
		),
		'textdomain' => 'todo-list',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
