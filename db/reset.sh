#!/bin/bash
cd $(dirname $0)

set -e
dropdb gatsby_example 2>/dev/null || true
createdb gatsby_example
psql -1Xv ON_ERROR_STOP=1 -f schema.sql -f data.sql gatsby_example

echo "✅ DB reset"
