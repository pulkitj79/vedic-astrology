export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-4xl font-bold">
          Vedic Astrology
        </h1>

        <p className="mb-8 text-center text-gray-600">
          Generate Janma Kundli from Date, Time and Place of Birth
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter full name"
              className="w-full rounded-md border border-gray-300 p-3"
            />
          </div>

          <div>
            <label
              htmlFor="dob"
              className="mb-2 block text-sm font-medium"
            >
              Date of Birth
            </label>

            <input
              id="dob"
              type="date"
              className="w-full rounded-md border border-gray-300 p-3"
            />
          </div>

          <div>
            <label
              htmlFor="tob"
              className="mb-2 block text-sm font-medium"
            >
              Time of Birth
            </label>

            <input
              id="tob"
              type="time"
              className="w-full rounded-md border border-gray-300 p-3"
            />
          </div>

          <div>
            <label
              htmlFor="place"
              className="mb-2 block text-sm font-medium"
            >
              Place of Birth
            </label>

            <input
              id="place"
              type="text"
              placeholder="Delhi, India"
              className="w-full rounded-md border border-gray-300 p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-700"
          >
            Generate Kundli
          </button>
        </form>
      </div>
    </main>
  );
}