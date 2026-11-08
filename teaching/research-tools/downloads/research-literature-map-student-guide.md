# Research Literature Map: Student Guide

## What This Helps You Do

Bring a short description of a research idea, a proposal, or a draft. The assistant will help you find relevant papers, understand how they connect, and decide what you need to read before claiming a contribution. You do not need a polished question, a dataset, or results to begin.

The intended output is a small, source-linked comparison matrix and a reading plan, not a finished literature review. It is a complement to your own reading and supervision. It cannot establish that your idea is new or that an empirical design or proof is correct.

## Start In Codex

Once the supplied `research-literature-map` folder is installed inside your own `~/.codex/skills` directory, start a fresh chat and invoke `$research-literature-map`. Eren's local copy is already installed. No installation is needed for the ordinary-chat alternative below.

Paste this and add your description or attach your file:

```text
Use $research-literature-map to help me position my research project.
Guide me through the process; do not just give me a reading list.
Start with a small first pass and aim for 5-8 source-linked comparisons,
subject to the sources you can actually inspect. Include competing work,
connections across papers, and three priority reading tasks.

My project: [paste a short description, or refer to an attached draft]
What I am most unsure about: [one sentence, if known]
Papers I already know: [optional]
```

No subscription to a specialist literature platform is required. Live discovery needs a web-enabled assistant; institutional access or PDFs you provide may be needed for close reading.

## Start In Another Web-Enabled Chat Assistant

The skill folder is not automatically installed by uploading a ZIP to a chat. For an ordinary chat, paste the prompt below with your project and, where file reading is supported, attach `SKILL.md` and the relevant reference files. If attachments cannot be read, this prompt still provides a lightweight starting workflow, not the complete installed skill.

```text
Act as a guided economics literature-mapping assistant. Start from my
project description or draft. Preserve my original question and mark your
interpretations. Ask at most two necessary clarifying questions; otherwise
proceed with explicit assumptions. Use only minimal, generalised concepts
in external searches, not my draft or distinctive unpublished details.

Search iteratively by question, mechanism, design/model and adjacent
concepts. Use multiple search formulations, economics-indexed sources,
backward/forward citation tracing, and recent working papers where your
tools allow. Tell me which tools and routes were actually used, and log
exact queries and follow-up decisions. Do not claim access to a semantic
index or database you do not have.

Aim for a bounded first pass: 10-15 candidates and 5-8 priority comparisons
where sources permit. Verify citations against primary records. Deduplicate
versions. Distinguish abstracts from inspected full-text sections and from
my own verification. Unknown or unavailable information must stay unknown.
Do not invent citations, findings, page numbers or novelty claims.

Produce a source-linked matrix comparing question, mechanism,
design/model and assumptions, results/conditions, scope, relationship to
my project and what my project might add. Give specific source locations,
separate author claims from your interpretation, and explain connections
between papers. Give me three reading tasks, then help me draft and
challenge a provisional contribution statement from checked comparisons.
If live search is unavailable, say so and work only with supplied sources
plus a query pack I can run. Finish with limitations and next steps.

My project: [paste description or identify attached file]
My main uncertainty: [if known]
Known papers: [optional]
```

## What To Put In Your Description

About 150-500 words is enough. State what you can; leave the rest open.

- What question do you want to answer, and why might it matter?
- What economic mechanism do you think is involved?
- For empirical work: setting, outcome, population, available data and proposed comparison or identifying variation, if known.
- For theory: agents, information, timing, choices and the behaviour or result you want to explain, if known.
- What do you think the project might add? What would undermine that claim?
- What is your largest uncertainty? Include any papers you already know.

Do not upload confidential drafts or data to an external service unless you are permitted and comfortable doing so. A redacted, general description is sufficient. You may ask for a supplied-sources-only run with no live search.

## What Happens Next

1. **Check the framing.** The assistant restates your project and marks what it has inferred. Correct a misunderstanding early; you need not wait for a formal approval question.
2. **Discover connections.** It searches beyond your original keywords, follows leads and explains why each paper might matter. A paper in another field may share your mechanism or identification problem.
3. **Inspect the evidence.** It checks paper identity and available text. A publisher link verifies that a paper exists; it does not establish that a detailed comparison is right.
4. **Compare closely.** You receive a matrix, short evidence cards, a connection map and a search log. A blank or `not checked` cell is a reading task, not a defect to conceal.
5. **Read and revise.** Read three priority papers at the indicated sections. Correct or confirm the comparisons. Then draft a short, provisional contribution statement and discuss the most consequential uncertainty with your supervisor.

The assistant should continue through an agreed small first pass without requiring you to approve each query. You can interrupt to correct the project or change direction.

## How To Read Your Matrix

- **Identity checked:** a primary bibliographic record was resolved.
- **Abstract only:** useful for screening; not enough for detailed design, proof or novelty claims.
- **Sections inspected:** only the named sections were read, not necessarily the entire paper.
- **Student checked:** you have examined the evidence yourself and explicitly confirmed or corrected it. AI cannot award this status on your behalf.
- **Authors state:** a claim supported by an inspected source location, not an independent validation of the claim.
- **Interpretation:** a proposed connection or difference requiring your judgement.
- **Not checked:** the relevant material was not inspected or is unavailable.
- **Not reported in inspected material:** the inspected section did not provide the information; this is not a claim about the whole paper.

Do not copy a contribution statement supported only by abstracts into a paper. Search failure is not evidence that nobody has studied the question.

## A Short Follow-Up Task

For each of the three priority readings, write four sentences:

1. What does this paper already establish?
2. What would my project change?
3. What could that change let us learn that this paper does not establish?
4. Why would that difference matter economically?

Then return with: "I have read these sections. Here are my corrections. Update the matrix without losing my notes, and challenge my provisional contribution claim."

Bring the updated matrix and your largest unresolved comparison to normal supervision. You are building a working research document, not completing an additional assessed literature review.

## Files You Receive

The normal bundle contains `project_brief.md`, `literature_map.md`, `comparison_matrix.csv`, `search_log.md`, `contribution_memo.md` and the underlying `literature_map.json`. Open the CSV in a spreadsheet if you prefer to annotate rows there. In a chat without file-writing tools, the assistant should provide the report and CSV inline instead.

Without live search or supplied papers, the evidence matrix will be empty. The assistant should explain this and give you `query_pack.md` with suggested searches, explicitly unverified leads and reading questions. That is a starting plan, not a completed literature search.

The optional renderer is for the assistant or a technically confident user; students do not need to run it. It converts structured records into the matrix and log. It checks record consistency, not whether the research interpretation is true.
