/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { icons } from "@/constants/icons";

import { FormControl, MenuItem, Select, Stack } from "@mui/material";
import { useField } from "formik";
import { FaCaretDown } from "react-icons/fa";

const AppSelect = ({
  bgcolor = "background.paper",
  buttonBg = "transparent",
  height,
  placeholder,
  name,
  options,
}) => {
  const [field] = useField(name);

  return (
    <FormControl
      fullWidth
      sx={{ height: height ?? 28, borderRadius: "4px", bgcolor, border: 0 }}
    >
      <Select
        placeholder={placeholder}
        displayEmpty
        sx={{
          borderColor: "red!important",
          height: height ?? 40,
          borderRadius: "4px",
          border: 0,
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        inputProps={{
          style: {
            fontSize: "12px",
          },
        }}
        IconComponent={(props) => (
          <Stack
            {...props}
            minWidth={16}
            minHeight={16}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"4px"}
            bgcolor={buttonBg}
          >
            <FaCaretDown />
          </Stack>
        )}
        MenuProps={{ disableScrollLock: true }}
        {...field}
        // renderValue={(selected) => {
        //   if (!selected) {
        //     return (
        //       <span style={{ color: "#333", opacity: "40%" }}>
        //         {placeholder}
        //       </span>
        //     );
        //   } else return <span>{selected}</span>;
        // }}
      >
        {options?.map((option, index) => {
          return (
            <MenuItem key={option?.value} value={option?.value}>
              {option?.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default AppSelect;
