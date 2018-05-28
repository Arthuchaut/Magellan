FROM python:3.6-alpine

LABEL maintainer="Enowaves team"

ARG UID=990
ARG GID=990

WORKDIR /magellan
COPY requirements.txt /magellan
COPY magellan /magellan

RUN apk update && apk add nodejs
RUN pip install -r requirements.txt
RUN cd /magellan/frontend && \
 npm i -g npm && \
 npm i && \
 npm run build

RUN addgroup -g ${GID} magellan && adduser -u ${UID} -G magellan -h /magellan -s /bin/sh -D magellan
RUN chown -R magellan:magellan /magellan

USER magellan

EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
