export default function Experience() {
  const data = [
    {
      title: "Persistent Systems Limited",
      category: "Software Engineer",
      duration: "June 2022 - Present",
    },
    {
      title: "Persistent Systems Limited",
      category: "Academic Intern",
      duration: "Dec 2021 - May 2022",
    },
    {
      title: "National Informatics Centre, MeitY",
      category: "Student Developer",
      duration: "Jan 2021 - Mar 2021",
    },
    {
      title: "Yugen Education Foundation",
      category: "Content Editor and Management",
      duration: "September 2019 - December 2019",
    },
  ];

  return (
    <section id="experience" className="flex flex-col justify-evenly">
      <div className="section-title self-center">Experience</div>

      <div className="flex flex-col space-y-10 self-center">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row space-x-8 items-center">
              <img
                alt="Experience Skill icon"
                // src="https://img.icons8.com/dusk/2x/experience-skill.png"
                src="https://img.icons8.com/external-smashingstocks-isometric-smashing-stocks/2x/external-Color-Balance-photography-and-graphic-design-smashingstocks-isometric-smashing-stocks.png"
                style={{ height: 48, width: 48 }}
              />
              <div className="space-y-1">
                <div className="text-xl font-semibold text-blue-700">
                  {item.title}
                </div>
                <div className="text-lg text-gray-500">{item.category}</div>
                <div className="text-gray-400">{item.duration}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
