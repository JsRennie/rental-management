import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center mb-4">
        <h1 className="text-blue-950 text-2xl font-semibold">
          Your Roommate Information
        </h1>
        <p className="text-base">
          Please fill in your roomamte details to continue
        </p>
      </div>
      <div className="flex justify-center">
        <form action="" className="w-1/2 md:w-1/4">
          <div className="relative mb-4">
            <input
              type="text"
              id="firstname"
              className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="first_name"
              className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              First Name
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              id="firstname"
              className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="middle_name"
              className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Middle Initial
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              id="lastname"
              className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="last_name"
              className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Last Name
            </label>
          </div>
          <div className="mb-4">
            <select
              id="gender"
              required
              className="bg-gray-50 border border-gray-300 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option className="text-xs" selected>
                Select your roommate gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="relative mb-4">
            <input
              type="tel"
              id="contact"
              className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="phone_number"
              className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Phone Number
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Email Address
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              id="university"
              className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="university"
              className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              College/University
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              id="reg"
              className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="reg"
              className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Registration Number
            </label>
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <div>
              <Link href={"/tenant/application/newapplication/lease-details"}>
                <button className="text-blue-950 py-2 px-10 w-fit rounded uppercase">
                  Back
                </button>
              </Link>
            </div>
            <div>
              <Link href={"/tenant/application/newapplication/documents"}>
                <button
                  type="submit"
                  className="bg-blue-950 text-white py-2 px-10 w-fit rounded uppercase"
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
