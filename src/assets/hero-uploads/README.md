Place the exact hero images you uploaded to the chat into this folder.

Preferred filenames (example):
- hero-01.jpg
- hero-02.jpg
- hero-03.jpg
- hero-04.jpg
- hero-05.jpg
- hero-06.jpg
- hero-07.jpg

How to upload (VS Code):
1. Open the Explorer in VS Code.
2. Right-click `src/assets/hero-uploads` and choose "Reveal in File Explorer" (Windows) or "Reveal in Finder" (macOS).
3. Drag & drop the image files from your local machine into that folder.

Or via terminal (PowerShell), run in the repository root:

```powershell
# replace with your actual source paths
mkdir -Force src\assets\hero-uploads
copy C:\path\to\my\images\* src\assets\hero-uploads\
```

After you upload, tell me and I'll wire the filenames into `src/components/home/HeroSection.jsx`, optimize sizes and rebuild the site.