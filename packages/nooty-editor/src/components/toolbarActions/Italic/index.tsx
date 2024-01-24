import { type ToolbarActionProps } from '../common';

export const Italic: React.FC<ToolbarActionProps> = ({ selection, onAction }) => {
  const handleClick = () => {
    const bold = document.createElement('em');
    bold.innerHTML = selection;
    onAction(bold);
  };

  return <button onClick={handleClick}>I</button>;
};
