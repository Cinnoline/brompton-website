import React from "react";
import Login from "../component/Login&Register/Login";
import Register from "../component/Login&Register/Register";

function logInPage() {
  return (
    <>
      <div className="bg-cyan-500 py-4 text-slate-50 text-[2rem] font-sans font-bold text-center">
        WELCOME TO BROMPTON
      </div>
      <div className="grid md:grid-cols-2 bg-slate-100">
        <div className="border-b-2 md:border-b-0 md:border-r-2 p-16">
          <Login />
        </div>
        <div className="p-16">
          <Register />
        </div>
      </div>
      <div className="bg-slate-100 py-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="147"
          height="36"
          viewBox="0 0 107.78 26.21"
          className="mx-auto"
        >
          <g fill="#201600">
            <path d="M52.514 2.603l3.644-1.042v-.002a.53.53 0 0 0 .342-.496.534.534 0 0 0-.533-.533h-5.55a.824.824 0 0 0-.304 1.591l1.145.466s.257.119.612.119a2.42 2.42 0 0 0 .644-.103M69.083 5.965c.002.002 1.243 4.464 1.704 6.118l1.004.096-1.802-6.463a3.527 3.527 0 0 1-.077-1.346l.351-2.306a1.261 1.261 0 0 1-.924-.177l-.359 2.346a4.469 4.469 0 0 0 .103 1.732M69.468 1.459a.831.831 0 0 0 .866.143.832.832 0 0 0 .513-.77.832.832 0 1 0-1.667 0 .831.831 0 0 0 .288.627M56.021 13.673L52.885 2.936l-.255.073h-.002c-.077.024-.411.12-.758.12-.038 0-.074-.002-.109-.003l3.201 10.958 1.059-.411zM57.489 25.348a.482.482 0 0 1-.557.391.483.483 0 0 1-.192-.869.485.485 0 0 1 .67.118.474.474 0 0 1 .079.36m-.309-1.018a.948.948 0 1 0 .612.39.938.938 0 0 0-.612-.39M60.748 14.552l.001-.001h.002l-.003.001m-.59-1.787l-.021.006-.021.01-4.965 1.914.534 1.81 5.074-1.956.005-.001.005-.002c1.377-.451 2.876-.592 4.586-.429l6.733.648v.002l.925.084-.603-1.951-.131-.008-6.746-.649c-1.984-.188-3.741-.018-5.375.522M55.381 19.334c0-.966.786-1.752 1.753-1.752.964 0 1.752.785 1.752 1.752s-.787 1.753-1.752 1.753a1.754 1.754 0 0 1-1.753-1.753m4.258 0a2.507 2.507 0 0 0-2.505-2.504 2.507 2.507 0 0 0-2.506 2.504 2.51 2.51 0 0 0 2.506 2.506 2.51 2.51 0 0 0 2.505-2.506" />
            <path d="M59.19 17.483c.262.29.464.632.585 1.014a4.353 4.353 0 0 1 3.816-2.261 4.359 4.359 0 0 1 4.136 3.007c.116-.479.291-.935.52-1.36a5.394 5.394 0 0 0-4.656-2.683 5.385 5.385 0 0 0-4.401 2.283M63.59 24.942a4.36 4.36 0 0 1-4.323-3.844 2.74 2.74 0 0 1-.924.724 5.4 5.4 0 0 0 5.247 4.154 5.392 5.392 0 0 0 4.656-2.681 5.708 5.708 0 0 1-.52-1.361 4.356 4.356 0 0 1-4.136 3.008M73.31 24.942a4.357 4.357 0 0 1-4.352-4.353 4.356 4.356 0 0 1 4.352-4.353c2.4 0 4.354 1.952 4.354 4.353a4.36 4.36 0 0 1-4.354 4.353m0-9.742a5.394 5.394 0 0 0-5.388 5.389 5.394 5.394 0 0 0 5.388 5.388 5.396 5.396 0 0 0 5.389-5.388A5.396 5.396 0 0 0 73.31 15.2" />
            <g>
              <path d="M93.533 12.57l.252-.073 3.393-.97-.001-.002a.532.532 0 0 0-.193-1.029h-5.549a.827.827 0 0 0-.821.888.829.829 0 0 0 .519.703l1.145.466s.148.068.377.101c.07.01.15.017.233.017.318.002.645-.101.645-.101M94.113 20.695a1.746 1.746 0 0 1-.655-1.365c0-.891.67-1.628 1.533-1.736.164-.263.349-.512.556-.743a2.551 2.551 0 0 0-.338-.026 2.508 2.508 0 0 0-2.505 2.505c0 1.022.614 1.9 1.492 2.291a6.13 6.13 0 0 1-.083-.926M93.65 12.974c-.071.022-.41.121-.76.121-.036 0-.07-.002-.106-.004l.287.977 1.056-.408-.221-.757-.253.072c.001-.001.006-.001.008-.003l-.011.002" />
              <path d="M105.24 20.639a5.372 5.372 0 0 0-1.604-3.83l-.492.992a4.334 4.334 0 0 1 1.06 2.838 4.356 4.356 0 0 1-4.353 4.353 4.358 4.358 0 0 1-4.353-4.353 4.358 4.358 0 0 1 4.353-4.352c.671 0 1.307.157 1.878.43l.462-.931a5.346 5.346 0 0 0-2.34-.535 5.393 5.393 0 0 0-5.388 5.388 5.396 5.396 0 0 0 5.388 5.389 5.396 5.396 0 0 0 5.389-5.389M104.9 14.267l1.379.147.863-1.709.046-.09-1.395-.147z" />
              <path d="M104.213 15.648l-.415.839c.064.062.132.119.194.184a4.253 4.253 0 0 1 2.746 3.971 4.254 4.254 0 0 1-2.755 3.974 5.715 5.715 0 0 1-1.871 1.295c.124.01.249.016.375.016a5.293 5.293 0 0 0 5.287-5.285 5.293 5.293 0 0 0-3.561-4.994M106.104 11.048l-4.533 9.128-.94-.467 4.533-9.128zM95.312 25.349a.48.48 0 1 1-.946-.168.482.482 0 0 1 .555-.391.484.484 0 0 1 .391.559m-.308-1.018a.94.94 0 0 0-.709.157.941.941 0 0 0-.391.611.95.95 0 0 0 1.869.33.948.948 0 0 0-.769-1.098M98.847 14.539l-.012.005-.011.004.023-.009zm-5.118 1.925l.018.044 5.098-1.967.013-.005.013-.004-.026.009c1.315-.429 2.519-.565 4.192-.457l.898-1.811-.315-.033c-2.165-.18-3.719-.028-5.383.521l-.024.008-.021.008-4.983 1.92.52 1.767z" />
            </g>
            <g>
              <path d="M7.863 2.604l1.145.467s.148.067.375.1c.072.012.152.018.237.018.316 0 .64-.104.64-.104l.253-.073 3.392-.969v-.001a.532.532 0 0 0-.189-1.029h-5.55a.825.825 0 0 0-.825.825l.003.064c.023.32.232.588.519.702M27.217 1.942a.823.823 0 0 0 .864.143.834.834 0 1 0-.864-.143M32.295 25.177a4.36 4.36 0 0 1-4.355-4.353 4.358 4.358 0 0 1 4.355-4.353c2.4 0 4.351 1.952 4.351 4.353a4.358 4.358 0 0 1-4.351 4.353m0-9.742a5.394 5.394 0 0 0-5.389 5.389 5.394 5.394 0 0 0 5.389 5.388 5.393 5.393 0 0 0 5.387-5.388 5.395 5.395 0 0 0-5.387-5.389M5.389 25.177a4.36 4.36 0 0 1-4.354-4.353 4.358 4.358 0 0 1 4.354-4.353c2.4 0 4.353 1.952 4.353 4.353a4.358 4.358 0 0 1-4.353 4.353m0-9.742A5.395 5.395 0 0 0 0 20.824a5.394 5.394 0 0 0 5.389 5.388 5.394 5.394 0 0 0 5.388-5.388 5.395 5.395 0 0 0-5.388-5.389M14.881 21.57a1.753 1.753 0 1 1 .001-3.503 1.753 1.753 0 0 1-.001 3.503m0-4.257a2.506 2.506 0 0 0 0 5.01 2.505 2.505 0 1 0 0-5.01M9.62 3.612c-.038 0-.073-.002-.108-.003l3.201 10.959 1.056-.41-3.137-10.739-.246.071c-.058.017-.406.122-.766.122M28.535 12.566l1.003.096-1.799-6.463a3.468 3.468 0 0 1-.078-1.346l.351-2.306a1.233 1.233 0 0 1-.925-.177l-.358 2.346a4.447 4.447 0 0 0 .103 1.731c-.001.003 1.241 4.465 1.703 6.119M30.158 13.381l-6.875-.658c-1.985-.187-3.742-.015-5.376.523l-.022.007-.021.01-4.971 1.915.539 1.81 5.082-1.959c1.376-.452 2.877-.593 4.59-.431l7.659.734-.605-1.951zM10.724 16.102a.481.481 0 1 1 0-.962.481.481 0 0 1 0 .962m0-1.43a.952.952 0 0 0-.948.949.95.95 0 0 0 .948.948.95.95 0 0 0 0-1.897" />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}

export default logInPage;
