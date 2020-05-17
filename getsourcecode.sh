#!/bin/sh
cd addon
zip -r -FS ../sourcecode.zip * --exclude '*.zip' --exclude '*.git'