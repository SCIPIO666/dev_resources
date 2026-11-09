/**
 * ============================================================
 * DEVRESOURCE HUB — MASTER RESOURCE DATA
 * ============================================================
 * Every resource from the master list, categorized and tagged.
 * 
 * Card schema:
 * {
 *   title:    string  — resource name
 *   desc:     string  — short description
 *   link:     string  — URL
 *   level:    'free' | 'paid' | 'beginner' | 'intermediate' | 'advanced'
 *   code:     string  — optional discount code
 *   tags:     string[] — optional tags
 * }
 * ============================================================
 */

const RESOURCE_DATA = [

  // ============================================================
  // 1. HOSTING & DEPLOYMENT
  // ============================================================
  {
    id: 'hosting',
    title: 'Hosting & Deployment',
    emoji: '🚀',
    desc: 'Platforms to deploy and host your projects for free or cheap.',
    resources: [
      { title: 'GitHub Pages', desc: 'Best for simple static websites & portfolios.', link: 'https://pages.github.com', level: 'free', tags: ['static', 'portfolio'] },
      { title: 'Heroku', desc: 'Easy backend + app deployment.', link: 'https://heroku.com', level: 'free', tags: ['backend', 'apps'] },
      { title: 'Firebase Hosting', desc: 'Fast, secure, great for web apps.', link: 'https://firebase.google.com/products/hosting', level: 'free', tags: ['web apps', 'google'] },
      { title: 'Vercel', desc: 'Next.js works insanely well. Free analytics (limited).', link: 'https://vercel.com', level: 'free', tags: ['nextjs', 'frontend'] },
      { title: 'Netlify', desc: 'Simple deploy for frontend projects.', link: 'https://netlify.com', level: 'free', tags: ['frontend', 'static'] },
      { title: 'cron-job.org', desc: 'Free online cron job service — schedule HTTP requests, automate tasks, trigger webhooks on a schedule.', link: 'https://console.cron-job.org/dashboard', level: 'free', tags: ['automation', 'cron'] },
      { title: 'Rocket.new', desc: 'AI website builder. Describe what you want and it builds it.', link: 'https://rocket.new', level: 'paid', code: 'X7K2M9P4R1NQ', tags: ['ai', 'builder'] },
      { title: 'editor.glass', desc: 'Code editor — try it free.', link: 'https://editor.glass', level: 'free', tags: ['editor'] }
    ]
  },

  // ============================================================
  // 2. DESIGN & UI TOOLS
  // ============================================================
  {
    id: 'design',
    title: 'Design & UI Tools',
    emoji: '🎨',
    desc: 'Colors, gradients, SVG backgrounds, shadows, and UI components.',
    resources: [
      { title: 'Coolors', desc: 'Generate beautiful color palettes in seconds. Lock colors, explore combinations, export instantly.', link: 'https://coolors.co', level: 'free', tags: ['colors', 'palettes'] },
      { title: 'Uiverse', desc: 'Copy-paste stunning buttons, cards, loaders, inputs, and other UI components.', link: 'https://uiverse.io', level: 'free', tags: ['ui', 'components'] },
      { title: 'SVG Repo', desc: 'Access over 500,000 free SVG icons, illustrations, and vectors.', link: 'https://www.svgrepo.com/', level: 'free', tags: ['svg', 'icons'] },
      { title: 'ColorZilla', desc: 'Pick colors from any website instantly.', link: 'https://www.colorzilla.com/', level: 'free', tags: ['colors', 'extension'] },
      { title: 'CSS Peeper', desc: 'Inspect CSS, colors & assets instantly.', link: 'https://csspeeper.com/', level: 'free', tags: ['css', 'inspect'] },
      { title: 'Gradient Hunt', desc: 'Find beautiful gradients for your websites and UI designs.', link: 'https://gradienthunt.com/', level: 'free', tags: ['gradients'] },
      { title: 'Remove.bg', desc: 'Remove backgrounds from images instantly with AI.', link: 'https://remove.bg/', level: 'free', tags: ['ai', 'images'] },
      { title: 'CSS Scan', desc: 'Inspect any website element and quickly copy its CSS.', link: 'https://getcssscan.com/', level: 'free', tags: ['css', 'inspect'] },
      { title: 'Neumorphism.io', desc: 'Generate beautiful neumorphic UI styles and CSS code.', link: 'https://neumorphism.io/', level: 'free', tags: ['neumorphism', 'css'] },
      { title: 'Haikei', desc: 'Create unique SVG backgrounds, blobs, waves, and other visuals.', link: 'https://haikei.app/', level: 'free', tags: ['svg', 'backgrounds'] },
      { title: 'Smooth Shadows', desc: 'Generate smooth, realistic CSS box shadows for your UI.', link: 'https://smoothshadows.com/', level: 'free', tags: ['shadows', 'css'] },
      { title: 'Get Waves', desc: 'Create custom SVG wave backgrounds for websites.', link: 'https://getwaves.io/', level: 'free', tags: ['svg', 'waves'] }
    ]
  },

  // ============================================================
  // 3. ANIMATION & EFFECTS LIBRARIES
  // ============================================================
  {
    id: 'animation',
    title: 'Animation & Effects',
    emoji: '✨',
    desc: 'CSS animations, scroll effects, 3D graphics, and motion libraries.',
    resources: [
      { title: 'Cubic Bezier', desc: 'Create smooth custom CSS animation timing functions with a live visual preview.', link: 'https://cubic-bezier.com', level: 'free', tags: ['css', 'timing'] },
      { title: 'Animista', desc: 'Browse hundreds of ready-made CSS animations, customize them, and copy the code directly.', link: 'https://animista.net', level: 'free', tags: ['css', 'animations'] },
      { title: 'Easing Wizard', desc: 'Create and preview custom animation easing curves visually.', link: 'https://easingwizard.com/', level: 'free', tags: ['easing', 'animation'] },
      { title: 'CSS Loaders', desc: 'Browse hundreds of beautiful CSS loading animations ready to copy and use.', link: 'https://css-loaders.com/', level: 'free', tags: ['css', 'loaders'] },
      { title: 'Transition.css', desc: 'CSS transitions library.', link: 'https://www.transition.style', level: 'free', tags: ['css', 'transitions'] },
      { title: 'AOS (Animate On Scroll)', desc: 'Animate elements as you scroll.', link: 'https://michalsnik.github.io/aos', level: 'free', tags: ['scroll', 'animation'] },
      { title: 'GSAP', desc: 'Professional-grade animation library for the web.', link: 'https://greensock.com/gsap', level: 'free', tags: ['animation', 'js'] },
      { title: 'Three.js', desc: '3D graphics library for the web.', link: 'https://threejs.org', level: 'free', tags: ['3d', 'webgl'] },
      { title: 'Lenis', desc: 'Smooth scrolling library.', link: 'https://lenis.studiofreight.com', level: 'free', tags: ['scroll', 'smooth'] },
      { title: 'Locomotive Scroll', desc: 'Scroll animations and smooth scrolling.', link: 'https://locomotivetml.github.io/locomotive-scroll', level: 'free', tags: ['scroll', 'animation'] },
      { title: 'Framer Motion', desc: 'React animation library.', link: 'https://www.framer.com/motion', level: 'free', tags: ['react', 'animation'] },
      { title: 'SimpleParallax', desc: 'Parallax effects library.', link: 'https://simpleparallax.com/', level: 'free', tags: ['parallax', 'js'] }
    ]
  },

  // ============================================================
  // 4. UI COMPONENTS & LIBRARIES
  // ============================================================
  {
    id: 'ui-libs',
    title: 'UI Components & Libraries',
    emoji: '🧩',
    desc: 'Sliders, charts, layout libraries, and ready-made components.',
    resources: [
      { title: 'Splide', desc: 'Slider/carousel library.', link: 'https://splidejs.com', level: 'free', tags: ['carousel', 'slider'] },
      { title: 'Swiper.js', desc: 'Modern touch slider.', link: 'https://swiperjs.com', level: 'free', tags: ['slider', 'touch'] },
      { title: 'Chart.js', desc: 'Simple yet flexible JavaScript charting.', link: 'https://www.chartjs.org', level: 'free', tags: ['charts', 'js'] },
      { title: 'Packerly', desc: 'Layout library.', link: 'https://packerly.metafizzy.co', level: 'free', tags: ['layout'] }
    ]
  },

  // ============================================================
  // 5. DSA & ALGORITHM VISUALIZERS
  // ============================================================
  {
    id: 'dsa',
    title: 'DSA & Algorithm Visualizers',
    emoji: '🧠',
    desc: 'Visualize algorithms step by step instead of just imagining them.',
    resources: [
      { title: 'VisuAlgo', desc: 'Animated algorithms — trees, graphs, stacks, queues, sorting, and more.', link: 'https://visualgo.net/en', level: 'free', tags: ['visual', 'algorithms'] },
      { title: 'CSVisTool', desc: 'Watch algorithms run step by step.', link: 'https://csvistool.com/', level: 'free', tags: ['visual', 'step-by-step'] },
      { title: 'USFCA Algorithm Visualizations', desc: 'Control step by step yourself — good for deep understanding.', link: 'https://www.cs.usfca.edu/~galles/visualization/Algorithms.html', level: 'free', tags: ['visual', 'control'] },
      { title: 'Pathfinding Visualizer', desc: 'Pathfinding algorithm visualizer.', link: 'https://clementmihailescu.github.io/Pathfinding-Visualizer/', level: 'free', tags: ['pathfinding', 'visual'] },
      { title: 'AlgoVision', desc: 'Binary search visualizer.', link: 'https://algovision.dev/m/binary-search', level: 'free', tags: ['binary search'] },
      { title: 'DSAVis', desc: 'DSA visualizations.', link: 'https://dsavis.com', level: 'free', tags: ['visual', 'dsa'] },
      { title: 'DSA Visualizer', desc: 'Searching algorithms visualizer.', link: 'https://www.dsavisualizer.in/visualizer/searching/linearsearch', level: 'free', tags: ['searching'] },
      { title: 'CS Visualizer', desc: 'Graph algorithms including Bellman-Ford.', link: 'https://www.csvisualizer.com/algorithms/graphs/bellman-ford', level: 'free', tags: ['graphs'] },
      { title: 'Staying.fun — 1D Array', desc: 'Interactive array visualizations.', link: 'https://staying.fun/en/docs/1d-array', level: 'free', tags: ['arrays'] },
      { title: 'Staying.fun', desc: 'Paste your code and watch it explained step-by-step through interactive animations.', link: 'https://staying.fun/en', level: 'free', tags: ['code', 'animation'] }
    ]
  },

  // ============================================================
  // 6. GITHUB REPOSITORIES
  // ============================================================
  {
    id: 'github',
    title: 'GitHub Repositories',
    emoji: '📚',
    desc: 'Courses, project ideas, roadmaps, interview prep, and open-source tools.',
    resources: [
      { title: '30-Days-Of-Python', desc: 'Structured 30-day path, beginner to writing real scripts.', link: 'http://github.com/Asabeneh/30-Days-Of-Python', level: 'free', tags: ['python', 'course'] },
      { title: 'ML-For-Beginners', desc: "Microsoft's free ML course with quizzes & assignments.", link: 'http://github.com/microsoft/ML-For-Beginners', level: 'free', tags: ['ml', 'microsoft'] },
      { title: 'freeCodeCamp', desc: 'Full curriculum: web dev, JS algorithms, data science, more.', link: 'http://github.com/freeCodeCamp/freeCodeCamp', level: 'free', tags: ['curriculum', 'web dev'] },
      { title: 'ossu/computer-science', desc: 'Full free CS degree curriculum, self-paced.', link: 'http://github.com/ossu/computer-science', level: 'free', tags: ['cs', 'degree'] },
      { title: 'project-based-learning', desc: 'Huge collection of step-by-step build tutorials across languages.', link: 'http://github.com/practical-tutorials/project-based-learning', level: 'free', tags: ['projects', 'tutorials'] },
      { title: 'build-your-own-x', desc: 'Build your own Docker, Redis, git, etc. from scratch. 400k+ stars.', link: 'http://github.com/codecrafters-io/build-your-own-X', level: 'free', tags: ['from scratch', 'projects'] },
      { title: 'app-ideas', desc: 'Curated project ideas with difficulty levels to build a portfolio.', link: 'http://github.com/florinpop17/app-ideas', level: 'free', tags: ['ideas', 'portfolio'] },
      { title: 'Project-Ideas-And-Resources', desc: '100+ project ideas + resources.', link: 'https://github.com/The-Cool-Coders/Project-Ideas-And-Resources', level: 'free', tags: ['projects'] },
      { title: 'Awesome-Projects', desc: 'Awesome projects collection.', link: 'https://github.com/avinash201199/Awesome-Projects', level: 'free', tags: ['projects'] },
      { title: '100+ Python Projects', desc: '100+ Python project ideas with full source code.', link: 'https://github.com/bicky007/100-python-projects', level: 'free', tags: ['python', 'projects'] },
      { title: '500-AI-Projects', desc: '500 project ideas across AI/ML/CV/NLP.', link: 'http://github.com/ashishpatel26/500-AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-with-code', level: 'free', tags: ['ai', 'projects'] },
      { title: 'awesome-machine-learning', desc: 'Curated ML frameworks and resources by language.', link: 'http://github.com/josephmisiti/awesome-machine-learning', level: 'free', tags: ['ml', 'resources'] },
      { title: 'coding-interview-university', desc: 'Full CS study plan to prep for software engineering interviews.', link: 'http://github.com/jwasham/coding-interview-university', level: 'free', tags: ['interview', 'cs'] },
      { title: 'tech-interview-handbook', desc: 'Curated interview prep material used by real candidates who got hired.', link: 'http://github.com/yangshun/tech-interview-handbook', level: 'free', tags: ['interview'] },
      { title: 'system-design-primer', desc: 'Learn how to design large-scale systems, with real examples.', link: 'http://github.com/donnemartin/system-design-primer', level: 'free', tags: ['system design'] },
      { title: 'javascript-algorithms', desc: 'Algorithms & data structures explained and implemented in JS.', link: 'http://github.com/trekhleb/javascript-algorithms', level: 'free', tags: ['javascript', 'algorithms'] },
      { title: 'You-Dont-Know-JS', desc: 'Deep-dive book series on how JavaScript actually works.', link: 'http://github.com/getify/You-Dont-Know-JS', level: 'free', tags: ['javascript', 'book'] },
      { title: 'clean-code-javascript', desc: 'Clean code principles adapted for JS with real examples.', link: 'http://github.com/ryanmcdermott/clean-code-javascript', level: 'free', tags: ['clean code'] },
      { title: 'developer-roadmap', desc: 'Visual roadmaps for every dev role — frontend, backend, DevOps.', link: 'http://github.com/kamranahmedse/developer-roadmap', level: 'free', tags: ['roadmap'] },
      { title: 'public-apis', desc: 'Free APIs for literally any project idea you have.', link: 'http://github.com/public-apis/public-apis', level: 'free', tags: ['apis'] },
      { title: 'free-programming-books', desc: 'Massive list of free books across every language and stack.', link: 'http://github.com/EbookFoundation/free-programming-books', level: 'free', tags: ['books'] },
      { title: 'awesome-python', desc: 'Every notable Python framework, library, and resource in one place.', link: 'http://github.com/vinta/awesome-python', level: 'free', tags: ['python'] },
      { title: 'awesome', desc: 'The meta-list. Every "awesome" list for every topic that exists.', link: 'http://github.com/sindresorhus/awesome', level: 'free', tags: ['meta', 'lists'] },
      { title: 'thealgorithms', desc: 'Algorithms repository.', link: 'https://github.com/thealgorithms', level: 'free', tags: ['algorithms'] },
      { title: 'Front-End-Checklist', desc: 'Frontend checklist.', link: 'https://github.com/thedaviddias/Front-End-Checklist', level: 'free', tags: ['frontend'] },
      { title: 'awesome-cheatsheets', desc: 'Awesome cheatsheets collection.', link: 'https://github.com/LeCoupa/awesome-cheatsheets', level: 'free', tags: ['cheatsheets'] },
      { title: "Rubik's Cube Portfolio", desc: 'Unique portfolio website using HTML and CSS.', link: 'https://github.com/Brahmpreett/Rubiks-Cube', level: 'free', tags: ['portfolio'] }
    ]
  },

  // ============================================================
  // 7. OPEN-SOURCE TOOLS (10 Repos That Feel Illegal)
  // ============================================================
  {
    id: 'open-source',
    title: 'Open-Source Power Tools',
    emoji: '🐙',
    desc: 'These open-source projects can replace expensive tools and give you serious developer superpowers.',
    resources: [
      { title: 'yt-dlp', desc: 'Download videos from 1,000+ sites.', link: 'https://github.com/yt-dlp/yt-dlp', level: 'free', tags: ['download', 'video'] },
      { title: 'Ollama', desc: 'Run AI models locally.', link: 'https://github.com/ollama/ollama', level: 'free', tags: ['ai', 'local'] },
      { title: 'Fooocus', desc: 'Create AI images locally.', link: 'https://github.com/lllyasviel/Fooocus', level: 'free', tags: ['ai', 'images'] },
      { title: 'Whisper', desc: 'Speech-to-text in 99+ languages.', link: 'https://github.com/openai/whisper', level: 'free', tags: ['ai', 'speech'] },
      { title: 'Plausible Analytics', desc: 'Privacy-friendly analytics.', link: 'https://github.com/plausible/analytics', level: 'free', tags: ['analytics'] },
      { title: 'AppFlowy', desc: 'Open-source Notion alternative.', link: 'https://github.com/AppFlowy-IO/AppFlowy', level: 'free', tags: ['notion', 'productivity'] },
      { title: 'Penpot', desc: 'Open-source UI/UX design tool.', link: 'https://github.com/penpot/penpot', level: 'free', tags: ['design', 'ui'] },
      { title: 'n8n', desc: 'Automate workflows.', link: 'https://github.com/n8n-io/n8n', level: 'free', tags: ['automation'] },
      { title: 'Cal.com', desc: 'Open-source scheduling.', link: 'https://github.com/calcom/cal.com', level: 'free', tags: ['scheduling'] },
      { title: 'Bitwarden', desc: 'Open-source password manager.', link: 'https://github.com/bitwarden/server', level: 'free', tags: ['passwords'] }
    ]
  },

  // ============================================================
  // 8. DEVELOPER TOOLS & UTILITIES
  // ============================================================
  {
    id: 'dev-tools',
    title: 'Developer Tools & Utilities',
    emoji: '🛠️',
    desc: 'Converters, formatters, cheat sheets, documentation, and productivity tools.',
    resources: [
      { title: 'IT Tools', desc: 'Access 100+ utilities including encoders, generators, converters, and formatters.', link: 'https://it-tools.tech/', level: 'free', tags: ['utilities'] },
      { title: 'Transform Tools', desc: 'Convert JSON, HTML, CSS, JSX, SQL, YAML, and many other formats in seconds.', link: 'https://transform.tools/', level: 'free', tags: ['converters'] },
      { title: 'QuickRef', desc: 'Get concise cheat sheets for programming languages, frameworks, and command-line tools.', link: 'https://quickref.me/', level: 'free', tags: ['cheatsheets'] },
      { title: 'GitDiagram', desc: 'Turn any GitHub repository into an interactive architecture diagram instantly.', link: 'https://gitdiagram.com/', level: 'free', tags: ['github', 'diagrams'] },
      { title: 'free-for.dev', desc: 'Discover hundreds of free APIs, databases, hosting platforms, and developer tools.', link: 'https://free-for.dev/', level: 'free', tags: ['free', 'discovery'] },
      { title: 'SmolCSS', desc: 'Learn tiny CSS techniques that solve common layout and styling problems.', link: 'https://smolcss.dev/', level: 'free', tags: ['css'] },
      { title: 'DevDocs', desc: 'All programming documentation in one place with super fast search.', link: 'https://devdocs.io', level: 'free', tags: ['documentation'] },
      { title: 'Web.dev', desc: 'Guides and resources by Google to build fast and modern websites.', link: 'https://web.dev', level: 'free', tags: ['google', 'guides'] },
      { title: 'Readme.so', desc: 'Create beautiful README files for your GitHub projects easily.', link: 'https://readme.so', level: 'free', tags: ['readme'] },
      { title: 'Regex101', desc: 'Test and debug your regex with explanations.', link: 'https://regex101.com', level: 'free', tags: ['regex'] },
      { title: 'MetaTags', desc: 'Preview and generate meta tags for SEO and social sharing.', link: 'https://metatags.io', level: 'free', tags: ['seo', 'meta'] },
      { title: 'Ray.so', desc: 'Convert your code snippets into beautiful images.', link: 'https://ray.so', level: 'free', tags: ['code images'] },
      { title: 'OverAPI', desc: 'Quick cheat sheets for many programming languages.', link: 'https://overapi.com', level: 'free', tags: ['cheatsheets'] },
      { title: 'Devhints', desc: 'Quick cheatsheets for CSS, JavaScript, Git, React, and more.', link: 'https://devhints.io/', level: 'free', tags: ['cheatsheets'] },
      { title: 'ReadMe', desc: 'Create clean and professional documentation for your APIs and projects.', link: 'https://readme.com/', level: 'free', tags: ['documentation'] },
      { title: 'cron-job.org', desc: 'Free online cron job service — schedule HTTP requests, automate tasks, trigger webhooks.', link: 'https://console.cron-job.org/dashboard', level: 'free', tags: ['cron', 'automation'] },
      { title: 'CodePen', desc: 'Frontend playground.', link: 'https://codepen.io', level: 'free', tags: ['playground'] }
    ]
  },

  // ============================================================
  // 9. LEARNING PLATFORMS
  // ============================================================
  {
    id: 'learning',
    title: 'Learning Platforms',
    emoji: '🎓',
    desc: 'Free courses, full curriculums, and structured learning paths.',
    resources: [
      { title: 'The Odin Project', desc: 'Full-stack web development curriculum — completely free and project-based.', link: 'https://www.theodinproject.com/', level: 'free', tags: ['full-stack', 'curriculum'] },
      { title: 'LearnVern', desc: 'Free skill-based courses in English, Hindi, and other Indian languages.', link: 'https://www.learnvern.com/', level: 'free', tags: ['courses', 'india'] },
      { title: 'Alison', desc: 'Free online courses with certificates in IT, business, health, and more.', link: 'https://alison.com/', level: 'free', tags: ['certificates'] },
      { title: 'Great Learning', desc: 'Free courses in programming, data science, AI, and cloud computing.', link: 'https://www.mygreatlearning.com', level: 'free', tags: ['ai', 'data science'] },
      { title: 'DigitalDefynd', desc: 'Curated lists of free and paid courses from top universities.', link: 'https://digitaldefynd.com/', level: 'free', tags: ['curated'] },
      { title: 'Open Culture', desc: 'Free cultural & educational media — courses, audiobooks, eBooks from top universities.', link: 'https://www.openculture.com/', level: 'free', tags: ['media', 'ebooks'] },
      { title: 'Class Central', desc: 'Search engine for free online courses from universities worldwide.', link: 'https://www.classcentral.com/', level: 'free', tags: ['aggregator'] },
      { title: 'Exercism', desc: 'Practice coding in 75+ programming languages with real exercises and mentor feedback.', link: 'https://exercism.org/', level: 'free', tags: ['practice', 'mentorship'] },
      { title: 'SoloLearn', desc: 'Practice coding with quizzes & challenges.', link: 'https://www.sololearn.com', level: 'free', tags: ['practice'] },
      { title: 'Frontend Mentor', desc: 'Frontend challenges.', link: 'https://www.frontendmentor.io/challenges', level: 'free', tags: ['frontend', 'challenges'] },
      { title: 'Frontend Practice', desc: 'Frontend projects.', link: 'https://www.frontendpractice.com/projects', level: 'free', tags: ['frontend'] },
      { title: 'Web Dev Daily', desc: 'Daily challenges.', link: 'https://www.webdevdaily.io/challenges/all', level: 'free', tags: ['challenges'] },
      { title: 'CSS Battle', desc: 'CSS coding challenges.', link: 'https://cssbattle.dev/', level: 'free', tags: ['css', 'challenges'] },
      { title: 'JavaScript30', desc: '30-day JavaScript challenge.', link: 'https://javascript30.com/', level: 'free', tags: ['javascript', 'challenge'] },
      { title: 'BigFrontend', desc: 'Frontend interview questions.', link: 'https://bigfrontend.dev/', level: 'free', tags: ['interview', 'frontend'] },
      { title: 'JS Challenger', desc: 'JavaScript exercises.', link: 'https://jschallenger.com/', level: 'free', tags: ['javascript', 'exercises'] },
      { title: 'Learn Anything', desc: 'Explore interactive roadmaps and learning paths for thousands of topics.', link: 'https://learn-anything.xyz/', level: 'free', tags: ['roadmaps'] },
      { title: 'Roadmap.sh', desc: 'Developer roadmaps for different tech careers.', link: 'https://roadmap.sh', level: 'free', tags: ['roadmaps'] },
      { title: 'Goalkicker Books', desc: 'Download free programming books covering web, mobile, cloud, and backend technologies.', link: 'https://books.goalkicker.com/', level: 'free', tags: ['books'] },
      { title: 'goalkicker.com', desc: 'Download coding eBooks for FREE — all in one place.', link: 'https://goalkicker.com', level: 'free', tags: ['ebooks'] },
      { title: 'HTMLRev', desc: 'Download free HTML templates, landing pages, portfolios, and UI components. 2000+ templates.', link: 'https://htmlrev.com/', level: 'free', tags: ['templates'] },
      { title: 'Codewithrandom.com', desc: '1000+ HTML, CSS, and JavaScript projects.', link: 'https://www.codewithrandom.com/', level: 'free', tags: ['projects'] },
      { title: 'Portfolio Templates', desc: '100+ ready-made portfolio templates with full source code.', link: 'https://www.codewithrandom.com/2024/03/24/free-coding-resources/', level: 'free', tags: ['portfolio'] },
      { title: 'Portfolio Ideas', desc: '150+ portfolio templates + source code.', link: 'https://portfolio-ideas.vercel.app/portfolio.html', level: 'free', tags: ['portfolio'] },
      { title: 'Harvard Free Courses', desc: 'Computer Science, AI & ML, Data Science, Web Development, Cybersecurity, Business & Leadership.', link: 'https://www.harvard.edu/', level: 'free', tags: ['harvard', 'courses'] }
    ]
  },

  // ============================================================
  // 10. MOBILE CODING APPS
  // ============================================================
  {
    id: 'mobile-apps',
    title: 'Mobile Coding Apps',
    emoji: '📱',
    desc: 'Learn coding anytime, anywhere on your phone.',
    resources: [
      { title: 'Mimo', desc: 'Learn coding with short daily lessons & real projects.', link: 'https://mimo.org', level: 'free', tags: ['mobile', 'lessons'] },
      { title: 'SoloLearn', desc: 'Practice coding with quizzes & challenges.', link: 'https://www.sololearn.com', level: 'free', tags: ['mobile', 'practice'] },
      { title: 'Programming Hub', desc: 'Learn 20+ languages in easy way.', link: 'https://programminghub.io', level: 'free', tags: ['mobile', 'languages'] },
      { title: 'Grasshopper', desc: 'Learn JavaScript with fun games (by Google).', link: 'https://grasshopper.app', level: 'free', tags: ['javascript', 'google'] },
      { title: 'Codecademy Go', desc: 'Learn concepts anytime on your phone.', link: 'https://www.codecademy.com/mobile', level: 'free', tags: ['mobile', 'codecademy'] },
      { title: 'Encode', desc: 'Simple app for HTML, CSS & basics.', link: 'https://encode.app', level: 'free', tags: ['html', 'css'] },
      { title: 'Enki', desc: 'Daily coding lessons with progress tracking.', link: 'https://enki.com', level: 'free', tags: ['daily', 'lessons'] },
      { title: 'Programming Hero', desc: 'Fun + gamified coding experience.', link: 'https://www.programming-hero.com', level: 'free', tags: ['gamified'] }
    ]
  },

  // ============================================================
  // 11. CODING GAMES
  // ============================================================
  {
    id: 'games',
    title: 'Coding Games',
    emoji: '🎮',
    desc: 'Learn programming through play. From CSS selectors to SQL mysteries.',
    resources: [
      { title: 'CodinGame', desc: 'Coding challenges in game format.', link: 'https://www.codingame.com', level: 'free', tags: ['games', 'challenges'] },
      { title: 'CSS Diner', desc: 'Learn CSS selectors.', link: 'https://flukeout.github.io/', level: 'free', tags: ['css', 'game'] },
      { title: 'Flexbox Froggy', desc: 'Learn CSS Flexbox.', link: 'https://flexboxfroggy.com/', level: 'free', tags: ['css', 'flexbox'] },
      { title: 'Flexbox Defense', desc: 'Tower defense with Flexbox.', link: 'http://www.flexboxdefense.com/', level: 'free', tags: ['css', 'flexbox'] },
      { title: 'Grid Garden', desc: 'Learn CSS Grid.', link: 'https://cssgridgarden.com/', level: 'free', tags: ['css', 'grid'] },
      { title: 'CodeCombat', desc: 'RPG-style coding game.', link: 'https://codecombat.com', level: 'free', tags: ['rpg', 'game'] },
      { title: 'Scratch', desc: 'Visual programming for beginners.', link: 'https://scratch.mit.edu', level: 'free', tags: ['visual', 'beginners'] },
      { title: 'Tynker', desc: 'Coding for kids.', link: 'https://www.tynker.com', level: 'free', tags: ['kids'] },
      { title: 'SQL Murder Mystery', desc: 'Learn SQL with mystery game.', link: 'https://mystery.knightlab.com/', level: 'free', tags: ['sql', 'game'] },
      { title: 'Untrusted', desc: 'JavaScript puzzle game.', link: 'https://alexnisnevich.github.io/untrusted/', level: 'free', tags: ['javascript', 'puzzle'] },
      { title: 'Elevator Saga', desc: 'JavaScript elevator programming.', link: 'https://play.elevatorsaga.com/', level: 'free', tags: ['javascript', 'game'] },
      { title: 'CheckiO', desc: 'Python/JS coding challenges.', link: 'https://checkio.org', level: 'free', tags: ['python', 'js'] }
    ]
  },

  // ============================================================
  // 12. FULL STACK PROJECTS (with Source Code)
  // ============================================================
  {
    id: 'fullstack-projects',
    title: 'Full Stack Projects (Source Code)',
    emoji: '💼',
    desc: 'Build real-world applications. Every project includes source code.',
    resources: [
      { title: 'AI SaaS Tool', desc: 'Learn authentication, subscriptions, APIs & AI integration.', link: 'https://github.com/ayusshrathore/ai-saas', level: 'free', tags: ['ai', 'saas'] },
      { title: 'Real-Time Collaborative Code Editor', desc: 'Just like Google Docs but for coding. Multiple users can edit code simultaneously.', link: 'https://github.com/Mohitur669/Realtime-Collaborative-Code-Editor', level: 'free', tags: ['collaboration', 'editor'] },
      { title: 'Trading Simulator', desc: 'A virtual stock trading platform to practice trading strategies.', link: 'https://github.com/nikolatechie/trading-simulator', level: 'free', tags: ['trading', 'finance'] },
      { title: 'Microservices E-Commerce Platform', desc: 'Learn scalable architecture using microservices, APIs, and backend systems.', link: 'https://github.com/ShahandFahad/E-Commerce', level: 'free', tags: ['ecommerce', 'microservices'] },
      { title: 'Real-Time Chat Application', desc: 'Build a WhatsApp-like chat app with real-time messaging.', link: 'https://youtu.be/B_I8nD-bvl0?si=M4N5p1wiPiBW-XA8', level: 'free', tags: ['chat', 'realtime'] },
      { title: 'Developer Portfolio SaaS', desc: 'Create a platform where developers can generate their own portfolio websites.', link: 'https://github.com/akhilub/portfolio-saas', level: 'free', tags: ['portfolio', 'saas'] },
      { title: 'Job Referral Platform', desc: 'A platform where users can request and provide job referrals.', link: 'https://github.com/RutikKulkarni/ReferralNetworkHub', level: 'free', tags: ['jobs', 'referrals'] },
      { title: 'Food Delivery App', desc: 'Build your own Swiggy/Zomato-like full stack application.', link: 'https://github.com/Mshandev/Food-Delivery', level: 'free', tags: ['food', 'delivery'] },
      { title: 'Ride Sharing App', desc: 'Learn how ride booking systems like Uber work.', link: 'https://github.com/codinggita/ride_share', level: 'free', tags: ['uber', 'ride'] },
      { title: 'Video Streaming Platform', desc: 'Build your own YouTube-like video streaming platform.', link: 'https://github.com/soumanpaul/Video-streaming-web-app', level: 'free', tags: ['video', 'streaming'] },
      { title: "Rubik's Cube Portfolio", desc: 'Unique portfolio website using HTML and CSS.', link: 'https://github.com/Brahmpreett/Rubiks-Cube', level: 'free', tags: ['portfolio'] },
      { title: '25+ Full Stack Projects Playlist', desc: 'YouTube playlist with full stack project tutorials.', link: 'https://www.youtube.com/playlist?list=PLjwM_8O3suyOFd8LTFqgw9v7MqPNtgINA', level: 'free', tags: ['playlist', 'tutorials'] },
      { title: 'Backend Projects Guide', desc: 'Backend projects from beginner to advanced.', link: 'https://www.bosscoderacademy.com/blog/backend-projects-ideas', level: 'free', tags: ['backend'] },
      { title: 'Full Stack Projects with Source Code', desc: '100+ project ideas + resources.', link: 'https://www.bosscoderacademy.com/blog/best-full-stack-projects-with-source-code', level: 'free', tags: ['full stack'] }
    ]
  },

  // ============================================================
  // 13. FREE APIS (General)
  // ============================================================
  {
    id: 'apis',
    title: 'Free APIs (General)',
    emoji: '🔌',
    desc: 'Build projects with real data. No API key? No problem.',
    resources: [
      { title: 'YouTube API', desc: 'Access YouTube data.', link: 'https://developers.google.com/youtube/v3', level: 'free', tags: ['youtube'] },
      { title: 'Spotify Web API', desc: 'Access Spotify music data.', link: 'https://developer.spotify.com/documentation/web-api', level: 'free', tags: ['music'] },
      { title: 'NewsAPI', desc: 'Get news articles from around the world.', link: 'https://newsapi.org/', level: 'free', tags: ['news'] },
      { title: 'Random User API', desc: 'Generate random user data.', link: 'https://randomuser.me/', level: 'free', tags: ['users'] },
      { title: 'Unsplash API', desc: 'Access high-quality photos.', link: 'https://unsplash.com/developers', level: 'free', tags: ['photos'] },
      { title: 'JokeAPI', desc: 'Get jokes for your projects.', link: 'https://sv443.net/jokeapi/v2/', level: 'free', tags: ['jokes'] },
      { title: 'ExchangeRate API', desc: 'Currency exchange rates.', link: 'https://www.fastforex.io/', level: 'free', tags: ['currency'] },
      { title: 'NASA Open API', desc: 'Access NASA data and images.', link: 'https://api.nasa.gov/', level: 'free', tags: ['nasa', 'space'] },
      { title: 'Pokemon API', desc: 'Access Pokemon data.', link: 'https://pokeapi.co/', level: 'free', tags: ['pokemon'] },
      { title: 'MealDB API', desc: 'Access meal and recipe data.', link: 'https://www.themealdb.com/', level: 'free', tags: ['food'] },
      { title: 'Marvel API', desc: 'Access Marvel comics data.', link: 'https://www.marvel.com/', level: 'free', tags: ['marvel'] },
      { title: 'REST Countries API', desc: 'Get country data.', link: 'https://restcountries.com/', level: 'free', tags: ['countries'] },
      { title: 'MapBox APIs', desc: 'Maps and location services.', link: 'https://www.mapbox.com/', level: 'free', tags: ['maps'] },
      { title: 'GIPHY API', desc: 'Access GIFs and stickers.', link: 'https://developers.giphy.com/', level: 'free', tags: ['gifs'] },
      { title: 'Wordnik API', desc: 'Access dictionary and word data.', link: 'https://developer.wordnik.com/', level: 'free', tags: ['words'] },
      { title: 'Polygon API', desc: 'Blockchain and crypto data.', link: 'https://docs.polygon.technology/tools/matic-js/api-architecture', level: 'free', tags: ['blockchain'] },
      { title: 'Maryel API', desc: 'API service.', link: 'https://www.maryel.com/', level: 'free', tags: ['api'] }
    ]
  },

  // ============================================================
  // 14. FREE AI APIS
  // ============================================================
  {
    id: 'ai-apis',
    title: 'Free AI APIs',
    emoji: '🤖',
    desc: 'Add AI to your projects without spending a fortune.',
    resources: [
      { title: 'Google Gemini API', desc: "Google's generative AI models.", link: 'https://ai.google.dev', level: 'free', tags: ['google', 'llm'] },
      { title: 'Groq', desc: 'Ultra-fast LLM inference.', link: 'https://console.groq.com', level: 'free', tags: ['fast', 'llm'] },
      { title: 'OpenRouter', desc: 'Unified interface, 500+ models, 80+ providers.', link: 'https://openrouter.ai', level: 'free', tags: ['models', 'providers'] },
      { title: 'Cloudflare Workers AI', desc: '50+ open-source models, serverless GPU, free tier available.', link: 'https://developers.cloudflare.com/workers-ai', level: 'free', tags: ['cloudflare', 'models'] },
      { title: 'Pollinations.ai', desc: 'No API key needed. Text/image/audio/video, 10K weekly active devs.', link: 'https://pollinations.ai', level: 'free', tags: ['no key', 'multimodal'] },
      { title: 'Hugging Face Inference API', desc: 'Hundreds of ML models, JS/Python SDKs.', link: 'https://huggingface.co/inference-api', level: 'free', tags: ['hugging face', 'models'] },
      { title: 'Cerebras', desc: 'Extremely fast AI inference.', link: 'https://cloud.cerebras.ai', level: 'free', tags: ['fast', 'inference'] }
    ]
  },

  // ============================================================
  // 15. ADDITIONAL AI APIS (To Get Hired)
  // ============================================================
  {
    id: 'ai-apis-hire',
    title: 'AI APIs to Get Hired',
    emoji: '🚀',
    desc: 'Use these AI APIs in your projects to stand out.',
    resources: [
      { title: 'OpenAI API', desc: 'Build chatbots, AI agents & coding tools.', link: 'https://developers.openai.com/api/docs', level: 'free', tags: ['openai', 'chatbots'] },
      { title: 'Claude API', desc: 'AI apps, coding & advanced reasoning.', link: 'https://docs.anthropic.com', level: 'free', tags: ['claude', 'reasoning'] },
      { title: 'Gemini API', desc: 'Build text, image & multimodal AI apps.', link: 'https://ai.google.dev', level: 'free', tags: ['google', 'multimodal'] },
      { title: 'Stability AI', desc: 'Generate & edit AI images.', link: 'https://platform.stability.ai', level: 'free', tags: ['images', 'ai'] },
      { title: 'Hugging Face', desc: 'Access thousands of open-source AI models.', link: 'https://huggingface.co/docs/api-inference/index', level: 'free', tags: ['models'] },
      { title: 'ElevenLabs', desc: 'Add realistic AI voices to your apps.', link: 'https://elevenlabs.io/docs', level: 'free', tags: ['voice', 'audio'] },
      { title: 'AssemblyAI', desc: 'Speech-to-text & audio intelligence.', link: 'https://assemblyai.com/docs', level: 'free', tags: ['speech', 'audio'] }
    ]
  },

  // ============================================================
  // 16. AI MODELS & TOOLS
  // ============================================================
  {
    id: 'ai-tools',
    title: 'AI Models & Tools',
    emoji: '🧠',
    desc: 'Open-source LLMs, image-to-3D, free frontier models, and AI coding assistants.',
    resources: [
      { title: 'GigaChat 3.5 Reasoning', desc: 'Open-source LLM with step-by-step reasoning, MIT license, fp8/bf16 weights.', link: 'https://huggingface.co', level: 'free', tags: ['llm', 'reasoning'] },
      { title: 'Ashna AI', desc: 'Free access to frontier AI models (Astra, Sol) with no paywall.', link: 'https://app.ashna.ai', level: 'free', tags: ['frontier', 'free'] },
      { title: 'Tripo AI', desc: 'Turn images into 3D models. Get 500 FREE credits as a new user.', link: 'https://shorturl.at/pLUNP', level: 'free', code: 'TLDM0Y', tags: ['3d', 'images'] },
      { title: 'Freebuff', desc: 'Free Claude Code alternative — AI coding agent, app builder, chat.', link: 'https://freebuff.com/', level: 'free', tags: ['coding', 'agent'] },
      { title: "God's Eye View", desc: 'AI tool (explore capabilities).', link: 'https://godseyeview.ai/', level: 'free', tags: ['ai'] },
      { title: 'Paperclip', desc: 'AI tool.', link: 'https://paperclip.ing/', level: 'free', tags: ['ai'] },
      { title: 'Vibe Trading', desc: 'Trading tool.', link: 'https://vibetrading.wiki/home/', level: 'free', tags: ['trading'] },
      { title: 'Voice Studio', desc: 'Voice AI tool.', link: 'https://voicestudio.sh/', level: 'free', tags: ['voice'] },
      { title: 'OpenMAIC', desc: 'AI chat tool.', link: 'https://openmaic.chat/', level: 'free', tags: ['chat'] },
      { title: 'Magnitude', desc: 'AI development tool.', link: 'https://magnitude.dev/', level: 'free', tags: ['development'] },
      { title: 'OpenSEO', desc: 'SEO tool.', link: 'https://openseo.so/', level: 'free', tags: ['seo'] }
    ]
  },

  // ============================================================
  // 17. YOUTUBE COURSES (TECH)
  // ============================================================
  {
    id: 'youtube-courses',
    title: 'YouTube Courses (Tech)',
    emoji: '🎥',
    desc: 'Free full-length video courses from top creators.',
    resources: [
      { title: 'Web Dev For Beginners', desc: 'Full web development course.', link: 'https://www.youtube.com/watch?v=nu_pCVPKzTk', level: 'free', tags: ['web dev'] },
      { title: 'Frontend Web Development', desc: 'Frontend web development course.', link: 'https://youtube.com/watch?v=zJSY8tbf_ys', level: 'free', tags: ['frontend'] },
      { title: 'React Full Course', desc: 'Full React course for free.', link: 'https://youtu.be/CgkZ7MvWUAA?si=ZK-gzLJe5WCxnZf1', level: 'free', tags: ['react'] },
      { title: 'HTML & CSS Full Course', desc: 'Full HTML & CSS course.', link: 'https://www.youtube.com/watch?v=G3e-cpL7ofc', level: 'free', tags: ['html', 'css'] },
      { title: 'Java Full Course', desc: 'Full Java course.', link: 'https://youtube.com/watch?v=bm0OyhwFDuY', level: 'free', tags: ['java'] },
      { title: 'Git & GitHub', desc: 'Git & GitHub crash course.', link: 'https://www.youtube.com/watch?v=hrTQipWp6co', level: 'free', tags: ['git'] },
      { title: 'JavaScript Course', desc: 'Full JavaScript course.', link: 'https://youtube.com/watch?v=W6NZfCO5SIk', level: 'free', tags: ['javascript'] },
      { title: 'MERN Stack Course', desc: 'Full MERN stack course.', link: 'https://www.youtube.com/watch?v=F9gB5b4jg0I', level: 'free', tags: ['mern'] },
      { title: 'Python Course', desc: 'Full Python course.', link: 'https://youtube.com/watch?v=UrsmFxElp5k', level: 'free', tags: ['python'] },
      { title: 'C Full Course', desc: 'Full C programming course.', link: 'https://www.youtube.com/watch?v=irqbmMNs2Bo', level: 'free', tags: ['c'] },
      { title: 'C++ Full Course', desc: 'Full C++ course.', link: 'https://www.youtube.com/watch?v=-TkoO8Z07hI', level: 'free', tags: ['c++'] }
    ]
  },

  // ============================================================
  // 18. PROGRAMMER VIDEOS (MUST WATCH)
  // ============================================================
  {
    id: 'programmer-videos',
    title: 'Programmer Videos (Must Watch)',
    emoji: '🎬',
    desc: 'Videos that change how you think about programming.',
    resources: [
      { title: 'Build Logic in Programming', desc: 'Learn to build programming logic.', link: 'https://youtu.be/HbNfCM4ilBQ', level: 'free', tags: ['logic'] },
      { title: 'Think Like a Programmer', desc: 'Develop a programmer mindset.', link: 'https://youtu.be/QHdJscEpxaU', level: 'free', tags: ['mindset'] },
      { title: 'Git & GitHub Crash Course', desc: 'Essential Git & GitHub skills.', link: 'https://youtu.be/vA5TTz6BXhY', level: 'free', tags: ['git'] },
      { title: 'System Design for Beginners', desc: 'Introduction to system design.', link: 'https://youtu.be/m8Icp_Cid5o', level: 'free', tags: ['system design'] },
      { title: 'Harvard CS50 — Full Computer Science Course', desc: "Harvard's legendary CS50 course.", link: 'https://youtu.be/8mAITcNt710', level: 'free', tags: ['cs50', 'harvard'] },
      { title: 'NeetCode 150 — Coding Interview Prep', desc: 'Coding interview preparation.', link: 'https://youtu.be/T0u5nwSA0w0', level: 'free', tags: ['interview'] },
      { title: '10 Common Coding Interview Problems', desc: 'Practice common interview problems.', link: 'https://youtu.be/Peq4GCPNC5c', level: 'free', tags: ['interview'] }
    ]
  },

  // ============================================================
  // 19. SOFT SKILLS VIDEOS
  // ============================================================
  {
    id: 'soft-skills',
    title: 'Soft Skills Videos',
    emoji: '🗣️',
    desc: 'Skills that matter as much as coding — leadership, speaking, networking.',
    resources: [
      { title: 'Master Leadership', desc: 'Leadership skills for developers.', link: 'https://youtu.be/qp0HIF3SfI4?si=CnUTb6O5IBO0Wbce', level: 'free', tags: ['leadership'] },
      { title: 'Public Speaking', desc: 'Improve your public speaking.', link: 'https://youtu.be/eIho2S0ZahI?si=1B17Y6rG18XRD1t8', level: 'free', tags: ['speaking'] },
      { title: 'Body Language', desc: 'Understand and improve body language.', link: 'https://youtu.be/Ks-_Mh1QhMc?si=pG7oJOhyAVaLnnwL', level: 'free', tags: ['body language'] },
      { title: 'Master Networking', desc: 'Build your professional network.', link: 'https://youtu.be/Cj98mr_wUA0?si=PSWwzmN_Wqcpif2M', level: 'free', tags: ['networking'] },
      { title: 'Master Confidence', desc: 'Build unshakeable confidence.', link: 'https://youtu.be/KmOAznOQX-g?si=DzU9KdVTrBM9_wgP', level: 'free', tags: ['confidence'] }
    ]
  },

  // ============================================================
  // 20. META CERTIFICATIONS (FREE for CS Students)
  // ============================================================
  {
    id: 'meta-certs',
    title: 'Meta Certifications (Free)',
    emoji: '📜',
    desc: 'Meta just made these courses free for CS students.',
    resources: [
      { title: 'Meta Full Stack Developer', desc: 'Complete full-stack specialization.', link: 'https://coursera.org/specializations/meta-full-stack-developer', level: 'free', tags: ['full stack'] },
      { title: 'Meta Front-End Developer', desc: 'Frontend certification.', link: 'https://coursera.org/professional-certificates/meta-front-end-developer', level: 'free', tags: ['frontend'] },
      { title: 'Meta Back-End Developer', desc: 'Backend certification.', link: 'https://coursera.org/professional-certificates/meta-back-end-developer', level: 'free', tags: ['backend'] },
      { title: 'Meta iOS Developer', desc: 'iOS development certification.', link: 'https://coursera.org/professional-certificates/meta-ios-developer', level: 'free', tags: ['ios'] },
      { title: 'Meta Android Developer', desc: 'Android development certification.', link: 'https://coursera.org/professional-certificates/meta-android-developer', level: 'free', tags: ['android'] },
      { title: 'Programming in Python', desc: 'Python fundamentals.', link: 'https://coursera.org/learn/programming-in-python', level: 'free', tags: ['python'] },
      { title: 'Programming with JavaScript', desc: 'JavaScript core concepts.', link: 'https://coursera.org/learn/programming-with-javascript', level: 'free', tags: ['javascript'] },
      { title: 'Advanced Programming in Swift', desc: 'Swift advanced topics.', link: 'https://coursera.org/learn/advanced-programming-in-swift', level: 'free', tags: ['swift'] },
      { title: 'Coding Interview Preparation', desc: 'Technical interview prep.', link: 'https://coursera.org/learn/coding-interview-preparation', level: 'free', tags: ['interview'] },
      { title: 'Introduction to Databases', desc: 'Database fundamentals.', link: 'https://coursera.org/learn/introduction-to-databases', level: 'free', tags: ['databases'] },
      { title: 'Database Structures & Management with MySQL', desc: 'MySQL database management.', link: 'https://coursera.org/learn/database-structures-and-management-with-mysql', level: 'free', tags: ['mysql'] }
    ]
  },

  // ============================================================
  // 21. FREE AI & CODING COURSES
  // ============================================================
  {
    id: 'free-courses',
    title: 'Free AI & Coding Courses',
    emoji: '🎓',
    desc: 'Google, Cisco, DeepLearning.AI, MIT, and more — all free.',
    resources: [
      { title: 'Google — Machine Learning Crash Course', desc: "Google's ML crash course.", link: 'https://developers.google.com/machine-learning/crash-course', level: 'free', tags: ['ml', 'google'] },
      { title: 'Google — Generative AI', desc: 'Google Cloud Generative AI path.', link: 'https://www.cloudskillsboost.google/paths/118', level: 'free', tags: ['generative ai', 'google'] },
      { title: 'DeepLearning.AI — AI Python for Beginners', desc: 'AI Python for beginners.', link: 'https://www.deeplearning.ai/courses/ai-python-for-beginners', level: 'free', tags: ['python', 'ai'] },
      { title: 'MongoDB University', desc: 'Free MongoDB courses.', link: 'https://learn.mongodb.com', level: 'free', tags: ['mongodb'] },
      { title: 'Cisco Networking Academy', desc: 'Free networking & IT courses.', link: 'https://www.netacad.com', level: 'free', tags: ['networking', 'cisco'] },
      { title: 'DeepLearning.AI — Pair Programming with LLMs', desc: 'Learn to pair program with LLMs.', link: 'https://www.deeplearning.ai/courses/pair-programming-llm', level: 'free', tags: ['llm'] },
      { title: 'Kaggle — Intro to SQL', desc: 'Free SQL course.', link: 'https://www.kaggle.com/learn/intro-to-sql', level: 'free', tags: ['sql'] },
      { title: 'MIT Generative AI Course', desc: 'Free Generative AI course from MIT.', link: 'https://www.youtube.com/playlist?list=PLXV9Vh2jYcjbnv67sXNDJiO8MWLA3ZJKR', level: 'free', tags: ['generative ai', 'mit'] },
      { title: 'Free Udemy Courses', desc: 'Coding, AI, business, design & more.', link: 'https://www.udemy.com/courses/free/', level: 'free', tags: ['udemy'] },
      { title: 'DevOps Free Course + Certificate', desc: 'Free DevOps course with certificate.', link: 'https://shorturl.at/zhuaO', level: 'free', tags: ['devops'] },
      { title: 'Free SQL Courses (30-day challenge)', desc: '3 free SQL courses — SELECT, JOINs, CTEs, Window Functions, Analytics, ETL.', link: 'https://shorturl.at/oJWAH', level: 'free', tags: ['sql'] }
    ]
  },

  // ============================================================
  // 22. FREE CERTIFICATES
  // ============================================================
  {
    id: 'certificates',
    title: 'Free Certificates',
    emoji: '🏅',
    desc: 'Earn certificates from Accenture and more.',
    resources: [
      { title: 'Accenture — Gen AI Certificate', desc: 'Free Gen AI certificate.', link: 'https://www.l2eportal.accenture.com/curso/introduction-gen-ai', level: 'free', tags: ['gen ai', 'accenture'] },
      { title: 'Accenture — Cybersecurity Certificate', desc: 'Free Cybersecurity certificate.', link: 'https://www.l2eportal.accenture.com/curso/fundamentals-cibersecurity-I', level: 'free', tags: ['cybersecurity', 'accenture'] }
    ]
  },

  // ============================================================
  // 23. JOB PLATFORMS
  // ============================================================
  {
    id: 'jobs',
    title: 'Job Platforms',
    emoji: '💼',
    desc: 'Find remote jobs, internships, and freelance work.',
    resources: [
      { title: 'Internshala', desc: 'Best for internships and fresher roles.', link: 'https://internshala.com/', level: 'free', tags: ['internships', 'india'] },
      { title: 'Wellfound', desc: 'Startup jobs for developers, designers & marketers.', link: 'https://wellfound.com/', level: 'free', tags: ['startups'] },
      { title: 'Indeed', desc: 'One of the largest job search engines.', link: 'https://in.indeed.com', level: 'free', tags: ['jobs'] },
      { title: 'AngelList', desc: 'Popular platform for startup job opportunities.', link: 'https://www.angellist.com/', level: 'free', tags: ['startups'] },
      { title: 'LinkedIn', desc: 'Best for jobs + professional networking.', link: 'https://in.linkedin.com/', level: 'free', tags: ['networking'] },
      { title: 'Naukri', desc: 'One of the most popular job portals in India.', link: 'https://www.naukri.com/', level: 'free', tags: ['india'] },
      { title: 'Glassdoor', desc: 'Find jobs with company reviews and salary insights.', link: 'https://glassdoor.com/', level: 'free', tags: ['reviews'] },
      { title: 'HackerRank', desc: 'Coding challenges and hiring opportunities.', link: 'https://www.hackerrank.com', level: 'free', tags: ['coding challenges'] },
      { title: 'Cutshort', desc: 'Great platform for startup tech jobs.', link: 'https://cutshort.io/', level: 'free', tags: ['startups'] },
      { title: 'ytjobs.co', desc: 'Find creator economy & YouTube-related jobs.', link: 'https://www.ytjobs.co', level: 'free', tags: ['youtube'] },
      { title: 'remoteko.com', desc: 'One of the best platforms for fully remote tech jobs.', link: 'https://www.remoteko.com', level: 'free', tags: ['remote'] },
      { title: 'contra.com', desc: 'Freelance projects without platform fees.', link: 'https://www.contra.com', level: 'free', tags: ['freelance'] },
      { title: 'indiefolio.com', desc: 'Great for designers & creative professionals.', link: 'https://www.indiefolio.com', level: 'free', tags: ['designers'] },
      { title: 'weworkremotely.com', desc: 'Remote jobs from companies worldwide.', link: 'https://www.weworkremotely.com', level: 'free', tags: ['remote'] },
      { title: 'flexjobs.com', desc: 'Verified remote & flexible work opportunities.', link: 'https://www.flexjobs.com', level: 'free', tags: ['remote'] },
      { title: 'remotive.com', desc: 'Remote jobs + startup opportunities.', link: 'https://www.remotive.com', level: 'free', tags: ['remote'] },
      { title: 'toptal.com', desc: 'High-paying freelance jobs for top talent.', link: 'https://www.toptal.com', level: 'free', tags: ['freelance'] },
      { title: 'hirst.tech', desc: 'Best for Indian tech jobs & startups.', link: 'https://www.hirst.tech', level: 'free', tags: ['india'] },
      { title: 'Remote OK', desc: 'Remote jobs.', link: 'https://remoteok.com', level: 'free', tags: ['remote'] },
      { title: 'YC Work at a Startup', desc: 'Jobs at Y Combinator startups.', link: 'https://www.workatastartup.com', level: 'free', tags: ['startups'] },
      { title: 'Working Nomads', desc: 'Remote jobs.', link: 'https://www.workingnomads.com/jobs', level: 'free', tags: ['remote'] },
      { title: 'Himalayas', desc: 'Remote jobs.', link: 'https://himalayas.app/jobs', level: 'free', tags: ['remote'] },
      { title: 'Hirist', desc: 'Tech jobs with direct company connections.', link: 'https://www.hirist.com', level: 'free', tags: ['india'] }
    ]
  },

  // ============================================================
  // 24. FREE VIRTUAL INTERNSHIPS
  // ============================================================
  {
    id: 'internships',
    title: 'Free Virtual Internships',
    emoji: '🎓',
    desc: 'Get real-world experience from top companies — without leaving home.',
    resources: [
      { title: 'JPMorgan Chase — Software Engineering', desc: 'Free virtual internship.', link: 'https://www.theforage.com/simulations', level: 'free', tags: ['jpmorgan'] },
      { title: 'Goldman Sachs — Software Engineering', desc: 'Free virtual internship.', link: 'https://www.theforage.com/simulations', level: 'free', tags: ['goldman sachs'] },
      { title: 'Electronic Arts — Software Engineering', desc: 'Free virtual internship.', link: 'https://www.theforage.com/simulations', level: 'free', tags: ['ea'] },
      { title: 'Skyscanner — Front-End Engineering', desc: 'Free virtual internship.', link: 'https://www.theforage.com/simulations', level: 'free', tags: ['skyscanner'] },
      { title: 'Hewlett Packard Enterprise — Software Engineering', desc: 'Free virtual internship.', link: 'https://www.theforage.com/simulations', level: 'free', tags: ['hpe'] },
      { title: 'Quantium — Software Engineering', desc: 'Free virtual internship.', link: 'https://www.theforage.com/simulations', level: 'free', tags: ['quantium'] },
      { title: 'JPMorgan Chase — Advanced Software Engineering', desc: 'Free virtual internship.', link: 'https://www.theforage.com/simulations', level: 'free', tags: ['jpmorgan'] },
      { title: 'The Forage — All Simulations', desc: 'Free virtual internships from top companies.', link: 'https://www.theforage.com/simulations', level: 'free', tags: ['internships'] }
    ]
  },

  // ============================================================
  // 25. RESUME TEMPLATES
  // ============================================================
  {
    id: 'resume-templates',
    title: 'Resume Templates (ATS Score)',
    emoji: '📄',
    desc: '90+ ATS score resume templates that will get you hired.',
    resources: [
      { title: 'FAANGPath Simple Template', desc: 'ATS-friendly resume template.', link: 'https://www.overleaf.com/latex/templates/faangpath-simple-template/npsfpdqnkmbc', level: 'free', tags: ['ats', 'resume'] },
      { title: 'Deedy Resume Reversed', desc: 'Popular ATS-friendly resume template.', link: 'https://www.overleaf.com/latex/templates/deedy-resume-reversed/hqnfwfgjbddt', level: 'free', tags: ['ats', 'resume'] },
      { title: 'RendercV Engineering Resume', desc: 'ATS-friendly resume template.', link: 'https://www.overleaf.com/latex/templates/rendercv-engineeringresumes-theme/shwqvsxdgkyj', level: 'free', tags: ['ats', 'resume'] },
      { title: "Yuan's Resume Template", desc: 'ATS-friendly resume template.', link: 'https://www.overleaf.com/latex/templates/yuans-resume-template/hzkxnqxyfgnr', level: 'free', tags: ['ats', 'resume'] },
      { title: 'RendercV Classic Theme', desc: 'ATS-friendly resume template.', link: 'https://www.overleaf.com/latex/templates/rendercv-classic-theme/szbrrwrnrfksk.pdf', level: 'free', tags: ['ats', 'resume'] }
    ]
  },

  // ============================================================
  // 26. RESUME & INTERVIEW PROMPTS
  // ============================================================
  {
    id: 'prompts',
    title: 'Resume & Interview Prompts',
    emoji: '🤖',
    desc: 'AI prompts that fix your resume and prep you for interviews.',
    resources: [
      { title: '7 Resume Prompts for Claude AI', desc: 'Fix your resume, match it to job descriptions, prep for interviews.', link: 'https://docs.google.com/document/d/1jexMzztX2huNVDa-H2silcoosKqVcD4lIpCJYLjl2SM/mobilebasic', level: 'free', tags: ['claude', 'resume'] },
      { title: '7 Resume Prompts for ChatGPT', desc: 'Fix your resume, match it to job descriptions, prep for interviews.', link: 'https://docs.google.com/document/d/1SRaOWMhdIN65x5uOo3VHKt8P_6mI4KwxP4DqNzfBi3M/mobilebasic', level: 'free', tags: ['chatgpt', 'resume'] },
      { title: 'Free Courses Access Guide', desc: 'Learn how to access paid courses for free — Free Trial method, Financial Aid method, step-by-step instructions.', link: 'https://docs.google.com/document/d/1x4_lWuBeHnNR7y5yWQhrnlrtnRwTEOanKmDJaQnEd-s/mobilebasic', level: 'free', tags: ['free courses'] }
    ]
  },

  // ============================================================
  // 27. INTERVIEW PREPARATION
  // ============================================================
  {
    id: 'interview-prep',
    title: 'Interview Preparation',
    emoji: '🎯',
    desc: 'Everything you need to crack technical and behavioural interviews.',
    resources: [
      { title: 'Prachub', desc: '18,000+ real interview questions from 839 companies (Google, Amazon, Meta, OpenAI & more). DSA, Coding, SQL & System Design. Blind 75 & interview prep guides.', link: 'https://prachub.com/', level: 'free', tags: ['interview', 'questions'] },
      { title: '30 Behavioural Interview Questions', desc: '30 important behavioural interview questions you should prepare before your next interview.', link: 'https://medium.com/@loki.collabs/30-most-important-behavioural-interview-questions-956eb3117e83', level: 'free', tags: ['behavioural'] },
      { title: 'NeetCode 150', desc: 'Coding interview prep.', link: 'https://youtu.be/T0u5nwSA0w0', level: 'free', tags: ['coding', 'interview'] },
      { title: '10 Common Coding Interview Problems', desc: 'Practice common interview problems.', link: 'https://youtu.be/Peq4GCPNC5c', level: 'free', tags: ['coding', 'interview'] },
      { title: 'System Design for Beginners', desc: 'Introduction to system design.', link: 'https://youtu.be/m8Icp_Cid5o', level: 'free', tags: ['system design'] },
      { title: 'All Company Placement Material', desc: 'Aptitude + Coding + Interview Prep — all in one Drive.', link: 'https://drive.google.com/drive/folders/1NC5wLHUMUye5_5zHzSgTgXDUdVmh43ZU', level: 'free', tags: ['placement', 'aptitude'] }
    ]
  },

  // ============================================================
  // 28. PAID COURSES WITH DISCOUNTS
  // ============================================================
  {
    id: 'paid-courses',
    title: 'Paid Courses (With Discounts)',
    emoji: '🎓',
    desc: 'Structured courses and bundles — with discount codes.',
    resources: [
      { title: 'LIVE MERN Full Stack Program (GeeksforGeeks)', desc: 'HTML, CSS & JS, React, Node, MongoDB, APIs, Auth, Deployment, IBM Certification, Placement Assistance.', link: 'https://gfgcdn.com/tu/e2N/', level: 'paid', code: 'CWR30', tags: ['mern', 'full stack'] },
      { title: 'GeeksforGeeks Self-Paced Courses', desc: 'DSA + Web Dev + Programming basics. Interview prep. Certificate + 24×7 doubt support.', link: 'https://gfgcdn.com/tu/Z57/', level: 'paid', tags: ['dsa', 'self-paced'] },
      { title: 'Claude Code: From Absolute Beginner to Pro (LearnTube)', desc: 'AI coding, debugging, workflow automation. Backed by Google.', link: 'https://tinyurl.com/ClaudeCodeXCourseCK1', level: 'paid', tags: ['claude', 'ai coding'] },
      { title: 'Full Stack Web Developer Bundle (LearnTube)', desc: 'Frontend + Backend + React + Databases + Deployment. Backed by Google.', link: 'https://tinyurl.com/FullStackWebDeveloperXCoGhj', level: 'paid', tags: ['full stack'] },
      { title: 'AI & Data Science Program (iHUB IIT Roorkee + Microsoft)', desc: 'Python, ML, Gen AI, AI Agents. 50+ projects. 18 months placement support. 3,100+ hiring partners.', link: 'https://tinyurl.com/AI-Elite-IITR-Cert-Form', level: 'paid', tags: ['ai', 'data science'] },
      { title: 'Naukri AI Marketing Bootcamp', desc: '4-week AI bootcamp for marketing. Expert mentorship, live classes, certificate.', link: 'https://tinyurl.com/Learn-AI-Marketing-cwr', level: 'paid', tags: ['marketing', 'ai'] }
    ]
  },

  // ============================================================
  // 29. FREE ONLINE EVENTS & PROGRAMS
  // ============================================================
  {
    id: 'events',
    title: 'Free Online Events & Programs',
    emoji: '📅',
    desc: 'Free events, incubators, and programs for students.',
    resources: [
      { title: 'Prepathon 2026', desc: 'Free 2-day online event. AI Agents & MCP, AI + Coding, Web Development, Building & Deploying Projects. Experts from Google, Amazon, Microsoft, OpenClaw. Sept 22–23, 2026.', link: 'https://shorturl.at/ijiix', level: 'free', tags: ['event', 'ai'] },
      { title: 'Popcorn/Inc by Winno', desc: '8-week FREE online incubator for AI, FilmTech, MediaTech. No idea or experience required. Demo Day. Deadline: Sept 3, 2026.', link: 'https://shorturl.at/pMODy', level: 'free', tags: ['startup', 'incubator'] },
      { title: 'ALTA School of Technology — Free AI Program', desc: '4-week online AI program for Classes 8–12. No coding needed. Prizes including PS5 with GTA 6. Deadline: Nov 6.', link: 'https://tinyurl.com/2dru6xhz', level: 'free', tags: ['school', 'ai'] }
    ]
  },

  // ============================================================
  // 30. FREE EMAIL SERVICES
  // ============================================================
  {
    id: 'email',
    title: 'Free Email Services',
    emoji: '📧',
    desc: 'Send emails from your website without spending money.',
    resources: [
      { title: 'MailerLite', desc: '12,000 emails/month free.', link: 'https://www.mailerlite.com', level: 'free', tags: ['email'] },
      { title: 'MailChannels', desc: '3,000 emails/month free.', link: 'https://www.mailchannels.com', level: 'free', tags: ['email'] },
      { title: 'Maileroo', desc: '5,000 emails/month free.', link: 'https://maileroo.com', level: 'free', tags: ['email'] },
      { title: 'EmailOctopus', desc: '10,000 emails/month free.', link: 'https://emailoctopus.com', level: 'free', tags: ['email'] },
      { title: 'EmailLabs', desc: '9,000 emails/month free.', link: 'https://emaillabs.io', level: 'free', tags: ['email'] },
      { title: 'Brevo', desc: '9,000 emails/month free.', link: 'https://www.brevo.com', level: 'free', tags: ['email'] },
      { title: 'Unitpost', desc: '5,000 emails/month free.', link: 'https://unitpost.com', level: 'free', tags: ['email'] },
      { title: 'Emitlo', desc: '12,000 emails/month free.', link: 'https://emitlo.com', level: 'free', tags: ['email'] }
    ]
  },

  // ============================================================
  // 31. GOOGLE AI TOOLS
  // ============================================================
  {
    id: 'google-ai',
    title: 'Google AI Tools',
    emoji: '🤖',
    desc: '10 free Google AI tools actually worth using.',
    resources: [
      { title: 'Pomelli', desc: 'Turn your website into on-brand posts & campaigns.', link: 'http://labs.google/pomelli', level: 'free', tags: ['marketing'] },
      { title: 'Stitch', desc: 'Describe a website/app → get UI + frontend code.', link: 'http://stitch.withgoogle.com', level: 'free', tags: ['ui', 'code'] },
      { title: 'Opal', desc: 'Build AI workflows & mini-apps with plain English.', link: 'http://opal.withgoogle.com', level: 'free', tags: ['workflows'] },
      { title: 'Antigravity', desc: "Google's agentic IDE that can plan & write code.", link: 'http://antigravity.google', level: 'free', tags: ['ide', 'coding'] },
      { title: 'Mixboard', desc: 'Generate, combine & edit AI images on one board.', link: 'http://labs.google/mixboard', level: 'free', tags: ['images'] },
      { title: 'Disco', desc: 'Turn your browser tabs into custom AI apps.', link: 'http://labs.google/disco', level: 'free', tags: ['browser', 'apps'] },
      { title: 'NotebookLM', desc: 'Turn PDFs, docs & YouTube videos into summaries, quizzes & more.', link: 'http://notebooklm.google', level: 'free', tags: ['study', 'summaries'] },
      { title: 'Learn Your Way', desc: 'Create personalized courses with AI.', link: 'http://learnyourway.withgoogle.com', level: 'free', tags: ['courses'] },
      { title: 'Google AI Studio', desc: 'Build & test Gemini-powered AI apps for free.', link: 'http://aistudio.google.com', level: 'free', tags: ['gemini', 'apps'] },
      { title: 'Jules', desc: 'AI coding agent that works on GitHub & opens PRs.', link: 'https://jules.google', level: 'free', tags: ['coding', 'github'] }
    ]
  },

  // ============================================================
  // 32. CURATED LEARNING DOCUMENTS
  // ============================================================
  {
    id: 'curated-docs',
    title: 'Curated Learning Documents',
    emoji: '📑',
    desc: 'Google Docs with curated lists, guides, and resources.',
    resources: [
      { title: '10 Videos = 4 Years of Computer Science', desc: 'Cybersecurity, Ethical Hacking, Generative AI, AI with Python, Python, Data Analytics, Data Science, C++, SQL, Java + Spring Boot.', link: 'https://docs.google.com/document/d/144lqT39W7WVVOP4Rncp-akdCRnMyqPRiLmlvA8FnqTw/mobilebasic', level: 'free', tags: ['videos', 'cs'] },
      { title: '100+ ML Projects Source Code', desc: 'Deep Learning, NLP, Computer Vision, AI Apps, Real-World Projects.', link: 'https://docs.google.com/document/d/1T0rXHpK9wIT21ZiEU1tkAhVxggf8pKqofrM2mQAXEmg/edit?usp=sharing', level: 'free', tags: ['ml', 'projects'] },
      { title: '12 Websites to Make Money Online', desc: 'Remote jobs, freelancing, tutoring, transcription, microtasks. What each website does, earning potential, how to get started.', link: 'https://docs.google.com/document/d/1kcpjWNjf62T6ynZhm9EZ4b0uTHO0OlcsjJ5oF1a3Zak/mobilebasic', level: 'free', tags: ['income', 'freelancing'] },
      { title: 'Free Courses Access Guide', desc: 'Free Trial method, Financial Aid method, step-by-step instructions.', link: 'https://docs.google.com/document/d/1x4_lWuBeHnNR7y5yWQhrnlrtnRwTEOanKmDJaQnEd-s/mobilebasic', level: 'free', tags: ['free courses'] },
      { title: '7 Resume Prompts for Claude AI', desc: 'Fix resume, match to job descriptions, prep for interviews.', link: 'https://docs.google.com/document/d/1jexMzztX2huNVDa-H2silcoosKqVcD4lIpCJYLjl2SM/mobilebasic', level: 'free', tags: ['resume', 'claude'] },
      { title: '7 Resume Prompts for ChatGPT', desc: 'Fix resume, match to job descriptions, prep for interviews.', link: 'https://docs.google.com/document/d/1SRaOWMhdIN65x5uOo3VHKt8P_6mI4KwxP4DqNzfBi3M/mobilebasic', level: 'free', tags: ['resume', 'chatgpt'] }
    ]
  },

  // ============================================================
  // 33. ADDITIONAL RESOURCES
  // ============================================================
  {
    id: 'additional',
    title: 'Additional Resources',
    emoji: '📌',
    desc: 'Domains, communities, and extra tools.',
    resources: [
      { title: 'Free Domain for Developers', desc: 'For portfolio, startup, or side project.', link: 'https://x.com/itsankitd/status/2075090181775052809', level: 'free', tags: ['domain'] },
      { title: '100 Days, 100 Projects', desc: 'HTML, CSS, and JavaScript projects.', link: 'https://www.codewithrandom.com/', level: 'free', tags: ['projects'] },
      { title: 'AI Community', desc: "India's Biggest AI Community — learn AI, discover tools, get trending updates.", link: 'https://t.me/AJ_tech_career', level: 'free', tags: ['community'] },
      { title: 'Staying.fun', desc: 'Paste your code and watch it explained step-by-step through interactive animations.', link: 'https://staying.fun/en', level: 'free', tags: ['code', 'animation'] },
      { title: 'TryHackMe AI Security', desc: 'FREE learning path — Prompt Injection, Data Poisoning, Real AI Labs. No setup needed. Get certificate.', link: 'https://tryhackme.com/d/codewithrandom', level: 'free', code: 'ANKIT25', tags: ['security', 'ai'] }
    ]
  },

  // ============================================================
  // 34. VS CODE EXTENSIONS
  // ============================================================
  {
    id: 'vscode-ext',
    title: 'VS Code Extensions',
    emoji: '💻',
    desc: 'Make VS Code faster, smarter, and more productive.',
    resources: [
      { title: 'GitHub Copilot', desc: 'AI coding assistant.', link: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot', level: 'free', tags: ['ai'] },
      { title: 'Prettier', desc: 'Format your code.', link: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode', level: 'free', tags: ['formatting'] },
      { title: 'ESLint', desc: 'Catch code issues.', link: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint', level: 'free', tags: ['linting'] },
      { title: 'GitLens', desc: 'Better Git insights.', link: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens', level: 'free', tags: ['git'] },
      { title: 'Error Lens', desc: 'See errors instantly.', link: 'https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens', level: 'free', tags: ['errors'] },
      { title: 'Auto Rename Tag', desc: 'Rename HTML/JSX tags.', link: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag', level: 'free', tags: ['html', 'jsx'] },
      { title: 'Path Intellisense', desc: 'Faster file paths.', link: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense', level: 'free', tags: ['paths'] },
      { title: 'Thunder Client', desc: 'Test APIs.', link: 'https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client', level: 'free', tags: ['api'] },
      { title: 'Tailwind CSS IntelliSense', desc: 'Tailwind autocomplete.', link: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss', level: 'free', tags: ['tailwind'] },
      { title: 'Docker', desc: 'Manage containers.', link: 'https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker', level: 'free', tags: ['docker'] },
      { title: 'Live Server', desc: 'Live browser reload.', link: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer', level: 'free', tags: ['server'] },
      { title: 'Todo Tree', desc: 'Find TODOs easily.', link: 'https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree', level: 'free', tags: ['todos'] },
      { title: 'REST Client', desc: 'Test APIs.', link: 'https://marketplace.visualstudio.com/items?itemName=humao.rest-client', level: 'free', tags: ['api'] },
      { title: 'Code Spell Checker', desc: 'Fix spelling mistakes.', link: 'https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker', level: 'free', tags: ['spelling'] },
      { title: 'Indent-Rainbow', desc: 'Better indentation.', link: 'https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow', level: 'free', tags: ['indentation'] },
      { title: 'Pretty TypeScript Errors', desc: 'Readable TypeScript errors.', link: 'https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors', level: 'free', tags: ['typescript'] },
      { title: 'GitHub Pull Requests', desc: 'Manage PRs in VS Code.', link: 'https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github', level: 'free', tags: ['github'] },
      { title: 'Dev Containers', desc: 'Consistent environments.', link: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers', level: 'free', tags: ['containers'] },
      { title: 'Remote - SSH', desc: 'Code on remote servers.', link: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh', level: 'free', tags: ['ssh'] },
      { title: 'Markdown All in One', desc: 'Better Markdown.', link: 'https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one', level: 'free', tags: ['markdown'] }
    ]
  },

  // ============================================================
  // 35. CHROME EXTENSIONS
  // ============================================================
  {
    id: 'chrome-ext',
    title: 'Chrome Extensions for Developers',
    emoji: '🔌',
    desc: 'Extensions that save you hours of work.',
    resources: [
      { title: 'WhatFont', desc: 'Identify fonts.', link: 'https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm', level: 'free', tags: ['fonts'] },
      { title: 'Window Resizer', desc: 'Test screen sizes.', link: 'https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh', level: 'free', tags: ['responsive'] },
      { title: 'Check My Links', desc: 'Find broken links.', link: 'https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfgnn', level: 'free', tags: ['links'] },
      { title: 'CSSViewer', desc: 'Inspect CSS.', link: 'https://chrome.google.com/webstore/detail/cssviewer/ggfgijbpiheegefliciaeoomidnmddfm', level: 'free', tags: ['css'] },
      { title: 'Page Ruler', desc: 'Measure elements.', link: 'https://chrome.google.com/webstore/detail/page-ruler/jlpkojjdgbllmedoapgfodplfhcbnbpn', level: 'free', tags: ['measure'] },
      { title: 'Wappalyzer', desc: 'Detect website tech.', link: 'https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg', level: 'free', tags: ['tech'] },
      { title: 'Clear Cache', desc: 'Clear browser cache.', link: 'https://chrome.google.com/webstore/detail/clear-cache/cppjkneekbjaeellbfkmgnhonkkjfpdn', level: 'free', tags: ['cache'] },
      { title: 'Lighthouse', desc: 'Audit websites.', link: 'https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk', level: 'free', tags: ['audit'] },
      { title: 'Scribe', desc: 'Create guides.', link: 'https://chrome.google.com/webstore/detail/scribe/okfkdaglfjjjfefdcppliegebpoegaii', level: 'free', tags: ['guides'] },
      { title: 'Weava Highlighter', desc: 'Highlight web content.', link: 'https://chrome.google.com/webstore/detail/weava-highlighter-pdf-web/cbjmbmdmdkbmoajjjfioapdcpbdfolpg', level: 'free', tags: ['highlight'] },
      { title: 'Momentum', desc: 'Customize new tabs.', link: 'https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca', level: 'free', tags: ['new tab'] },
      { title: 'Dark Reader', desc: 'Enable dark mode.', link: 'https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh', level: 'free', tags: ['dark mode'] },
      { title: 'GoFullPage', desc: 'Capture full pages.', link: 'https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl', level: 'free', tags: ['screenshots'] },
      { title: 'CSS Peeper', desc: 'Inspect website styles.', link: 'https://chrome.google.com/webstore/detail/css-peeper/mbnbehikldjhnfehhnaidhjhoofhpehk', level: 'free', tags: ['css'] }
    ]
  }
];