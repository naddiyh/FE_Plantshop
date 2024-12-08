"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useAuth = () => {
  axios.defaults.withCredentials = true;
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(`http://127.0.0.1:8000/api/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });

          if (response.data) {
            setUser(response.data);
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error during authentication:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log("Login data:", { email, password });
      const response = await axios.post(
        `http://127.0.0.1:8000/api/login`,
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Login response:", response.data);

      if (response.data.access_token && response.data.user) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        toast.success("Login successful!");
        localStorage.setItem("token", response.data.access_token);
        router.push("/");
      } else {
        throw new Error("User data not found in response");
      }
    } catch (error) {
      handleAuthError(error, "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found, user is not logged in.");
      }

      await axios.post(
        `http://127.0.0.1:8000/api/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );
      setUser(null);
      setIsAuthenticated(false);
      toast.success("Logout successful!");
      localStorage.removeItem("token");
      router.push("/");
    } catch (error) {
      handleAuthError(error, "Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAuthError = (error: unknown, defaultMessage: string) => {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data?.message || defaultMessage);
      console.error(defaultMessage, error.response?.data);
    } else {
      toast.error("An unexpected error occurred.");
      console.error("Unknown error:", error);
    }
  };

  return {
    user,
    isAuthenticated,
    loading,
    handleLogin,
    handleLogout,
  };
};
