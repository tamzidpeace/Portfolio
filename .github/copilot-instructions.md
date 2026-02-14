# Copilot Instructions

## PR Description Generator (Scoped)

Only apply this section when both conditions are true:

1. The user provides a GitHub PR link in the format `https://github.com/<owner>/<repo>/pull/<number>`
2. The user asks to generate, rewrite, improve, or summarize PR title/description

If either condition is not met, ignore this section.

### Required Flow

1. Use GitHub MCP tools to collect facts before writing:
   - `mcp_github_get_me`
   - `mcp_github_pull_request_read` with `method: get`
   - `mcp_github_pull_request_read` with `method: get_files`
   - Optional: `get_reviews`, `get_review_comments`, `get_status` if needed
2. If auth fails (private repo / expired token), ask the user to refresh credentials.
3. Do not guess. Base output only on PR metadata and changed files.
4. Return copy-ready Markdown directly in chat for easy paste into GitHub.
5. Keep output concise and reviewer-friendly.

### Copy-Friendly Output

- Return final PR text as Markdown only.
- Wrap final content in a single fenced `markdown` code block for easy copy.
- If user explicitly asks to copy, avoid extra explanation outside that code block.
- Ensure the block includes complete context sections so it is directly paste-ready.

### Output Contract

- Provide a suggested title when requested or when the current title is weak.
- Provide PR description in Markdown with:
  - Summary
  - Motivation/Context
  - Changes Made
  - Impact/Risk
  - How to Test
  - Related Issues
  - Notes for Reviewers
- When user asks for copyable output, return one complete markdown block containing title + description.
- For non-applicable sections, write `N/A`.
- For UI changes, include a screenshots placeholder.

### Template

```markdown
## Summary

Brief overview of what this PR does.

## Motivation

Why this change is needed.

## Changes Made

- [ ] Key change 1
- [ ] Key change 2
- [ ] Key change 3

## Impact

- Scope: (docs / frontend / backend / infra)
- Risk level: (low / medium / high)
- Breaking changes: (yes/no)

## How to Test

1. Step 1
2. Step 2
3. Step 3

## Screenshots (if applicable)

Add screenshots/GIFs for UI updates.

## Related Issues

- Closes #...
- Relates to #...

## Notes for Reviewers

- Any focus areas, caveats, or follow-up work.
```
