"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "./useAuth";
type TLoginForm = {
  email: string;
  password: string;
};

export const Loginn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>();

  const { handleLogin, loading } = useAuth();

  const onSubmit: SubmitHandler<TLoginForm> = async (data) => {
    await handleLogin(data.email, data.password);
  };

  return (
    <>
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
            <section className="flex flex-col items-center">
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex w-full flex-col items-center gap-8"
              >
                <p className="items-center text-center text-lg font-bold text-[#1d6c4e]">
                  Login To Your Account
                </p>

                <section className="flex w-full flex-col gap-4">
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
                          message: "Format email tidak benar",
                        },
                      })}
                      className="h-10 w-full rounded-md border bg-white p-2 pl-4 text-sm"
                    />
                    {errors.email && (
                      <p className="text-[12px] text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm">
                      Password
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      placeholder="password"
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="h-10 w-full rounded-md border bg-white p-2 pl-4 text-sm"
                    />
                    {errors.password && (
                      <p className="text-[12px] text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col py-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full rounded-md border p-2 text-white ${
                        loading ? "bg-gray-400" : "bg-[#144230]"
                      }`}
                    >
                      {loading ? "Loging in..." : "Login"}
                    </button>
                    <div className="text-right">
                      <Link
                        href={"/forgotpassword"}
                        className="text-xs font-light text-[#144230]"
                      >
                        Forget Password?
                      </Link>
                    </div>
                  </div>
                </section>
              </form>
              <section className="flex w-full flex-col items-center justify-center gap-4">
                <p className="fpnt-semibold text-text-s">or login with</p>
                <button className="text-text-s md:text-text-m flex h-10 w-full items-center justify-center gap-2 rounded-md border text-[#144230]">
                  <FcGoogle className="h-5 w-5 md:h-6 md:w-6" />
                  Google
                </button>

                <div className="text-text-s flex flex-col gap-1 text-center">
                  <p className="text-[12px]">
                    Don{"'"}t have an account?
                    <Link
                      href={"/signup"}
                      passHref
                      className="text-[#144230] underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </section>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};
