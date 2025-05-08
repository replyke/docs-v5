// next.config.js
import withNextra from "nextra";

export default withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",

  // ← tell Next.js to produce a fully static site during `next build`
  output: "export",

  // keep images unoptimized so you don’t need the Vercel loader
  images: {
    unoptimized: true,
  },
});