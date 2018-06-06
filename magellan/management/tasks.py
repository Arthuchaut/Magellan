from __future__ import absolute_import, unicode_literals
from magellan.celery import app


@app.task(name="Start a service")
def start_service(service):
    pass


@app.task(name="Restart a service")
def restart_service(service):
    pass


@app.task(name="Stop a service")
def stop_service(service):
    pass