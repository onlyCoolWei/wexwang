#!/bin/bash
set -euo pipefail

input="$(cat)"

hook_state="$(
  HOOK_INPUT="$input" python3 - <<'PY'
import json
import os

try:
    payload = json.loads(os.environ.get("HOOK_INPUT", "{}"))
except json.JSONDecodeError:
    payload = {}

status = payload.get("status", "")
loop_count = payload.get("loop_count", 0)

try:
    loop_count = int(loop_count)
except (TypeError, ValueError):
    loop_count = 0

print(f"{status}\t{loop_count}")
PY
)"

status="${hook_state%%$'\t'*}"
loop_count="${hook_state##*$'\t'}"

if [[ "$status" != "completed" || "$loop_count" != "0" ]]; then
  printf '{}\n'
  exit 0
fi

python3 - <<'PY'
import json

message = """请在本轮自动跟进中只做一件事：回顾刚刚完成的对话，判断是否有实际代码或项目文件变更（包括配置、文档、样式、依赖等）。

如果没有实际变更，不要编辑任何文件，直接回复“无需更新系统通知”。

如果有实际变更，请将本次对话完成的工作精简总结并追加到 `docs/notifications/system-notify.md`，严格遵守：
1. 按日期分组为 `### YYYY-MM-DD`；今天日期标题已存在就在该标题下追加，不存在就在文件最顶部创建标题；最新日期在上。
2. 每条记录使用 `- emoji 简要描述` 格式，emoji 只使用：✨ 新功能、🔧 修复/调整、⚡️ 性能优化、🌐 国际化、🎊 里程碑/大改动、🗑️ 移除功能。
3. 描述用中文书写，一句话说明做了什么，精简清晰。
4. 如果本次用户任务已经有等价记录，不要重复追加。
5. 不要记录这次自动总结回合本身；只记录刚刚完成的用户任务。
6. 更新后只需简要说明追加了哪些条目。"""

print(json.dumps({"followup_message": message}, ensure_ascii=False))
PY
