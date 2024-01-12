#!/usr/bin/env bash
EMACSCMD="emacs"

$EMACSCMD -nw -Q --batch -l ./publish.el --funcall nyc/publish
