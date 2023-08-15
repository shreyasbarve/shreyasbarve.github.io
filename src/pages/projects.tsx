export default function Projects() {
  let bullet = String.fromCodePoint(8226);

  const data = [
    {
      title: "Smart Parking Management System",
      description:
        bullet +
        " Android application to eliminate the need of parking lot attendant by automating the process of finding parking lots via our custom map.\n" +
        bullet +
        " Charging of parking will be done using the number plate of cars which will be done using a small camera fixed at the entrance of parking. The number plate will be mapped to the user registered on the application.\n" +
        bullet +
        " Uses YOLOv4 model for number plate detection.",
      site: "#",
    },
    {
      title: "Disease Predictor",
      description:
        bullet +
        " Web based application for prediction of diseases like Diabetes and Pneumonia.\n" +
        bullet +
        " Created the frontend for the application using React framework and worked with the Firebase realtime database, API calls.",
      site: "https://diseasepredictor.netlify.app/",
    },
    {
      title: "SHINE In Exams",
      description:
        bullet +
        " Serve as a helpline for students who are appearing for board exams for first time during COVID pandemic\n" +
        bullet +
        " Team of education department will be present to reply to the queries submitted by the students\n" +
        bullet +
        " Contains FAQs, list of examination centres, Time-Table, link to the official website etc.",
      site: "https://play.google.com/store/apps/details?id=in.nic.mah.shine",
    },
    {
      title: "Classroom Management System",
      description:
        bullet +
        " A platform for small time tutions and classes or even schools who cannot afford g-suite or similar online platforms\n" +
        bullet +
        " One stop platform for all materials like exams, marks, assignments, attendance, performance report\n" +
        bullet +
        " Available for both Web and Mobile",
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
              <img
                alt="Group of Projects icon"
                src="https://img.icons8.com/dusk/2x/group-of-projects.png"
                style={{ height: 48, width: 48 }}
              />
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
