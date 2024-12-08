"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface IRegisterResponse {
  message: string;
}

export const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post<IRegisterResponse>(
        "http://127.0.0.1:8000/api/register",
        data,
      );
      console.log("Success:", response.data);
      toast.success("Your Account has been successfully created!");
      reset();
      router.push("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message ||
          "An error occurred during registration.";
        toast.error(errorMessage);
        console.error("Axios Error:", error);
      } else {
        toast.error("An unexpected error occurred.");
        console.error("Unexpected Error:", error);
      }
    }
  };

  return (
    <main className="flex h-screen w-screen items-center justify-center rounded-lg px-4 pt-10 md:px-[350px] md:pt-0">
      <section className="flex w-full flex-row items-center justify-center px-4 py-8 md:py-14 md:shadow-2xl">
        <Image
          src={"/images/bonsaii.png"}
          width={500}
          height={100}
          priority
          objectFit="cover"
          alt={"FotoFamily"}
          className="hidden px-10 md:flex"
          objectPosition="top"
        />

        <section className="flex w-full flex-col justify-center gap-4 px-4 md:px-10">
          <section className="flex flex-col items-center gap-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex w-full flex-col items-center gap-6"
            >
              <p className="text-heading-s md:text-heading-s font-bold text-[#144230]">
                Sign Up Your Account
              </p>
              <section className="text-text-s md:text-text-m flex w-full flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Full Name is required",
                    })}
                    className="h-10 w-full rounded-md border bg-white p-2 pl-4 text-sm"
                  />
                  {errors.name && (
                    <p className="text-text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="youremail@gmail.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Invalid email format",
                      },
                    })}
                    className="h-10 w-full rounded-md border bg-white p-2 pl-4 text-sm"
                  />
                  {errors.email && (
                    <p className="text-text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                {/* <div className="flex flex-col gap-1">
                  <label className="text-sm">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^[0-9\b]+$/,
                        message: "Invalid phone number format",
                      },
                    })}
                    className="h-10 w-full rounded-md border bg-white p-2 pl-4 text-sm"
                  />
                  {errors.phone && (
                    <p className="text-text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div> */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="h-10 w-full rounded-md border bg-white p-2 pl-4 text-sm"
                  />
                  {errors.password && (
                    <p className="text-text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md border bg-[#144230] p-2 text-sm text-white"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Signing Up..." : "Sign up"}
                </button>
              </section>
            </form>
            <section className="text-text-xs md:text-text-s flex w-full flex-col items-center gap-3">
              <p className="text-text-s">or sign up with</p>
              <button className="flex h-10 w-full items-center justify-center gap-2 rounded-md border text-sm">
                <FcGoogle className="h-5 w-5 md:h-6 md:w-6" />
                Google
              </button>
              <section className="flex gap-1">
                <p className="text-sm">Already have an account?</p>
                <Link href="/log">
                  <p className="hover:text-primary-yellow cursor-pointer text-sm underline hover:text-[#144230]">
                    Sign in
                  </p>
                </Link>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};
