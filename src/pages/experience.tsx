export default function Experience() {
  let bullet = String.fromCodePoint(8226);

  const data = [
    {
      title: "Persistent Systems Limited",
      category: "Senior Software Engineer",
      experience:
        bullet +
        " Built and maintained robust Apex components (Triggers, Batch, Schedulable, Test Classes), Process Builders, Workflow Rules, and Flows, enhancing system reliability by 30% and reducing processing times.\n" +
        bullet +
        " Designed and implemented a dynamic LWC Dashboard, integrated with Apex Controllers, improving data access and reducing data retrieval efforts for regional sales teams by over 50%.\n" +
        bullet +
        "Worked on complex Experience and Service Cloud projects, configuring Object Models, Sharing Settings, and Org-Wide Addresses for secure, streamlined data flow.\n" +
        bullet +
        " Customized user experience with responsive Page Layouts, Lightning Record Pages, AURA, and LWC components, increasing efficiency by up to 40% across teams.",
      duration: "June 2024 - Present",
    },
    {
      title: "Persistent Systems Limited",
      category: "Software Engineer",
      experience:
        bullet +
        " Spearheaded the conversion of Process Builders to Flows, creating more efficient automated processes by examining existing procedures, designing new workflows, and ensuring a seamless transition. Utilised tools like Dataloader.io and Gearset to optimize data management and deployment, improving workflow efficiency by 30%.\n" +
        bullet +
        " Developed and maintained critical Apex components, including Triggers, Batch, and Schedulable classes with comprehensive Test classes, which reduced processing times and improved overall code reliability.\n" +
        bullet +
        " Played a key role in managing the client’s website registration functionality, optimising error handling, enabling language translations for multiple regions, and leveraging Custom Metadata for a streamlined, user-friendly experience.\n",
      duration: "Dec 2021 - Jun 2024",
    },
    {
      title: "National Informatics Centre, MeitY",
      category: "Student Developer",
      experience:
        bullet +
        " Development of a live project titled Students Helpline in Exams (SHINE) (500+ downloads) which is a mobile based app for NIC.\n" +
        bullet +
        " Involved in the project right from conception to delivery of the final product.\n" +
        bullet +
        " Worked on creating the Frontend part of the Android application using React Native framework.",
      duration: "Jan 2021 - Mar 2021",
    },
  ];

  return (
    <section id="experience" className="flex flex-col justify-evenly">
      <div className="section-title self-center">Experience</div>

      <div className="flex flex-col space-y-10">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row space-x-8 items-start">
              <img
                alt="Experience Skill icon"
                src="https://img.icons8.com/external-smashingstocks-isometric-smashing-stocks/2x/external-Color-Balance-photography-and-graphic-design-smashingstocks-isometric-smashing-stocks.png"
                style={{ height: 48, width: 48 }}
              />
              <div className="space-y-1 w-full">
                <div className="flex flex-row justify-between">
                  <span className="text-xl font-semibold text-blue-700">
                    {item.title}
                  </span>
                  <span className="text-gray-400">{item.duration}</span>
                </div>
                <div className="text-lg text-gray-400">{item.category}</div>
                <div className="text-lg text-gray-500 whitespace-pre-line">
                  {item.experience}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
