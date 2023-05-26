import { FormikProps } from "formik";

export default function setFormikField(formik: FormikProps<any>, key: string) {
  return (value: any) => {
    if (key && value) formik.setFieldValue(key, value);
  };
}
