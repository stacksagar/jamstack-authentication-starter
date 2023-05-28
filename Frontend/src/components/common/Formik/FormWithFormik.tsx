import { useFormik } from "formik";
import React from "react";
import setFormikField from "../../../utils/formik/setFormikField";
import onChangeSetURL from "../../../utils/onChangeSetURL";
import Button from "../Buttons/Button";
import FileInput from "../Forms/FileInput";
import FormikInput from "./FormikInput";
import FormikTextarea from "./FormikTextarea";

interface MyFormikProps {
  fields?: {
    [key: string]: {
      value?: string;
      type: React.HTMLInputTypeAttribute | "textarea";
    };
  };

  onSubmit: any;
  submitting?: boolean;
}

export default function FormWithFormik({
  fields,
  onSubmit,
  submitting,
}: MyFormikProps) {
  const initialValues: any = {};
  Object.entries(fields || {}).map(([key, obj]) => {
    initialValues[key] = obj.value;
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate: function signup_validation(values) {
      const errors: any = {};
      Object.keys(initialValues).map((key) => {
        if (!values[key]) {
          errors[key] = `${splitKey(key)} is required`;
        }
      });
      return errors;
    },
  });

  function splitKey(key: string) {
    return key.split("_").join(" ");
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full space-y-4 md:space-y-6 bg-white dark:bg-gray-800 dark:bg-opacity-50 p-5 shadow border dark:border-transparent"
      action="#"
    >
      {Object.entries(fields || {}).map(([key, obj]) =>
        obj.type === "text" ? (
          <FormikInput
            key={key}
            label={splitKey(key)}
            placeholder={splitKey(key)}
            {...formik.getFieldProps(key)}
            touched={formik.touched[key]}
            error={formik.errors[key]}
          />
        ) : obj.type === "file" ? (
          <div key={key}>
            <FormikInput
              label={splitKey(key)}
              placeholder={splitKey(key)}
              {...formik.getFieldProps(key)}
              touched={formik.touched[key]}
              error={formik.errors[key]}
            />
            <div className="my-1">
              <FileInput
                onChange={onChangeSetURL(setFormikField(formik, key))}
                title={splitKey(key)}
              />
            </div>
            <img
              className="w-44 rounded pb-3"
              src={formik.values[key]}
              alt=""
            />
          </div>
        ) : obj.type === "textarea" ? (
          <FormikTextarea
            key={key}
            label={splitKey(key)}
            placeholder={splitKey(key)}
            {...formik.getFieldProps(key)}
            touched={formik.touched[key]}
            error={formik.errors[key]}
          />
        ) : (
          <React.Fragment key={key}></React.Fragment>
        )
      )}

      <Button type="submit" loading={submitting || formik.isSubmitting}>
        Update
      </Button>
    </form>
  );
}
