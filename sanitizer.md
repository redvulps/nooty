# Sanitizer for Standard Note Format Documentation

## Overview
This document outlines the sanitizer for the standard note format. Its primary role is to clean and validate data, ensuring compliance with the standard JSON format for notes used across different note-taking applications.

## Sanitizer Functionality

### General Principles

- The sanitizer ensures that the data, whether incoming or outgoing, adheres to the standard JSON format and is free from security vulnerabilities.
- It focuses on validating and cleaning the structure and content of the notes, including text, media, and translations.

### Sanitization Process

#### Input
- Note data, either in an application-specific format or in the standard JSON format.

#### Process
- Validate and sanitize the text content, ensuring it is safe and properly formatted.
- **Media References**: Check for and validate media references in the note's text. Media references should be in the form of <span data-media-id="media_id"/>. The sanitizer will remove any media references that do not correspond to a valid media item in the media object.
- Validate translation references formatted with `<span>` elements using `data-translation-id` attributes.
- Remove any unused or irrelevant media or translation references to ensure data cleanliness.

#### Output
- A sanitized and validated note in the standard JSON format.

## Implementation Guidelines

- **Error Handling**: Implement comprehensive error handling to address inconsistencies or issues in note data.
- **Security**: Prioritize security in sanitization, especially for HTML content, to prevent XSS and other vulnerabilities.
- **Efficiency**: Optimize the process for efficiency, particularly with large volumes of data or complex notes.
- **Testing**: Conduct thorough testing with various note formats to ensure the sanitizer's reliability and effectiveness.
