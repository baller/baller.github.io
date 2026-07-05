const i18nTranslations = {
  zh: {
    common: {
      titleSuffix: "梁思方",
      navHome: "首页",
      navProjects: "项目",
      navBlog: "博客",
      navCv: "简历",
      footerBuilt: "静态研究主页，部署于 GitHub Pages。",
      footerHome: "首页",
      footerBlog: "博客",
      footerCv: "简历",
      footerProjects: "项目"
    },
    "/": {
      title: "梁思方 | AI / 计算机视觉研究",
      description: "梁思方，中国科学院大学人工智能硕士研究生，研究方向包括图像/视频编辑、可控生成、多模态理解与 Agent 系统。",
      brand: "梁思方",
      name: "梁思方",
      role: "人工智能硕士研究生<br>中国科学院大学杭州高等研究院",
      location: "北京 / 杭州，中国",
      internship: "实习经历",
      vivoRole: "算法实习生",
      huaweiRole: "AI 工程实习生",
      avolutionRole: "算法实习生",
      profileLinks: ["项目", "博客", "简历"],
      eyebrow: "AI / 计算机视觉研究",
      bio1: "你好，我是 <strong>梁思方</strong>，目前是中国科学院大学杭州高等研究院人工智能方向硕士研究生。我的主要研究方向包括 <strong>image and video editing</strong>、<strong>controllable generation</strong>、multimodal understanding 与 agent systems。",
      bio2: "我关注可控视觉生成系统：如何提供稳定的编辑控制接口，在编辑过程中保持语义一致性，并将感知、推理与工具调用连接到实际的多模态工作流中。",
      tags: ["Image / Video Editing", "Controllable Generation", "Multimodal Understanding", "Agent Systems"],
      buttons: ["查看项目", "阅读博客", "GitHub"],
      background: "教育背景",
      education: "Education",
      master: "人工智能专业硕士，2024.09 至今",
      bachelor: "计算机科学与技术学士，2020.09 至 2024.06",
      hias: "杭州高等研究院",
      ucas: "中国科学院大学",
      hise: "信息科学与技术学院",
      hznu: "杭州师范大学",
      research: "研究方向",
      selectedDirections: "Selected directions",
      researchRows: [
        ["可控图像与视频编辑", "语义一致性、身份保持、指令引导编辑"],
        ["可控生成", "条件控制、编辑强度控制、生成模型对齐"],
        ["Agent 系统", "任务分解、工具调用、MCP 服务编排"]
      ],
      experienceKicker: "实习经历",
      experienceTitle: "研究与工程实践。",
      experienceDesc: "实习经历以研究方向、工作内容和代表性贡献为主，不堆叠简历式长列表。",
      experienceCards: [
        ["VIVO，算法实习生，2025.10 至 2026.04", "人像光影与图像编辑模型", "参与大模型图像编辑中的人像光影任务，包括发丝光、丁达尔光、侧光、日落光、缝隙光等效果，重点关注身份保持、背景一致性和可控强度。"],
        ["HUAWEI，AI 工程实习生，2025.06 至 2025.09", "基于 LLM 的前端态势分析 Agent", "探索面向前端态势分析的 Agent 工作流，包括任务分解、上下文理解、报告生成与模型辅助推理，关注工程可靠性与流程组织。"],
        ["AVOLUTION.AI，算法实习生，2024.03 至 2024.06", "AIGC 数据工程与模型评估", "参与 AIGC 数据构建、模型训练支持和多模态生成任务评估流程。"],
        ["个人项目，2025.02 至 2026.04", "Agent 应用与效率工具", "构建个人 Agent 原型和命令行助手插件，包括旅行规划、任务分解和中文自然语言命令转换。"]
      ],
      projectsKicker: "代表项目",
      projectsTitle: "面向视觉系统的研究型项目。",
      projectsDesc: "项目区优先展示研究问题、系统设计与真实材料；尚未公开的实验图使用抽象示意而非伪造结果。",
      projectCards: [
        ["01 / 可控视觉", "可控人像光影编辑", "围绕人像光影效果的研究型图像编辑项目，覆盖发丝光、丁达尔光、侧光、日落光和缝隙光等任务。核心约束包括身份保持、背景稳定、编辑强度可控，以及与 diffusion / flow matching 管线的兼容。"],
        ["02 / 3D Vision", "WaveSplat / 稀疏视角 3D Gaussian Rendering", "面向稀疏视角新视角合成的研究项目，关注 3D Gaussian Splatting、深度先验与室内远程呈现场景。在公开材料准备阶段，页面以 pipeline 形式展示其研究结构。"],
        ["03 / Agent Systems", "SuperTravelAgent", "一个多智能体旅行规划系统，将复杂旅行需求分解为可执行任务。项目结合 React + TypeScript、FastAPI、WebSocket、MCP 服务，以及地图、火车票、社交内容、实时搜索和 PowerPaint 图像处理等工具。"]
      ],
      projectDetails: "项目详情",
      recentPosts: "近期文章",
      recentTitle: "便于长期维护的工程笔记。",
      recentDesc: "博客目前从已有系统工程笔记开始，后续用于记录生成模型、图像编辑、3D Vision 和论文阅读。",
      researchOutput: "研究产出",
      manuscripts: "Manuscripts in preparation.",
      manuscriptsDesc: "部分研究项目正在整理为 manuscript。公开材料准备完成后，这里会补充 PDF、Code、Project Page、BibTeX 与 arXiv 等入口。",
      contact: "联系方式",
      contactTitle: "欢迎交流研究与工程问题。"
    },
    "/projects/": {
      title: "项目 | 梁思方",
      description: "梁思方的 AI 与计算机视觉项目，覆盖可控图像编辑、3D Gaussian Rendering 与 SuperTravelAgent。",
      eyebrow: "代表项目",
      heading: "围绕研究问题和系统实现组织项目。",
      intro: "这里的项目不是简历条目堆叠，而是围绕研究问题、实现系统和可公开材料进行整理。尚未公开的研究结果使用抽象示意，不伪造实验图。",
      portraitTitle: "身份保持的人像光影控制",
      portraitText: "该项目探索人像光影编辑中的可控生成问题，包括发丝光、丁达尔光、侧光、日落光和缝隙光等效果。研究重点是身份保持、背景一致性、光影强度控制，以及 diffusion / flow matching 编辑系统中的指令跟随能力。",
      wavesplatTitle: "WaveSplat 风格的稀疏视角新视角合成",
      wavesplatText: "该方向关注室内与远程呈现场景中的 sparse-view 3D Gaussian rendering。核心问题是如何从有限相机观测出发，结合深度先验与 Gaussian field 优化，获得稳定的新视角渲染。",
      superTitle: "多智能体旅行规划系统",
      superText: "SuperTravelAgent 是一个多智能体旅行规划系统，能够将复杂旅行需求分解为可管理的规划任务。公开仓库显示其包含 React + TypeScript 前端、FastAPI 后端、WebSocket 实时通信、MCP 服务管理，以及地图、火车票、社交内容、实时搜索、文件与 PowerPaint 图像处理工具。",
      outputKicker: "研究产出",
      outputTitle: "面向论文扩展，但不写虚假成果。",
      outputText: "部分研究项目正在准备 manuscript。未来有公开材料后，可在这里加入 PDF、Code、Project Page、BibTeX、arXiv 与会议状态。"
    },
    "/blog/": {
      title: "博客 | 梁思方",
      description: "梁思方的技术笔记，覆盖工程实践、生成模型、图像编辑、3D Vision 与论文阅读。",
      eyebrow: "博客",
      heading: "记录让研究系统更容易维护的技术笔记。",
      intro: "这里从已有工程笔记开始，后续用于整理生成模型、图像编辑、3D Vision、Diffusion / Flow Matching、论文阅读与工具链实践。",
      futureKicker: "未来分类",
      futureTitle: "面向长期研究写作的结构。",
      futureText: "这些分类是未来写作入口，不代表已经存在的文章。"
    },
    "/cv/": {
      title: "简历 | 梁思方",
      description: "梁思方的网页简历摘要，包括教育经历、实习经历、研究项目、荣誉与技术栈。",
      eyebrow: "简历摘要",
      heading: "结构化展示教育、经历和项目。",
      intro: "PDF 简历后续补充。当前页面用于公开展示已确认的教育背景、实习经历、项目、荣誉和技术栈。",
      actions: ["邮件", "GitHub", "研究项目"],
      profileKicker: "个人信息",
      profileTitle: "梁思方",
      profileText: "中国科学院大学杭州高等研究院人工智能方向硕士研究生。研究方向包括图像/视频编辑、可控生成、多模态理解与 Agent 系统。",
      cvStatus: "简历状态",
      cvStatusTitle: "PDF 简历后续补充",
      cvStatusText: "当前网页简历基于已有简历内容和已确认项目信息整理。公开版 PDF 准备完成后可在此加入下载链接。",
      educationKicker: "教育经历",
      educationTitle: "教育经历",
      educationDesc: "基于已提供简历内容整理。",
      experienceKicker: "实习经历",
      experienceTitle: "实习与实践",
      experienceDesc: "描述保持简洁，不使用未验证指标。",
      projectsKicker: "项目",
      projectsTitle: "代表项目",
      projectsDesc: "完整描述见 Projects 页面。",
      honorsKicker: "荣誉",
      honorsTitle: "部分荣誉",
      skillsKicker: "技能",
      skillsTitle: "核心技术栈"
    },
    "/blog/linux-dpkg/": {
      title: "Linux 服务器 dpkg 报错问题解决 | 梁思方",
      navBlogCurrent: "博客"
    },
    "/blog/clash-verge/": {
      title: "Linux 服务器使用 Clash Verge 教程 | 梁思方",
      navBlogCurrent: "博客"
    }
  }
};

