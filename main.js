const dict = {
  "ja": {
    "ui.skip": "本文へ移動",
    "ui.navigation": "メインナビゲーション",
    "ui.menu": "メニュー",
    "ui.dark": "ダーク",
    "ui.resume": "履歴書 PDF",
    "ui.profile": "プロフィール",
    "ui.filter": "プロジェクトの絞り込み",
    "ui.close": "閉じる",
    "ui.expand": "詳しく読む",
    "ui.collapse": "一覧に戻る",
    "nav.research": "研究",
    "nav.experience": "職歴",
    "card.area": "分野",
    "card.period": "期間・分野",
    "card.research": "研究内容",
    "card.experience": "所属・職務",
    "card.venue": "掲載・発表先",
    "card.publication": "論文・発表",
    "card.education": "所属・学位",
    "card.skills": "手法・ツール",
    "hero.degree": "東京大学大学院 修士課程修了",
    "hero.fellow": "WIPO 用語フェロー（2024）",
    "about.languages": "日本語・英語",
    "places.title": "居住地",
    "places.jp": "日本",
    "places.us": "アメリカ",
    "places.se": "スウェーデン",
    "places.ch": "スイス",
    "nav.education": "学歴",
    "nav.contact": "連絡先",
    "hero.title": "自然言語処理・LLMの研究",
    "hero.lead": "自然言語処理の研究として、MT／LLMの翻訳品質評価と、GNNによる専門用語の生成・拡張に取り組んできました。評価の設計からPythonによる実験、定量・定性分析までを担当しています。",
    "hero.f1k": "専門",
    "hero.f1v": "翻訳品質評価 / 専門用語生成",
    "hero.k1": "ツール",
    "hero.k2": "言語",
    "about.h3a": "研究・分析",
    "about.p1": "言語現象に即した評価観点を定義し、実験結果を数値と具体例の両面から分析します。共同研究ではGNNの概念設計・実装・実験を担当しました。",
    "about.li1": "評価設計：分類・指標の定義、アノテーション、エラー分析",
    "about.li2": "実験実装：Python、LLM APIs、PyG／NetworkX、sklearn",
    "about.li3": "研究の共有：論文執筆、分析結果の整理、共同研究",
    "about.h3b": "スキル",
    "projects.h": "プロジェクト",
    "projects.fAll": "すべて",
    "projects.fRes": "研究",
    "projects.fInt": "インターンシップ",
    "projects.fTerm": "用語",
    "projects.fTrans": "翻訳",
    "case.h": "ケーススタディ",
    "case.t": "翻訳の「どこが、どう違うか」を評価する。",
    "case.k1": "評価の課題",
    "case.v1": "標準的な自動評価や人手評価だけでは、英日文芸翻訳に固有の品質差を捉えにくい。システムを比較するために、分析する観点を明示する必要がありました。",
    "case.k2": "評価設計",
    "case.v2": "MQM／SCATEを土台に、日本語と文芸作品の特性を含む40項目の分類・評価観点を設計。複数のMT／LLM出力を同一条件で分析しました。",
    "case.k3": "分析",
    "case.v3": "定量評価と個々の訳文の定性分析を組み合わせ、システムごとの強み・弱みを整理。総合的な評価だけでは見えにくい違いを、多角的に検討しました。",
    "edu.h": "学歴",
    "edu.m": "修士（M.S.）東京大学大学院 学際情報学府 学際情報学専攻（図書館情報学研究室）",
    "edu.mDate": "修士課程修了",
    "edu.mTopic": "修士論文：文芸翻訳に機械翻訳を利用する可能性の検討",
    "edu.ab": "留学（Study Abroad）スウェーデン王立工科大学",
    "edu.abDate": "2024年1月 - 2024年6月",
    "edu.b": "学士（B.S.）東京大学 工学部 物理工学科（香取・牛島研究室）",
    "edu.bDate": "2019年4月 – 2023年3月",
    "edu.bTopic": "研究：可搬型光格子時計の開発・評価",
    "contact.h": "連絡先",
    "contact.links": "リンク",
    "contact.resume": "履歴書（PDF）",
    "contact.direct": "メール・活動領域",
    "contact.rolesV": "自然言語処理 / LLM研究開発 / 評価設計",
    "footer.top": "ページ上部へ ↑",
    "nav.publications": "論文・発表",
    "pub.h": "論文・発表",
    "pub.venue": "EMNLP 2026 Findings",
    "pub.status": "採択・発表予定",
    "pub.author": "筆頭著者",
    "pub.contribution": "構想・実装・実験・論文執筆を主導",
    "pub.project": "関連する研究を見る",
    "pub.anlp1.venue": "ANLP 2026",
    "pub.anlp1.status": "発表済み · ポスター・口頭発表",
    "pub.anlp1.award": "優秀賞受賞",
    "pub.anlp1.relation": "EMNLP 2026 Findings採択論文の基礎となった研究。",
    "pub.anlp2.status": "発表済み",
    "pub.anlp2.contribution": "修士論文の一部に基づく研究発表。翻訳品質の評価枠組みを設計し、MT／LLMの実行、アノテーション・分析、論文執筆を担当。",
    "pub.thesis.kind": "修士論文",
    "pub.thesis.status": "提出済み",
    "pub.thesis.relation": "推理小説を中心に検討した修士論文。ANLP 2026の文芸翻訳論文は、この修士論文の一部に基づく研究発表です。",
    "pub.anlp1.title": "専門語彙グラフに基づく自動用語生成枠組・手法・評価",
    "pub.anlp2.title": "文芸翻訳における機械翻訳の利用可能性の検討",
    "pub.thesis.title": "文芸翻訳に機械翻訳を利用する可能性の検討",
    "pub.paper.language": "日本語論文",
    "pub.thesis.language": "日本語の修士論文",
    "edu.mDescription": "日本語論文。推理小説を中心に検討。研究の一部をANLP 2026で発表。"
  },
  "en": {
    "ui.skip": "Skip to content",
    "ui.navigation": "Main navigation",
    "ui.menu": "Menu",
    "ui.dark": "Dark",
    "ui.resume": "Résumé PDF",
    "ui.profile": "Profile",
    "ui.filter": "Filter projects",
    "ui.close": "Close",
    "ui.expand": "Read more",
    "ui.collapse": "Back to list",
    "nav.research": "Research",
    "nav.experience": "Experience",
    "card.area": "Area",
    "card.period": "Period / Area",
    "card.research": "Research record",
    "card.experience": "Organization & role",
    "card.venue": "Venue",
    "card.publication": "Publication record",
    "card.education": "Institution & degree",
    "card.skills": "Methods & tools",
    "hero.degree": "Master’s degree, The University of Tokyo",
    "hero.fellow": "WIPO Terminology Fellow (2024)",
    "about.languages": "Japanese · English",
    "places.title": "Places lived",
    "places.jp": "Japan",
    "places.us": "United States",
    "places.se": "Sweden",
    "places.ch": "Switzerland",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.title": "NLP & LLM Research",
    "hero.lead": "Research in MT/LLM translation evaluation and graph-based terminology generation. My work spans evaluation design, Python experiments, and quantitative and qualitative analysis.",
    "hero.f1k": "Focus",
    "hero.f1v": "Translation evaluation / Term generation",
    "hero.k1": "Tools",
    "hero.k2": "Languages",
    "about.h3a": "Research practice",
    "about.p1": "I define evaluation criteria around language phenomena and examine results through both metrics and examples. In collaborative research, I contributed GNN concept design, implementation and experiments.",
    "about.li1": "Evaluation: taxonomy and metric design, annotation, error analysis",
    "about.li2": "Implementation: Python, LLM APIs, PyG/NetworkX, sklearn",
    "about.li3": "Communication: paper writing, analysis and research collaboration",
    "about.h3b": "Skills",
    "projects.h": "Projects",
    "projects.fAll": "All",
    "projects.fRes": "Research",
    "projects.fInt": "Internship",
    "projects.fTerm": "Terminology",
    "projects.fTrans": "Translation",
    "case.h": "Case Study",
    "case.t": "Understanding where translations differ—and how.",
    "case.k1": "Evaluation gap",
    "case.v1": "Standard automatic and human evaluation can miss quality differences specific to EN–JA literary translation. Comparing systems required an explicit set of analytical criteria.",
    "case.k2": "Design decision",
    "case.v2": "Built on MQM/SCATE to define 40 evaluation items covering Japanese and literary features, then analyzed outputs from multiple MT systems and LLMs under consistent conditions.",
    "case.k3": "Analysis",
    "case.v3": "Combined quantitative evaluation with qualitative analysis of translations to characterize system strengths and weaknesses beyond an overall assessment.",
    "edu.h": "Education",
    "edu.m": "M.S. in University of Tokyo, Graduate School of Interdisciplinary Information Studies",
    "edu.mDate": "Master’s degree completed",
    "edu.mTopic": "Master’s thesis: Exploring the Potential Use of Machine Translation in Literary Translation (原題：文芸翻訳に機械翻訳を利用する可能性の検討)",
    "edu.ab": "Study Abroad: Royal Institute of Technology (KTH), Stockholm, Sweden",
    "edu.abDate": "January 2024 - June 2024",
    "edu.b": "B.S. in University of Tokyo, Faculty of Engineering, Department of Applied Physics (Katori/Ushijima Laboratory)",
    "edu.bDate": "April 2019 - March 2023",
    "edu.bTopic": "Research: Development and evaluation of a portable optical lattice clock",
    "contact.h": "Contact",
    "contact.links": "Links",
    "contact.resume": "Résumé (PDF)",
    "contact.direct": "Direct",
    "contact.rolesV": "NLP / LLM Research & Development / Evaluation Design",
    "footer.top": "Back to top ↑",
    "nav.publications": "Publications",
    "pub.h": "Publications",
    "pub.venue": "EMNLP 2026 Findings",
    "pub.status": "Accepted · Presentation forthcoming",
    "pub.author": "First author",
    "pub.contribution": "Led concept development, implementation, experiments and paper writing.",
    "pub.project": "Explore the research",
    "pub.anlp1.venue": "ANLP 2026",
    "pub.anlp1.status": "Presented · Poster and oral presentations",
    "pub.anlp1.award": "Award received (優秀賞)",
    "pub.anlp1.relation": "Foundational work for the EMNLP 2026 Findings paper.",
    "pub.anlp2.status": "Presented",
    "pub.anlp2.contribution": "Based on part of the master’s thesis. Designed the evaluation framework and conducted MT/LLM runs, annotation, analysis and paper writing.",
    "pub.thesis.kind": "Master’s thesis",
    "pub.thesis.status": "Submitted",
    "pub.thesis.relation": "A study focused on mystery novels (subtitle: 推理小説を中心に). The ANLP 2026 literary-translation paper is based on part of this thesis.",
    "pub.anlp1.title": "Automatic Term Generation Based on Terminological Graphs: Framework, Methods and Evaluation",
    "pub.anlp2.title": "Exploring the Applicability of Machine Translation to Literary Translation",
    "pub.thesis.title": "Exploring the Potential Use of Machine Translation in Literary Translation",
    "pub.paper.language": "English title translation · Paper in Japanese",
    "pub.thesis.language": "English title translation · Thesis in Japanese",
    "edu.mDescription": "English title translation · Thesis in Japanese. Focused on mystery novels (推理小説を中心に); part of the research was presented at ANLP 2026."
  }
};

