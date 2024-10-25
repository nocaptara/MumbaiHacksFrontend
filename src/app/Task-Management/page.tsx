import Link from "next/link";

const tasks = [
  {
    title: "Prepare Q4 Presentation",
    deadline: "2024-11-15",
    priority: "High",
    status: "In Progress",
  },
  {
    title: "Update Team Handbook",
    deadline: "2024-10-30",
    priority: "Medium",
    status: "Pending",
  },
  {
    title: "Review Budget Proposal",
    deadline: "2024-10-27",
    priority: "Low",
    status: "Completed",
  },
];

const Index = () => {
  return (
    <section
      id="dashboard"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[1000px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                Team Dashboard
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                An all-in-one solution for meetings, tasks, and collaboration insights.
              </p>

              {/* Card Layout */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {/* Overview Card */}
                <div className="bg-gray-100 p-6 rounded-md shadow-lg dark:bg-gray-800">
                  <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    Overview
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Summary of recent meetings, tasks, and team performance.
                  </p>
                </div>

                {/* Meeting Transcript Card */}
                <div className="bg-gray-100 p-6 rounded-md shadow-lg dark:bg-gray-800">
                  <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    Meeting Transcripts
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    View transcripts and highlighted action items. Use filters or search for easy navigation.
                  </p>
                  <Link
                    href="/upload-audio"
                    className="mt-4 inline-block rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Upload Audio
                  </Link>
                </div>

                {/* Task Management Card */}
                <div className="bg-gray-100 p-6 rounded-md shadow-lg dark:bg-gray-800">
                  <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    Task Management
                  </h2>
                  <ul className="space-y-4">
                    {tasks.map((task, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-2"
                      >
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                            {task.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Deadline: {task.deadline} | Priority: {task.priority}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 text-sm font-semibold rounded ${
                            task.status === "Completed"
                              ? "bg-green-200 text-green-700"
                              : task.status === "In Progress"
                              ? "bg-yellow-200 text-yellow-700"
                              : "bg-red-200 text-red-700"
                          }`}
                        >
                          {task.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Team Collaboration Card */}
                <div className="bg-gray-100 p-6 rounded-md shadow-lg dark:bg-gray-800">
                  <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    Team Collaboration
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    View team members’ progress and comments on tasks.
                  </p>
                </div>
              </div>

              {/* Footer Links */}
              <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="https://github.com/your-github-link"
                  className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  GitHub Repository
                </Link>
                <Link
                  href="/documentation"
                  className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
