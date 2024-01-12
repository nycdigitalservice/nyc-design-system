import { exec } from "child_process";

let volumes = "-v ./packages:/root/packages";

const args = process.argv;

const userArgs = args.slice(2);

const userCommand = userArgs[0];

// console.log(userArgs, userCommand);
// process.exit();

if (userCommand && userCommand.length > 0) {
  if (userCommand === "publish") {
    volumes = `${volumes} -v ./docs:/root/docs -v ./README.org:/root/README.org`
  }
}

const cmd = `docker run --rm --name nyc-tangle-container ${volumes} nyc-emacs ${userArgs.join(' ')}`;

exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

