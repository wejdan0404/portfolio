import type { Locale } from "./i18n";

type Bi = { en: string; ar: string };
const t = (en: string, ar: string): Bi => ({ en, ar });

export const strings = {
  siteTitle: t("Wejdan — UX/UI, Product Design, HCI", "وجدان — تصميم تجربة ومنتج، تفاعل بين الإنسان والحاسب"),
  siteDescription: t(
    "HCI graduate designing honest, research-grounded product experiences in Arabic and English.",
    "خريجة تفاعل بين الإنسان والحاسب تصمّم تجارب منتج صادقة ومبنية على البحث، بالعربية والإنجليزية.",
  ),
  nav: {
    work: t("Work", "الأعمال"),
    about: t("About", "عنها"),
    services: t("Services", "الخدمات"),
    contact: t("Contact", "التواصل"),
    cv: t("CV", "السيرة الذاتية"),
  },
  actions: {
    viewCV: t("View CV", "السيرة الذاتية"),
    viewWork: t("See the work", "اطّلعي على الأعمال"),
    emailMe: t("Email me", "راسليني"),
    openCase: t("Open case study", "افتحي دراسة الحالة"),
    switchLang: t("العربية", "English"),
    switchTheme: t("Theme", "السمة"),
    themeLight: t("Light", "فاتح"),
    themeDark: t("Dark", "داكن"),
    themeSystem: t("System", "النظام"),
    backHome: t("Back to home", "العودة إلى الصفحة الرئيسية"),
  },
  evidence: {
    legendTitle: t("How evidence is marked", "تصنيف الأدلة"),
    tested: t("Tested with users", "اختُبر مع مستخدمين"),
    planned: t("Planned, not tested", "مُخطَّط، دون اختبار"),
    early: t("Early exploration", "استكشاف مبكر"),
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
    eyebrow: t("UX · UI · HCI", "تجربة · واجهة · تفاعل الإنسان مع الحاسب"),
    heroLineA: t("Designing honest,", "أصمّم تجارب منتج صادقة"),
    heroLineB: t("research-grounded", "ومبنية على البحث"),
    heroLineC: t("product experiences.", "بالعربية والإنجليزية."),
    heroLede: t(
      "I’m Wejdan — an HCI graduate working across UX, UI, and product research. I design in Arabic and English with equal rigor, show the evidence behind the work, and keep decoration out of the way of clarity.",
      "أنا وجدان، خريجة تفاعل بين الإنسان والحاسب. أعمل في تصميم التجربة والواجهة وبحث المستخدم، وأصمّم للعربية والإنجليزية بالقدر نفسه من الدقة، وأعرض الأدلة التي تسند القرارات، وأبقي الزينة بعيدة عن طريق الوضوح.",
    ),
    workEyebrow: t("Selected work", "أعمال مختارة"),
    workHeading: t("Six projects. Six honest evaluations.", "ستة مشاريع. ستة تقييمات صادقة."),
    workLede: t(
      "Each study links back to its real evidence. If something was planned but never tested, it says so.",
      "ترجع كل دراسة إلى أدلتها الفعلية. وإذا كان شيء مُخطَّطًا ولم يُختبر، فذلك مذكور صراحةً.",
    ),
    aboutEyebrow: t("About", "عنّي"),
    aboutHeading: t(
      "I design the way I’d want someone to design for me.",
      "أصمّم كما أتمنّى أن يصمَّم لي.",
    ),
    aboutBody: t(
      "Trained in Human–Computer Interaction, I lean on primary research, structured critique, and a strong design-systems foundation. My work holds Arabic and English to the same quality bar — because readers deserve both, not a translated afterthought.",
      "تدرّبت في التفاعل بين الإنسان والحاسب. أعتمد على البحث الأولي، والنقد المنظّم، وأساسٍ متين من أنظمة التصميم. أُلزِم عملي بالعربية والإنجليزية بالمستوى نفسه، لأن القارئ يستحقّ لغتين لا ترجمةً عابرة.",
    ),
    capabilitiesEyebrow: t("Capabilities", "القدرات"),
    capabilitiesHeading: t("What I bring to a product team.", "ما أُضيفه إلى فريق المنتج."),
    contactEyebrow: t("Say hello", "تواصلي"),
    contactHeading: t("Have a product to build or research?", "لديك منتج تريدين تصميمه أو بحثه؟"),
    contactBody: t(
      "The fastest way to reach me is by email. Tell me about the surface, the user, and the question you’re trying to answer.",
      "أسرع طريقة للتواصل هي البريد الإلكتروني. أخبريني عن المنتج، والمستخدم، والسؤال الذي تحاولين الإجابة عنه.",
    ),
  },
  about: {
    pageTitle: t("About", "عنها"),
    sections: {
      who: t("Who", "من"),
      how: t("How I work", "كيف أعمل"),
      principles: t("Principles", "المبادئ"),
      tools: t("Tools", "الأدوات"),
      elsewhere: t("Elsewhere", "في أماكن أخرى"),
    },
  },
  services: {
    pageTitle: t("Services", "الخدمات"),
    hero: t(
      "I partner with product teams on honest, bilingual UX.",
      "أعمل مع فرق المنتج على تجربة ثنائية اللغة قائمة على الصدق.",
    ),
    heroSub: t(
      "Three lanes, one standard: nothing ships without evidence it will hold up.",
      "ثلاثة مسارات ومعيار واحد: لا شيء يُشحن قبل دليل يثبت صلاحيته.",
    ),
    whatIWontTitle: t("What I won’t claim", "ما لا أدّعيه"),
    processTitle: t("How a project moves", "كيف يمضي مشروع"),
    whyTitle: t("Why work with me", "لماذا العمل معي"),
    ctaTitle: t("Start a conversation.", "لنبدأ حديثًا."),
    ctaBody: t(
      "No form, no promises on a Monday. Email me with what you’re trying to figure out.",
      "لا نموذج، ولا وعودٌ متعجّلة. راسليني بما تحاولين فهمه.",
    ),
  },
  contact: {
    pageTitle: t("Contact", "التواصل"),
    body: t(
      "I read every email myself. Short notes get short replies; longer briefs get longer ones.",
      "أقرأ كل رسالة بنفسي. الرسائل القصيرة تحظى بردود قصيرة، والمشاريع المفصّلة بردود مفصّلة.",
    ),
    emailLabel: t("Email", "البريد الإلكتروني"),
    linkedinLabel: t("LinkedIn", "لينكدإن"),
    locationLabel: t("Based in", "المقر"),
    location: t("Makkah / Jeddah, Saudi Arabia", "مكة المكرمة / جدة، المملكة العربية السعودية"),
    responseNote: t(
      "I reply when I can give the message a thoughtful read, usually within a few days.",
      "أردّ حين يتسنى لي قراءة الرسالة بتمعّن، وغالبًا خلال بضعة أيام.",
    ),
  },
  cv: {
    pageTitle: t("CV", "السيرة الذاتية"),
    headline: t(
      "The current CV is being updated.",
      "السيرة الذاتية قيد التحديث.",
    ),
    body: t(
      "A fresh version is in progress. In the meantime, send me a short note and I’ll share a tailored copy.",
      "النسخة الجديدة قيد الإعداد. في هذه الأثناء، راسليني بسطر قصير وسأُرسل نسخة ملائمة.",
    ),
    contactLine: t(
      "Email wejdan4458@gmail.com for a copy.",
      "راسليني على wejdan4458@gmail.com للحصول على نسخة.",
    ),
  },
  footer: {
    rights: t("Portfolio of Wejdan — HCI graduate.", "موقع وجدان الشخصي — خريجة تفاعل بين الإنسان والحاسب."),
    sourceNote: t("Built with care; no fabricated claims.", "بُني بعناية، ومن دون ادّعاءات مُلفّقة."),
  },
  work: {
    pageTitle: t("Work", "الأعمال"),
    pageLede: t(
      "Six HCI and product-design projects from academic and freelance work, condensed to their evidence.",
      "ستة مشاريع في التفاعل بين الإنسان والحاسب وتصميم المنتج، من أعمال أكاديمية وحرة، مُلخَّصة إلى أدلتها.",
    ),
    openCase: t("Read the case", "اقرأ الدراسة"),
    allCases: t("All case studies", "جميع دراسات الحالة"),
    noScreens: t("No live screens exist for this project — nothing is fabricated here.", "لا تتوفر شاشات حيّة لهذا المشروع، ولا شيء مُلفَّق هنا."),
  },
  bidi: {
    lrm: "‎",
    rlm: "‏",
  },
};

export function pick<T extends { en: string; ar: string }>(obj: T, locale: Locale): string {
  return obj[locale];
}
