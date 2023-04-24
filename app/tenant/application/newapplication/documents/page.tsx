import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <h1 className="text-2xl text-blue-950 font-semibold">
          Upload Your Documents
        </h1>
        <p className="text-sm md:text-base">
          We need to verify your identify. Read our
          <span>
            <Link href={"#"} className="underline">
              Privacy policy
            </Link>
            <span> &</span>
            <span>
              <Link href={"#"} className="underline">
                term of use
              </Link>
            </span>
          </span>
        </p>
        <p className="text-xs md:text-sm my-4">
          Upload your National and School ID
        </p>
      </div>
      <div className="flex justify-center items-center mx-auto w-1/2">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <div>
          <Link href={"/tenant/application/newapplication/roommate-details"}>
            <button className="text-blue-950 py-2 px-10 w-fit rounded uppercase">
              Back
            </button>
          </Link>
        </div>
        <div>
          <Link href={"/tenant/application/newapplication/guardian-details"}>
            <button
              type="submit"
              className="bg-blue-950 text-white py-2 px-10 w-fit rounded uppercase"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
