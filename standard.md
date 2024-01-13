# Standard Note Format Documentation

## Overview
This document outlines the standard format for notes, designed for interoperability and ease of data migration between different note-taking applications. The format supports text, media (images, audio, video), and translations, ensuring a rich and flexible note structure.

## Format Specification

### Note Object
Each note is represented as a JSON object with the following structure:

```json
{
  "createdAt": "YYYY-MM-DDTHH:mm:ssZ",
  "updatedAt": "YYYY-MM-DDTHH:mm:ssZ",
  "text": "String",
  "media": {
    // Media objects
  },
  "translations": {
    // Translation objects
  }
}
```

#### Fields Description
- **createdAt**: The date and time when the note was created, in ISO 8601 format.
- **updatedAt**: The date and time when the note was last updated, in ISO 8601 format.
- **text**: The main text content of the note, which can include HTML for formatting.
- **media**: An array of media objects embedded in the note.
- **translations**: An object containing translation mappings for portions of the text.

#### Media Object
Each media object within the media array should follow this format:

```json
{
  "media_id": {
    "uuid": "UUIDv4",
    "type": "media_type",
    "content": "url_or_base64_encoded_data"
  },
  // Additional media items
}
```

- **uuid**: A unique identifier for the media item (UUID version 4 recommended).
- **type**: The media type, e.g., **image**, **audio**, **video**.
- **content**: The URL or base64 encoded data of the media item.

#### Translations Object
Translations are structured as follows:

```json
{
  "translation_id": {
    "original": "original_text",
    "lang_code": "iso-639-1",
  }
  // Additional translations
}
```

- **translation_id**: A unique identifier (UUID version 4 recommended) correlating to portions of text in the text field.
- **original**: The original text fragment.
- **lang_code**: The ISO 639-1 language code for the translated text. For example, "en" for English, "es" for Spanish, etc.

### Usage Guidelines
- Ensure HTML used in the text field is sanitized and only includes allowed tags for security.
- Media objects should be referenced in the text field using their uuid.
- For translations, use the translation_id to link translated text with the corresponding original text fragment.

### Security Considerations
- Sanitize all HTML content to prevent XSS attacks.
- Validate and sanitize all URLs and base64 data in the media objects.
