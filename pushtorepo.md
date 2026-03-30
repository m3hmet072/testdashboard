# How to Build and Push to `docs/` and Repo

Follow these steps to update your GitHub Pages deployment:

## 1. Build the Project

```
npm run build
```

## 2. Copy Build Output to `docs/`

```
# Remove old docs output (optional, for a clean copy)
powershell -Command "Remove-Item docs\assets -Recurse -Force -ErrorAction SilentlyContinue; Remove-Item docs\sidebar-icons -Recurse -Force -ErrorAction SilentlyContinue; Get-ChildItem docs -File | Where-Object { $_.Extension -in '.html','.ico' } | Remove-Item -Force"

# Copy new build output
yarn copy-dist-to-docs # (if you have a script)
# OR manually:
powershell -Command "Copy-Item dist\* docs -Recurse -Force"
```

## 3. Commit and Push to Repo

```
git add docs/
git commit -m "Deploy: update docs folder"
git push origin main
```

---

**Summary Prompt:**

> Build the project, copy the contents of `dist/` to `docs/`, then commit and push the `docs/` folder to the repo.

---

**Tip:**
- Make sure your `.env` is set up before building.
- If you want GitHub Pages to serve from `docs/`, set it in your repo Settings → Pages.
