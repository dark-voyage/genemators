/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import Link from "next/link";
import { useRouter } from "next/router";
import Transition from "./Transition";
import React, { useState } from "react";

const Header = ({ subtitle }: { subtitle: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const path = useRouter().pathname;

  const homeDetectMenu = () => {
    if (path !== "/") {
      return (
        <Link href="/">
          <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
            Home
          </a>
        </Link>
      );
    }
  };

  const homeDetectResponsive = () => {
    if (path !== "/") {
      return (
        <Link href="/">
          <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
            <svg
              className="flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              />
            </svg>
            <div className="text-base leading-6 font-medium">Home</div>
          </a>
        </Link>
      );
    }
  };

  return (
    <div className="relative bg-black">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-center">
                <div className="text-white px-2 genemator-title">
                  Genemator's
                </div>
                {subtitle && (
                  <div className="text-white">
                    {">"} {subtitle}
                  </div>
                )}
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {homeDetectMenu()}
            <Link href="/posts">
              <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Posts
              </a>
            </Link>
            <Link href="/about">
              <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                About
              </a>
            </Link>
            <Link href="/quotes">
              <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Quotes
              </a>
            </Link>
            <Link href="/x">
              <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                eXplorer
              </a>
            </Link>
            <Link href="/socials">
              <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Socials
              </a>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a
              href="https://github.com/genemators/genemators/issues"
              target="_blank"
              className="whitespace-no-wrap text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 50 50"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M25 3C22.078125 3 19.652344 5.097656 19.125 7.875C18.429688 8.117188 17.757813 8.410156 17.125 8.75C14.789063 10.003906 12.9375 12.128906 12.9375 15C12.9375 16.59375 13.230469 18.050781 13.90625 19.25C13.664063 19.203125 13.421875 19.148438 13.1875 19.125C13.039063 19.113281 12.902344 19.089844 12.75 19.09375C12.292969 19.101563 11.8125 19.210938 11.40625 19.5C10.863281 19.886719 10.550781 20.488281 10.375 21.15625C10.355469 21.230469 10.332031 21.328125 10.3125 21.40625C9.941406 21.355469 9.46875 21.25 8.875 20.96875C8.679688 20.875 8.457031 20.785156 8.25 20.65625C8.042969 20.527344 7.839844 20.363281 7.625 20.1875C7.195313 19.839844 6.765625 19.394531 6.34375 18.8125C6.132813 18.519531 5.914063 18.207031 5.71875 17.84375C4.742188 16.03125 4 13.253906 4 9C4 8.96875 4 8.9375 4 8.90625C4 8.875 4 8.84375 4 8.8125C3.992188 8.769531 3.980469 8.726563 3.96875 8.6875C3.953125 8.632813 3.929688 8.582031 3.90625 8.53125C3.871094 8.464844 3.828125 8.402344 3.78125 8.34375C3.761719 8.320313 3.742188 8.300781 3.71875 8.28125C3.609375 8.15625 3.46875 8.058594 3.3125 8C3.179688 7.960938 3.042969 7.953125 2.90625 7.96875C2.863281 7.976563 2.820313 7.988281 2.78125 8C2.316406 8.105469 1.988281 8.523438 2 9C2 16.1875 4.101563 19.910156 6.375 21.75C7.753906 22.863281 9.179688 23.238281 10.09375 23.375C10.027344 24.457031 10 25.761719 10 27.46875C10 27.636719 10.027344 27.800781 10.03125 27.96875L2 27.96875C1.96875 27.96875 1.9375 27.96875 1.90625 27.96875C1.335938 27.996094 0.894531 28.476563 0.921875 29.046875C0.949219 29.617188 1.429688 30.058594 2 30.03125L10.1875 30.03125C10.40625 31.824219 10.832031 33.605469 11.5 35.28125C10.515625 35.507813 8.953125 35.980469 7.3125 36.9375C4.714844 38.453125 2 41.316406 2 46C1.996094 46.359375 2.183594 46.695313 2.496094 46.878906C2.808594 47.058594 3.191406 47.058594 3.503906 46.878906C3.816406 46.695313 4.003906 46.359375 4 46C4 42.058594 6.097656 39.945313 8.3125 38.65625C9.957031 37.699219 11.605469 37.273438 12.34375 37.125C12.777344 37.953125 13.261719 38.746094 13.8125 39.5C16.328125 42.929688 20.089844 45.46875 24.875 46L25.125 46C29.910156 45.46875 33.671875 42.929688 36.1875 39.5C36.738281 38.746094 37.222656 37.953125 37.65625 37.125C38.394531 37.273438 40.042969 37.699219 41.6875 38.65625C43.902344 39.945313 46 42.058594 46 46C45.996094 46.359375 46.183594 46.695313 46.496094 46.878906C46.808594 47.058594 47.191406 47.058594 47.503906 46.878906C47.816406 46.695313 48.003906 46.359375 48 46C48 41.316406 45.285156 38.453125 42.6875 36.9375C41.046875 35.980469 39.484375 35.507813 38.5 35.28125C39.167969 33.605469 39.59375 31.824219 39.8125 30.03125L48 30.03125C48.570313 30.03125 49.03125 29.570313 49.03125 29C49.03125 28.429688 48.570313 27.96875 48 27.96875L39.96875 27.96875C39.972656 27.800781 40 27.636719 40 27.46875C40 25.757813 39.949219 24.46875 39.84375 23.40625C40.203125 23.355469 40.664063 23.253906 41.15625 23.09375C41.410156 23.011719 41.664063 22.90625 41.9375 22.78125C42.210938 22.65625 42.496094 22.515625 42.78125 22.34375C43.066406 22.171875 43.339844 21.980469 43.625 21.75C43.910156 21.519531 44.195313 21.261719 44.46875 20.96875C44.742188 20.675781 45.023438 20.359375 45.28125 20C45.539063 19.640625 45.765625 19.246094 46 18.8125C46.234375 18.378906 46.453125 17.890625 46.65625 17.375C47.464844 15.316406 48 12.59375 48 9C48 8.96875 48 8.9375 48 8.90625C48 8.875 48 8.84375 48 8.8125C47.988281 8.738281 47.964844 8.664063 47.9375 8.59375C47.917969 8.570313 47.898438 8.550781 47.875 8.53125C47.851563 8.464844 47.820313 8.402344 47.78125 8.34375C47.761719 8.320313 47.742188 8.300781 47.71875 8.28125C47.6875 8.257813 47.65625 8.238281 47.625 8.21875C47.425781 8.042969 47.167969 7.953125 46.90625 7.96875C46.863281 7.976563 46.820313 7.988281 46.78125 8C46.589844 8.042969 46.417969 8.140625 46.28125 8.28125C46.257813 8.3125 46.238281 8.34375 46.21875 8.375C46.171875 8.421875 46.128906 8.476563 46.09375 8.53125C46.082031 8.5625 46.070313 8.59375 46.0625 8.625C46.035156 8.683594 46.015625 8.75 46 8.8125C45.996094 8.855469 45.996094 8.894531 46 8.9375C46 8.957031 46 8.980469 46 9C46 15.804688 44.101563 18.792969 42.375 20.1875C41.183594 21.152344 40.082031 21.378906 39.5 21.4375C39.292969 20.835938 38.96875 20.3125 38.46875 19.96875C37.9375 19.601563 37.289063 19.488281 36.6875 19.5C36.425781 19.503906 36.152344 19.558594 35.875 19.59375C36.707031 18.332031 37.0625 16.753906 37.0625 15C37.0625 12.128906 35.210938 10.003906 32.875 8.75C32.253906 8.417969 31.589844 8.144531 30.90625 7.90625C30.394531 5.105469 27.9375 3 25 3 Z M 25 5C26.597656 5 27.953125 5.9375 28.59375 7.28125C27.394531 7.050781 26.179688 6.9375 25 6.9375C23.808594 6.9375 22.582031 7.046875 21.375 7.28125C22.015625 5.929688 23.398438 5 25 5 Z M 25 9.0625C27.367188 9.0625 29.96875 9.570313 31.875 10.59375C33.78125 11.617188 34.9375 12.988281 34.9375 15C34.9375 17.261719 34.464844 18.542969 33.09375 19.46875C31.722656 20.394531 29.164063 20.9375 25 20.9375C20.835938 20.9375 18.277344 20.394531 16.90625 19.46875C15.535156 18.542969 15.0625 17.261719 15.0625 15C15.0625 12.988281 16.21875 11.617188 18.125 10.59375C20.03125 9.570313 22.632813 9.0625 25 9.0625 Z M 12.65625 21.09375C12.71875 21.082031 12.828125 21.078125 13 21.09375C13.683594 21.15625 15.085938 21.632813 17.0625 22.09375C17.421875 22.175781 17.820313 22.261719 18.21875 22.34375C19.980469 22.859375 22.1875 23.0625 25 23.0625C27.410156 23.0625 29.375 22.898438 31 22.53125C31.039063 22.523438 31.085938 22.539063 31.125 22.53125C31.683594 22.445313 32.203125 22.34375 32.6875 22.25C34.625 21.875 36.023438 21.515625 36.75 21.5C37.113281 21.492188 37.234375 21.570313 37.3125 21.625C37.390625 21.679688 37.5 21.765625 37.625 22.15625C37.875 22.941406 38 24.667969 38 27.46875C38 31.332031 36.796875 35.265625 34.5625 38.3125C32.535156 41.074219 29.660156 43.109375 26 43.8125L26 29C26.007813 28.691406 25.871094 28.398438 25.632813 28.203125C25.398438 28.007813 25.082031 27.933594 24.78125 28C24.316406 28.105469 23.988281 28.523438 24 29L24 43.8125C20.339844 43.109375 17.464844 41.074219 15.4375 38.3125C13.203125 35.265625 12 31.332031 12 27.46875C12 24.394531 12.089844 22.535156 12.3125 21.6875C12.425781 21.261719 12.542969 21.140625 12.5625 21.125C12.574219 21.117188 12.59375 21.105469 12.65625 21.09375Z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/genemators/genemators"
              target="_blank"
              className="whitespace-no-wrap text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 50 50"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 2C8.347656 2 7 3.347656 7 5L7 41C7 42.652344 8.347656 44 10 44L11 44L11 42L10 42C9.449219 42 9 41.550781 9 41L9 36L41 36L41 41C41 41.550781 40.550781 42 40 42L25 42L25 44L40 44C41.652344 44 43 42.652344 43 41L43 5C43 3.347656 41.652344 2 40 2 Z M 14 8L18 8L18 12L14 12 Z M 14 17L18 17L18 21L14 21 Z M 14 26L18 26L18 30L14 30 Z M 13 38L13 48.625L18 46.125L23 48.625L23 38Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Transition
        show={menuOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg border shadow-xs bg-black">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white genemator-title">
                      Genemator's
                    </div>{" "}
                    {subtitle && (
                      <div className="text-white">
                        {">"} {subtitle}
                      </div>
                    )}
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-gray-100 focus:outline-none focus:bg-white focus:text-black transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <nav className="grid row-gap-8">
                    {homeDetectResponsive()}
                    <Link href="/posts">
                      <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
                        <svg
                          className="flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium">
                          Posts
                        </div>
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
                        <svg
                          className="flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <circle
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            cx="12"
                            cy="12"
                            r="10"
                          />
                          <line
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="12"
                            y1="8"
                            x2="12"
                            y2="12"
                          />
                          <line
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="12"
                            y1="16"
                            x2="12.01"
                            y2="16"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium">
                          About
                        </div>
                      </a>
                    </Link>
                    <Link href="/quotes">
                      <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
                        <svg
                          className="flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <polyline
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            points="21 8 21 21 3 21 3 8"
                          />
                          <rect
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x="1"
                            y="3"
                            width="22"
                            height="5"
                          />
                          <line
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="10"
                            y1="12"
                            x2="14"
                            y2="12"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium">
                          Quotes
                        </div>
                      </a>
                    </Link>
                    <Link href="/x">
                      <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
                        <svg
                          className="flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium">
                          eXplorer
                        </div>
                      </a>
                    </Link>
                    <Link href="/socials">
                      <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
                        <svg
                          className="flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium">
                          Socials
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                  <a
                    href="https://chisel.uz/"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    Chisel Devs
                  </a>
                  <a
                    href="https://deno.land/"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    Denoland
                  </a>
                  <a
                    href="https://bsba.uz/"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    BSBA™
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCLvAJjc5gvy_6QL2f-RRBuw"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    iBlogs
                  </a>
                </div>
                <div className="space-y-6">
                  <a
                    target="_blank"
                    href="https://github.com/genemators/genemators"
                    className="w-full flex items-center justify-center px-4 py-2 border border text-base leading-6 font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-black focus:outline-none focus:border-white focus:shadow-outline-white active:bg-white transition ease-in-out duration-150"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      />
                    </svg>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      />
                    </svg>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      />
                    </svg>
                  </a>
                  <span className="w-full flex rounded-md shadow-sm" />
                  <p className="text-center text-base leading-6 font-medium text-white">
                    Proudly crafted with{" "}
                    <a
                      href="https://vercel.com"
                      className="text-gray-400 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Vercel / Next.js
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Header;
