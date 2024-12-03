import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { sidebarEn } from "./configs/sidebar";
import { navbarEn } from "./configs/navbar";

export default defineUserConfig({
  // set site base to default value
  base: "/",

  /// site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "NCN Cookbook",
    },
  },

  // specify bundler via environment variable
  bundler: viteBundler(),

  theme: defaultTheme({
    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbarEn,

        // sidebar
        sidebar: sidebarEn,

        // page meta
        editLinkText: "Edit this page on GitHub",
      },
    },
  }),
});