const projects = [
  {
    id: "r2",
    label: { ja: "用語研究", en: "Terminology" },
    title: {
      ja: "専門用語の生成・拡張の分析（GNN）",
      en: "Terminology Generation & Expansion (GNN)"
    },
    summary: {
      ja: "専門用語の生成・拡張をグラフとしてモデル化する共同研究。GNNの概念設計、Python実装・実験、論文執筆を担当。基礎研究のANLP 2026発表で優秀賞を受賞。",
      en: "Collaborative research modeling terminology generation and expansion as graphs. Contributed GNN concept design, Python implementation, experiments and paper writing. The foundational work received 優秀賞 at ANLP 2026."
    },
    tags: ["research", "terminology", "gnn"],
    details: {
      ja: {
        overview: "専門用語の生成・拡張を、関係構造（グラフ）としてモデル化し分析。用語が拡張するパターンの把握に繋げる研究。",
        role: "GNN側の概念設計 / スクリプト実装 / 実験 / 論文執筆",
        deliverables: [
          "Conceptual paper（共著・second author）: Terminologists as Social Custodians of Knowledge: Clarifying the Expertise of Terminologists and the Status of Terminologies",
          "ANLP 2026（筆頭著者・ポスターおよび口頭発表済み・優秀賞受賞・日本語論文）: 専門語彙グラフに基づく自動用語生成枠組・手法・評価。EMNLP 2026 Findings採択論文の基礎研究。",
          "EMNLP 2026 Findings（筆頭著者・採択・発表予定）: Graph Neural Networks for Automatic Term Generation: Defining and Exploring Terminological Graph",
        ],
        impact: [
          "グラフ構造により、専門語彙生成の特徴を捉えられる見込みを示した（詳細は公開前の非公開範囲あり）"
        ],
        stack: "Python / GNN (PyG/NetworkX) / sklearn"
      },
      en: {
        overview: "Modeled terminology generation and expansion as structured relationships using graph representations, informing how terminologies can be maintained as terms shift.",
        role: "Concept design (GNN) / Implementation / Experiments / Paper writing",
        deliverables: [
          "Conceptual paper (2nd author): Terminologists as Social Custodians of Knowledge: Clarifying the Expertise of Terminologists and the Status of Terminologies",
          "ANLP 2026 (first author; poster and oral presentations; award received: 優秀賞; paper in Japanese): Automatic Term Generation Based on Terminological Graphs: Framework, Methods and Evaluation (English translation; 原題：専門語彙グラフに基づく自動用語生成枠組・手法・評価). Foundational work for the EMNLP 2026 Findings paper.",
          "EMNLP 2026 Findings (first author; accepted, presentation forthcoming): Graph Neural Networks for Automatic Term Generation: Defining and Exploring Terminological Graph",
        ],
        impact: [
          "Early results suggest graph structures capture meaningful terminology patterns (some details under non-disclosure before publication)"
        ],
        stack: "Python / GNN (PyG/NetworkX) / sklearn"
      }
    }
  },

  {
    id: "r1",
    label: { ja: "翻訳評価", en: "MT evaluation" },
    related: { href: "#case", text: "case.h" },
    title: {
      ja: "文芸翻訳（英日）のための MT／LLM 評価設計",
      en: "An MT/LLM Evaluation Framework for EN/JA Literary Translation"
    },
    summary: {
      ja: "日本語・文芸翻訳の特性を含む40項目の評価観点を設計。MT／LLMの実行、アノテーション、定量・定性分析、論文執筆を担当。",
      en: "Designed 40 evaluation items for Japanese literary translation. Conducted MT/LLM runs, annotation, quantitative and qualitative analysis, and paper writing."
    },
    tags: ["research", "writing", "mt", "evaluation"],
    details: {
      ja: {
        overview: "文芸翻訳領域において、標準的な評価手法では捉えにくいエラーや良さを、特に日本語・文芸作品特有の観点まで分解して分析できる評価枠組みを設計。",
        role: "評価設計 / MT・LLM実行 / 解析（アノテーション） / 論文執筆",
        deliverables: [
          "ANLP 2026（筆頭著者・発表済み・日本語論文）: 文芸翻訳における機械翻訳の利用可能性の検討。修士論文の一部に基づく研究発表。",
          "修士論文（提出済み・日本語）: 文芸翻訳に機械翻訳を利用する可能性の検討。推理小説を中心に検討。研究の一部をANLP 2026で発表。",
          "GitHub（自動評価スクリプト例）: https://github.com/tsukimidaifuku/COMET-trial",
        ],
        impact: [
          "システム別の強み・弱みを、従来の自動・人手評価では見えない粒度で分析",
          "人手評価や実運用にも用いられる評価スキームとして整理"
        ],
        stack: "Python / LLM APIs / Evaluation Scripts / MQM"
      },
      en: {
        overview: "Designed a framework to capture quality differences that standard automatic metrics often miss, decomposing accuracy/fluency errors including Japanese-specific phenomena in literary translation.",
        role: "Evaluation design / MT/LLM runs / Analysis (annotation) / Paper writing",
        deliverables: [
          "ANLP 2026 (first author; presented; paper in Japanese): Exploring the Applicability of Machine Translation to Literary Translation (English translation; 原題：文芸翻訳における機械翻訳の利用可能性の検討). Based on part of the master’s thesis.",
          "Master’s thesis (submitted; written in Japanese): Exploring the Potential Use of Machine Translation in Literary Translation (English translation; 原題：文芸翻訳に機械翻訳を利用する可能性の検討). Focused on mystery novels (推理小説を中心に); part of the research was presented at ANLP 2026.",
          "GitHub (evaluation & repro scripts): https://github.com/tsukimidaifuku/COMET-trial",
        ],
        impact: [
          "Analyzed system-specific strengths and weaknesses from multiple perspectives compared to traditional automatic and human evaluation",
          "Provided an evaluation framework that can be applied to various MT/LLM systems"
        ],
        stack: "Python / LLM APIs / Evaluation Scripts / MQM"
      }
    }
  },

  {
    id: "i1",
    label: { ja: "2024.09–11", en: "2024.09–11" },
    dateLabel: { ja: "2024年9月〜11月", en: "September–November 2024" },
    title: {
      ja: "WIPO Pearl の専門用語翻訳（英日）",
      en: "WIPO Pearl · Evidence-Based Terminology Translation (EN/JA)"
    },
    summary: {
      ja: "ソースつきで専門用語翻訳を作成（約800語）。英語環境（海外）・国際機関での勤務。",
      en: "Translated ~800 terms with evidence sources and collaborated with terminology and translation managers in an English-speaking environment (overseas) and international organizations."
    },
    tags: ["intern", "writing", "terminology", "translation"],
    details: {
      ja: {
        overview: "国連の専門機関で、専門用語翻訳を実施。翻訳の正確性を重視してソースつきで作成。",
        role: "専門用語翻訳 / 根拠提示 / 特許文書ベースのコーパス作成",
        deliverables: [
          "WIPO Pearl: <a href=\"https://wipopearl.wipo.int/en/fullrecord/22147\" target=\"_blank\" rel=\"noopener noreferrer\">一部翻訳例</a>"
        ],
        impact: [
          "約800語の専門用語訳（ソース付き）",
          "シニア翻訳マネージャー・専門用語マネージャーと協働（英語環境・海外で勤務）"
        ],
        stack: "Termbase workflow / Documentation / translation management tools"
      },
      en: {
        overview: "Delivered evidence-based terminology translations integrated into a public termbase (WIPO Pearl), emphasizing its accuracy and consistency.",
        role: "Terminology translation / Evidence sourcing / Corpus creation from patent documents",
        deliverables: [
          "WIPO Pearl: <a href=\"https://wipopearl.wipo.int/en/fullrecord/22147\" target=\"_blank\" rel=\"noopener noreferrer\">An example of translation</a>"
        ],
        impact: [
          "Translated ~800 terminology entries with evidence sources into a public termbase (WIPO Pearl)",
          "Partnered with senior translation and terminology managers in English (overseas) and international organizations"
        ],
        stack: "Termbase workflow / Documentation / translation management tools"
      }
    }
  },

  {
    id: "t1",
    label: { ja: "翻訳指導", en: "Translation" },
    title: {
      ja: "大学図書館職員向け翻訳勉強会の講師",
      en: "Translation Study Group Instructor for University Library Staff"
    },
    summary: {
      ja: "大学図書館職員向け翻訳勉強会の講師。学習者の訳文をレビューし、正確性・流暢性の観点で改善点をフィードバック。",
      en: "Reviewed translations and coached on accuracy and fluency with structured feedback for university library staff."
    },
    tags: ["writing", "translation", "teaching"],
    details: {
      ja: {
        overview: "大学図書館職員向け翻訳勉強会の講師。参加者の訳文をレビューし、良い点/改善点を言語化してフィードバック。翻訳品質の観点からの分析をおこなった。また翻訳例の提示もおこなった。",
        role: "講師 / レビュー / コメント / 改善点の言語化",
        deliverables: [
          "使用教材（論文）: <a href=\"https://link.springer.com/article/10.1007/s11042-024-20016-1\" target=\"_blank\" rel=\"noopener noreferrer\">Generative artificial intelligence: a systematic review and applications</a>"
        ],
        impact: [
          "第三者の訳文を評価し、改善点を構造化して伝える力が向上。翻訳例の提示。"
        ],
        stack: "Documents / Feedback notes / Translation"
      },
      en: {
        overview: "Provided structured feedback on learners’ translations, strengthening systematic error analysis and communication. Also provided translation examples.",
        role: "Instructor / Review / Comments / Suggestions",
        deliverables: [
          "Materials used (papers/texts): <a href=\"https://link.springer.com/article/10.1007/s11042-024-20016-1\" target=\"_blank\" rel=\"noopener noreferrer\">Generative artificial intelligence: a systematic review and applications</a>"
        ],
        impact: [
          "Improved ability to diagnose issues and communicate improvements clearly. Also provided translation examples."
        ],
        stack: "Docs / Feedback notes / Translation"
      }
    }
  }
];

