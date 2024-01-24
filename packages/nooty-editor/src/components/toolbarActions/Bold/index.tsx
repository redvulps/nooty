import { type ToolbarActionProps } from '../common';

export const Bold: React.FC<ToolbarActionProps> = ({ selection, onAction }) => {
  const handleClick = () => {
    const bold = document.createElement('strong');
    bold.innerHTML = selection;
    onAction(bold);
  };

  return <button onClick={handleClick}>B</button>;
};
