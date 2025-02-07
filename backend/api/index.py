import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

def handler(event, context):
    app = get_wsgi_application()
    return app(event, context)