const places = {
  jp: {
    ja: { description: "東京大学で物理工学を学び、大学院では機械翻訳評価と専門用語生成を研究。", link: "edu.h", href: "#education" },
    en: { description: "Studied applied physics at the University of Tokyo and researched machine translation evaluation and terminology generation in graduate school.", link: "edu.h", href: "#education" }
  },
  us: {
    ja: { description: "小学校・中学校の時期にアメリカに住み、英語での学校生活を経験。", link: "about.h3b", href: "#about" },
    en: { description: "Lived in the United States during elementary and middle school and attended school in an English-speaking environment.", link: "about.h3b", href: "#about" }
  },
  se: {
    ja: { description: "2024年1月から6月まで、ストックホルムのスウェーデン王立工科大学（KTH）に留学。", link: "edu.h", href: "#education" },
    en: { description: "Studied abroad at KTH Royal Institute of Technology in Stockholm from January to June 2024.", link: "edu.h", href: "#education" }
  },
  ch: {
    ja: { description: "2024年9月から11月まで、ジュネーブの WIPO で日本語の専門用語整備を担当。", link: "nav.experience", href: "#experience" },
    en: { description: "Worked in Geneva as a Japanese Terminology Fellow at WIPO from September to November 2024.", link: "nav.experience", href: "#experience" }
  }
};

