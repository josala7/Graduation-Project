/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useField, useFormikContext } from "formik";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";
import { MdOutlineFileCopy } from "react-icons/md";

const MultipleFileInput = ({ label, name }) => {
  const [field, , { setValue }] = useField(name);

  const { setFieldValue, values } = useFormikContext();
  const [filePreviews, setFilePreviews] = useState([]);

  const selectedFiles = values[name] || [];

  const handleChange = (event) => {
    const files = Array.from(event.currentTarget.files);
    setFieldValue(name, files);

    const previews = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        previews.push(reader.result);
        if (previews.length === files.length) {
          setFilePreviews(previews);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemove = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setFieldValue(name, updatedFiles);

    const updatedPreviews = [...filePreviews];
    updatedPreviews.splice(index, 1);
    setFilePreviews(updatedPreviews);
  };

  return (
    <>
      <input
        id={name}
        name={name}
        type="file"
        onChange={handleChange}
        multiple
        style={{ display: "none" }}
      />
      {selectedFiles.length > 0 ? (
        <Stack direction={"column"} spacing={1}>
          {selectedFiles.map((selectedFile, index) => (
            <Stack
              direction="row"
              spacing={1}
              gap={2}
              alignItems="center"
              key={index}
            >
              {field?.value && !selectedFile.name && (
                <a
                  href={field?.value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button sx variant="contained" size="small">
                    <MdOutlineFileCopy
                      style={{
                        marginLeft: "10px",
                      }}
                    />
                    عرض الصورة
                  </Button>
                </a>
              )}
              {selectedFile.name && (
                <Typography variant="subtitle1">{selectedFile.name}</Typography>
              )}
              <IconButton
                onClick={handleRemove}
                aria-label="delete"
                size="medium"
                sx={{ color: "#e22d2d" }}
              >
                <FaTrash fontSize="18px" />
              </IconButton>
            </Stack>
          ))}
        </Stack>
      ) : (
        <label
          htmlFor={name}
          style={{
            width: "fit-content",
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0169A4",
              ":hover": {
                bgcolor: "#025281",
              },
            }}
            component="span"
          >
            <FaCloudUploadAlt
              style={{
                marginLeft: "10px",
                fontSize: "18px",
              }}
            />
            {label}
          </Button>
        </label>
      )}
    </>
  );
};

export default MultipleFileInput;
