#!/usr/bin/env bash

usr_cmd=$1
volumes="-v ./packages:/root/packages"
if [ ! -z "$usr_cmd" ]
then
    case "$usr_cmd" in
        publish)
            volumes="$volumes -v ./docs:/root/docs -v ./README.org:/root/README.org"
            ;;
    esac
fi

docker run --rm --name nyc-tangle-container $volumes nyc-emacs $@
