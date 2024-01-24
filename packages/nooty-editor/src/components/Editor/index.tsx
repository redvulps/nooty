import { useState } from 'react';
import { Content } from '../Content';
import { Toolbar } from '../Toolbar';

export interface EditorProps {
  documentPicker: () => Promise<string | undefined | null>
  imagePicker: () => Promise<string | undefined | null>
  content?: string
}

export const Editor = ({ content: defaultContent = '' }) => {
  const [content, setContent] = useState(defaultContent);
  const [selectedText, setSelectedText] = useState('');
  const [range, setRange] = useState<Range | null>(null);

  const handleSelectText = (range: Range, selectedText: string) => {
    setSelectedText(selectedText);
    setRange(range);
  };

  const handleAction = (newContent: Node) => {
    if (range !== null) {
      range.deleteContents();
      range.insertNode(newContent);

      newContent.dispatchEvent(new Event('action:ran', { bubbles: true }));
    }

    setSelectedText('');
    setRange(null);
  };

  return (
    <div>
      <Content content={content} onChange={setContent} onSelectText={handleSelectText} />
      <Toolbar selection={selectedText} onAction={handleAction} />
    </div>
  );
};
