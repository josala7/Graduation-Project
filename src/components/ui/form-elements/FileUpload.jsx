/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useField, useFormikContext } from "formik";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";
import { MdOutlineFileCopy } from "react-icons/md";

const FileInput = ({ label, name }) => {
  const [field, { error }, { setValue }] = useField(name);

  const { setFieldValue, errors, touched, values } = useFormikContext();
  const [filePreview, setFilePreview] = useState(null);

  const selectedFile = values[name];

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    setFieldValue(name, file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  };

  const handleRemove = () => {
    setFieldValue(name, null);
    setFilePreview(null);
  };

  const renderPreview = () => {
    if (selectedFile && filePreview) {
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();

      if (fileExtension === "pdf") {
        return <embed src={filePreview} width="50%" height="100px" />;
      }

      if (["doc", "docx"].includes(fileExtension)) {
        return (
          <Typography variant="subtitle1">
            Preview not available for Word documents.
          </Typography>
        );
      }

      if (["jpg", "jpeg", "png", "gif"].includes(fileExtension)) {
        return <img src={filePreview} alt="File Preview" />;
      }
    }
    return null;
  };

  return (
    <>
      <input
        id={name}
        name={name}
        type="file"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      {selectedFile ? (
        <Stack direction={"column"}>
          {/* {renderPreview()} */}
          <Stack direction={"row"} spacing={1} gap={2} alignItems={"center"}>
            {field?.value && !selectedFile.name && (
              <a href={field?.value} target="_blank" rel="noopener noreferrer">
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
              sx={{
                color: "#e22d2d",
              }}
            >
              <FaTrash fontSize="18px" />
            </IconButton>
          </Stack>
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

export default FileInput;
