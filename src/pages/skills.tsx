export default function Skills() {
  const imgStyle = {
    height: 48,
    width: 48,
  };

  const data = [
    {
      name: "Git",
      icon: (
        <img
          alt="Git icon"
          src="https://img.icons8.com/color/2x/git.png"
          style={imgStyle}
        />
      ),
    },
    {
      name: "Salesforce",
      icon: (
        <img
          alt="Salesforce icon"
          src="https://img.icons8.com/color/2x/salesforce.png"
          style={imgStyle}
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <img
          alt="Python icon"
          src="https://img.icons8.com/color/2x/python.png"
          style={imgStyle}
        />
      ),
    },
    {
      name: "Java",
      icon: (
        <img
          src="https://img.icons8.com/color/2x/java-coffee-cup-logo.png"
          alt="Java icon"
          style={imgStyle}
        />
      ),
    },
    {
      name: "SQL",
      icon: (
        <img
          alt="Oracle PL SQL icon"
          src="https://img.icons8.com/plasticine/2x/oracle-pl-sql--v3.png"
          style={imgStyle}
        />
      ),
    },
    {
      name: "HTML",
      icon: (
        <img
          src="https://img.icons8.com/color/2x/html-5.png"
          alt="Html 5 icon"
          style={imgStyle}
        />
      ),
    },
    {
      name: "CSS",
      icon: (
        <img
          src="https://img.icons8.com/color/2x/css3.png"
          alt="CSS3 icon"
          style={imgStyle}
        />
      ),
    },
    {
      name: "Javascript",
      icon: (
        <img
          src="https://img.icons8.com/color/2x/javascript.png"
          alt="JavaScript icon"
          style={imgStyle}
        />
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <img
          src="https://img.icons8.com/color/2x/mongodb.png"
          alt="MongoDB icon"
          style={imgStyle}
        />
      ),
    },
    {
      name: "React",
      icon: (
        <img
          alt="React icon"
          src="https://img.icons8.com/color/2x/react-native.png"
          style={imgStyle}
        />
      ),
    },
    {
      name: "React Native",
      icon: (
        <img
          alt="React Native icon"
          src="https://img.icons8.com/nolan/2x/react-native.png"
          style={imgStyle}
        />
      ),
    },
    {
      name: "SASS",
      icon: (
        <img
          alt="SASS icon"
          src="https://img.icons8.com/color/2x/sass.png"
          style={imgStyle}
        />
      ),
    },
    {
      name: "Material UI",
      icon: (
        <img
          alt="Material Ui icon"
          src="https://img.icons8.com/color/2x/material-ui.png"
          style={imgStyle}
        />
      ),
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
