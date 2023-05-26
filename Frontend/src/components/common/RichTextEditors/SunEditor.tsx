import DefaultSketelon from "../Skeletons/DefaultSketelon";
import Editor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";

interface props extends SunEditorReactProps {
  editor: React.MutableRefObject<SunEditorCore | undefined>;
  loading?: boolean;
}

export default function SunEditor({ editor, ...props }: props) {
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  if (props.loading) return <DefaultSketelon />;
  return (
    <Editor
      {...props}
      getSunEditorInstance={getSunEditorInstance}
      setOptions={{
        buttonList: [
          ["font", "fontSize", "formatBlock"],
          ["bold", "underline", "italic", "strike", "subscript", "superscript"],
          ["align", "horizontalRule", "list", "table"],
          ["fontColor", "hiliteColor"],
          ["outdent", "indent"],
          ["undo", "redo"],
          ["removeFormat"],
          ["outdent", "indent"],
          ["link", "image"],
          ["preview", "print"],
          ["fullScreen", "showBlocks", "codeView"],
        ],
      }}
    />
  );
}