const detailLabels = {
  ja: { overview: "概要", role: "担当", deliverables: "成果物", impact: "成果・結果", stack: "使用ツール・手法" },
  en: { overview: "Overview", role: "Role", deliverables: "Deliverables", impact: "Results", stack: "Tools & methods" }
};

const root = document.documentElement;
const topbar = document.querySelector(".topbar");
const menuBtn = document.querySelector("#menuBtn");
const langBtn = document.querySelector("#langBtn");
const themeBtn = document.querySelector("#themeBtn");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modalTitle");
const modalBody = document.querySelector("#modalBody");
const modalCategory = document.querySelector("#modalCategory");
const closeModal = document.querySelector("#closeModal");
const sheetBody = document.querySelector("#sheetBody");
const projectCount = document.querySelector("#projectCount");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const sectionNotes = [...document.querySelectorAll(".section-note")];
const profileLink = document.querySelector("#profileLink");
const placeLinks = [...document.querySelectorAll(".places-list [data-place]")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let lang = readPreference("lang") === "ja" ? "ja" : "en";
let filter = "all";
let returnFocus;
let cardMotion;
let returningCard = false;

function readPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Preferences still apply for the current visit when storage is disabled.
  }
}

function setTheme(theme) {
  root.dataset.theme = theme;
  themeBtn.setAttribute("aria-pressed", String(theme === "dark"));
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#171e23" : "#e6eaed";
}

