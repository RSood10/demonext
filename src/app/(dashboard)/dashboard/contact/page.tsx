export default function About() {
  return (
    <div>
      <h1 className="p-4 font-bold">Contact</h1>

      <div className=" p-4">
        <form action="" className=" flex flex-col gap-4 w-3/6 mx-auto">
          <input
            type="text"
            placeholder="Email"
            className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={8}
            className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>

          <input
            type="submit"
            value="sumbit"
            className=" bg-green-600 w-3/12 mx-auto p-2 rounded"
          />
        </form>
      </div>
    </div>
  );
}
