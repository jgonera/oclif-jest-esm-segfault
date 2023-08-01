# oclif-hello-world

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g pdc-cli
$ pdc COMMAND
running command...
$ pdc (--version)
pdc-cli/0.0.0 darwin-x64 node-v18.16.0
$ pdc --help [COMMAND]
USAGE
  $ pdc COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`pdc hello PERSON`](#pdc-hello-person)
- [`pdc hello world`](#pdc-hello-world)
- [`pdc help [COMMANDS]`](#pdc-help-commands)
- [`pdc plugins`](#pdc-plugins)
- [`pdc plugins:install PLUGIN...`](#pdc-pluginsinstall-plugin)
- [`pdc plugins:inspect PLUGIN...`](#pdc-pluginsinspect-plugin)
- [`pdc plugins:install PLUGIN...`](#pdc-pluginsinstall-plugin-1)
- [`pdc plugins:link PLUGIN`](#pdc-pluginslink-plugin)
- [`pdc plugins:uninstall PLUGIN...`](#pdc-pluginsuninstall-plugin)
- [`pdc plugins:uninstall PLUGIN...`](#pdc-pluginsuninstall-plugin-1)
- [`pdc plugins:uninstall PLUGIN...`](#pdc-pluginsuninstall-plugin-2)
- [`pdc plugins update`](#pdc-plugins-update)

## `pdc hello PERSON`

Say hello

```
USAGE
  $ pdc hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

## `pdc hello world`

Say hello world

```
USAGE
  $ pdc hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ pdc hello world
  hello world! (./src/commands/hello/world.ts)
```

## `pdc help [COMMANDS]`

Display help for pdc.

```
USAGE
  $ pdc help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for pdc.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.14/src/commands/help.ts)_

## `pdc plugins`

List installed plugins.

```
USAGE
  $ pdc plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ pdc plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `pdc plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ pdc plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ pdc plugins add

EXAMPLES
  $ pdc plugins:install myplugin

  $ pdc plugins:install https://github.com/someuser/someplugin

  $ pdc plugins:install someuser/someplugin
```

## `pdc plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ pdc plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ pdc plugins:inspect myplugin
```

## `pdc plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ pdc plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ pdc plugins add

EXAMPLES
  $ pdc plugins:install myplugin

  $ pdc plugins:install https://github.com/someuser/someplugin

  $ pdc plugins:install someuser/someplugin
```

## `pdc plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ pdc plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ pdc plugins:link myplugin
```

## `pdc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ pdc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pdc plugins unlink
  $ pdc plugins remove
```

## `pdc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ pdc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pdc plugins unlink
  $ pdc plugins remove
```

## `pdc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ pdc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pdc plugins unlink
  $ pdc plugins remove
```

## `pdc plugins update`

Update installed plugins.

```
USAGE
  $ pdc plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

<!-- commandsstop -->

# oclif-jest-esm-segfault
