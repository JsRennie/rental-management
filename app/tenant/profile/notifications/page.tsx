export default function Home() {
  return (
    <div>
      <h2 className="text-blue-950 text-sm text-left mb-4">
        Please select your notification preferences.
      </h2>
      <div>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm text-blue-950 font-medium">
            Receive our special offer and monthly newsletter
          </span>
        </label>
      </div>
      <div>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm text-blue-950 font-medium">
            Get notifications you may have missed
          </span>
        </label>
      </div>
      <div>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm text-blue-950 font-medium">
            Subscribe to our monthly invoice mails
          </span>
        </label>
      </div>
      <div>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm text-blue-950 font-medium">
            Product Emails
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Save
      </button>
    </div>
  );
}
