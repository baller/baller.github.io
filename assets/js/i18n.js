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
      title: "梁思方 | 人工智能",
      description: "梁思方，中国科学院大学人工智能硕士研究生。研究工作包括面向连续可控人像光影编辑的 LightDial。",
      brand: "梁思方",
      name: "梁思方",
      role: "人工智能硕士研究生<br>中国科学院大学杭州高等研究院",
      location: "北京 / 杭州，中国",
      internship: "实习经历",
      internshipRoles: ["算法实习生", "AI 工程实习生", "算法实习生"],
      eyebrow: "人工智能硕士研究生",
      bio1: "你好，我是 <strong>梁思方</strong>，目前在中国科学院大学杭州高等研究院攻读人工智能硕士学位。",
      bio2: "我的研究兴趣包括<strong>图像与视频生成及编辑</strong>、<strong>多模态理解与生成</strong>，以及 <strong>Agent Harness 系统</strong>。我关注如何通过数据构建、模型训练、评估与工具编排，提高生成模型和 Agent 系统在真实任务中的可控性、可靠性与工程可用性。",
      buttons: ["查看经历", "查看简历", "GitHub"],
      background: "教育背景",
      education: "教育经历",
      master: "人工智能专业硕士，2024.09 至今",
      bachelor: "计算机科学与技术，工学学士，2020.09 至 2024.06",
      hias: "杭州高等研究院",
      ucas: "中国科学院大学",
      hise: "信息科学与技术学院",
      hznu: "杭州师范大学",
      experienceKicker: "实习经历",
      experienceTitle: "实习项目",
      experienceDesc: "每段经历的职责、方法与成果将在逐项确认后补充。",
      experienceCards: [
        ["VIVO · 算法实习生", "LightDial：连续可控人像光影编辑", "围绕连续、身份保持的人像光影控制开展的研究论文工作。"],
        ["HUAWEI · AI 工程实习生", "静态分析 Agent", "详细项目内容整理中。"],
        ["AVOLUTION.AI · 算法实习生", "实习项目", "详细项目内容整理中。"]
      ],
      lightdialLink: "查看研究论文工作",
      lightdialMeta: "VIVO 研究论文",
      lightdialTitle: "LightDial：面向人像光影的连续可控编辑",
      lightdialSummary: "LightDial 面向人像摄影光效的连续细粒度控制，在改变光影强度的同时保持人物身份、姿态、外观与场景结构。",
      lightdialContributions: [
        ["PortraitLight-50K", "覆盖六类摄影光效与多级强度编辑序列的连续人像光影数据集。"],
        ["TriDial", "将编辑强度编码为文本流、目标生成流和参考图像流之间依赖语义流的 Q/K 旋转。"],
        ["强度感知对齐", "建立标量控制与空间照明及光影语义的对应，同时约束非编辑内容变化。"]
      ],
      lightdialStatus: "<strong>状态</strong>研究论文仍在完善中，定量对比与消融结果将在完成验证后补充。",
      lightdialCaption: "六类摄影光效在 s=0 至 s=1 连续控制强度下的定性展示。",
      projectsKicker: "代表项目",
      projectsTitle: "个人项目",
      projectsDesc: "项目动机、个人贡献、实现过程与结果将逐项整理。",
      projectCards: [
        ["Agent 系统", "SuperTravelAgent", "详细案例整理中。"],
        ["开发者工具", "ZSH Command Assistant", "详细案例整理中。"]
      ],
      honorsKicker: "代表性奖项",
      honorsTitle: "荣誉与奖项",
      honors: [
        "浙江省优秀毕业生",
        "浙江省政府奖学金",
        "中国大学生计算机设计大赛二等奖"
      ]
    },
    "/projects/": {
      title: "项目 | 梁思方",
      description: "梁思方的代表性个人项目，包括 SuperTravelAgent 与开发者工具。",
      eyebrow: "代表性个人项目",
      heading: "项目",
      intro: "每个项目的动机、个人贡献、实现过程与结果将在确认后整理为完整案例。",
      superText: "详细案例整理中。",
      zshText: "详细案例整理中。"
    },
    "/blog/": {
      title: "博客 | 梁思方",
      description: "梁思方的技术笔记，覆盖工程实践、图像与视频生成及编辑、多模态模型、Agent 系统与论文阅读。",
      eyebrow: "博客",
      heading: "记录让研究系统更容易维护的技术笔记。",
      intro: "这里从已有工程笔记开始，后续用于整理图像与视频生成及编辑、多模态模型、Agent 系统、论文阅读与工具链实践。",
      futureKicker: "未来分类",
      futureTitle: "面向长期研究写作的结构。",
      futureText: "这些分类是未来写作入口，不代表已经存在的文章。"
    },
    "/cv/": {
      title: "简历 | 梁思方",
      description: "梁思方的网页简历，包括教育经历、实习经历、个人项目、荣誉与技术栈。",
      eyebrow: "个人简历",
      heading: "简历",
      intro: "教育背景、实习经历、个人项目与代表性奖项的简要网页版本。",
      actions: ["邮件", "GitHub", "研究项目"],
      profileKicker: "个人信息",
      profileTitle: "梁思方",
      profileText: "中国科学院大学杭州高等研究院人工智能硕士研究生。研究兴趣包括图像与视频生成及编辑、多模态理解与生成，以及 Agent Harness 系统。",
      cvStatus: "简历状态",
      cvStatusTitle: "PDF 简历后续补充",
      cvStatusText: "当前网页简历基于已有简历内容和已确认项目信息整理。公开版 PDF 准备完成后可在此加入下载链接。",
      educationKicker: "教育经历",
      educationTitle: "教育经历",
      educationDesc: "基于已提供简历内容整理。",
      experienceKicker: "实习经历",
      experienceTitle: "实习与实践",
      experienceDesc: "每段经历的职责、方法与成果将在逐项确认后补充。",
      experienceItems: [
        ["VIVO，算法实习生", "LightDial：面向人像光影的连续可控编辑。研究内容包括 PortraitLight-50K、TriDial 与强度感知对齐。"],
        ["HUAWEI，AI 工程实习生", "静态分析 Agent。详细项目内容整理中。"],
        ["AVOLUTION.AI，算法实习生", "详细项目内容整理中。"]
      ],
      projectsKicker: "项目",
      projectsTitle: "代表项目",
      projectsDesc: "项目范围与个人贡献确认后补充完整案例。",
      projectItems: [
        ["SuperTravelAgent", "详细案例整理中。"],
        ["ZSH Command Assistant", "详细案例整理中。"]
      ],
      honorsKicker: "荣誉",
      honorsTitle: "代表性奖项",
      honors: ["浙江省优秀毕业生", "浙江省政府奖学金", "中国大学生计算机设计大赛二等奖"],
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
  setAllText(".internship-mini-card em", t.internshipRoles);
  setText(".bio-panel .eyebrow", t.eyebrow);
  setHtml(".bio-copy:nth-of-type(1)", t.bio1);
  setHtml(".bio-copy:nth-of-type(2)", t.bio2);
  setAllText(".mini-action-row .button", t.buttons);
  setText("#background-heading", t.background);
  setText("[aria-labelledby='background-heading'] .profile-section-title span", t.education);
  setAllText(".background-item h3", [t.master, t.bachelor]);
  setAllText(".background-item .education-link", [t.hias, t.ucas, t.hise, t.hznu]);
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
  setText(".vivo-paper-link", t.lightdialLink);
  const lightdial = document.querySelector("#lightdial");
  if (lightdial) {
    setText(".paper-copy .meta", t.lightdialMeta, lightdial);
    setText(".paper-copy h3", t.lightdialTitle, lightdial);
    setText(".paper-summary", t.lightdialSummary, lightdial);
    lightdial.querySelectorAll(".paper-contribution-list > div").forEach((row, index) => {
      const item = t.lightdialContributions[index];
      if (!item) return;
      setText("strong", item[0], row);
      setText("span", item[1], row);
    });
    setHtml(".paper-status", t.lightdialStatus, lightdial);
    setText("figcaption", t.lightdialCaption, lightdial);
  }
  const projectSection = document.querySelector("#projects");
  if (projectSection) {
    setText(".section-kicker", t.projectsKicker, projectSection);
    setText(".section-head h2", t.projectsTitle, projectSection);
    setText(".section-head > p", t.projectsDesc, projectSection);
    projectSection.querySelectorAll(".experience-card").forEach((card, index) => {
      const item = t.projectCards[index];
      if (!item) return;
      setText(".meta", item[0], card);
      setText("h3", item[1], card);
      setText(".placeholder-copy", item[2], card);
    });
  }
  const honorsSection = document.querySelector("#honors");
  if (honorsSection) {
    setText(".section-kicker", t.honorsKicker, honorsSection);
    setText("h2", t.honorsTitle, honorsSection);
    setAllText(".honor-item h3", t.honors, honorsSection);
  }
};

const applyProjectsZh = (t) => {
  setText(".page-hero .eyebrow", t.eyebrow);
  setText(".page-hero h1", t.heading);
  setText(".page-hero p", t.intro);
  setText("#supertravelagent .project-card p", t.superText);
  setText("main > section:last-of-type .placeholder-copy", t.zshText);
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
    experience.querySelectorAll(".timeline-item").forEach((item, index) => {
      const content = t.experienceItems[index];
      if (!content) return;
      setText("h3", content[0], item);
      setText("p", content[1], item);
    });
  }
  const projects = sections[4];
  if (projects) {
    setText(".section-kicker", t.projectsKicker, projects);
    setText("h2", t.projectsTitle, projects);
    setText(".section-head > p", t.projectsDesc, projects);
    projects.querySelectorAll(".card").forEach((card, index) => {
      const content = t.projectItems[index];
      if (!content) return;
      setText("h3", content[0], card);
      setText("p", content[1], card);
    });
  }
  const last = sections[5];
  if (last) {
    setText(".card:first-child .section-kicker", t.honorsKicker, last);
    setText(".card:first-child h3", t.honorsTitle, last);
    setAllText(".card:first-child li", t.honors, last);
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
