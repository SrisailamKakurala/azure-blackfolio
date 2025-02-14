
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { personalInfo, experiences, skills } from "../constants/content";

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-col items-center justify-center gap-6 mt-10">
          {/* Profile Picture */}
          <div className="w-60 h-60 rounded-full bg-gray-800 overflow-hidden">
            <img
              src="https://imgs.search.brave.com/kkjAHkidBA3s2_m8mqCOXv-a5b_yN0xnx0ZbCCpFr-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMyLzQ1/LzYzLzMyNDU2MzY1/MWY2ZGNlMzEzZWIx/MjE5NjFhYzBiZTMx/LmpwZw"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name & Bio */}
          <div className="flex-1 flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2 text-center"
            >
              <h1 className="text-5xl font-bold text-white">{personalInfo.name}</h1>
              <p className="text-gray-400 text-lg">{personalInfo.role}</p>
              <p className="text-gray-400 text-md">| {personalInfo.bio} |</p>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            {personalInfo.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300 text-2xl"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="mb-20">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="glass-card p-6">
          <p className="text-gray-400 leading-relaxed">{personalInfo.about}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="relative pl-10">
          <div className="timeline-line" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 relative"
            >
              <div className="timeline-dot" />
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                <p className="text-primary mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="section-title">SKILLS</h2>
        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
          </TabsList>
          {Object.entries(skills).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card p-4 flex items-center gap-3"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="section-title">CONTACT ME</h2>
        <div className="glass-card p-6">
          <p className="text-gray-400 text-center">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="mt-4 text-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
