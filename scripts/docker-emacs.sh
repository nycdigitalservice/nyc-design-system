#!/usr/bin/env bash
# Set this to the location of your emacs executable
EMACSCMD="emacs"
document_dir=$2

get_abs_filename() {
    # $1 : relative filename
    echo "$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
}

run_tangle() {
    if [ ! -z "$document_dir" ] # if document-dir provided
    then
        DOC_DIR=$(get_abs_filename "$document_dir")
    else
        echo "Please provide a file or directory to TANGLE"
        exit 1
    fi
    $EMACSCMD -nw -Q --batch -l ./scripts/tangle/tangle.el --eval "(progn (nyc/tangle-init \"$DOC_DIR\"))"    
}

command=$1
if [ ! -z "$command" ] # if command provided
then
    case "$command" in
        tangle)
            run_tangle
            ;;
        publish)
            $EMACSCMD -nw -Q --batch -l ./scripts/publish/publish.el --funcall nyc/publish
    esac
else
    echo "Please provide a command: tangle, publish"
fi
