import { exec } from "child_process";

let volumes = "-v ./packages:/root/packages -v ./scripts:/root/scripts";

const args = process.argv;

const userArgs = args.slice(2);

const userCommand = userArgs[0];

// console.log(userArgs, userCommand);
// process.exit();

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

