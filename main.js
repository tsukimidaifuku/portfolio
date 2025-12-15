const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];

function safeStorageGet(key){
  try { return localStorage.getItem(key); } catch { return null; }
}
function safeStorageSet(key, value){
  try { localStorage.setItem(key, value); } catch { /* ignore */ }
}

let projectsUIReady = false;

const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- Theme (light/dark) ---
const themeBtn = $("#themeBtn");
const supportedThemes = new Set(["light", "dark"]);
const storedTheme = safeStorageGet("theme");
// デフォルトをLightに固定（ユーザー設定があればそれを優先）
const initialTheme = supportedThemes.has(storedTheme) ? storedTheme : "light";
document.documentElement.dataset.theme = initialTheme;

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || "light";
    const next = cur === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    safeStorageSet("theme", next);
  });
}

// --- Mobile menu ---
const menuBtn = $("#menuBtn");
const mobileNav = $("#mobileNav");
function setMobileNavOpen(open){
  if (!menuBtn || !mobileNav) return;
  if (open) mobileNav.removeAttribute("hidden");
  else mobileNav.setAttribute("hidden", "");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
}
if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    setMobileNavOpen(mobileNav.hasAttribute("hidden"));
  });
  $$("#mobileNav a").forEach(a => {
    a.addEventListener("click", () => setMobileNavOpen(false));
  });
}

