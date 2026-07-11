import ImageComponent from "@/components/ImageComponent";
import { PROJECT_ICON } from "@/constants/icons";

export default function Projects() {
  let bullet = String.fromCodePoint(8226);

  const data = [
    {
      title: "E-Commerce Full Stack Web Application",
      description:
        `${bullet}  Architected a full-stack e-commerce platform with a Spring Boot REST API backend and React frontend, covering product catalog, category management, shopping cart, and order processing.` +
        `\n${bullet} Designed relational data models using Spring Data JPA/Hibernate with complex entity relationships across products, categories, orders, and users, supporting both PostgreSQL and MySQL; implemented backend validation, pagination, and sorting for scalable data handling.` +
        `\n${bullet} Engineered a custom authentication and authorization system using Spring Security and JWT, implementing role-based access control (RBAC) for customers, sellers, and admins; documented all REST APIs using Swagger/OpenAPI.` +
        `\n${bullet} Built an interactive map interface allowing users to discover nearby parking locations and view real-time parking availability.` +
        `\n${bullet} Built a responsive frontend using React Hooks and custom hooks, with global state management via Redux and routing through React Router, styled with Tailwind CSS.` +
        `\n${bullet} Reduced manual intervention by eliminating the need for parking attendants through automated vehicle identification and billing.`,
      site: "#",
    },
    {
      title: "Smart Parking Management System",
      description:
        `${bullet} Developed a cross-platform smart parking application using React Native that automates parking lot entry, parking allocation, and digital payment workflows` +
        `\n${bullet} Integrated a YOLOv4-based Automatic Number Plate Recognition (ANPR) pipeline to detect and identify vehicle license plates from live camera feeds at parking entrances.` +
        `\n${bullet} Designed a system that maps recognized vehicle numbers to registered user accounts, enabling contactless entry and automated parking fee calculation.` +
        `\n${bullet} Built an interactive map interface allowing users to discover nearby parking locations and view real-time parking availability.` +
        `\n${bullet} Optimized the computer vision pipeline for improved detection accuracy under varying lighting and viewing conditions.` +
        `\n${bullet} Reduced manual intervention by eliminating the need for parking attendants through automated vehicle identification and billing.`,
      site: "#",
    },
    {
      title: "AI-Based Disease Prediction Platform",
      description:
        `\n${bullet} Developed the React frontend for an AI-powered disease prediction platform, enabling users to assess the risk of Diabetes and Pneumonia through image uploads and clinical data input.` +
        `\n${bullet} Integrated REST APIs and Firebase Realtime Database to manage patient records, deliver real-time prediction results, and securely store historical diagnostic reports.` +
        `\n${bullet} Built features for CT scan image upload, health parameter submission, and a personalized dashboard that allowed users to view and track previous prediction reports.` +
        `\n${bullet} Designed a responsive, user-friendly interface that simplified access to AI-assisted healthcare insights while ensuring a seamless end-to-end user experience.`,
      site: "https://diseasepredictor.netlify.app/",
    },
    {
      title: "SHINE In Exams",
      description:
        `${bullet} Developed SHINE (Students Helpline in Exams), a React Native mobile application for the National Informatics Centre (NIC), providing a centralized support platform for students appearing for board examinations during the COVID-19 pandemic.` +
        `\n${bullet} Owned the project lifecycle from requirements gathering to final delivery, building the Android frontend in React Native with a responsive, intuitive UI for seamless navigation and accessibility.` +
        `\n${bullet} Implemented features including a student query management system, FAQs, examination centre information, exam timetables, official notifications, and government website integration, enabling Education Department officials to efficiently address student queries through a single platform.`,
      site: "https://play.google.com/store/apps/details?id=in.nic.mah.shine",
    },
    {
      title: "Learnzilla – Cross-Platform Learning Management System",
      description:
        `${bullet} Built a full-stack cross-platform Learning Management System (LMS) using React, React Native, Django, and Django REST Framework, providing an affordable digital classroom solution for tuition centers and small schools.` +
        `\n${bullet} Implemented core academic modules including attendance tracking, assignment management, examinations, grading, study material sharing, and performance reporting, streamlining teacher–student collaboration.` +
        `\n${bullet} Designed responsive web and mobile applications with role-based access, enabling teachers to efficiently manage classes while providing students with centralized access to learning resources.` +
        `\n${bullet} Deployed the solution on Netlify and Heroku, delivering a scalable and accessible platform that eliminated the need for fragmented communication through messaging apps.`,
      site: "https://learnzillaedu.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="mt-24 flex flex-col justify-evenly">
      <div className="section-title self-center">Projects</div>

      <div className="flex flex-col space-y-10 self-center">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row space-x-8 items-center">
              <ImageComponent src={PROJECT_ICON} alt="Project icon" />
              <div className="space-y-1">
                <div className="text-xl font-semibold text-blue-700">
                  <a href={item.site} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </div>
                <div className="text-md text-gray-500 whitespace-pre-wrap">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
