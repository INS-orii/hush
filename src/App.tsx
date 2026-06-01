import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown, GraduationCap, Briefcase, Award, Sparkles, Code, Database, Terminal, User } from 'lucide-react';
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
        for (let i = 0; i < 60; i++) particles.push({
          x: Math.random() * el.width, y: Math.random() * el.height,
          vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5, 
          color: ['#06b6d4', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)]
        });
        const animate = () => {
          ctx.fillStyle = 'rgba(9, 9, 11, 0.15)';
          ctx.fillRect(0, 0, el.width, el.height);
          particles.forEach((p, i) => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > el.width) p.vx *= -1;
            if (p.y < 0 || p.y > el.height) p.vy *= -1;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color; ctx.shadowBlur = 12; ctx.shadowColor = p.color; ctx.fill();
            particles.forEach((q, j) => {
              if (i !== j) {
                const d = Math.sqrt((p.x - q.x) ** 2 + (p.y - q.y) ** 2);
                if (d < 100) {
                  ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
                  ctx.strokeStyle = p.color; ctx.globalAlpha = (100 - d) / 100 * 0.12; ctx.stroke(); ctx.globalAlpha = 1;
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
      className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-gray-800/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">X</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            XINCHAO
          </span>
        </motion.div>
        <div className="hidden md:flex gap-10 text-gray-400 text-sm font-medium">
          {[
            { name: '关于', href: '#about' },
            { name: '经历', href: '#experience' },
            { name: '技能', href: '#skills' },
            { name: '自我评价', href: '#self-evaluation' },
            { name: '联系', href: '#contact' }
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -2, color: '#06b6d4' }}
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="relative inline-block mb-10"
        >
          <div className="w-44 h-44 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-2 shadow-2xl shadow-cyan-500/20">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
              <User size={64} className="text-gray-600" />
            </div>
          </div>
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-cyan-500/20"
          />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full border border-purple-500/15"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {resumeData.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium">
            {resumeData.title}
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"
          />
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-lg">
            {resumeData.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-6 justify-center flex-wrap mt-8"
        >
          <motion.a
            href="#contact"
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-xl shadow-purple-500/30 text-lg"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            ✉️ 联系我
          </motion.a>
          <motion.a
            href="#experience"
            className="px-10 py-4 border border-gray-700 text-gray-300 font-semibold rounded-full hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            💼 查看经历
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-16"
        >
          <a href="#about" className="text-gray-500 hover:text-cyan-400 transition-colors">
            <ChevronDown size={44} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8">
            <Sparkles size={18} className="text-cyan-400" />
            <span className="text-cyan-400 font-medium text-sm">关于我</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              认识一下我
            </span>
          </h2>
          <div className="w-28 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/40"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Award className="text-cyan-400" size={26} />
              </div>
              个人简介
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg space-y-4">
              {resumeData.bio}
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              对新技术充满热情，乐于探索创新解决方案，善于用数据驱动决策，致力于创造有价值的成果！
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <GraduationCap className="text-purple-400" size={26} />
              </div>
              教育经历
            </h3>
            <div className="space-y-6">
              {resumeData.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/40 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                    <span className="text-gray-500 bg-gray-900/60 px-4 py-1.5 rounded-full text-sm">{edu.year}</span>
                  </div>
                  <div className="text-purple-400 font-semibold text-lg">{edu.degree}</div>
                  <div className="text-gray-500 text-sm mt-1.5">{edu.major}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
            <Sparkles className="text-yellow-400" size={28} />
            个人成就
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resumeData.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-7 border border-gray-700/40 text-center hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-yellow-400" size={22} />
                </div>
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
    <section id="experience" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8">
            <Briefcase size={18} className="text-purple-400" />
            <span className="text-purple-400 font-medium text-sm">工作经历</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              我的工作与实习
            </span>
          </h2>
          <div className="w-28 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {resumeData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/40 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <Briefcase className="text-purple-400" size={24} />
                    </div>
                    {exp.company}
                  </h3>
                  <p className="text-purple-400 text-lg font-semibold">{exp.position}</p>
                </div>
                <span className="text-gray-500 bg-gray-900/60 px-5 py-2 rounded-full">{exp.year}</span>
              </div>

              <div className="space-y-6">
                {exp.projects.map((project, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    className="bg-gray-900/40 rounded-2xl p-8 border-l-4 border-purple-500/60"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xl font-bold text-white">{project.name}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-5">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t, k) => (
                        <span key={k} className="px-5 py-2 bg-gradient-to-r from-purple-500/15 to-pink-500/15 text-purple-300 rounded-full text-sm font-medium border border-purple-500/25">
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
    'Python': <Code size={22} />,
    'Java': <Terminal size={22} />,
    'MySQL': <Database size={22} />,
    'Excel': <Sparkles size={22} />,
    '数据分析': <Database size={22} />,
    '市场调研': <Award size={22} />,
    '项目管理': <Briefcase size={22} />,
    'Linux': <Terminal size={22} />
  };

  return (
    <section id="skills" className="py-32 bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8">
            <Code size={18} className="text-cyan-400" />
            <span className="text-cyan-400 font-medium text-sm">技能特长</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              我的技能栈
            </span>
          </h2>
          <div className="w-28 h-2 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resumeData.skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/40 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400">
                  {skillIcons[skill.name] || <Sparkles size={22} />}
                </div>
                <div className="flex-1">
                  <span className="text-white font-bold text-lg">{skill.name}</span>
                  <span className="text-gray-500 text-sm float-right font-semibold">{skill.level}%</span>
                </div>
              </div>
              <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08, type: 'spring' }}
                  className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/30"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelfEvaluation() {
  return (
    <section id="self-evaluation" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-8">
            <Sparkles size={18} className="text-yellow-400" />
            <span className="text-yellow-400 font-medium text-sm">自我评价</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              自我认知
            </span>
          </h2>
          <div className="w-28 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/40"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                  <Award className="text-yellow-400" size={26} />
                </div>
                专业能力
              </h3>
              <ul className="space-y-4">
                {[
                  '具备扎实的数据分析与编程基础，熟悉数据库操作与数据可视化',
                  '掌握数据挖掘、商务分析等核心技能，能够通过数据支持业务决策',
                  '熟练使用 Python、Java、MySQL 等技术栈进行项目开发'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <Sparkles className="text-green-400" size={26} />
                </div>
                个人特质
              </h3>
              <ul className="space-y-4">
                {[
                  '具备良好的团队协作能力与沟通表达能力，能够有效沟通需求',
                  '逻辑清晰、踏实严谨，对待工作认真负责',
                  '具有快速学习能力，能够快速适应新技术并应用于实际项目'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-pink-500/10 border border-pink-500/30 rounded-full mb-8">
            <Mail size={18} className="text-pink-400" />
            <span className="text-pink-400 font-medium text-sm">联系方式</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
              与我联系
            </span>
          </h2>
          <div className="w-28 h-2 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.a
                href={`mailto:${resumeData.contact.email}`}
                className="flex items-center gap-5 p-8 bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/40 hover:border-cyan-500/30 transition-all duration-300 group"
                whileHover={{ x: 8 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-shadow">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">邮箱</p>
                  <p className="text-white font-semibold text-lg">{resumeData.contact.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${resumeData.contact.phone}`}
                className="flex items-center gap-5 p-8 bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/40 hover:border-purple-500/30 transition-all duration-300 group"
                whileHover={{ x: 8 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-xl shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-shadow">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">电话</p>
                  <p className="text-white font-semibold text-lg">{resumeData.contact.phone}</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-5 p-8 bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/40"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-xl shadow-green-500/25">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">地址</p>
                  <p className="text-white font-semibold text-lg">{resumeData.contact.location}</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12">
              <p className="text-gray-400 mb-6 font-medium">我的社交媒体</p>
              <div className="flex gap-4">
                {resumeData.contact.social.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    className="w-14 h-14 rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-700/40 transition-all duration-300"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name === 'GitHub' ? <Github size={28} /> : <Linkedin size={28} />}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/40"
          >
            <h3 className="text-2xl font-bold text-white mb-8">发送消息</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="你的姓名"
                  className="w-full px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="你的邮箱"
                  className="w-full px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="你的消息"
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl text-lg shadow-xl shadow-purple-500/30"
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
    <footer className="py-10 border-t border-gray-800/50 bg-black/40">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">X</span>
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            XINCHAO
          </span>
        </div>
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
        <SelfEvaluation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}