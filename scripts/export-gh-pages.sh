#!/bin/bash

set -e

npm run build
npm run export
rm -rf docs
mv out docs