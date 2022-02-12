+++
title = "Kill process by pattern"
author = ["Inom Turdikulov"]
draft = false
+++

Use pkill -f, which matches the pattern for any part of the command line

`pkill -f my_pattern`

Just in case it doesn't work, try to use this one as well:

`pkill -9 -f my_pattern`
