import { Content } from "../Content";
import { Toolbar } from "../Toolbar"

export interface EditorProps {
  documentPicker: () => Promise<string | undefined | null>;
  imagePicker: () => Promise<string | undefined | null>;
}

export const Editor = () => {
  return (
    <div>
      <Content />
      <Toolbar />
    </div>
  );
}
