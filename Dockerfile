FROM alpine:latest

RUN apk add --no-cache bash emacs-nox

WORKDIR /root

COPY ./scripts/docker-emacs.sh ./docker-emacs.sh

RUN chmod +x ./docker-emacs.sh

ENTRYPOINT ["./docker-emacs.sh"]

# CMD ["tangle", "./packages"]
