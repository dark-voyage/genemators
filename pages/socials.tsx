/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Socials = () => {
  return (
    <>
      <Head>
        <title>Socials | Genemator's</title>
        <meta property="og:title" content="Page of social links" />
        <meta
          property="og:description"
          content="At this page you can get links to social profile of Genemator!"
        />
      </Head>
      <Header subtitle="Socials" />
      <div className="pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <div className=" pb-10">
            <h2 className="text-4xl font-bold tracking-tight">Socials</h2>
            <div className="mt-3 sm:mt-4">
              <p className="text-xl leading-7 text-white">
                My social account links to reach my various type of accounts.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-16 lg:grid-cols-5  lg:row-gap-12 items-center text-center justify-center">
              <a href="https://facebook.com/sakhib.orzklv" key="facebook">
                <svg
                  className="h-36 w-36 animated-social"
                  fill="none"
                  viewBox="0 0 50 50"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M38.8,3H11.3C6.7,3,3,6.7,3,11.3v27.5c0,4.6,3.7,8.3,8.3,8.3h27.5c4.6,0,8.3-3.7,8.3-8.3V11.3C47,6.7,43.3,3,38.8,3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M25,47V28h-3v-6h3v-3c0-4.7,1.6-8,7-8c2.9,0,6,1,6,1v5h-3c-2.1,0-3,0.5-3,2v3h6l-1,6h-5v19"
                  />
                </svg>
              </a>
              <a href="https://instagram.com/genemator" key="instagram">
                <svg
                  className="h-36 w-36 animated-social"
                  fill="none"
                  viewBox="0 0 50 50"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M16,46h18c6.6,0,12-5.4,12-12V16c0-6.6-5.4-12-12-12H16C9.4,4,4,9.4,4,16v18C4,40.6,9.4,46,16,46z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M25,15c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S30.5,15,25,15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M37,11c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S38.1,11,37,11z"
                  />
                </svg>
              </a>
              <a href="https://twitter.com/genemator" key="twitter">
                <svg
                  className="h-36 w-36 animated-social"
                  fill="none"
                  viewBox="0 0 50 50"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M15.6,37c-3.4,2.6-7.6,4.2-12.2,4.2c-0.8,0-1.6,0-2.3-0.1c4.4,2.8,9.5,4.4,15.1,4.4c18.1,0,28-15,28-28c0-0.4,0-0.9,0-1.3  c1.9-1.4,3.6-3.1,4.9-5.1c-1.8,0.8-3.7,1.3-5.7,1.6c2-1.2,3.6-3.2,4.3-5.4c-1.9,1.1-4,1.9-6.3,2.4c-1.8-1.9-4.4-3.1-7.2-3.1  c-5.4,0-9.8,4.4-9.8,9.8c0,0.8,0.1,1.5,0.3,2.2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M24.6,18.6C16.5,18.2,9.2,14.2,4.3,8.3C3.5,9.7,3,11.4,3,13.2c0,3.4,1.7,6.4,4.4,8.2c-1.6-0.1-3.1-0.5-4.5-1.2c0,0,0,0.1,0,0.1  c0,4.8,3.4,8.7,7.9,9.7c-0.8,0.2-1.7,0.3-2.6,0.3c-0.6,0-1.3-0.1-1.9-0.2c1.3,3.9,4.9,6.8,9.2,6.8"
                  />
                </svg>
              </a>
              <a href="https://twitch.com/genemators" key="twitch">
                <svg
                  className="h-36 w-36 animated-social"
                  fill="none"
                  viewBox="0 0 50 50"
                  stroke="currentColor"
                >
                  <polygon
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    className="st0"
                    points="35,42 26,42 20,48 14,48 14,42 3,42 3,10 6,2 47,2 47,30 "
                  />
                  <polygon
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    className="st0"
                    points="43,28 43,6 11,6 11,34 19,34 19,40 25,34 37,34 "
                  />
                  <rect
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    x="31"
                    y="14"
                    className="st0"
                    width="4"
                    height="12"
                  />
                  <rect
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    x="21"
                    y="14"
                    className="st0"
                    width="4"
                    height="12"
                  />
                </svg>
              </a>
              <a href="https://vk.com/genemator" key="vkontakte">
                <svg
                  className="h-36 w-36 animated-social"
                  fill="none"
                  viewBox="0 0 50 50"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 23.396484 15.992188 C 22.338993 15.989762 21.396053 16.048857 20.552734 16.462891 A 1.0001 1.0001 0 0 0 20.550781 16.464844 C 20.139648 16.667406 19.849872 16.924692 19.619141 17.230469 C 19.503775 17.383357 19.385584 17.520601 19.322266 17.869141 C 19.290606 18.04341 19.272826 18.325815 19.455078 18.630859 C 19.637334 18.935904 20.003807 19.109362 20.238281 19.140625 C 20.401166 19.162305 20.768822 19.318796 20.802734 19.365234 A 1.0001 1.0001 0 0 0 20.804688 19.369141 C 20.804932 19.369474 20.947263 19.741144 20.988281 20.072266 C 21.029301 20.403387 21.027344 20.671875 21.027344 20.671875 A 1.0001 1.0001 0 0 0 21.029297 20.751953 C 21.029297 20.751953 21.087228 21.619511 21.048828 22.515625 C 21.033528 22.872778 20.987338 23.190517 20.939453 23.474609 C 20.583342 23.081448 20.058613 22.36946 19.300781 21.056641 C 18.460091 19.599445 17.791016 18.292969 17.791016 18.292969 C 17.755878 18.179145 17.631609 17.825025 17.146484 17.46875 C 16.616155 17.077877 16.103516 17.019531 16.103516 17.019531 A 1.0001 1.0001 0 0 0 15.908203 17 L 11.966797 17.001953 C 11.966797 17.001953 11.73048 16.988284 11.447266 17.027344 C 11.164051 17.066404 10.737588 17.098194 10.326172 17.585938 A 1.0001 1.0001 0 0 0 10.324219 17.587891 C 9.9565329 18.027228 9.9787721 18.512818 10.023438 18.787109 C 10.068098 19.061401 10.167969 19.269531 10.167969 19.269531 A 1.0001 1.0001 0 0 0 10.173828 19.28125 C 10.173828 19.28125 13.397717 26.059497 17.041016 30.050781 C 19.6867 32.948797 22.40224 32.998047 24.642578 32.998047 L 26.314453 32.998047 C 26.74128 32.998047 27.127368 32.981367 27.554688 32.732422 C 27.982005 32.483474 28.269531 31.87742 28.269531 31.457031 C 28.269531 31.016509 28.335301 30.670207 28.416016 30.492188 C 28.472777 30.36699 28.517715 30.321903 28.587891 30.285156 C 28.602729 30.294567 28.593147 30.289094 28.634766 30.318359 C 28.801234 30.435424 29.076122 30.702288 29.375 31.035156 C 29.972755 31.700892 30.651262 32.614044 31.5625 33.240234 C 32.215313 33.689229 32.831963 33.888608 33.300781 33.960938 C 33.594505 34.006254 33.82263 33.997525 33.984375 33.984375 L 37.71875 34 A 1.0001 1.0001 0 0 0 37.785156 33.998047 C 37.785156 33.998047 38.428614 34.005547 39.097656 33.605469 C 39.432178 33.405406 39.82672 33.026107 39.955078 32.472656 C 40.083436 31.919206 39.922118 31.34574 39.607422 30.822266 A 1.0001 1.0001 0 0 0 39.607422 30.820312 C 39.662072 30.910912 39.557942 30.724742 39.451172 30.550781 C 39.344399 30.376818 39.18937 30.142398 38.966797 29.851562 C 38.521651 29.269893 37.808682 28.45591 36.65625 27.382812 A 1.0001 1.0001 0 0 0 36.654297 27.382812 C 36.06897 26.838224 35.673719 26.452649 35.511719 26.238281 C 35.349719 26.023913 35.402852 26.136522 35.414062 26.082031 C 35.436492 25.97305 36.138984 24.959653 37.568359 23.050781 C 38.437249 21.888888 39.04704 21.016572 39.449219 20.291016 C 39.851397 19.565459 40.141394 18.937091 39.939453 18.167969 A 1.0001 1.0001 0 0 0 39.9375 18.164062 C 39.847853 17.826442 39.603007 17.515245 39.351562 17.345703 C 39.100119 17.176162 38.861732 17.109853 38.648438 17.068359 C 38.221848 16.985372 37.849591 17 37.503906 17 C 36.779144 17 33.563492 17.025391 33.298828 17.025391 C 32.986098 17.025391 32.468982 17.167635 32.240234 17.304688 C 31.665127 17.650771 31.5 18.105469 31.5 18.105469 A 1.0001 1.0001 0 0 0 31.470703 18.164062 C 31.470703 18.164062 30.807378 19.634988 29.953125 21.087891 C 29.08775 22.561617 28.448441 23.264508 28.0625 23.589844 C 28.05188 23.531984 28.053705 23.578967 28.046875 23.498047 C 28.012285 23.086503 28.050781 22.517823 28.050781 21.962891 C 28.050781 20.468376 28.177461 19.422397 28.109375 18.498047 C 28.075335 18.035872 27.989721 17.559283 27.685547 17.121094 C 27.381373 16.682905 26.875241 16.398229 26.375 16.277344 C 26.074849 16.204944 25.732712 16.016631 24.494141 16.003906 A 1.0001 1.0001 0 0 0 24.492188 16.003906 C 24.113419 16.000121 23.748982 15.992996 23.396484 15.992188 z M 24.472656 18.003906 C 25.568624 18.015166 25.295621 18.075496 25.904297 18.222656 C 26.093056 18.268266 26.04733 18.268009 26.042969 18.261719 C 26.038569 18.255419 26.094024 18.358529 26.115234 18.646484 C 26.157654 19.222384 26.050781 20.367405 26.050781 21.962891 C 26.050781 22.397958 25.998284 23.01881 26.052734 23.666016 C 26.107134 24.313221 26.267657 25.143803 27.041016 25.644531 C 27.407604 25.882157 27.833256 25.897136 28.197266 25.806641 C 28.561275 25.716141 28.891511 25.527659 29.238281 25.25 C 29.931821 24.694683 30.705387 23.757462 31.677734 22.101562 C 32.586549 20.555862 33.247595 19.08397 33.269531 19.035156 C 33.273824 19.031713 33.278168 19.02935 33.283203 19.025391 C 33.295692 19.025528 33.282755 19.025391 33.298828 19.025391 C 33.672165 19.025391 36.828668 19 37.503906 19 C 37.661534 19 37.718912 19.009502 37.84375 19.013672 C 37.80982 19.126937 37.84755 19.054692 37.699219 19.322266 C 37.388147 19.883459 36.814907 20.717455 35.966797 21.851562 C 34.573172 23.712692 33.7094 24.441966 33.455078 25.677734 C 33.327917 26.295619 33.566234 26.980509 33.916016 27.443359 C 34.265797 27.90621 34.707295 28.302745 35.292969 28.847656 C 36.377537 29.85756 37.013803 30.59128 37.378906 31.068359 C 37.561458 31.306899 37.676539 31.479197 37.748047 31.595703 C 37.819557 31.712209 37.801887 31.699918 37.894531 31.853516 C 37.955521 31.95573 37.933049 31.893348 37.943359 31.923828 C 37.823459 31.957628 37.678197 31.99832 37.669922 32 L 33.992188 31.984375 A 1.0001 1.0001 0 0 0 33.794922 32.003906 C 33.794922 32.003906 33.804122 32.014725 33.607422 31.984375 C 33.410689 31.954025 33.097805 31.868892 32.695312 31.591797 C 32.20955 31.257987 31.529526 30.441233 30.863281 29.699219 C 30.530159 29.328212 30.197938 28.971919 29.785156 28.681641 C 29.372375 28.391362 28.754711 28.118405 28.087891 28.328125 C 27.395667 28.545486 26.856849 29.085706 26.59375 29.666016 C 26.397906 30.097982 26.382045 30.54919 26.351562 30.998047 C 26.318372 31.000547 26.356563 30.998047 26.314453 30.998047 L 24.642578 30.998047 C 22.370916 30.998047 20.757894 31.155156 18.517578 28.701172 C 15.504086 25.39985 12.743119 19.907011 12.292969 19.001953 L 15.761719 19 C 15.822689 19.0234 15.953174 19.072395 15.960938 19.078125 A 1.0001 1.0001 0 0 0 15.964844 19.082031 C 15.83805 18.989351 15.970703 19.119141 15.970703 19.119141 A 1.0001 1.0001 0 0 0 16.011719 19.207031 C 16.011719 19.207031 16.699049 20.549836 17.568359 22.056641 C 18.421075 23.533829 19.042453 24.456619 19.642578 25.066406 C 19.942641 25.3713 20.245541 25.615827 20.650391 25.753906 C 21.05524 25.891985 21.578005 25.841335 21.929688 25.648438 C 22.648115 25.255167 22.744641 24.675101 22.861328 24.167969 C 22.978179 23.660124 23.024698 23.119131 23.046875 22.601562 C 23.089915 21.596958 23.029041 20.727518 23.025391 20.673828 C 23.025613 20.654998 23.030186 20.292437 22.972656 19.828125 C 22.913756 19.352676 22.848067 18.771361 22.417969 18.185547 L 22.416016 18.183594 C 22.413016 18.179494 22.40925 18.179781 22.40625 18.175781 C 22.974999 18.094211 23.461654 17.993803 24.472656 18.003906 z M 33.294922 18.984375 L 33.28125 19.015625 C 33.279135 19.016836 33.27981 19.014183 33.277344 19.015625 C 33.281572 19.007565 33.294922 18.984375 33.294922 18.984375 z"
                  />
                </svg>
              </a>
              <a href="https://t.me/genemator" key="telegram">
                <svg
                  className="h-36 w-36 animated-social"
                  fill="none"
                  viewBox="0 0 50 50"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M 44.376953 5.9863281 C 43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531 C 42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625 C 32.933617 10.600659 28.256963 12.603668 23.621094 14.589844 C 14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703 L 5.3046875 22.445312 C 5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578 C 3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125 C 3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766 C 3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469 L 5.2558594 27.734375 L 14.158203 30.78125 C 14.385177 31.538434 16.858319 39.792923 17.402344 41.541016 C 17.702797 42.507484 17.984013 43.064995 18.277344 43.445312 C 18.424133 43.635633 18.577962 43.782915 18.748047 43.890625 C 18.815627 43.933415 18.8867 43.965525 18.957031 43.994141 C 18.958531 43.994806 18.959437 43.99348 18.960938 43.994141 C 18.969579 43.997952 18.977708 43.998295 18.986328 44.001953 L 18.962891 43.996094 C 18.979231 44.002694 18.995359 44.013801 19.011719 44.019531 C 19.043456 44.030655 19.062905 44.030268 19.103516 44.039062 C 20.123059 44.395042 20.966797 43.734375 20.966797 43.734375 L 21.001953 43.707031 L 26.470703 38.634766 L 35.345703 45.554688 L 35.457031 45.605469 C 37.010484 46.295216 38.415349 45.910403 39.193359 45.277344 C 39.97137 44.644284 40.277344 43.828125 40.277344 43.828125 L 40.310547 43.742188 L 46.832031 9.7519531 C 46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344 C 46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375 C 45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281 z M 44.429688 8.0195312 C 44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469 C 44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531 C 44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188 L 44.875 9.3359375 L 38.390625 43.128906 C 38.375275 43.162926 38.240151 43.475531 37.931641 43.726562 C 37.616914 43.982653 37.266874 44.182554 36.337891 43.792969 L 26.632812 36.224609 L 26.359375 36.009766 L 26.353516 36.015625 L 23.451172 33.837891 L 39.761719 14.648438 A 1.0001 1.0001 0 0 0 38.974609 13 A 1.0001 1.0001 0 0 0 38.445312 13.167969 L 14.84375 28.902344 L 5.9277344 25.849609 C 5.9277344 25.849609 5.0423771 25.356927 5 25.013672 C 4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359 C 5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203 C 5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984 L 5.9941406 24.322266 L 6.0273438 24.308594 C 6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734 C 29.045787 14.44166 33.721617 12.440122 37.318359 10.902344 C 40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219 C 43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312 z M 33.613281 18.792969 L 21.244141 33.345703 L 21.238281 33.351562 A 1.0001 1.0001 0 0 0 21.183594 33.423828 A 1.0001 1.0001 0 0 0 21.128906 33.507812 A 1.0001 1.0001 0 0 0 20.998047 33.892578 A 1.0001 1.0001 0 0 0 20.998047 33.900391 L 19.386719 41.146484 C 19.35993 41.068197 19.341173 41.039555 19.3125 40.947266 L 19.3125 40.945312 C 18.800713 39.30085 16.467362 31.5161 16.144531 30.439453 L 33.613281 18.792969 z M 22.640625 35.730469 L 24.863281 37.398438 L 21.597656 40.425781 L 22.640625 35.730469 z"
                  />
                </svg>
              </a>
              <a href="https://github.com/genemators" key="github">
                <svg
                  className="h-36 w-36 animated-social"
                  fill="none"
                  viewBox="0 0 50 50"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"
                  />
                </svg>
              </a>
              <a href="https://steamcommunity.com/id/genemator" key="steam">
                <svg
                  className="h-36 w-36 animated-social"
                  fill="none"
                  viewBox="0 0 50 50"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M 12 3 C 7.04 3 3 7.04 3 12 L 3 25.380859 L 16.419922 32.089844 C 16.919922 32.319844 17.140156 32.919922 16.910156 33.419922 C 16.740156 33.789922 16.38 34 16 34 C 15.86 34 15.720078 33.970156 15.580078 33.910156 L 3 27.619141 L 3 38 C 3 42.96 7.04 47 12 47 L 38 47 C 42.96 47 47 42.96 47 38 L 47 12 C 47 7.04 42.96 3 38 3 L 12 3 z M 12 5 L 38 5 C 41.86 5 45 8.14 45 12 L 45 38 C 45 41.86 41.86 45 38 45 L 12 45 C 8.14 45 5 41.86 5 38 L 5 30.859375 L 9.0195312 32.869141 C 9.0095313 33.079141 9 33.29 9 33.5 C 9 37.64 12.36 41 16.5 41 C 20.64 41 24 37.64 24 33.5 C 24 32.65 23.860078 31.819297 23.580078 31.029297 L 28.330078 27.449219 C 29.340078 27.819219 30.4 28 31.5 28 C 36.74 28 41 23.74 41 18.5 C 41 13.26 36.74 9 31.5 9 C 26.26 9 22 13.26 22 18.5 C 22 19.62 22.190312 20.71 22.570312 21.75 L 19.119141 26.470703 C 18.289141 26.160703 17.4 26 16.5 26 C 14.76 26 13.160625 26.589844 11.890625 27.589844 L 5 24.150391 L 5 12 C 5 8.14 8.14 5 12 5 z M 31.5 11 C 35.64 11 39 14.36 39 18.5 C 39 22.64 35.64 26 31.5 26 C 30.47 26 29.490078 25.800391 28.580078 25.400391 C 28.250078 25.250391 27.870078 25.299766 27.580078 25.509766 L 21.759766 29.900391 C 21.379766 30.190391 21.260937 30.700859 21.460938 31.130859 C 21.820938 31.870859 22 32.67 22 33.5 C 22 36.53 19.53 39 16.5 39 C 13.6 39 11.199531 36.729141 11.019531 33.869141 L 14.689453 35.699219 L 14.720703 35.710938 L 14.740234 35.720703 C 15.140234 35.910703 15.56 36 16 36 C 17.17 36 18.240703 35.319766 18.720703 34.259766 C 19.410703 32.769766 18.769062 30.999063 17.289062 30.289062 L 13.960938 28.630859 C 14.720937 28.230859 15.58 28 16.5 28 C 17.38 28 18.22 28.199609 19 28.599609 C 19.44 28.829609 19.979531 28.700781 20.269531 28.300781 L 23.369141 24.060547 L 24.509766 22.480469 C 24.719766 22.200469 24.769141 21.820234 24.619141 21.490234 C 24.209141 20.550234 24 19.54 24 18.5 C 24 14.36 27.36 11 31.5 11 z M 31.5 13 C 28.474279 13 26 15.474279 26 18.5 C 26 21.525721 28.474279 24 31.5 24 C 34.525721 24 37 21.525721 37 18.5 C 37 15.474279 34.525721 13 31.5 13 z M 31.5 15 C 33.444841 15 35 16.555159 35 18.5 C 35 20.444841 33.444841 22 31.5 22 C 29.555159 22 28 20.444841 28 18.5 C 28 16.555159 29.555159 15 31.5 15 z"
                  />
                </svg>
              </a>
          </div>
        </div>
      </div>
      <Footer simple={true} />
    </>
  );
};

export default Socials;
