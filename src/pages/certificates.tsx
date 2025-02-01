export default function Certificates() {
  const data = [
    {
      name: "Salesforce Certified Data Cloud Consultant",
      provider: "Salesforce",
      link: "https://sforce.co/verifycerts",
    },
    {
      name: "Salesforce Certified AI Specialist",
      provider: "Salesforce",
      link: "https://sforce.co/verifycerts",
    },
    {
      name: "Salesforce Certified Platform Developer 1",
      provider: "Salesforce",
      link: "https://sforce.co/verifycerts",
    },
    {
      name: "Salesforce Certified AI Associate",
      provider: "Salesforce",
      link: "https://sforce.co/verifycerts",
    },
    {
      name: "Salesforce Certified Administrator",
      provider: "Salesforce",
      link: "https://sforce.co/verifycerts",
    },
    {
      name: "Introduction to Japanese Language and Culture",
      provider: "NPTEL • IIT Kanpur",
      link: "https://nptel.ac.in/content/noc/NOC19/SEM2/Ecertificates/121/noc19-hs52/Course/NPTEL19HS52S318506230cae52511e9b8f66b31f3a57258.jpg",
    },
    {
      name: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
      provider: "Coursera • University of Michigan",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/HZ2YJY7AZ3TQ",
    },
    {
      name: "Open Source Software Development, Linux and Git Specialization",
      provider: "Coursera • The Linux Foundation",
      link: "https://www.coursera.org/account/accomplishments/specialization/K6NNLL8RGK4D",
    },
    {
      name: "IBM Data Analyst",
      provider: "Coursera • IBM",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/AMEUWQ8LRKY6",
    },
  ];

  return (
    <section id="certificates" className="mt-24 flex flex-col justify-evenly">
      <div className="section-title flex self-center">Certificates</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-row space-x-8 items-center">
            <img
              alt="Medal icon"
              src="https://img.icons8.com/?size=2x&id=gJF2plDK9Taj&format=png"
              style={{ height: 48, width: 48 }}
            />
            <div className="flex flex-col space-y-2">
              <a href={item.link} target="_blank" rel="noreferrer">
                <div className="text-xl font-semibold text-blue-700">
                  {item.name}
                </div>
              </a>
              <div className="text-gray-500">{item.provider}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
