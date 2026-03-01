import ImageComponent from "@/components/ImageComponent";
import {
  CSS_ICON,
  GIT_ICON,
  HTML_ICON,
  JAVA_ICON,
  JAVASCRIPT_ICON,
  MATERIAL_UI_ICON,
  MONGODB_ICON,
  PYTHON_ICON,
  REACT_ICON,
  REACT_NATIVE_ICON,
  SALESFORCE_ICON,
  SASS_ICON,
  SQL_ICON,
} from "@/constants/icons";

export default function Skills() {
  const data = [
    {
      name: "Git",
      icon: <ImageComponent src={GIT_ICON} alt="Git icon" />,
    },
    {
      name: "Salesforce",
      icon: <ImageComponent src={SALESFORCE_ICON} alt="Salesforce icon" />,
    },
    {
      name: "Python",
      icon: <ImageComponent src={PYTHON_ICON} alt="Python icon" />,
    },
    {
      name: "Java",
      icon: <ImageComponent src={JAVA_ICON} alt="Java icon" />,
    },
    {
      name: "SQL",
      icon: <ImageComponent src={SQL_ICON} alt="SQL icon" />,
    },
    {
      name: "HTML",
      icon: <ImageComponent src={HTML_ICON} alt="Html icon" />,
    },
    {
      name: "CSS",
      icon: <ImageComponent src={CSS_ICON} alt="CSS3 icon" />,
    },
    {
      name: "Javascript",
      icon: <ImageComponent src={JAVASCRIPT_ICON} alt="JavaScript icon" />,
    },
    {
      name: "MongoDB",
      icon: <ImageComponent src={MONGODB_ICON} alt="MongoDB icon" />,
    },
    {
      name: "React",
      icon: <ImageComponent src={REACT_ICON} alt="React icon" />,
    },
    {
      name: "React Native",
      icon: <ImageComponent src={REACT_NATIVE_ICON} alt="React Native icon" />,
    },
    {
      name: "SASS",
      icon: <ImageComponent src={SASS_ICON} alt="SASS icon" />,
    },
    {
      name: "Material UI",
      icon: <ImageComponent src={MATERIAL_UI_ICON} alt="Material Ui icon" />,
    },
    {
      name: "Tailwind",
      icon: (
        <svg className="w-14 h-12">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
            fill="#06B6D4"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="skills"
      className="mt-24 flex flex-col justify-evenly text-center"
    >
      <div className="section-title">Skills</div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
}