const i18nOriginals = new Map();

const remember = (element, mode) => {
  if (!element) return;
  if (!i18nOriginals.has(element)) {
    i18nOriginals.set(element, {
      text: element.textContent,
      html: element.innerHTML,
      title: document.title,
      content: element.getAttribute("content")
    });
  }
};

const setText = (selector, value, root = document) => {
  const element = root.querySelector(selector);
  if (!element || value == null) return;
  remember(element);
  element.textContent = value;
};

const setHtml = (selector, value, root = document) => {
  const element = root.querySelector(selector);
  if (!element || value == null) return;
  remember(element);
  element.innerHTML = value;
};

const setAllText = (selector, values, root = document) => {
  if (!Array.isArray(values)) return;
  root.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] == null) return;
    remember(element);
    element.textContent = values[index];
  });
};

const restoreEnglish = () => {
  i18nOriginals.forEach((value, element) => {
    if (element instanceof HTMLMetaElement && value.content != null) {
      element.setAttribute("content", value.content);
    } else if (value.html != null) {
      element.innerHTML = value.html;
    }
  });
  document.title = document.documentElement.dataset.originalTitle || document.title;
  document.documentElement.lang = "en";
};

const applyCommon = (lang) => {
  const common = i18nTranslations[lang]?.common;
  if (!common) return;
  setText(".brand span:last-child", lang === "zh" ? "梁思方" : common.titleSuffix);
  const navItems = document.querySelectorAll(".nav-links > a");
  const labels = [common.navHome, common.navProjects, common.navBlog, common.navCv, "GitHub"];
  navItems.forEach((item, index) => {
    if (labels[index]) {
      remember(item);
      item.textContent = labels[index];
    }
  });
  const footerLinks = document.querySelectorAll(".footer a");
  const footerMap = {
    Home: common.footerHome,
    Projects: common.footerProjects,
    Blog: common.footerBlog,
    CV: common.footerCv
  };
  footerLinks.forEach((link) => {
    const key = link.textContent.trim();
    if (footerMap[key]) {
      remember(link);
      link.textContent = footerMap[key];
    }
  });
  const footerSecond = document.querySelector(".footer .container > span:last-child");
  if (footerSecond && footerSecond.children.length === 0) {
    setText(".footer .container > span:last-child", common.footerBuilt);
  }
};

