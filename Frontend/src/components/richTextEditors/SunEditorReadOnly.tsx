import { useRef } from "react";
import Editor from "suneditor-react";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";
import SunEditorCore from "suneditor/src/lib/core";
import DefaultSketelon from "../common/Skeletons/DefaultSketelon";

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
