import Social from "./social";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen flex justify-center flex-col lg:flex-row lg:justify-evenly"
    >
      <div className=" text-gray-600 flex flex-col text-center items-center space-y-4 w-3/4 self-center lg:w-3/4 lg:self-center">
        <div>
          <p className="font-bold text-3xl text-blue-700">
            Hello, My name is Shreyas Barve.
          </p>
        </div>

        <div>
          <div className="font-semibold space-y-4">
            <p>
              Result driven Software Engineer with 2 years of professional
              development experience. Proficient in Full-Stack development. Led
              the frontend from conception to delivery of the SHINE app on
              PlayStore which has 500+ downloads. Have experience in Salesforce
              migration projects, transforming Process Builders to Flows for
              streamlined automations. Skilled in coding triggers, batch classes
              and schedulable classes, with focus on minimising the error.
              <br />
              <br />
              Topper in the exam{" "}
              <i>Introduction to Japanese Language and Culture</i> held by
              NPTEL(IIT Kanpur) Nov - 2019
            </p>
          </div>
        </div>
        <Social />
      </div>
    </section>
  );
}
