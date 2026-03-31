
# How to Build and Push to `docs/` and Repo

Follow these steps to update your GitHub Pages deployment. All commands are for the terminal (PowerShell on Windows):

---

## 1. Build the Project

Navigate to your project folder if you aren't already:

```
cd garage-dashboard
```

Then build the project:

```
npm run build
```

---

## 2. Copy Build Output to `docs/`

First, remove the old docs output for a clean copy (optional but recommended):

```
powershell -Command "Remove-Item docs\assets -Recurse -Force -ErrorAction SilentlyContinue; Remove-Item docs\sidebar-icons -Recurse -Force -ErrorAction SilentlyContinue; Get-ChildItem docs -File | Where-Object { $_.Extension -in '.html','.ico' } | Remove-Item -Force"
```

Then copy the new build output to `docs/`:

If you have a script:
```
yarn copy-dist-to-docs
```
Or manually:
```
powershell -Command "Copy-Item dist\* docs -Recurse -Force"
```

---

## 3. Commit and Push to Repo

Add, commit, and push the updated `docs/` folder:

```
git add docs/
git commit -m "Deploy: update docs folder"
git push origin main
```

---

## Summary

1. **Build:** `npm run build`
2. **Copy:** Copy everything from `dist/` to `docs/`
3. **Push:** Commit and push the `docs/` folder to your repo

---

**Tips:**
- Make sure your `.env` is set up before building.
- If you want GitHub Pages to serve from `docs/`, set it in your repo Settings → Pages.
