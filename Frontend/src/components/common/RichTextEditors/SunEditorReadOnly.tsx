import DefaultSketelon from "../Skeletons/DefaultSketelon";
import Editor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import { useRef } from "react";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";

interface props extends SunEditorReactProps {
  loading?: boolean;
}

export default function SunEditorReadOnly({ ...props }: props) {
  const editor = useRef<SunEditorCore>();

  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };
  if (props.loading) return <DefaultSketelon />;

  return (
    <Editor
      {...props}
      getSunEditorInstance={getSunEditorInstance}
      disableToolbar={true}
      hideToolbar={true}
      readOnly={true}
    />
  );
}
