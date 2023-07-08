import { AppController } from "./app.controller";
import { Command } from 'commander';

// app show app version in package.json
// $ node dist/app.js app show app version in package.json
// $ node dist/app.js app "show app version in package.json"
// $ node dist/app.js app 'show app version in package.json'

export function run() {

    const program = new Command();

    program
        .description('show app version in package.json')
        .action(async () => {
            
            // all arguments
            const args = process.argv.slice(2);
            const prompt = args.join(" ");

            const appController = new AppController();
            return await appController.findCommand(prompt);

            // console.log("ive arrived!");
        });

    program.parse(process.argv);
}