#!/usr/bin/env bash

source $(dirname $(readlink -f ${0}))/output.sh

OUTPUT=$(output "Hello World!")
if [[ ${OUTPUT} = "Hello World!" ]]; then
  echo "PASSED"
else
  echo "FAIL"
fi
