import type { Locale } from "./i18n";

type Bi = { en: string; ar: string };
const t = (en: string, ar: string): Bi => ({ en, ar });

export const strings = {
  siteTitle: t("Wejdan — UI & UX designer", "وجدان — مصممة واجهات وتجربة مستخدم"),
  siteDescription: t(
    "A Jeddah-based UI & UX designer. I study the user before I design for them.",
    "مصممة تجربة مستخدم وواجهات، خريجة تفاعل الإنسان والحاسب. أفهم احتياج المستخدم قبل ما أصمم له.",
  ),
  nav: {
    work: t("Work", "الأعمال"),
    about: t("About", "نبذة عني"),
    services: t("Services", "الخدمات"),
    contact: t("Contact", "التواصل"),
    cv: t("CV", "السيرة الذاتية"),
  },
  actions: {
    viewCV: t("View CV", "السيرة الذاتية"),
    viewWork: t("See the work", "استعرض مشاريعي"),
    emailMe: t("Email me", "راسلني بالإيميل"),
    openCase: t("Open case study", "اقرأ دراسة الحالة"),
    switchLang: t("العربية", "English"),
    switchTheme: t("Theme", "السمة"),
    themeLight: t("Light", "فاتح"),
    themeDark: t("Dark", "داكن"),
    themeSystem: t("System", "النظام"),
    backHome: t("Back to home", "الصفحة الرئيسية"),
  },
  evidence: {
    legendTitle: t("How evidence is marked", "تصنيف الأدلة"),
    tested: t("Tested with users", "اختُبر مع مستخدمين"),
    planned: t("Planned, not tested", "قيد التخطيط، ولم يُختبر بعد"),
    early: t("Early exploration", "استكشاف أولي"),
  },
  statusLabel: {
    tested: t("Tested", "مُختبَر"),
    planned: t("Planned", "مُخطَّط"),
    early: t("Early", "مبكر"),
  },
  tier: {
    flagship: t("Lead case study", "دراسة حالة رئيسية"),
    core: t("Case study", "دراسة حالة"),
    early: t("Early exploration", "استكشاف مبكر"),
  },
  caseStudyLabels: {
    problem: t("Problem", "المشكلة"),
    approach: t("Approach", "المقاربة"),
    role: t("Role", "الدور"),
    evidence: t("Evidence", "الأدلة"),
    closing: t("Takeaway", "الخلاصة"),
    tools: t("Methods and tools", "الأدوات والأساليب"),
    context: t("Context", "السياق"),
    outcome: t("Outcome", "النتيجة"),
    year: t("Year", "السنة"),
    role_: t("My role", "دوري"),
    teamSize: t("Team size", "حجم الفريق"),
    status: t("Status", "الحالة"),
  },
  home: {
    eyebrow: t("UX · UI · HCI", "تجربة · واجهة · تفاعل إنسان-حاسب"),
    heroLineA: t("UI & UX designer.", "مصممة واجهات وتجربة مستخدم."),
    heroLineB: t("I study the user", "أفهم المستخدم"),
    heroLineC: t("before I design for them.", "قبل ما أصمم له."),
    heroLede: t(
      "HCI graduate from Jeddah. I work on apps and websites, and test them with the user before they ship.",
      "خريجة تفاعل الإنسان والحاسب. أصمم التطبيقات والمواقع، وأختبرها مع المستخدمين قبل إطلاقها.",
    ),
    workEyebrow: t("Selected work", "أعمال مختارة"),
    workHeading: t("My work.", "مشاريعي."),
    workLede: t(
      "Between research and design.",
      "من فهم المستخدم إلى تصميم التجربة.",
    ),
    aboutEyebrow: t("About", "عنها"),
    aboutHeading: t(
      "How I work.",
      "كيف أشتغل.",
    ),
    aboutBody: t(
      "HCI graduate from Jeddah. I lean on real research, honest critique, and clear design systems. Arabic and English get the same work — not translation.",
      "أعتمد على البحث والملاحظات الواضحة وأنظمة التصميم. وأصمم بالعربي والإنجليزي من البداية، مو كأن أحد ترجم الشاشة بعدين.",
    ),
    capabilitiesEyebrow: t("Capabilities", "القدرات"),
    capabilitiesHeading: t("What I bring to a product team.", "كيف أضيف لفريق المنتج."),
    contactEyebrow: t("Say hello", "تواصل"),
    contactHeading: t("Have a product to build or research?", "عندك منتج تبي تصممه أو تبحث فيه؟"),
    contactBody: t(
      "The fastest way to reach me is email. Tell me about the product, the user, and the question you're trying to answer.",
      "أسهل طريقة للتواصل معي هي البريد. اكتب لي عن المنتج والمستخدم والسؤال اللي تحاول تجاوب عنه.",
    ),
  },
  about: {
    pageTitle: t("About", "عنها"),
    sections: {
      who: t("Who", "من"),
      how: t("How I work", "كيف أشتغل"),
      principles: t("Principles", "المبادئ"),
      tools: t("Tools", "الأدوات"),
      elsewhere: t("Elsewhere", "في أماكن ثانية"),
    },
  },
  services: {
    pageTitle: t("Services", "الخدمات"),
    hero: t(
      "I work with product teams on honest, bilingual UX.",
      "أشتغل مع فرق المنتج على تجربة بلغتين، مبنية على الصدق.",
    ),
    heroSub: t(
      "Three lanes, one standard: nothing ships without evidence it will hold up.",
      "ثلاث مسارات، معيار واحد — ما يطلع شي بلا دليل يثبت صلاحيته.",
    ),
    whatIWontTitle: t("What I won't claim", "اللي ما أدّعيه"),
    processTitle: t("How a project moves", "كيف يمشي المشروع"),
    whyTitle: t("Why work with me", "ليش تشتغل معي"),
    ctaTitle: t("Start a conversation.", "خلّينا نبدأ محادثة."),
    ctaBody: t(
      "No form, no quick promises. Email me what you're trying to figure out.",
      "ما فيه نموذج، ولا وعود متعجّلة. راسلني بالشي اللي تحاول تحلّه.",
    ),
  },
  contact: {
    pageTitle: t("Contact", "التواصل"),
    body: t(
      "I read every email myself. Short notes get short replies; longer briefs get longer ones.",
      "أقرا كل رسالة بنفسي. الرسائل القصيرة ترد عليها قصيرة، والمشاريع المفصّلة ترد عليها مفصّلة.",
    ),
    emailLabel: t("Email", "الإيميل"),
    linkedinLabel: t("LinkedIn", "لينكدإن"),
    locationLabel: t("Based in", "المقر"),
    location: t("Makkah / Jeddah, Saudi Arabia", "مكة / جدة، السعودية"),
    responseNote: t(
      "I reply when I can give the message a thoughtful read, usually within a few days.",
      "أرد لمّا أقدر أقرا الرسالة بتركيز — عادةً خلال أيام قليلة.",
    ),
  },
  cv: {
    pageTitle: t("CV", "السيرة الذاتية"),
    headline: t(
      "The CV is being updated.",
      "السيرة الذاتية بالتحديث.",
    ),
    body: t(
      "A fresh version is on the way. Meanwhile, drop me a short note and I'll send a tailored copy.",
      "النسخة الجديدة جاية. لحد ما تطلع، كلّمني بسطر قصير وأرسل لك نسخة مناسبة.",
    ),
    contactLine: t(
      "Email wejdan4458@gmail.com for a copy.",
      "راسلني على wejdan4458@gmail.com وأرسل لك نسخة.",
    ),
  },
  footer: {
    rights: t("Wejdan's portfolio — HCI graduate.", "موقع وجدان الشخصي — خريجة HCI."),
    sourceNote: t("Built with care; no fabricated claims.", "تصميم وتجربة مستخدم — وجدان."),
  },
  work: {
    pageTitle: t("Work", "الأعمال"),
    pageLede: t(
      "Six projects, academic and personal, each with its own evidence.",
      "ستة مشاريع أكاديمية وشخصية، مع توضيح دوري وما يتوفر لكل مشروع من نتائج.",
    ),
    openCase: t("Read the case", "اقرأ الدراسة"),
    allCases: t("All case studies", "جميع دراسات الحالة"),
    noScreens: t("No live screens exist for this project — nothing is fabricated here.", "ما تتوفر شاشات فعلية لهذا المشروع حاليًا."),
  },
  bidi: {
    lrm: "‎",
    rlm: "‏",
  },
};

export function pick<T extends { en: string; ar: string }>(obj: T, locale: Locale): string {
  return obj[locale];
}
