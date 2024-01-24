import { type ToolbarActionProps } from '../common';

export const Underline: React.FC<ToolbarActionProps> = ({ selection, onAction }) => {
  const handleClick = () => {
    const bold = document.createElement('ins');
    bold.innerHTML = selection;
    onAction(bold);
  };

  return <button onClick={handleClick}>U</button>;
};
