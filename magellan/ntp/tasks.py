from __future__ import absolute_import, unicode_literals
from magellan.celery import app


@app.task(name="Reload the configuration of NTP service")
def reload_configuration(config):
    pass