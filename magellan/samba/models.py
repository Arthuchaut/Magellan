from django.db import models
from uuid import uuid4


# List of available protocols
PROTOCOL_CHOICES = (
    ('NT1', 'Current up to date version of the protocol. Used by Windows NT. Known as CIFS'),
    ('SMB2', 'Re-implementation of the SMB protocol. Used by Windows Vista and later versions of Windows. SMB2 has sub protocols available'),
    ('SMB2_02', 'The earliest SMB2 version'),
    ('SMB2_10', 'Windows 7 SMB2 version'),
    ('SMB2_22', 'Early Windows 8 SMB2 version'),
    ('SMB2_24', 'Windows 8 beta SMB2 version'),
    ('SMB3', 'New label of the SMB2 protocol rewrited'),
    ('SMB3_00', 'Windows 8 SMB3 version. (mostly the same as SMB2_24)'),
    ('SMB3_02', 'Windows 8.1 SMB3 version'),
    ('SMB3_10', 'Early Windows 10 technical preview SMB3 version'),
    ('SMB3_11', 'Windows 10 technical preview SMB3 version'),
    ('LANMAN1', 'First modern version of the protocol. Long filename support'),
    ('LANMAN2', 'Updates to Lanman1 protocol'),
)


# General configuration of Samba server
class Configuration(models.Model):
    db_table = 'samba_configuration'

    workgroup = models.CharField(max_length=14, unique=True, null=False, default='WORKGROUP')
    caseSensitive = models.BooleanField(default=0, null=False)
    homes = models.BooleanField(default=1, null=False)  # Create or not homes folders
    minProtocol = models.CharField(max_length=8, choices=PROTOCOL_CHOICES, null=False, default='SMB2')
    updated_at = models.DateTimeField(auto_now_add=True, null=False)


# Shared folders configuration
class Share(models.Model):
    db_table = 'samba_shares'

    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    name = models.CharField(max_length=20, null=None, unique=True)
    description = models.TextField(unique=False)
    path = models.TextField(null=None, unique=True)
    ownerType = models.BooleanField(default=0, null=None)
    ownerId = models.UUIDField()
    allowGuest = models.BooleanField(default=0, null=False)
    readOnly = models.BooleanField(default=0, null=False)
    browseable = models.BooleanField(default=0, null=False)
    created_at = models.DateTimeField(auto_created=True, null=False, editable=False)
    updated_at = models.DateTimeField(auto_now_add=True, null=False)
