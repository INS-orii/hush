import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown, GraduationCap, Briefcase, Award, Sparkles, Code, Database, Terminal } from 'lucide-react';
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
        for (let i = 0; i < 80; i++) particles.push({
          x: Math.random() * el.width, y: Math.random() * el.height,
          vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2.5 + 0.5, 
          color: ['#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b'][Math.floor(Math.random() * 4)]
        });
        const animate = () => {
          ctx.fillStyle = 'rgba(9, 9, 11, 0.1)';
          ctx.fillRect(0, 0, el.width, el.height);
          particles.forEach((p, i) => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > el.width) p.vx *= -1;
            if (p.y < 0 || p.y > el.height) p.vy *= -1;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color; ctx.shadowBlur = 15; ctx.shadowColor = p.color; ctx.fill();
            particles.forEach((q, j) => {
              if (i !== j) {
                const d = Math.sqrt((p.x - q.x) ** 2 + (p.y - q.y) ** 2);
                if (d < 120) {
                  ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
                  ctx.strokeStyle = p.color; ctx.globalAlpha = (120 - d) / 120 * 0.15; ctx.stroke(); ctx.globalAlpha = 1;
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
      transition={{ type: 'spring', stiffness: 50 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-2xl border-b border-cyan-500/20"
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            ✦
          </span>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            XINCHAO
          </span>
        </motion.div>
        <div className="flex gap-8 text-gray-300 text-sm font-medium">
          {[
            { name: '关于', href: '#about' },
            { name: '经历', href: '#experience' },
            { name: '技能', href: '#skills' },
            { name: '联系', href: '#contact' }
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -3, color: '#06b6d4' }}
              className="hover:text-cyan-400 transition-all duration-300"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="relative inline-block mb-8"
        >
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-cyan-500/30">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                X
              </span>
            </div>
          </div>
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-cyan-500/30"
          />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full border border-purple-500/20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {resumeData.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2 font-medium">
            {resumeData.title}
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6 rounded-full"
          />
          <p className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed text-lg">
            {resumeData.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/30"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            ✉️ 联系我
          </motion.a>
          <motion.a
            href="#experience"
            className="px-8 py-3 border border-purple-500/60 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            💼 查看经历
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-16"
        >
          <a href="#about" className="text-cyan-400">
            <ChevronDown size={40} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-gray-900/30">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-cyan-400 font-medium text-sm">关于我</span>
          </div>
          <h2 className="text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              认识一下我
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-cyan-400" size={28} />
              个人简介
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {resumeData.bio} 对新技术充满热情，乐于探索创新解决方案，用数据创造价值！
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-purple-400" size={28} />
              教育经历
            </h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                    <span className="text-gray-500 text-sm bg-gray-900/50 px-3 py-1 rounded-full">{edu.year}</span>
                  </div>
                  <div className="text-purple-400 font-medium">{edu.degree}</div>
                  <div className="text-gray-500 text-sm mt-1">{edu.major}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Sparkles className="text-yellow-400" />
            个人成就
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resumeData.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center"
              >
                <p className="text-gray-300 font-medium">{achievement}</p>
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
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <Briefcase size={16} className="text-purple-400" />
            <span className="text-purple-400 font-medium text-sm">工作经历</span>
          </div>
          <h2 className="text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              我的工作与实习
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
                    <Briefcase className="text-purple-400" size={24} />
                    {exp.company}
                  </h3>
                  <p className="text-purple-400 text-lg font-medium">{exp.position}</p>
                </div>
                <span className="text-gray-500 bg-gray-900/50 px-4 py-2 rounded-full inline-block">{exp.year}</span>
              </div>

              <div className="space-y-4">
                {exp.projects.map((project, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    className="bg-gray-900/40 rounded-xl p-6 border-l-4 border-purple-500"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xl font-semibold text-white">{project.name}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, k) => (
                        <span key={k} className="px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
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
  const skillIcons = {
    'Python': <Code size={20} />,
    'Java': <Terminal size={20} />,
    'MySQL': <Database size={20} />,
    'Excel': <Sparkles size={20} />,
    '数据分析': <Database size={20} />,
    '市场调研': <Award size={20} />,
    '项目管理': <Briefcase size={20} />,
    'Linux': <Terminal size={20} />
  };

  return (
    <section id="skills" className="py-24 bg-gray-900/30">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Code size={16} className="text-cyan-400" />
            <span className="text-cyan-400 font-medium text-sm">技能特长</span>
          </div>
          <h2 className="text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              我的技能栈
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg text-cyan-400">
                  {skillIcons[skill.name] || <Sparkles size={20} />}
                </div>
                <div className="flex-1">
                  <span className="text-gray-200 font-semibold">{skill.name}</span>
                  <span className="text-gray-500 text-sm float-right">{skill.level}%</span>
                </div>
              </div>
              <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08, type: 'spring' }}
                  className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-6">
            <Mail size={16} className="text-pink-400" />
            <span className="text-pink-400 font-medium text-sm">联系方式</span>
          </div>
          <h2 className="text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
              与我联系
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.a
                href={`mailto:${resumeData.contact.email}`}
                className="flex items-center gap-4 p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300"
                whileHover={{ x: 8 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">邮箱</p>
                  <p className="text-white font-medium">{resumeData.contact.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${resumeData.contact.phone}`}
                className="flex items-center gap-4 p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300"
                whileHover={{ x: 8 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">电话</p>
                  <p className="text-white font-medium">{resumeData.contact.phone}</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">地址</p>
                  <p className="text-white font-medium">{resumeData.contact.location}</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-10">
              <p className="text-gray-400 mb-6 font-medium">我的社交媒体</p>
              <div className="flex gap-4">
                {resumeData.contact.social.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-700/50"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name === 'GitHub' ? <Github size={26} /> : <Linkedin size={26} />}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">发送消息</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="你的姓名"
                className="w-full px-6 py-4 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="你的邮箱"
                className="w-full px-6 py-4 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all duration-300"
              />
              <textarea
                placeholder="你的消息"
                rows={5}
                className="w-full px-6 py-4 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none"
              />
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl text-lg shadow-lg shadow-purple-500/30"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                💬 发送消息
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
    <footer className="py-8 border-t border-gray-800 bg-black/50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          © 2024 {resumeData.name}. All rights reserved. ✨
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}