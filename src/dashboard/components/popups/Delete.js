import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import styles from "./Delete.module.scss";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props, { selectedId }) {
  const [dialogSelectedId, setDialogSelectedId] = useState(null);
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    axios
      .delete(
        `https://payroll-team9.onrender.com/api/v1/employees/${selectedId}`
      )
      .then(function (response) {
        alert("Successfully deleted!");
        navigate("/home/employerdetails");
        // Handle success
        console.log("Deleted successfully");
      })
      .catch(function (error) {
        // Handle error
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={styles.button1}
      >
        Remove
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Delete Employee
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <p> Are you sure you want to delete this Employee?</p>
          <div className={styles.btn_container}>
            <button className={styles.delete} onClick={handleDelete}>
              delete
            </button>
            <button className={styles.cancle} onClick={handleClose}>
              {" "}
              Cancle{" "}
            </button>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
