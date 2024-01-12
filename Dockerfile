FROM alpine:latest

RUN apk add --no-cache bash emacs-nox

WORKDIR /root

COPY ./scripts ./scripts

RUN chmod +x ./scripts/docker-emacs.sh

ENTRYPOINT ["./scripts/docker-emacs.sh"]

# CMD ["tangle", "./packages"]