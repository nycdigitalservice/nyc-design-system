import { exec } from "child_process";

const cmd = "docker build -t mmausler/nyc-emacs .";

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
