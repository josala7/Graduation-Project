/* eslint-disable react/prop-types */
/* eslint-disable no-fallthrough */
import { Stack, Typography } from "@mui/material";
import ErrorMessageComponent from "./ErrorMessageComponent";
import { ErrorMessage } from "formik";
import AppInput from "./AppInput";
import { DiCssTricks } from "react-icons/di";
import { red } from "@mui/material/colors";
import FileInput from "./FileUpload";
import AppSelect from "./AppSelect";

function InputControl(props) {
  const { label, control, name, isRequired } = props;

  let inputComponent;

  switch (control) {
    case "input":
      inputComponent = <AppInput {...props} />;
      break;
    case "fileUpload":
      inputComponent = <FileInput {...props} />;
      break;
    case "select":
      inputComponent = <AppSelect {...props} />;
      break;
    // case 'textarea':
    //   return <Textarea {...rest} />
    // case 'select':
    //   return <Select {...rest} />
    // case 'radio':
    //   return <RadioButtons {...rest} />
    // case 'checkbox':
    //   return <CheckboxGroup {...rest} />
    // case 'date':
    //   return <DatePicker {...rest} />
    // case 'chakraInput':
    //   return <ChakraInput {...rest} />
    default:
      inputComponent = null;
  }

  return (
    <Stack spacing={1} width={"100%"}>
      <Stack direction={"row"} position={"relative"}>
        <Typography
          color="inherit"
          textTransform={"capitalize"}
          fontSize={"16px"}
          fontWeight={500}
        >
          {label}
        </Typography>

        {isRequired && <DiCssTricks fontSize={"8px"} color={red[700]} />}
      </Stack>

      {inputComponent}

      <ErrorMessage component={ErrorMessageComponent} name={name} />
    </Stack>
  );
}

export default InputControl;
