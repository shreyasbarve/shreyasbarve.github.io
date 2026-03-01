import ImageComponent from "@/components/ImageComponent";
import { EXPERIENCE_ICON } from "@/constants/icons";

export default function Experience() {
  let bullet = String.fromCodePoint(8226);

  const data = [
    {
      title: "Persistent Systems Limited",
      category: "Lead Software Engineer",
      experience:
        bullet +
        " Developed and deployed AI-powered Sales Prompt Templates using Agentforce, enabling Sales Experts to efficiently handle customer queries and automate follow-up emails — improving response time and customer engagement.\n" +
        bullet +
        " Optimized Sales Cloud Flows for enhanced performance, modularity, and reusability; time and improved maintainability of automation components.\n" +
        bullet +
        " Utilized Splunk for proactive debugging and error analysis and Copado Robotic Testing for continuous testing and release quality assurance.",
      duration: "Oct 2025 - Present",
    },
    {
      title: "Persistent Systems Limited",
      category: "Senior Software Engineer",
      experience:
        bullet +
        " Delivered scalable solutions in Experience Cloud and Service Cloud, managing object models, settings and component-level access to strengthen data security and compliance.\n" +
        bullet +
        " Designed and implemented a dynamic LWC Dashboard displaying real-time Sales KPIs, improving regional sales team productivity by 30% through data visibility and reduced manual reporting\n" +
        bullet +
        " Enhanced and refactored Aura components for better performance and user experience in customer-facing portals. Built and optimized Apex batch, schedulable, and trigger-based processes, reducing data processing time and improving platform reliability\n" +
        bullet +
        " Mentored junior developers and reviewed Apex/LWC code to ensure adherence to Salesforce best practices.\n" +
        bullet +
        " Received the Top Talent FY2025 award.",
      duration: "Jun 2024 - Oct 2025",
    },
    {
      title: "Persistent Systems Limited",
      category: "Software Engineer",
      experience:
        bullet +
        " Led the migration from Process Builders and Workflow Rules to Flows, modernizing legacy automation and aligning with Salesforce’s latest architectural standards\n" +
        bullet +
        " Improved the client website’s registration flow for multilingual regions, implementing Custom Metadata Types for language localization and error handling\n" +
        bullet +
        " Contributed to the adoption of Salesforce DevOps practices, ensuring better change tracking and automated validation.\n",
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
              <ImageComponent src={EXPERIENCE_ICON} alt="Experience icon" />
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
