import { exec } from "child_process";

let volumes = "-v ./packages:/root/packages -v ./scripts:/root/scripts";

const args = process.argv;

const userArgs = args.slice(2);

const userCommand = userArgs[0];

const flags = userArgs.slice(1);

// console.log(userArgs, userCommand, flags);

let envVars = '';

if (userCommand && userCommand.length > 0) {
  if (userCommand === "publish") {
    const include = [
      './docs:/root/docs',
      './README.org:/root/README.org',
      './guides:/root/guides',
      './apps/docs:/root/apps/docs'
    ];
    
    const volumeStr = v => ` -v ${v}`;
    
    volumes = `${volumes}${include.map(volumeStr).join('')}`

    if (flags.includes('--prod')) {
      envVars = ' -e "CI=true"'
    }
  }
}

const cmd = `docker run --rm --name nyc-tangle-container ${volumes} ${envVars} nyc-emacs ${userArgs.join(' ')}`;

// console.log(cmd)
// process.exit();

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

