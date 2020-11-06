set -Eeuo pipefail

expo build:ios -t simulator | tee build.log
mkdir -p bin/
curl -fsSL "$(grep -oE 'https://expo.io/artifacts/[^[:space:]]+' build.log | tail -1)" | tar xzv -C bin