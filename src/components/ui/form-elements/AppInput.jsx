/* eslint-disable react/prop-types */
import { useField } from "formik";
import { TextField } from "@mui/material";

const AppInput = ({ label, readOnly, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      id={label}
      size="small"
      fullWidth
      sx={{
        ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
          // borderRadius: 3,
        },
      }}
      error={meta.error}
      variant="outlined"
      InputProps={{
        readOnly: readOnly,
      }}
    />
  );
};

export default AppInput;
