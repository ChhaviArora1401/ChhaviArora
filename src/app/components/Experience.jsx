const Experience = () => {
  return (
    <section className="exp p-10 px-20 bg-white dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-12">Experience</h1>

      {/* Experience Item */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 mb-16">
        
        {/* LEFT — TIME */}
        <div className="text-zinc-600 dark:text-zinc-400 font-medium">
          September 2022 – October 2024
        </div>

        {/* RIGHT — DETAILS */}
        <div>
          <h3 className="text-xl font-semibold">
            Front End Developer ·{" "}
            <span className="text-blue-500 font-bold">EasyInsights</span>
          </h3>

          <ul className="list-[square] pl-5 mt-4 space-y-3 text-zinc-800 dark:text-zinc-200">
            <li>
              Developed and maintained multiple screens for a SaaS analytics platform, including marketing Data Source screens with search, edit, filters, and account authorization flows.
            </li>
            <li>
              Contributed to workspace and team management by developing multi-team views, duplication flows, data blending, alerts, and metrics across workspaces.
            </li>
            <li>
              Built a dynamic homepage dashboard with key widgets and role-based navigation tailored to user teams and workspaces.
            </li>
            <li>
              Implemented smooth UX enhancements including loading states, custom date ranges, search features, pagination, and sortable dynamic tables.
            </li>
          </ul>
        </div>
      </div>

      {/* Second Experience */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10">
        
        {/* LEFT — TIME */}
        <div className="text-zinc-600 dark:text-zinc-400 font-medium">
          June 2022 – August 2022
        </div>

        {/* RIGHT — DETAILS */}
        <div>
          <h3 className="text-xl font-semibold">
            Front End Developer Intern ·{" "}
            <span className="text-blue-500 font-bold">EasyInsights</span>
          </h3>

          <ul className="list-[square] pl-5 mt-4 space-y-3 text-zinc-800 dark:text-zinc-200">
            <li>
              Worked on EasyInsights.ai website pages and improved mobile responsiveness for smaller screens.
            </li>
            <li>
              Gained hands-on experience with class-based React components and contributed to maintaining legacy sections of the platform.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
