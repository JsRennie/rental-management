import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <h1 className="text-2xl text-blue-950 font-semibold">
          Will You Have A Roommate?
        </h1>
        <p className="text-base">
          You will have to provide roommate's Information
        </p>
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <div>
          <Link
            href={
              "/tenant/application/newapplication/roommate-details/roommate"
            }
          >
            <button className="border border-blue-950 text-blue-950 py-2 px-10 w-fit rounded uppercase">
              yes
            </button>
          </Link>
        </div>
        <div>
          <Link href={"/tenant/application/newapplication/documents"}>
            <button className="border border-blue-950 text-blue-950 py-2 px-10 w-fit rounded uppercase">
              No
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
