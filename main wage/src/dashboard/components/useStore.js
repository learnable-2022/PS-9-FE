import { create } from "zustand";
import axios from "axios";

export const useStore = create((set, get) => {
  return {
    fetchData: async (email, password) => {
      try {
        set({ loading: true });

        const res = await axios.post(
          "https://payroll-team9.onrender.com/api/v1/users/login",
          {
            email,
            password,
          }
        );

        const accessToken = res.data.accessToken;
        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);

          const company = res.data.user.companyName; // Get the company name from the response
          const userId = res.data.user._id;
          const userWallet = res.data.user.wallet;
          const userEmployees = res.data.user.employees.length;
          set((state) => ({
            userId,
            company,
            userWallet,
            userEmployees,
          }));

          return res;
        }
      } catch (err) {
        console.error(err);
      } finally {
        set({ loading: false });
      }
    },
    userId: localStorage.getItem("userId") || null,
    company: localStorage.getItem("company") || null,
    userWallet: localStorage.getItem("userWallet") || null,
    userEmployees: localStorage.getItem("userEmployees") || null,
    loading: false,

    // Actions to update the state
    setUserId: (userId) => {
      set({ userId });
      localStorage.setItem("userId", userId);
    },
    setCompany: (company) => {
      set({ company });
      localStorage.setItem("company", company); // Store the company name in local storage
    },
    setUserWallet: (userWallet) => {
      set({ userWallet });
      localStorage.setItem("userWallet", userWallet);
    },
    setUserEmployees: (userEmployees) => {
      set({ userEmployees });
      localStorage.setItem("userEmployees", userEmployees);
    },
    setLoading: (loading) => {
      set({ loading });
    },
  };
});

export default useStore;