function setMobileMenu(open) {
  topbar.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
}

function setLanguage(language) {
  lang = language;
  root.lang = language;
  langBtn.textContent = lang === "en" ? "EN / JP" : "JP / EN";
  langBtn.setAttribute("aria-label", lang === "en" ? "日本語に切り替え" : "Switch to English");

  for (const element of document.querySelectorAll("[data-i18n]")) {
    element.textContent = dict[lang][element.dataset.i18n];
  }
  for (const element of document.querySelectorAll("[data-i18n-label]")) {
    element.setAttribute("aria-label", dict[lang][element.dataset.i18nLabel]);
  }
  for (const note of sectionNotes) updateNoteLabel(note);
  renderProjects();
}

function escapeHTML(value) {
  const escaped = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return value.replace(/[&<>"']/g, character => escaped[character]);
}

function renderProjectText(value) {
  const linkPattern = /<a\b[^>]*href="(https?:\/\/[^"]+)"[^>]*>([^<]+)<\/a>|(https?:\/\/[^\s)）<]+)/gi;
  let result = "";
  let offset = 0;
  for (const link of value.matchAll(linkPattern)) {
    const url = escapeHTML(link[1] || link[3]);
    const text = escapeHTML(link[2] || link[3]);
    result += escapeHTML(value.slice(offset, link.index));
    result += `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    offset = link.index + link[0].length;
  }
  return result + escapeHTML(value.slice(offset));
}

function renderDetailFields(project) {
  const detail = project.details[lang];
  const labels = detailLabels[lang];
  const fields = Object.entries(labels).map(([key, label]) => {
    const value = detail[key];
    const content = Array.isArray(value)
      ? `<ul class="detail-list">${value.map(item => `<li>${renderProjectText(item)}</li>`).join("")}</ul>`
      : renderProjectText(value);
    return `<div><dt>${label}</dt><dd>${content}</dd></div>`;
  }).join("");
  const related = project.related
    ? `<a class="record-link" href="${project.related.href}">${dict[lang][project.related.text]}</a>`
    : "";
  return `<dl class="detail-fields">${fields}</dl>${related}`;
}

function renderProject(project) {
  const title = escapeHTML(project.title[lang]);
  const summary = escapeHTML(project.summary[lang]);
  const label = escapeHTML(project.label[lang]);
  const stamp = project.dateLabel
    ? `<span class="stamp" aria-label="${escapeHTML(project.dateLabel[lang])}">${label}</span>`
    : label;

  return `<article class="project-record" id="${project.id}">
    <h3>
      <button class="entry-trigger" type="button" data-project="${project.id}" aria-haspopup="dialog" aria-label="${title}">
        <span class="entry-label">${stamp}</span>
        <span class="entry-body"><span class="entry-title">${title}</span><span class="record-summary">${summary}</span></span>
      </button>
    </h3>
    <div class="record-detail record more-content"><div class="entry-body">${renderDetailFields(project)}</div></div>
  </article>`;
}

function renderProjects(announce = false) {
  const visible = filter === "all" ? projects : projects.filter(project => project.tags.includes(filter));
  const research = visible.filter(project => project.tags.includes("research"));
  const experience = visible.filter(project => !project.tags.includes("research"));
  document.querySelector("#researchGrid").innerHTML = research.map(renderProject).join("");
  document.querySelector("#experienceGrid").innerHTML = experience.map(renderProject).join("");
  document.querySelector("#research").hidden = research.length === 0;
  document.querySelector("#experience").hidden = experience.length === 0;

  for (const button of filterButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
  }
  if (announce || projectCount.textContent) {
    projectCount.textContent = lang === "ja" ? `${visible.length}件のプロジェクト` : `${visible.length} projects`;
  }
}

function openSheet(category, title, body, trigger) {
  returnFocus = trigger;
  modalCategory.textContent = category;
  modalTitle.textContent = title;
  modalBody.innerHTML = body;

  const fromCard = trigger.matches(".entry-trigger");
  modal.classList.toggle("sheet-from-card", fromCard);
  modal.showModal();
  sheetBody.scrollTop = 0;
  closeModal.focus({ preventScroll: true });

  if (fromCard && !reducedMotion.matches && typeof modal.animate === "function") {
    trigger.classList.add("entry-card-out");
    cardMotion = modal.animate([
      { transform: "translateX(calc(100% + 56px))" },
      { transform: "translateX(0)" }
    ], { duration: 380, easing: "cubic-bezier(.22, .75, .25, 1)", fill: "both" });
  }
}

function closeSheet() {
  if (returningCard) return;
  if (!cardMotion || reducedMotion.matches || cardMotion.currentTime <= 0) {
    modal.close();
    return;
  }

  returningCard = true;
  modal.classList.add("sheet-returning");
  cardMotion.onfinish = () => modal.close();
  cardMotion.updatePlaybackRate(-1.45);
  cardMotion.play();
}

function setExpanded(note, expanded) {
  note.setAttribute("aria-expanded", String(expanded));
  note.closest(".loan-card").classList.toggle("is-expanded", expanded);
  note.querySelector("[lang]").textContent = expanded ? "back to list" : "read more";
  updateNoteLabel(note);
}

function updateNoteLabel(note) {
  const title = note.closest(".card-heading").querySelector("h2").textContent;
  const action = note.getAttribute("aria-expanded") === "true" ? "ui.collapse" : "ui.expand";
  note.setAttribute("aria-label", `${dict[lang][action]} · ${title}`);
}

function revealSection(hash) {
  if (["#research", "#experience"].includes(hash) && document.querySelector(hash).hidden) {
    filter = "all";
    renderProjects(true);
  }
  if (hash === "#case") {
    setExpanded(document.querySelector("#case .section-note"), true);
  }
}

langBtn.addEventListener("click", () => {
  setLanguage(lang === "en" ? "ja" : "en");
  savePreference("lang", lang);
});
themeBtn.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(next);
  savePreference("theme", next);
});
menuBtn.addEventListener("click", () => setMobileMenu(!topbar.classList.contains("menu-open")));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.open && topbar.classList.contains("menu-open")) {
    setMobileMenu(false);
    menuBtn.focus();
  }
});
window.matchMedia("(min-width: 881px)").addEventListener("change", event => {
  if (event.matches) setMobileMenu(false);
});

for (const note of sectionNotes) {
  note.addEventListener("click", () => setExpanded(note, note.getAttribute("aria-expanded") === "false"));
}
for (const button of filterButtons) {
  button.addEventListener("click", () => {
    filter = button.dataset.filter;
    renderProjects(true);
  });
}

document.querySelector("#projects").addEventListener("click", event => {
  const trigger = event.target.closest("[data-project]");
  if (!trigger) return;
  const project = projects.find(item => item.id === trigger.dataset.project);
  const category = project.tags.includes("research") ? "nav.research" : "nav.experience";
  openSheet(dict[lang][category], project.title[lang], renderDetailFields(project), trigger);
});

for (const link of [profileLink, ...placeLinks]) {
  link.setAttribute("aria-haspopup", "dialog");
}
profileLink.addEventListener("click", event => {
  event.preventDefault();
  const text = dict[lang];
  const body = `<p>${escapeHTML(text["hero.lead"])}</p><p>${escapeHTML(text["about.p1"])}</p>
    <a class="record-link" href="#about">${text["about.h3b"]}</a>`;
  openSheet(text["ui.profile"], document.querySelector("#profile-name").textContent, body, profileLink);
});

document.querySelector("#places").addEventListener("click", event => {
  const trigger = event.target.closest("[data-place]");
  if (!trigger) return;
  event.preventDefault();
  const place = places[trigger.dataset.place][lang];
  const focusTarget = document.querySelector(`.places-list [data-place="${trigger.dataset.place}"]`);
  const body = `<p>${escapeHTML(place.description)}</p><a class="record-link" href="${place.href}">${dict[lang][place.link]}</a>`;
  openSheet(dict[lang]["places.title"], focusTarget.textContent, body, focusTarget);
});

closeModal.addEventListener("click", closeSheet);
modal.addEventListener("cancel", event => {
  event.preventDefault();
  closeSheet();
});
modal.addEventListener("close", () => {
  cardMotion?.cancel();
  cardMotion = undefined;
  returningCard = false;
  modal.classList.remove("sheet-from-card", "sheet-returning");
  returnFocus?.classList.remove("entry-card-out");
  returnFocus?.focus({ preventScroll: true });
  returnFocus = undefined;
});
modal.addEventListener("click", event => {
  if (event.target === modal) closeSheet();
});

document.addEventListener("click", event => {
  if (event.defaultPrevented) return;
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  revealSection(link.hash);
  if (link.closest(".nav")) setMobileMenu(false);
  if (link.closest(".sheet")) {
    modal.close();
    const section = document.getElementById(link.hash.slice(1));
    section.setAttribute("tabindex", "-1");
    section.focus({ preventScroll: true });
    returnFocus?.classList.remove("entry-card-out");
    returnFocus = undefined;
  }
});
window.addEventListener("hashchange", () => revealSection(location.hash));

document.querySelector("#year").textContent = new Date().getFullYear();
setTheme(readPreference("theme") === "dark" ? "dark" : "light");
setLanguage(lang);
revealSection(location.hash);
root.classList.add("js");
