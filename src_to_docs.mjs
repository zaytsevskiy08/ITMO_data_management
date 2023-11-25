import { run } from "@mermaid-js/mermaid-cli"
import puppeteer from "puppeteer-core" // добавьте импорт Puppeteer

const generateSVG = async (input, output) => {
  const browser = await puppeteer.launch({ headless: "new" });
  
  try {
    await run(input, output);
  } finally {
    await browser.close();
  }
};


await run("src/Components.mmd", "docs/Components.svg")
await run("src/Containers.mmd", "docs/Containers.svg")
await run("src/Context.mmd", "docs/Context.svg")
await run("src/Requirements.mmd", "docs/Requirements.svg")
