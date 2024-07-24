/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import React from "react";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import routePaths from "../constants/routePaths";
import FormGroupInput from "../components/common/form/FormGroupInput";
import { emailValidation, passwordValidation } from "../utils/validationRule";
import FormButton from "../components/common/form/FormButton";
import "../assets/styles/login.scss";
import { isFormInvalid } from "../utils/helper";

export default function Login() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: emailValidation,
      password: passwordValidation,
    }),
    onSubmit: async () => {
      history.push(routePaths.LANDING);
    },
  });

  return (
    <>
      <div className="fullscreen-div">
        <div className="leftContainer">
          <div className="login-wrapper">
              <span className="header">CRUD OPERATIONS</span>
              <span className="header-1">Sign In</span>
              <span className="header-2">Enter your credentials to access your account</span>
              <Form onSubmit={formik.handleSubmit}>
                <FormGroupInput
                  key="login-email"
                  data-testid="login-email"
                  groupProps={{ className: "mb-4", controlId: "email" }}
                  labelProps={{
                    styleClasses: "fw-bold",
                    // labelText: "Email Address",
                  }}
                  inputProps={{
                    isInvalid: isFormInvalid(
                      formik.touched.email,
                      formik.errors.email
                    ),
                    type: "email",
                    placeholder: "User Name",
                    onChange: formik.handleChange,
                    value: formik.values.email,
                  }}
                  feedBackProps={{
                    type: "invalid",
                    message: formik.errors.email,
                  }}
                />
                <FormGroupInput
                  groupProps={{
                    className: "mb-4 password-input",
                    controlId: "password",
                  }}
                  labelProps={{ styleClasses: "fw-bold" }}
                  inputProps={{
                    isInvalid: isFormInvalid(
                      formik.touched.password,
                      formik.errors.password
                    ),
                    type: "password",
                    placeholder: "Password",
                    onChange: formik.handleChange,
                    value: formik.values.password,
                  }}
                  feedBackProps={{
                    type: "invalid",
                    message: formik.errors.password,
                  }}
                />
                <div>
                  <FormButton
                    className="btn"
                    disabled={formik.isSubmitting}
                    otherProps={{
                      className: "fw-bold sign-in",
                      "data-testid": "loging-submit",
                    }}
                    btnText="Login"
                    showLoader={formik.isSubmitting}
                  />
                </div>
              </Form>
              <div className="signup">
                Don’t have your account?{" "}
                <a
                  className="up"
                  data-testid="signup-button"
                  onClick={() => history.push("/signup")}
                >
                  Sign-up
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  setIsAuthenticated: PropTypes.func.isRequired,
};
Login.defaultProps = {};
