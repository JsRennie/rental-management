export default function Home() {
  return (
    <main>
      <div className="px-4">
        <div className="py-6 flex justify-between">
          <div className="">
            <h1 className="text-blue-950 font-semibold">My Applications</h1>
          </div>
          <div className="">
            <button className="bg-blue-950 p-2 uppercase text-white text-xs font-semibold rounded hover:cursor-pointer">
              + new application
            </button>
          </div>
        </div>
        {/* application details to be displayed here */}
        <div></div>
      </div>
    </main>
  );
}
