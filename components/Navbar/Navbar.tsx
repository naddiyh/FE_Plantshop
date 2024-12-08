"use client";

import Link from "next/link";
import { Navlink } from "./navLink";
import { PrimaryButton } from "../Button/PrimaryButton";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCircleUser } from "react-icons/fa6";
import { useAuth } from "@/features/auth/useAuth";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { user, isAuthenticated, handleLogout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="drawer z-20">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div
            className={`${
              isScroll
                ? "text-primary-orange hover:text-primary-soft-orange bg-white bg-opacity-70 shadow-sm"
                : "text-[#144230]"
            } navbar fixed left-0 right-0 top-0 w-full gap-2 px-4 py-4 md:px-32`}
          >
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="flex pr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-1 items-center">
              <Image
                src="/icon/logo.png"
                width={100}
                height={100}
                alt="logo"
                objectPosition="top"
                objectFit="cover"
                className="flex"
              />
            </div>

            <div className="hidden gap-14 md:flex">
              <div className="inline-flex gap-8">
                {Navlink.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <li className="inline-flex cursor-pointer text-[#144230]">
                      {item.title}
                    </li>
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {isAuthenticated ? (
                  <div className="dropdown dropdown-end flex items-center gap-4">
                    <div
                      tabIndex={0}
                      role="button"
                      className="avatar btn btn-circle btn-ghost"
                    >
                      <div className="w-10 rounded-full">
                        {user ? (
                          <Image
                            src={`/images/bonsaii.png`}
                            alt="Profile Picture"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        ) : (
                          <FaCircleUser className="h-10 w-10" />
                        )}
                      </div>
                    </div>

                    <ul
                      tabIndex={0}
                      className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                      <li>
                        <Link
                          href="/profile"
                          className="justify-between text-white"
                        >
                          Profile
                          <span className="badge">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/settings" className="text-white">
                          Settings
                        </Link>
                      </li>
                      <li>
                        <button
                          className="w-full text-left text-white"
                          onClick={handleLogout}
                        >
                          Log out
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <PrimaryButton fullwidth={true} onClick={handleLogin}>
                    Login
                  </PrimaryButton>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full w-60 bg-base-200 pt-14">
            {Navlink.map((item) => (
              <Link key={item.href} href={item.href} className="p-4">
                <li className="inline-flex pl-3 text-white">{item.title}</li>
              </Link>
            ))}

            {isAuthenticated ? (
              <div className="dropdown dropdown-end flex items-center gap-4">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar btn btn-circle btn-ghost"
                >
                  <div className="w-10 rounded-full">
                    {user ? (
                      <Image
                        src={`/images/bonsaii.png`}
                        alt="Profile Picture"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <FaCircleUser className="h-10 w-10" />
                    )}
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                >
                  <li>
                    <Link
                      href="/profile"
                      className="justify-between text-white"
                    >
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings" className="text-white">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      className="w-full text-left text-white"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <PrimaryButton fullwidth={true} onClick={handleLogin}>
                Login
              </PrimaryButton>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
