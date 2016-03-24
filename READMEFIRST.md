# JSPM prerequisites

## 1. Node.js/npm

We need Node and npm installed on our systems in order to use jspm.  Node comes bundled with npm.

### Install nvm (node version manager)
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`

### Install Node.js
```
# open a new shell
nvm install node
```

### Check installation
```
which node
which npm
```

## 2. JSPM registry configuration

To allow for the installation of in-house javascript libraries in our projects via jspm, we need to configure a private jspm
registry.  This is a **_one-time configuration step_**.

```
npm install jspm -g
npm install jspm-git -g
jspm registry create ba-git jspm-git
> Enter the base URL of your git server:ssh://git@code.bookassist.com:/home/git/gitroot
> Set advanced configurations? [no]:
```

In ~/.jspm/config we should then see the following in the registries section:

```
"ba-git": {
      "version": "1.0",
      "baseurl": "ssh://git@code.bookassist.com:/home/git/gitroot",
      "handler": "jspm-git"
    }
```

