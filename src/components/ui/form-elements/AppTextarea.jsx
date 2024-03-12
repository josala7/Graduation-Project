/* eslint-disable react/prop-types */
import { useField } from "formik";
import { TextField } from "@mui/material";

const AppTextarea = ({ label, readOnly, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      id={label}
      size="small"
      fullWidth
      error={meta.error}
      variant="outlined"
      InputProps={{
        readOnly: readOnly,
      }}
    />
  );
};

export default AppTextarea;
