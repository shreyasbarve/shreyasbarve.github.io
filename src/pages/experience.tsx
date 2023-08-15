export default function Experience() {
  let bullet = String.fromCodePoint(8226);

  const data = [
    {
      title: "Persistent Systems Limited",
      category: "Software Engineer",
      experience:
        bullet +
        " I have a great deal of experience working on migration projects where I was instrumental in converting Process Builders to Flows, which produced streamlined and effective automated processes. This required examining current procedures, creating fresh work flows, and ensuring a smooth changeover. I was able to successfully increase the Salesforce Org's overall performance and scalability by utilizing the power of flows.\n" +
        bullet +
        " Thoroughly tested each component of the project, including automations, validation rules, page layouts, and data integrity. This made it possible for me to spot problems right away and fix them.\n" +
        bullet +
        " I got familiar with crucial tools like Dataloader.io and Gearset to make data management and deployment duties easier. These tools assisted with maintaining data integrity throughout the orgs and facilitating seamless data migration between them.\n" +
        bullet +
        " Worked on developing triggers, batch classes, and schedulable classes when it came to coding and development. Additionally, additional test classes had to be created in order to accommodate the functionality that I developed.\n" +
        bullet +
        " Key player in handling the client's website's Register functionality. This required managing errors, translating languages for various areas, and leveraging Custom Metadata to provide a simple and user-friendly experience.\n",
      duration: "June 2022 - Present",
    },
    {
      title: "Persistent Systems Limited",
      category: "Academic Intern",
      experience:
        bullet +
        " Took training on GIT, Java, HTML, CSS, JavaScript and Salesforce.",
      duration: "Dec 2021 - May 2022",
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
    {
      title: "Yugen Education Foundation",
      category: "Content Editor and Management",
      experience: "",
      duration: "September 2019 - December 2019",
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
