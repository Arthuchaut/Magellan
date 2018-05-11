from django.db import models


# List of NTP servers model
class Server(models.Model):
    db_name = 'ntp_servers'

    host = models.TextField('Hostname or IP of the NTP server', unique=True, null=False)
    enabled = models.BooleanField('Enable rule', null=False, default=1)


# List of client restrictions
class Restriction(models.Model):
    db_name = 'ntp_restrictions'

    host = models.TextField('Hostname or IP of the client', unique=True, null=False)
    ignore = models.BooleanField(default=0, null=False)
    kod = models.BooleanField(default=0, null=False)
    limited = models.BooleanField(default=0, null=False)
    lowpriotrap = models.BooleanField(default=0, null=False)
    nomodify = models.BooleanField(default=0, null=False)
    noquery = models.BooleanField(default=0, null=False)
    nopeer = models.BooleanField(default=0, null=False)
    noserve = models.BooleanField(default=0, null=False)
    notrap = models.BooleanField(default=0, null=False)
    ntpport = models.BooleanField(default=0, null=False)
    version = models.BooleanField(default=0, null=False)
    enabled = models.BooleanField('Enable rule', default=1, null=False)