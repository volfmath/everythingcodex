# 安装说明

英文版本：`docs/INSTALL.md`

## Shell 安装

```bash
./install.sh /path/to/project core
```

可用档位：

- `minimal`
- `core`
- `full`

## Node 安装

```bash
node scripts/ecodex.js install /path/to/project --profile core
```

## 安装后会复制到哪里

所有内容都会复制到：

```text
<target>/.codex/everything-codex/
```

安装器不会覆盖目标仓库根目录的 `AGENTS.md`。

如果你希望目标仓库显式引用这套工具，请把 `AGENTS.snippet.md` 的内容手动合并到目标仓库根目录的 `AGENTS.md`。
