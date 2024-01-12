#!/usr/bin/env bash
# -*- mode: shell-script -*-
#
# Tangle .org files with org-mode
# Example usage:
#    ∴ tangle nested-in-all.org
#    Files:  "nested-in-all.org", Dir: /Users/hinmanm/es-scripts
#    Tangled 6 code blocks from nested-in-all.org
# Source: https://github.com/dakrone/dakrone-dotfiles/blob/master/bin/tangle

# Set this to the location of your emacs executable
EMACSCMD="emacs"

get_abs_filename() {
    # $1 : relative filename
    echo "$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
}

# Get the location of this script
# SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
# SCRIPT_DIR=$(dirname "$(get_abs_filename "${BASH_SOURCE[0]}")")
# echo $SCRIPT_DIR

# wrap each argument in the code required to call tangle on it
# DIR=`pwd`

# DOC_DIR=$(get_abs_filename "./packages")

document_dir=$1
if [ ! -z "$document_dir" ] # if document-dir provided
then
    DOC_DIR=$(get_abs_filename "$document_dir")
fi

# echo $DOC_DIR

# echo "$(which "$EMACSCMD")"
# $EMACSCMD --batch --version
# Call emacs in batch mode, evaluating elisp that loads and calls our
# tangle function
# $EMACSCMD -nw --batch --eval "
# (progn
#   (load (expand-file-name \"./tangle.el\" \"$SCRIPT_DIR\"))
#   (nyc/tangle-org-files \"$DOC_DIR\"))" 2>&1 | grep "Tangled"
# $EMACSCMD -nw --batch --eval "
# (progn
#   (load (expand-file-name \"./tangle.el\" \"$SCRIPT_DIR\"))
# (let* ((file-ext (file-name-extension \"$DOC_DIR\"))
#        (is-org (string= file-ext \"org\")))
#  (if is-org
#  (nyc/tangle-org-file \"$DOC_DIR\")
#  (nyc/tangle-org-files \"$DOC_DIR\"))))"
#  (load (expand-file-name \"./tangle.el\" \"$SCRIPT_DIR\"))
$EMACSCMD -nw -Q --batch --load-file ./tangle.el --eval "
(progn
 (nyc/tangle-init \"$DOC_DIR\"))"
