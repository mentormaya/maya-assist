// Import the required module
import fs from "fs";

// Read the contents of package.json file
export const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