const applyHomeZh = (t) => {
  setText(".profile-name", t.name);
  setHtml(".profile-role", t.role);
  setText(".profile-meta-list .meta-row:first-child span:last-child", t.location);
  setText(".aside-section-label", t.internship);
  setAllText(".internship-mini-card em", [t.vivoRole, t.huaweiRole, t.avolutionRole]);
  setAllText(".profile-links a", t.profileLinks);
  setText(".bio-panel .eyebrow", t.eyebrow);
  setHtml(".bio-copy:nth-of-type(1)", t.bio1);
  setHtml(".bio-copy:nth-of-type(2)", t.bio2);
  setAllText(".bio-panel .tag", t.tags);
  setAllText(".mini-action-row .button", t.buttons);
  setText("#background-heading", t.background);
  setText("[aria-labelledby='background-heading'] .profile-section-title span", t.education);
  setAllText(".background-item h3", [t.master, t.bachelor]);
  setAllText(".background-item .education-link", [t.hias, t.ucas, t.hise, t.hznu]);
  setText("#research-heading", t.research);
  setText("[aria-labelledby='research-heading'] .profile-section-title span", t.selectedDirections);
  document.querySelectorAll(".research-row").forEach((row, index) => {
    const item = t.researchRows[index];
    if (!item) return;
    setText("strong", item[0], row);
    setText("em", item[1], row);
  });
  setText("#experience .section-kicker", t.experienceKicker);
  setText("#experience h2", t.experienceTitle);
  setText("#experience .section-head > p", t.experienceDesc);
  document.querySelectorAll("#experience .card").forEach((card, index) => {
    const item = t.experienceCards[index];
    if (!item) return;
    setText(".meta", item[0], card);
    setText("h3", item[1], card);
    setText("p:not(.meta)", item[2], card);
  });
  const projectSection = document.querySelector("#projects");
  if (projectSection) {
    setText(".section-kicker", t.projectsKicker, projectSection);
    setText(".section-head h2", t.projectsTitle, projectSection);
    setText(".section-head > p", t.projectsDesc, projectSection);
    projectSection.querySelectorAll(".project-card").forEach((card, index) => {
      const item = t.projectCards[index];
      if (!item) return;
      setText(".project-index", item[0], card);
      setText("h3", item[1], card);
      setText("p", item[2], card);
    });
    projectSection.querySelectorAll(".project-links .text-link:first-child").forEach((link) => {
      remember(link);
      link.textContent = t.projectDetails;
    });
  }
  const sections = document.querySelectorAll("main > section");
  const recentSection = sections[3];
  if (recentSection) {
    setText(".section-kicker", t.recentPosts, recentSection);
    setText(".section-head h2", t.recentTitle, recentSection);
    setText(".section-head > p", t.recentDesc, recentSection);
  }
  const contactSection = sections[4];
  if (contactSection) {
    setText(".card:first-child .section-kicker", t.researchOutput, contactSection);
    setText(".card:first-child h2", t.manuscripts, contactSection);
    setText(".card:first-child p:not(.section-kicker)", t.manuscriptsDesc, contactSection);
    setText(".card:last-child .section-kicker", t.contact, contactSection);
    setText(".card:last-child h3", t.contactTitle, contactSection);
  }
};

