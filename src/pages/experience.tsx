import ImageComponent from "@/components/ImageComponent";
import { EXPERIENCE_ICON } from "@/constants/icons";

export default function Experience() {
  let firstBullet = String.fromCodePoint(8226) + " ";
  let bullet = "\n" + String.fromCodePoint(8226) + " ";

  const data = [
    {
      title: "Persistent Systems Limited",
      category: "Lead Software Engineer",
      experience:
        firstBullet +
        "Designed and deployed AI-powered Agentforce solutions leveraging Salesforce Prompt Builder and Generative AI capabilities, enabling 100+ sales users to automate customer interactions and follow-up workflows while improving response efficiency." +
        bullet +
        "Optimized Salesforce automation and backend business processes through reusable Flow components and Apex-based enhancements, reducing execution time by 35% and improving scalability." +
        bullet +
        "Utilized Splunk for application monitoring, production issue troubleshooting, and root cause analysis while supporting CI/CD-driven deployments using Copado.",
      duration: "Oct 2025 - Present",
    },
    {
      title: "Persistent Systems Limited",
      category: "Senior Software Engineer",
      experience:
        firstBullet +
        "Designed and developed scalable Salesforce applications across Experience Cloud and Service Cloud using Apex, Lightning Web Components, and platform automation while enforcing security and access-control best practices." +
        bullet +
        "Developed a real-time Lightning Web Components (LWC) dashboard integrating multiple Salesforce data sources, improving operational visibility and reducing manual reporting efforts by 30%." +
        bullet +
        "Enhanced Aura Components and optimized asynchronous Apex processes including Batch Apex, Scheduled Apex, and Triggers, reducing processing time by 40% and improving system reliability." +
        bullet +
        "Conducted Apex and LWC code reviews, contributed to technical design discussions, and mentored junior developers on Salesforce development best practices; recognized with the Top Talent FY2025 award for high-impact contributions and consistent delivery excellence",
      duration: "Jun 2024 - Oct 2025",
    },
    {
      title: "Persistent Systems Limited",
      category: "Software Engineer",
      experience:
        firstBullet +
        "Led migration of 20+ legacy Process Builders and Workflow Rules to Salesforce Flow, reducing technical debt and aligning platform automation with modern Salesforce architecture." +
        bullet +
        "Enhanced a multilingual customer registration application using Lightning components and Custom Metadata Types for dynamic localization and error handling." +
        bullet +
        "Contributed to Salesforce DevOps adoption by implementing automated validation processes, deployment controls, and CI/CD practices that improved release reliability.",
      duration: "Jun 2022 - Jun 2024",
    },
    {
      title: "National Informatics Centre, MeitY",
      category: "Student Developer",
      experience:
        firstBullet +
        "Development of a live project titled Students Helpline in Exams (SHINE) (500+ downloads) which is a mobile based app for NIC." +
        bullet +
        "Involved in the project right from conception to delivery of the final product." +
        bullet +
        "Worked on creating the Frontend part of the Android application using React Native framework.",
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
