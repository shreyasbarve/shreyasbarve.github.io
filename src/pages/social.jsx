export default function Social() {
  const imgStyle = { height: 48, width: 48 };

  const social = [
    {
      name: "LinkedIn",
      link: "https://in.linkedin.com/in/shreyasbarve13",
      icon: (
        <img
          alt="LinkedIn icon"
          src="https://img.icons8.com/plasticine/2x/linkedin.png"
          style={imgStyle}
        />
      ),
    },
    {
      name: "Github",
      link: "https://github.com/shreyasbarve",
      icon: (
        <img
          alt="GitHub icon"
          src="https://img.icons8.com/plasticine/2x/github.png"
          style={imgStyle}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-row space-x-7">
      {social.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noreferrer">
          {item.icon}
        </a>
      ))}
    </div>
  );
}