const applyProjectsZh = (t) => {
  setText(".page-hero .eyebrow", t.eyebrow);
  setText(".page-hero h1", t.heading);
  setText(".page-hero p", t.intro);
  const cards = document.querySelectorAll(".project-card");
  const items = [
    [t.portraitTitle, t.portraitText],
    [t.wavesplatTitle, t.wavesplatText],
    [t.superTitle, t.superText]
  ];
  cards.forEach((card, index) => {
    if (!items[index]) return;
    setText("h3", items[index][0], card);
    setText("p", items[index][1], card);
  });
  const output = document.querySelector("main > section:last-of-type .card");
  if (output) {
    setText(".section-kicker", t.outputKicker, output);
    setText("h2", t.outputTitle, output);
    setText("p:not(.section-kicker)", t.outputText, output);
  }
};

const applyBlogZh = (t) => {
  setText(".page-hero .eyebrow", t.eyebrow);
  setText(".page-hero h1", t.heading);
  setText(".page-hero p", t.intro);
  const future = document.querySelector("main > section:last-of-type");
  if (future) {
    setText(".section-kicker", t.futureKicker, future);
    setText("h2", t.futureTitle, future);
    setText(".section-head > p", t.futureText, future);
  }
};

const applyCvZh = (t) => {
  setText(".page-hero .eyebrow", t.eyebrow);
  setText(".page-hero h1", t.heading);
  setText(".page-hero p", t.intro);
  setAllText(".page-hero .button", t.actions);
  const sections = document.querySelectorAll("main > section");
  const profile = sections[1];
  if (profile) {
    setText(".card:first-child .section-kicker", t.profileKicker, profile);
    setText(".card:first-child h3", t.profileTitle, profile);
    setText(".card:first-child p:not(.section-kicker):not(.meta)", t.profileText, profile);
    setText(".card:last-child .section-kicker", t.cvStatus, profile);
    setText(".card:last-child h3", t.cvStatusTitle, profile);
    setText(".card:last-child p", t.cvStatusText, profile);
  }
  const education = sections[2];
  if (education) {
    setText(".section-kicker", t.educationKicker, education);
    setText("h2", t.educationTitle, education);
    setText(".section-head > p", t.educationDesc, education);
  }
  const experience = sections[3];
  if (experience) {
    setText(".section-kicker", t.experienceKicker, experience);
    setText("h2", t.experienceTitle, experience);
    setText(".section-head > p", t.experienceDesc, experience);
  }
  const projects = sections[4];
  if (projects) {
    setText(".section-kicker", t.projectsKicker, projects);
    setText("h2", t.projectsTitle, projects);
    setText(".section-head > p", t.projectsDesc, projects);
  }
  const last = sections[5];
  if (last) {
    setText(".card:first-child .section-kicker", t.honorsKicker, last);
    setText(".card:first-child h3", t.honorsTitle, last);
    setText(".card:last-child .section-kicker", t.skillsKicker, last);
    setText(".card:last-child h3", t.skillsTitle, last);
  }
};

