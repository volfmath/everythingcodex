# Everything Codex

`everything-codex` 是一个面向 Codex 的启动套件。它参考了大型 agent/harness 仓库的组织方式，但刻意做得更轻、更容易改。

它提供的核心内容：

- 一份为 Codex 调整过的根目录 `AGENTS.md`
- 可复用的 `agents/`、`skills/`、`rules/`、`commands/`
- 一个很小的 CLI，用来查看组件目录和规划安装
- 一套对现有仓库尽量非破坏式的安装流程

## 为什么要做这个

很多大型 agent 仓库很强，但通常也更重、更宽、更有自己的约束。

这个项目只聚焦一件事：

**让 Codex 项目更容易用一套干净的工作流快速起步。**

## 目录结构

```text
everything-codex/
  AGENTS.md
  AGENTS.snippet.md
  agents/
  commands/
  hooks/
  manifests/
  rules/
  scripts/
  skills/
  .codex/
```

## 快速开始

查看组件目录：

```bash
node scripts/ecodex.js list
```

预览向另一个仓库安装：

```bash
node scripts/ecodex.js install /path/to/project --profile core
```

如果本机没有可用的 Node.js，也可以直接用 shell 安装器：

```bash
./install.sh /path/to/project core
```

## 安装档位

- `minimal`: 文档 + 规则 + `AGENTS` 片段
- `core`: `minimal` + 基础 agents + 基础 skills
- `full`: `core` + commands + hooks

## 当前内置内容

- Codex 根级说明
- 安装时可合并的 `AGENTS` 片段
- `planner` / `reviewer` / `debugger` / `architect` / `test-writer` 代理角色
- `repo-onboarding` / `tdd-workflow` / `security-review` / `handoff-checklist` 技能
- 通用的 TypeScript 和 Python 规则
- 适用于没有 Node 环境的 shell 安装器

## 设计目标

- 以 Codex 为中心
- 安装尽量非破坏式
- 表面小，结构清楚
- 方便 fork 和二次定制

## 当前状态

这还是一个脚手架，不是一个把所有东西都塞进去的大而全仓库。

建议先直接拿来用，再按你自己的流程逐步扩展真正需要的部分。
