const { openBrowser, goto, write, press, click, closeBrowser } = require('taiko');
const config = require("./pipelineConfig.json");
require('dotenv').config()

const JENKINS_URL = process.env.JENKINS_URL;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const PIPELINE_NAME = process.env.PIPELINE_NAME;
const repos = Object.keys(config);


const setConfig = async(repos) => {
    for (let i = 0; i < repos.length; i++) {
        const repo = repos[i];
        const branch = await config[repo];
        console.log(`setting config ${repo}=${branch}`);

        await click("Configure");
        await click(repo, { clickCount: 3 });
        await clearHighlights();
        await write(`def ${repo}="${branch}"`);
        await press('Enter');
        await click("Save");
    }
}

(async () => {
    try {
        await openBrowser({headless:true});
        await goto(JENKINS_URL);
        await write(USERNAME);
        await press("Tab");
        await write(PASSWORD);
        await click("Sign in");
        await click(PIPELINE_NAME);
        await setConfig(repos);
        await click("Build Now");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();