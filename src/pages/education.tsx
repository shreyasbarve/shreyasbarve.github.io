export default function Education() {
  const data = [
    {
      title: "Shri Ramdeobaba College of Engineering and Management",
      stream: "B.E. Computer Science • 2018 - 2022",
      results: "CGPA :- 9.1",
    },
    {
      title: "Yashoda Higher Secondary School",
      stream: "HSC education (Science Stream) • 2018",
      results: "HSC exam score :- 86.67%",
    },
    {
      title: "Bhavan's Bhagwandas Purohit Vidya Mandir",
      stream: "SSC education • 2016",
      results: "SSC exam score :- 92.22%",
    },
  ];

  return (
    <section id="education" className="mt-24 flex flex-col justify-evenly">
      <div className="section-title self-center">Education</div>

      <div className="flex flex-col space-y-10 self-center">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row space-x-8 items-center">
              <img
                src="https://img.icons8.com/officel/2x/homework.png"
                alt="Homework icon"
                style={{ height: 48, width: 48 }}
              />
              <div className="space-y-1">
                <div className="text-xl font-semibold text-blue-700">
                  {item.title}
                </div>
                <div className="text-lg text-gray-500">{item.stream}</div>
                <div className="text-gray-400">{item.results}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
