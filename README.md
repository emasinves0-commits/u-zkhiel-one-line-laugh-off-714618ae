# One-Line Laugh-Off

> The psychic refunded my ten dollars, whispering that she saw no future in me bothering her again.

[![make.fun](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![make.fun rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/emasinves0-commits/u-zkhiel-one-line-laugh-off-714618ae/rank.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![make.fun reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/emasinves0-commits/u-zkhiel-one-line-laugh-off-714618ae/reward.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)

## How it works

`main.ts` is a dependency-free Node program. It holds the line above as a constant and checks that it is 1-200 characters, a single line and not only whitespace. It then writes the line to `entry.txt` in the directory named by `MAKEFUN_OUTPUT_DIR` (default `/output`), creating the directory if needed. The file contains the line exactly, with no trailing newline.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22.18 or newer (or 23.6+) runs a `.ts` file directly. The file uses only erasable type annotations, so Node strips them without a build step.
