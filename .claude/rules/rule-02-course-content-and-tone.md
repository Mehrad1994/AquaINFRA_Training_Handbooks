---
trigger: always_on
---

# ✍️ AquaINFRA Training Handbook - Content & Tone Guidelines

You are writing and generating training modules, courses, and documentation for the AquaINFRA project. When performing these tasks, you MUST strictly adhere to the following content constraints to ensure maximum value for the reader.

## 1. 🎯 MAXIMIZE SIGNAL, MINIMIZE NOISE (NO REDUNDANCY)
When adapting content from YouTube videos, external tutorials, or presentations:
- **Do not transcribe or repeat:** We do not want to duplicate what the user could simply hear by watching the source video.
- **Focus on Actionable Value:** Provide precise, concise summaries that act as quick-reference notes. Extract the "meat" of the lesson.
- **Save the User's Time:** Highlight critical steps, commands, gotchas, and important notes that enable the user to work more efficiently. If they return to the handbook after a month, they should find exactly what they need in seconds.

## 2. 🗣️ TONE & VOICE: ENGAGING ACADEMIC (NOT ROBOTIC)
- **Avoid "AI-Speak":** Do not use overly generic, flowery, or robotic language (e.g., "In conclusion," "It is important to note that," "Delve into," "Comprehensive overview"). 
- **Engaging & Human:** Write as if you are a senior researcher or engineer explaining a concept directly to a competent colleague. 
- **Academic but Accessible:** Maintain a professional and authoritative tone suitable for scientific and technical audiences, but do not make it overly complex or dense. Use clear, direct sentences.

## 3. 🛠️ PRACTICALITY OVER THEORY
- **Show, Don't Tell:** Instead of writing abstract paragraphs explaining how something works, provide concrete examples, code snippets, or configuration examples.
- **Step-by-Step Clarity:** When outlining a workflow, break it down into numbered, highly actionable steps.
- **Visual Formatting:** Use bold text for key terms, use bullet points heavily, and leverage GitHub alerts (`> [!TIP]`, `> [!IMPORTANT]`) to draw the eye to crucial information.
- **Semantic Data Tables:** DO NOT use dense bulleted lists to explain multi-part logic or sequential mapping. Convert these into semantic Markdown tables (`| Step | Goal | Action |`) for instant scannability.

## 4. 🔠 HEADING & STRUCTURE STANDARDS (NEW)
- **Use Valid Hierarchy:** Always start with a single `# H1` at the top of the file, followed logically by `## H2` and `### H3`. Never skip heading levels.
- **Global Sizing:** Do not apply inline styles to change heading sizes. The global `style.css` dictates `H1 = 1.85rem`, `H2 = 1.5rem`, `H3 = 1.25rem` to ensure they stand out clearly from `1rem` body text without becoming overwhelmingly large on big monitors. This must remain uniform across all handbook.
- **Title Conventions**: Do NOT use numerical prefixes in chapter titles inside the YAML frontmatter or the main H1 headings. Titles should be professional, academic, and clean (e.g., `title: Introduction`, not `title: 1. Introduction`). The `nav_order` handles sequence implicitly.

## 4. 📊 VISUALIZATION PROPOSALS (USER REVIEW REQUIRED)
- **Identify Visual Opportunities:** Whenever a concept, workflow, or dataset can be better explained visually (e.g., using Mermaid diagrams, comparison tables, charts, or roadmaps), you MUST suggest creating one.
- **Propose Before Executing:** Do not immediately generate and insert complex visual content into the handbook. Instead, offer the idea to the user first. Once the user reviews and approves the visual structure, you may then implement it in the handbook.
