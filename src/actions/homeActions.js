
import axiosInstance from "../instance";
import { handleLoginSuccess } from "./authActions";

// FETCH ACTIONS

export const fetchSnacks = {
	queryKey: ['fetch-snacks'],
	queryFn: async (body) => await axiosInstance.post('/api/snacks/all', body),
};


// SAVE AND UPDATE ACTIONS

export const saveOrder = {
    mutationFn: async (data) => await axiosInstance.post("/api/order/save-or-update", data),
	onSuccess: ({ response, dispatch }) => {
		handleLoginSuccess({
			token: response?.data?.accessToken,
			dispatch,
			successMessage: "Order saved successfully",
		});
	},
};