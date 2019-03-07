#!/usr/bin/env node
'use strict';
const inquirer = require('inquirer');
const { execSync } = require('child_process');
const { resolve } = require('path');
const chalk = require('chalk');
const demos = require('./demos.js');

const demoNames = Object.keys(demos);

(async function() {
    while(true) {
        const { demoName } = await inquirer.prompt([
            {
                type: 'list',
                name: 'demoName',
                message: '请选择要演示的DEMO:',
                choices: demoNames
            }
        ]);
        const demo = demos[demoName];

        for(const c of demo.commands) {
            await inquirer.prompt([{type:'input', message: c.command || c, name: 'none'}]);
            const { cwd = process.cwd(), outputColor = 'blue', clearBeforeOutput = false} = Object.assign({}, demo, c);
            if(clearBeforeOutput) console.clear();

            try {
                const result = execSync(c.command || c, {cwd: resolve(__dirname, cwd)});
                console.log(chalk[outputColor](result.toString()));
            } catch(e) {
                e.stdout ? console.error(chalk[outputColor](e.stdout.toString())) : console.error(chalk.red(e.message));
            }
        }
        await inquirer.prompt([{type:'input', message: '开始下一项演示:', name: 'none'}]);
        console.clear();
    }
})();