// --- i18n ---
const dict = {
  ja: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.case": "Case Study",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.eyebrow": "Portfolio（JP/EN）｜修士課程＋インターンシップ",
    "hero.title": "MT Evaluation / Terminology（JP/EN）",
    "hero.lead": "修士課程ではMQM/SCATEを参考に英日文芸翻訳用の評価指標を作成し、MT/LLMの出力を定量/定性で分析しています。また共同研究やWIPOでのインターンなどでターミノロジー関連の実務作業も行っています。",
    "hero.cta1": "View projects",
    "hero.cta2": "Contact",
    "hero.cta3": "Download Resume (PDF)",
    "hero.f1k": "Focus",
    "hero.f1v": "機械翻訳品質評価（英日）（対象：文芸作品）",
    "hero.f2k": "Strengths",
    "hero.f2v": "MT/LLM評価・ターミノロジー・翻訳・自然言語処理",
    "hero.f3k": "Location",
    "hero.role": "Target Role: Product Language / Localization Quality / Terminology / MT Evaluation",
    "hero.k1": "Tools",
    "hero.k2": "Languages",

    "about.h": "About",
    "about.sub": "評価設計と評価運用を、実務で使える成果物に",
    "about.h3a": "Summary",
    "about.p1": "修士課程で文芸翻訳領域のMT/LLM品質評価を研究し、MQM/SCATEを参考に日本語・文芸作品特有の観点を含む評価枠組みを設計しています。",
    "about.li1": "評価設計（分類・指標）→ 分析 → レビューに落とし込み",
    "about.li2": "ターミノロジー翻訳（WIPO Pearl：<a href=\"https://wipopearl.wipo.int/en/fullrecord/22147\" target=\"_blank\" rel=\"noopener noreferrer\">翻訳例</a>）",
    "about.li3": "英語環境での協働（翻訳/ターミノロジーマネージャー）",
    "about.h3b": "Skills",
    "about.k1": "Highlight",
    "about.v1": "翻訳評価設計・分析",
    "about.k2": "Style",
    "about.v2": "根拠に基づく判断・明示的な評価",

    "projects.h": "Projects",
    "projects.sub": "修士研究2件・WIPO terminology fellowship・翻訳講師経験。クリックで詳細（役割・成果物）を表示。",
    "projects.fAll": "All",
    "projects.fRes": "Research",
    "projects.fInt": "Internship",
    "projects.fTerm": "Terminology",
    "projects.fTrans": "Translation",

    "case.h": "Case Study",
    "case.sub": "Problem → Approach → Result",
    "case.t": "Case Study: 英日文芸作品のMT/LLM評価フレームワーク作成",
    "case.k1": "Problem",
    "case.v1": "MT/LLM翻訳に対する標準的な自動評価や人手評価では、文芸翻訳・日本語特有の翻訳品質が捉えづらかった。",
    "case.k2": "Approach",
    "case.v2": "MQM/SCATEを参考に独自のエラー分類・評価観点を40項目分設計し、複数MT/LLMを同一条件で分析。定性・定量の両面での評価を行い、システムの強み/弱みを明示する。",
    "case.k3": "Result",
    "case.v3": "従来より多角的にシステム別の強み/弱みを診断。様々なMT/LLMに対して実運用可能な評価フレームワークとして提示。",

    "edu.h": "Education",
    "edu.sub": "学んできたことの概要",
    "edu.m": "修士（M.S.）東京大学大学院 学際情報学府 学際情報学専攻（図書館情報学研究室）",
    "edu.mDate": "2026年3月 修了見込み",
    "edu.mTopic": "研究：英日文芸翻訳領域におけるMT/LLM評価フレームワーク作成・その評価",
    "edu.ab": "留学（Study Abroad）スウェーデン王立工科大学",
    "edu.abDate": "2024年1月 - 2024年6月",
    "edu.b": "学士（B.S.）東京大学 工学部 物理工学科（香取・牛島研究室）",
    "edu.bDate": "2023年3月 卒業",
    "edu.bTopic": "研究：可搬型光格子時計の開発・評価",

    "contact.h": "Contact",
    "contact.sub": "リンクと連絡先",
    "contact.links": "Links",
    "contact.resume": "Resume (PDF)",
    "contact.direct": "Direct",
    "contact.rolesK": "Roles",
    "contact.rolesV": "Product Language / Localization Quality / Terminology / MT Evaluation",
    "contact.cta1": "Email",
    "contact.cta2": "Back to top",

    "footer.top": "Top",
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.case": "Case Study",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.eyebrow": "Portfolio (JP/EN) | Master’s + Internship",
    "hero.title": "MT Evaluation / Terminology (JP/EN)",
    "hero.lead": "Master’s student focused on MT/LLM quality evaluation for EN→JA literary translation. Built an MQM/SCATE-inspired taxonomy and evaluation workflow; applied it to multiple MT systems and LLM outputs. Practical terminology experience from WIPO (Geneva) and JP/EN research collaboration.",
    "hero.cta1": "View projects",
    "hero.cta2": "Contact",
    "hero.cta3": "Download Resume (PDF)",
    "hero.f1k": "Focus",
    "hero.f1v": "MT/LLM Evaluation (EN→JA) (Domain: Literary Translation)",
    "hero.f2k": "Strengths",
    "hero.f2v": "MT/LLM evaluation | Terminology | Translation | NLP",
    "hero.f3k": "Location",
    "hero.role": "Target Role: Product Language / Localization Quality / Terminology / MT Evaluation",
    "hero.k1": "Tools",
    "hero.k2": "Languages",

    "about.h": "About",
    "about.sub": "Turning research into practical evaluation standards.",
    "about.h3a": "Summary",
    "about.p1": "Master’s student researching MT/LLM quality evaluation for literary translation, building a JP-focused framework and taxonomy inspired by MQM/SCATE.",
    "about.li1": "Evaluation design (classification/metrics) → analysis → review guidelines",
    "about.li2": "Terminology translation (WIPO Pearl: <a href=\"https://wipopearl.wipo.int/en/fullrecord/22147\" target=\"_blank\" rel=\"noopener noreferrer\">Example</a>)",
    "about.li3": "Cross-functional collaboration (translation/terminology manager)",
    "about.h3b": "Skills",
    "about.k1": "Highlight",
    "about.v1": "Evaluation design・analysis",
    "about.k2": "Style",
    "about.v2": "Evidence-based decisions・explicit evaluation",

    "projects.h": "Projects",
    "projects.sub": "Two master’s projects + WIPO terminology fellowship + teaching. Click to view role, deliverables, and impact.",
    "projects.fAll": "All",
    "projects.fRes": "Research",
    "projects.fInt": "Internship",
    "projects.fTerm": "Terminology",
    "projects.fTrans": "Translation",

    "case.h": "Case Study",
    "case.sub": "One deep dive: Problem → Approach → Result.",
    "case.t": "Case Study: Creating an MT/LLM Evaluation Framework for EN/JA Literary Translation",
    "case.k1": "Problem",
    "case.v1": "Standard automatic/human evaluation of MT/LLM translation often misses failure modes and Japanese-specific issues in literary translation quality.",
    "case.k2": "Approach",
    "case.v2": "Designed a 40-item taxonomy inspired by MQM/SCATE and evaluated multiple MT systems and LLM outputs under consistent conditions. Performed qualitative and quantitative evaluations to highlight system strengths and weaknesses.",
    "case.k3": "Result",
    "case.v3": "Analyzed system-level strengths and weaknesses from multiple perspectives compared to traditional automatic and human evaluation. Provided an evaluation framework that can be applied to various MT/LLM systems.",

    "edu.h": "Education",
    "edu.sub": "Summary of what I have learned.",
    "edu.m": "M.S. in University of Tokyo, Graduate School of Interdisciplinary Information Studies",
    "edu.mDate": "April 2023 - March 2026 (Expected)",
    "edu.mTopic": "Thesis/Research:Design an MT/LLM Evaluation Framework and its evaluation for EN/JA literary translation.",
    "edu.ab": "Study Abroad: Royal Institute of Technology (KTH), Stockholm, Sweden",
    "edu.abDate": "January 2024 - June 2024",
    "edu.b": "B.S. in University of Tokyo, Faculty of Engineering, Department of Applied Physics (Katori/Ushijima Laboratory)",
    "edu.bDate": "April 2019 - March 2023",
    "edu.bTopic": "Research: Development and evaluation of a portable optical lattice clock",

    "contact.h": "Contact",
    "contact.sub": "Links and direct contact.",
    "contact.links": "Links",
    "contact.resume": "Resume (PDF)",
    "contact.direct": "Direct",
    "contact.rolesK": "Roles",
    "contact.rolesV": "Product Language / Localization Quality / Terminology / MT Evaluation",
    "contact.cta1": "Email",
    "contact.cta2": "Back to top",

    "footer.top": "Top",
  }
};

