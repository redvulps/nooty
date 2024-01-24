import { useEffect, useRef } from 'react';

export interface ContentProps {
  content: string
  onChange: (content: string) => void
  onSelectText: (range: Range, selectedText: string) => void
}

export const Content: React.FC<ContentProps> = ({ content, onChange, onSelectText }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const selRef = useRef<{ start: number, end: number } | null>(null);

  const saveSelection = (containerEl: Node) => {
    const selection = window.getSelection();

    if (selection === null) {
      return;
    }

    const range = selection.getRangeAt(0);
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(containerEl);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);

    const start = preSelectionRange.toString().length;

    selRef.current = {
      start,
      end: start + range.toString().length
    };
  };

  const restoreSelection = (containerEl: Node) => {
    let charIndex = 0;
    const range = document.createRange();
    range.setStart(containerEl, 0);
    range.collapse(true);

    const nodeStack = [containerEl];
    let node;
    let foundStart = false;
    let stop = false;
    const savedSel = selRef.current;

    if (savedSel === null) {
      return;
    }

    while (!stop && ((node = nodeStack.pop()) !== undefined)) {
      if (node.nodeType === 3) { // Text node
        const nextCharIndex = charIndex + (node as Text).length;
        if (!foundStart && savedSel.start >= charIndex && savedSel.start <= nextCharIndex) {
          range.setStart(node, savedSel.start - charIndex);
          foundStart = true;
        }
        if (foundStart && savedSel.end >= charIndex && savedSel.end <= nextCharIndex) {
          range.setEnd(node, savedSel.end - charIndex);
          stop = true;
        }
        charIndex = nextCharIndex;
      } else {
        let i = node.childNodes.length;

        while ((i--) !== 0) {
          nodeStack.push(node.childNodes[i]);
        }
      }
    }

    const currentSelection = window.getSelection();

    if (currentSelection === null) {
      return;
    }

    currentSelection.removeAllRanges();
    currentSelection.addRange(range);
  };

  const dispatchChange = (element: HTMLDivElement) => {
    saveSelection(element);
    onChange(element.innerHTML);
  };

  const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
    dispatchChange(event.currentTarget);
  };

  const handleSelect = (e: React.MouseEvent<HTMLDivElement> | React.SyntheticEvent<HTMLDivElement>) => {
    const selection = document.getSelection();

    if (selection === null) {
      return;
    }

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const rangeText = range.toString();
      const focusNodeIsHtml = selection.focusNode?.parentNode !== editorRef.current;
      const selectedText = focusNodeIsHtml ? selection.focusNode?.parentElement?.outerHTML : rangeText;

      onSelectText(range, selectedText ?? rangeText);
    }
  };

  useEffect(() => {
    if (editorRef.current !== null) {
      restoreSelection(editorRef.current);
    }
  }, [content]);

  useEffect(() => {
    const listener = () => {
      if (editorRef.current !== null) {
        dispatchChange(editorRef.current);
      }
    };

    window.addEventListener('action:ran', listener);

    return () => {
      window.removeEventListener('action:ran', listener);
    };
  }, []);

  return (
    <div
      ref={editorRef} contentEditable
      onInput={handleChange}
      onSelect={handleSelect}
      dangerouslySetInnerHTML={{ __html: content }}></div>
  );
};
