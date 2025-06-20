
export default function Intro() {
    return (
  <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
    
    {/* Text Section */}
    <div className="flex-1 text-center md:text-left relative z-10">
      <div className="absolute inset-0 bg-teal-400 opacity-10 transform rotate-12 blur-2xl -z-10"></div>

      <h2 className="text-lg md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-800 relative overflow-hidden">
        <span className="writing-animation">
          I'm <span className="text-teal-600">UMESH KUMAR</span>, Software Developer
        </span>
      </h2>

      <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
        I’m a Java Developer passionate about building scalable and reliable applications.
        After completing my MCA in 2023, I’ve focused on mastering backend and full-stack
        development with technologies like Java, Spring Boot, React, and more.
        <br /><br />
        I love solving real-world problems through clean code and innovative solutions,
        and I'm always excited to contribute to impactful projects.
      </p>

      <a href="/path/to/your-resume.pdf" download="Umesh-Kumar-Resume.pdf">
        <button className="mt-6 px-6 py-3 bg-teal-600 text-white text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300">
          Download CV
        </button>
      </a>
    </div>

    {/* Profile Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="https://avatars.githubusercontent.com/u/121945998?v=4"
        alt="Umesh Kumar"
        className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-300 shadow-xl transition-transform duration-300 hover:scale-105"
      />
    </div>
    
  </div>
)

}
