#!/usr/bin/env bash

set -euo pipefail

if [[ -x "/opt/homebrew/opt/ruby@3.3/bin/ruby" ]]; then
  ruby_bin="/opt/homebrew/opt/ruby@3.3/bin/ruby"
else
  ruby_bin="${RUBY_BIN:-ruby}"
fi

BUNDLE_PATH="${BUNDLE_PATH:-vendor/bundle}" \
  "$ruby_bin" -S bundle _2.2.19_ exec jekyll serve --livereload --livereload-port 35730 --host 127.0.0.1 --port 4000
