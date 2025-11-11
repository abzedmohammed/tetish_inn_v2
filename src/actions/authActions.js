import axiosInstance from "../instance";
import { authStateFn, userIdStateFn } from "../features/auth/authSlice";
import { notifyError, notifySuccess } from "../utils";
import { jwtDecode } from "jwt-decode";

export const handleLoginSuccess = ({ token, dispatch, successMessage }) => {
    if (token) {
        localStorage.setItem("token", token);
        const decoded = jwtDecode(token);
        notifySuccess(successMessage);
        dispatch(authStateFn(decoded));
        setTimeout(() => {
            window.location.replace(`/`);
        }, 50);
    } else {
        notifyError("Could not verify account");
    }
};

export const loginAction = {
    mutationFn: async (data) => await axiosInstance.post("/auth/login", data),
    onSuccess: ({ response, dispatch }) => {
        let token = response?.data?.accessToken;
        
        handleLoginSuccess({
            token,
            dispatch,
            successMessage: "Login successful",
        });
    },
};

export const registerAction = {
    mutationFn: async (data) => await axiosInstance.post("/api/user/save", data),
    onSuccess: ({ navigate, form }) => {
        notifySuccess("Registration successful. Please login to your account");
        form?.resetFields();
        navigate("/auth/login");
    },
};

export const forgotPasswordAction = {
    mutationFn: async (data) =>
        await axiosInstance.post("/auth/reset_password", data),
    onSuccess: ({ response, dispatch, navigate }) => {
        console.log(response);
        dispatch(userIdStateFn(response?.data?.usrId));
        notifySuccess("OTP sent successfully");
        navigate("/auth/forgot-password/verification");
    },
};

export const updatePasswordAction = {
    mutationFn: async (data) =>
        await axiosInstance.post("/auth/update_password", data),
    onSuccess: ({ navigate }) => {
        notifySuccess("Password updated successfully");
        navigate("/auth/login");
    },
};
