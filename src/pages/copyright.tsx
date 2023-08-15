import Social from "./social";

export default function Copyright() {
  return (
    <section
      id="contact"
      className="mt-24 bg-gray-700 text-gray-200 w-full py-6 text-center flex flex-col space-y-4"
    >
      <div className="self-center">
        <Social />
      </div>

      <div>
        Copyright &copy; {new Date().getFullYear()} Shreyas Barve, All Rights
        Reserved
      </div>
    </section>
  );
}