const applyLanguage = (lang) => {
  if (!document.documentElement.dataset.originalTitle) {
    document.documentElement.dataset.originalTitle = document.title;
  }
  if (lang === "en") {
    restoreEnglish();
    applyCommon("en");
  } else {
    restoreEnglish();
    const path = window.location.pathname;
    const t = i18nTranslations.zh[path] || i18nTranslations.zh[path.replace(/\/$/, "") + "/"] || {};
    document.documentElement.lang = "zh-CN";
    if (t.title) document.title = t.title;
    const description = document.querySelector("meta[name='description']");
    if (description && t.description) {
      remember(description);
      description.setAttribute("content", t.description);
    }
    applyCommon("zh");
    if (path === "/") applyHomeZh(i18nTranslations.zh["/"]);
    if (path === "/projects/") applyProjectsZh(i18nTranslations.zh["/projects/"]);
    if (path === "/blog/") applyBlogZh(i18nTranslations.zh["/blog/"]);
    if (path === "/cv/") applyCvZh(i18nTranslations.zh["/cv/"]);
    if (i18nTranslations.zh[path]?.title) document.title = i18nTranslations.zh[path].title;
  }
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langOption === lang);
    button.setAttribute("aria-pressed", String(button.dataset.langOption === lang));
  });
  localStorage.setItem("site-language", lang);
};

document.querySelectorAll("[data-lang-option]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langOption || "en"));
});

const urlLanguage = new URLSearchParams(window.location.search).get("lang");
const savedLanguage = localStorage.getItem("site-language");
applyLanguage(urlLanguage === "zh" || urlLanguage === "en" ? urlLanguage : savedLanguage || "en");
