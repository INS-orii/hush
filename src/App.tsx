import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown, GraduationCap, Briefcase, Award, Star, CheckCircle } from 'lucide-react';
import { resumeData } from './data/resumeData';

function ParticleBackground() {
  return (
    <canvas
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
      ref={(el) => {
        if (!el) return;
        const ctx = el.getContext('2d');
        if (!ctx) return;
        const resize = () => { el.width = window.innerWidth; el.height = window.innerHeight; };
        resize();
        window.addEventListener('resize', resize);
        const particles = [];
        for (let i = 0; i < 50; i++) particles.push({
          x: Math.random() * el.width, y: Math.random() * el.height,
          vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1, color: ['#00ffff', '#ff00ff', '#8b5cf6'][Math.floor(Math.random() * 3)]
        });
        const animate = () => {
          ctx.fillStyle = 'rgba(15, 15, 15, 0.1)';
          ctx.fillRect(0, 0, el.width, el.height);
          particles.forEach((p, i) => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > el.width) p.vx *= -1;
            if (p.y < 0 || p.y > el.height) p.vy *= -1;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color; ctx.shadowBlur = 10; ctx.shadowColor = p.color; ctx.fill();
            particles.forEach((q, j) => {
              if (i !== j) {
                const d = Math.sqrt((p.x - q.x) ** 2 + (p.y - q.y) ** 2);
                if (d < 100) {
                  ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
                  ctx.strokeStyle = p.color; ctx.globalAlpha = (100 - d) / 100 * 0.2; ctx.stroke(); ctx.globalAlpha = 1;
                }
              }
            });
          });
          requestAnimationFrame(animate);
        };
        animate();
      }}
    />
  );
}

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20"
    >
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          XINCHAO
        </span>
        <div className="flex gap-6 text-gray-300">
          {['关于我', '经历', '技能', '优势', '联系'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${['about', 'experience', 'skills', 'strengths', 'contact'][i]}`}
              whileHover={{ y: -2 }}
              className="hover:text-cyan-400 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="relative inline-block mb-6"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-[2px]">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">X</span>
            </div>
          </div>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity }} className="absolute inset-0 rounded-full border-2 border-cyan-500/30" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {resumeData.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-400 mb-6"
        >
          {resumeData.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 max-w-md mx-auto mb-8"
        >
          {resumeData.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            联系我
          </motion.a>
          <motion.a
            href="#experience"
            className="px-6 py-3 border border-cyan-500/50 text-cyan-400 rounded-full hover:bg-cyan-500/10"
            whileHover={{ scale: 1.05 }}
          >
            查看经历
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12"
        >
          <a href="#about" className="text-cyan-400">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">关于我</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Award className="text-cyan-400" />
              个人简介
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {resumeData.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="text-purple-400" />
              教育经历
            </h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-semibold">{edu.school}</h4>
                    <span className="text-gray-500 text-sm">{edu.year}</span>
                  </div>
                  <div className="text-cyan-400 text-sm">{edu.degree}</div>
                  <div className="text-gray-500 text-sm">{edu.major}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Star className="text-yellow-400" />
            个人成就
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {resumeData.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/50"
              >
                <p className="text-gray-300 text-sm">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">实习经历</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Briefcase className="text-purple-400" size={20} />
                    {exp.company}
                  </h3>
                  <p className="text-purple-400">{exp.position}</p>
                </div>
                <span className="text-gray-500">{exp.year}</span>
              </div>

              <div className="space-y-3">
                {exp.projects.map((project, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{project.name}</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, k) => (
                        <span key={k} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">技能特长</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {resumeData.skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section id="strengths" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">自我评价</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {resumeData.strengths.map((strength, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
            >
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-300">{strength}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">联系方式</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.a
                href={`mailto:${resumeData.contact.email}`}
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">邮箱</p>
                  <p className="text-white">{resumeData.contact.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${resumeData.contact.phone}`}
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">电话</p>
                  <p className="text-white">{resumeData.contact.phone}</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">地址</p>
                  <p className="text-white">{resumeData.contact.location}</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8">
              <p className="text-gray-400 mb-4">社交媒体</p>
              <div className="flex gap-4">
                {resumeData.contact.social.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white"
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    {social.name === 'GitHub' ? <Github size={20} /> : <Linkedin size={20} />}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">发送消息</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="你的姓名"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <input
                type="email"
                placeholder="你的邮箱"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <textarea
                placeholder="你的消息"
                rows={5}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 resize-none"
              />
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                发送消息
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 bg-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">© 2024 {resumeData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}