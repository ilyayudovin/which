import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import CloudUpload from '@material-ui/icons/CloudUpload';

interface PropTypes {
  callback: (file: File) => void;
}


const FileUpload: React.FC<PropTypes> = ({ callback, children }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files;
    if (files?.length) callback(files[0]);
  };

  const handleClick = () => {
    if (inputRef?.current) inputRef.current.click();
  };

  const child = children && React.Children.only(children);

  const defaultButton = (
    <Button
      onClick={handleClick}
      variant="contained"
      color="primary"
      size="large"
      startIcon={<CloudUpload />}
    >
      Upload
    </Button>
  );

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        multiple={false}
        accept=".jpg, .jpeg, .png, .gif"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      {
        React.isValidElement(child)
          ? React.cloneElement(child, { onClick: handleClick })
          : defaultButton
      }
    </>
  );
};

export default FileUpload;
