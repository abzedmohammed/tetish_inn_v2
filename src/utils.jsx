import { onError, onSuccess } from "abzed-utils";
import projectLogo from "./assets/img/snack.jpg";
import {
    errorNotification,
    successNotification,
} from "./components/notifications/toastNotification";

export const url = import.meta.env.VITE_API_URL;
export const defaultTimer = import.meta.env.VITE_DEFAULT_TIMER;
export const logoutUrl = import.meta.env.VITE_LOGOUT_URL;
export const logo = projectLogo;

export const notifySuccess = (message) => {
    onSuccess(message, successNotification);
};

export const notifyError = (message) => {
    onError(message, errorNotification);
};

export const passwordChecks = [
    {
        label: "At least 8 characters",
        valid: (val) => val?.length >= 8,
    },
    {
        label: "One upper case letter",
        valid: (val) => /[A-Z]/.test(val),
    },
    {
        label: "At least one number",
        valid: (val) => /\d/.test(val),
    },
    {
        label: "Use a symbol (e.g. !@#)",
        valid: (val) => /[!@#$%^&*()_+\-=[\]{};':",./<>?`~]/.test(val),
    },
];

export const passwordOk = "#b45309";
export const passwordDefault = "#545454";
