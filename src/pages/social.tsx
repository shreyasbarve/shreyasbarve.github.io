import ImageComponent from "@/components/ImageComponent";
import {
  GTIHUB_ICON,
  LINKEDIN_ICON,
  SALESFORCE_ICON_2,
} from "@/constants/icons";

export default function Social() {
  const social = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/shreyasbarve13",
      icon: <ImageComponent src={LINKEDIN_ICON} alt="LinkedIn icon" />,
    },
    {
      name: "Github",
      link: "https://github.com/shreyasbarve",
      icon: <ImageComponent src={GTIHUB_ICON} alt="GitHub icon" />,
    },
    {
      name: "Salesforce",
      link: "https://www.salesforce.com/trailblazer/shreyasbarve",
      icon: <ImageComponent src={SALESFORCE_ICON_2} alt="Salesforce icon" />,
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
