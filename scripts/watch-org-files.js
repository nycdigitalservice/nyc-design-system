import { watch } from "chokidar";
import { exec } from "child_process";

const watcher = watch('./packages/**/*.org', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
})

watcher.on('change', (path) => {
  console.log(path);
  let cmd = "docker run --rm --name nyc-tangle-container -v ./packages:/root/packages nyc-emacs";

  if (path.length > 0) {
    cmd = `${cmd} ${path}`;
  }

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
})
