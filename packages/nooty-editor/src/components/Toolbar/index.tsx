import { Bold } from '../toolbarActions/Bold';
import { Italic } from '../toolbarActions/Italic';
import { Underline } from '../toolbarActions/Underline';

export interface ToolbarProps {
  selection: string
  onAction: (newContent: Node) => void
}

export const Toolbar: React.FC<ToolbarProps> = ({ selection, onAction }) => {
  return (
    <div>
      <Bold selection={selection} onAction={onAction} />
      <Italic selection={selection} onAction={onAction} />
      <Underline selection={selection} onAction={onAction} />
    </div>
  );
};
