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
              Experienced Salesforce Developer with over 3 years of expertise in
              Apex, LWC, Aura, and Flow Builder, delivering scalable solutions
              and optimized workflows. Skilled in Service and Experience Cloud
              configurations, dynamic dashboard design, and process automation.
              <br />
              Proficient in tools like Dataloader.io, Gearset, SFDX CLI for
              seamless data management and deployment. Known for reducing data
              retrieval efforts and enhancing multilingual user experiences with
              Custom Metadata and error handling.
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
