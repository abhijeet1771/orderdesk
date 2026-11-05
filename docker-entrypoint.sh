#!/bin/sh
# starts OrderDesk in the container
exec java -Duser.timezone=UTC -jar /app/orderdesk.jar "$@"