const htmlKeys = new Set([
  "about.li2"
]);

const supportedLangs = new Set(["ja", "en"]);
// デフォルトをENに変更（ユーザー設定があればそれを優先）
let lang = safeStorageGet("lang") || "en";
if (!supportedLangs.has(lang)) lang = "en";
setLanguage(lang);

const langBtn = $("#langBtn");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    const next = lang === "ja" ? "en" : "ja";
    setLanguage(next);
    safeStorageSet("lang", next);
  });
}

function setLanguage(l){
  const nextLang = supportedLangs.has(l) ? l : "ja";
  lang = nextLang;
  document.documentElement.lang = nextLang;
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const txt = dict[nextLang]?.[key];
    if (!txt) return;
    if (htmlKeys.has(key)) {
      el.innerHTML = txt;
      return;
    }
    const linkified = linkifyURLs(txt);
    if (linkified) el.innerHTML = linkified;
    else el.textContent = txt;
  });
  if (projectsUIReady) renderProjects(getActiveFilter());
}

function linkifyURLs(text){
  if (!/https?:\/\/[^\s)）]+/.test(text)) return null;
  const escaped = escapeHTML(text);
  return escaped.replace(/https?:\/\/[^\s)）]+/g, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
}

// --- Projects data (2 research + 1 internship) ---
const projects = [
  {
    id: "r1",
    title: {
      ja: "研究：MT/LLMによる文芸翻訳（EN/JA）の評価フレームワーク作成",
      en: "Research: Designing an MT/LLM Evaluation Framework for EN/JA Literary Translation"
    },
    summary: {
      ja: "MQM/SCATEを参考に、日本語、文芸翻訳特有の観点を含む評価指標・手法を設計し、MT/LLMの出力を分析。",
      en: "Designed an MQM/SCATE-inspired taxonomy and JP/literary-focused evaluation metrics to analyze multiple MT systems and LLM outputs."
    },
    tags: ["research", "writing", "mt", "evaluation"],
    details: {
      ja: {
        overview: "文芸翻訳領域で、標準的な評価手法では捉えにくいエラーや良さを、特に日本語・文芸作品特有の観点まで分解して分析できる評価枠組みを設計。",
        role: "評価設計 / MT・LLM実行 / 解析（アノテーション） / 論文執筆",
        deliverables: [
          "GitHub（自動評価スクリプト例）: https://github.com/tsukimidaifuku/COMET-trial",
        ],
        impact: [
          "システム別の強み/弱みを、従来の自動・人手評価では見えない粒度で分析",
          "人手評価や実運用にも用いられる “評価ガイドライン” として整理"
        ],
        stack: "Python / LLM APIs / Evaluation Scripts / MQM"
      },
      en: {
        overview: "Designed a framework to capture quality differences that standard automatic metrics often miss, decomposing accuracy/fluency errors including Japanese-specific phenomena in literary translation.",
        role: "Evaluation design / MT/LLM runs / Analysis (annotation) / Paper writing",
        deliverables: [
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
    id: "r2",
    title: {
      ja: "研究：専門用語の生成・拡張の分析（GNN）",
      en: "Research: Terminology Generation & Expansion (GNN)"
    },
    summary: {
      ja: "グラフ構造で用語の生成/拡張を捉え、用語管理・更新の理解に繋げる。",
      en: "Used graph structures to analyze how terminology is generated and expanded."
    },
    tags: ["research", "terminology", "gnn"],
    details: {
      ja: {
        overview: "専門用語の生成・拡張を、関係構造（グラフ）としてモデル化し分析。用語が変化する理由やパターンの把握に繋げる研究。",
        role: "GNN側の概念設計 / スクリプト実装 / 実験 / 論文執筆",
        deliverables: [
          "Conceptual paper（共著・second author、発表済/投稿済）: Terminologists as Social Custodians of Knowledge: Clarifying the Expertise of Terminologists and the Status of Terminologies",
        ],
        impact: [
          "グラフ構造により、用語変化の特徴を捉えられる見込みを示した（詳細は公開前の非公開範囲あり）"
        ],
        stack: "Python / GNN (PyG/NetworkX) / sklearn"
      },
      en: {
        overview: "Modeled terminology generation and expansion as structured relationships using graph representations, informing how terminologies can be maintained as terms shift.",
        role: "Concept design (GNN) / Implementation / Experiments / Paper writing",
        deliverables: [
          "Conceptual paper (2nd author; presented/submitted): Terminologists as Social Custodians of Knowledge: Clarifying the Expertise of Terminologists and the Status of Terminologies",
        ],
        impact: [
          "Early results suggest graph structures capture meaningful terminology patterns (some details under non-disclosure before publication)"
        ],
        stack: "Python / GNN (PyG/NetworkX) / sklearn"
      }
    }
  },

  {
    id: "i1",
    title: {
      ja: "Terminology fellowship：WIPO Pearl 用語翻訳（EN/JA）",
      en: "Terminology fellowship: Evidence-based Terminology Translation for WIPO Pearl (EN/JA)"
    },
    summary: {
      ja: "ソースつきで専門用語訳を作成（約800語）。英語環境（海外）・国際機関で専門用語/翻訳マネージャーと協働。",
      en: "Translated ~800 terms with evidence sources and collaborated with terminology and translation managers in an English-speaking environment (overseas) and international organizations."
    },
    tags: ["intern", "writing", "terminology", "translation"],
    details: {
      ja: {
        overview: "国連の専門機関で、専門用語訳を実施。翻訳の正確性を重視してソースつきで作成。",
        role: "専門用語訳 / ソース提示 / 特許文書ベースのコーパス作成",
        deliverables: [
          "WIPO Pearl: <a href=\"https://wipopearl.wipo.int/en/fullrecord/22147\" target=\"_blank\" rel=\"noopener noreferrer\">一部翻訳例</a>"
        ],
        impact: [
          "約800語の専門用語訳（ソース付き）",
          "シニア翻訳マネージャー・専門用語マネージャーと協働（英語・海外で勤務）"
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
    title: {
      ja: "大学図書館職員向け翻訳勉強会・講師",
      en: "Translation Study Group Instructor for University Library Staff"
    },
    summary: {
      ja: "大学図書館職員向け翻訳勉強会の講師。学習者の訳文をレビューし、正確性・流暢性の観点で改善点をフィードバック。",
      en: "Reviewed translations and coached on accuracy and fluency with structured feedback for university library staff."
    },
    tags: ["writing", "translation", "teaching"],
    details: {
      ja: {
        overview: "大学図書館職員向け翻訳勉強会の講師。参加者の訳文をレビューし、良い点/改善点を言語化してフィードバック。品質の観点（正確性・流暢性）での分析習慣を強化。翻訳例の提示。",
        role: "講師 / レビュー / コメント / 改善提案",
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
];const tagLabels = {
  ja: { research: "Research", intern: "Internship", writing: "Writing", mt: "MT/LLM", terminology: "Terminology", translation: "Translation", teaching: "Teaching", evaluation: "Evaluation", gnn: "GNN" },
  en: { research: "Research", intern: "Internship", writing: "Writing", mt: "MT/LLM", terminology: "Terminology", translation: "Translation", teaching: "Teaching", evaluation: "Evaluation", gnn: "GNN" }
};

const modalLabels = {
  ja: { overview: "Overview", role: "Role", deliverables: "Deliverables", impact: "Impact / Results", stack: "Tech stack" },
  en: { overview: "Overview", role: "Role", deliverables: "Deliverables", impact: "Impact / Results", stack: "Tech stack" }
};

function tagLabel(tag){
  return (tagLabels[lang] && tagLabels[lang][tag]) ? tagLabels[lang][tag] : tag;
}



const grid = $("#projectGrid");
const modal = $("#modal");
const modalTitle = $("#modalTitle");
const modalBody = $("#modalBody");
const closeModal = $("#closeModal");
let lastFocusedBeforeModal = null;

closeModal.addEventListener("click", () => modal.close());
modal.addEventListener("close", () => {
  if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === "function") {
    lastFocusedBeforeModal.focus();
  }
  lastFocusedBeforeModal = null;
});
modal.addEventListener("click", (e) => {
  const r = modal.getBoundingClientRect();
  const inside = (r.top <= e.clientY && e.clientY <= r.bottom && r.left <= e.clientX && e.clientX <= r.right);
  if (!inside) modal.close();
});

function getActiveFilter(){
  const active = $(".filters .chip.active");
  return active ? active.dataset.filter : "all";
}

function renderProjects(filter){
  const list = filter === "all" ? projects : projects.filter(p => p.tags.includes(filter));
  grid.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";
    card.setAttribute("aria-label", p.title[lang]);

    card.innerHTML = `
      <h3>${escapeHTML(p.title[lang])}</h3>
      <p>${escapeHTML(p.summary[lang])}</p>
      <div class="tagrow">${p.tags.map(t => `<span class="tag">${escapeHTML(tagLabel(t))}</span>`).join("")}</div>
    `;

    card.addEventListener("click", () => openProject(p));
    grid.appendChild(card);
  });
}

function openProject(p){
  const d = p.details[lang];
  modalTitle.textContent = p.title[lang];

  modalBody.innerHTML = `
    <p><strong>${modalLabels[lang].overview}:</strong> ${renderProjectText(d.overview)}</p>
    <p><strong>${modalLabels[lang].role}:</strong> ${renderProjectText(d.role)}</p>

    <h4>${modalLabels[lang].deliverables}</h4>
    <ul>${d.deliverables.map(x => `<li>${renderProjectText(x)}</li>`).join("")}</ul>

    <h4>${modalLabels[lang].impact}</h4>
    <ul>${d.impact.map(x => `<li>${renderProjectText(x)}</li>`).join("")}</ul>

    <p><strong>${modalLabels[lang].stack}:</strong> ${renderProjectText(d.stack)}</p>
  `;
  lastFocusedBeforeModal = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  modal.showModal();
  closeModal.focus();
}

// --- Filters ---
$$(".filters .chip").forEach(btn => {
  btn.addEventListener("click", () => {
    $$(".filters .chip").forEach(b => { b.classList.remove("active"); b.setAttribute("aria-pressed","false"); });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed","true");
    renderProjects(btn.dataset.filter);
  });
});

function escapeHTML(str){
  return String(str).replace(/[&<>"']/g, s => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
  }[s]));
}

function renderTextWithLinks(text){
  const escaped = escapeHTML(text);
  return escaped.replace(/https?:\/\/[^\s)）]+/g, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
}

function renderProjectText(text){
  if (/<a\b/i.test(text)) return sanitizeAnchors(text);
  return renderTextWithLinks(text);
}

function sanitizeAnchors(text){
  const anchorRe = /<a\b[^>]*href="(https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let out = "";
  let lastIndex = 0;
  let match = null;

  while ((match = anchorRe.exec(text)) !== null) {
    out += escapeHTML(text.slice(lastIndex, match.index));
    const href = match[1];
    const labelText = String(match[2]).replace(/<[^>]*>/g, "").trim() || href;
    out += `<a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHTML(labelText)}</a>`;
    lastIndex = match.index + match[0].length;
  }

  out += escapeHTML(text.slice(lastIndex));
  return out;
}

// initial render
projectsUIReady = true;
renderProjects(getActiveFilter());
