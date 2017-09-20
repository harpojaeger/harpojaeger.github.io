---
title: 'Engimail, gnupg & pinentry on Mac OS X using Homebrew'
author: Harpo
layout: post
comments: true
permalink: /2017/09/20/enigmail-gnupg-pinentry-on-mac-os-x-using-homebrew
tags:
  - gpg
  - PGPG
  - gnupg
  - homebrew
  - brew
  - pinentry
  - mac
  - os x
  - pinentry-mac
  - revocation certificate
  - public-key cryptography
---

_NB: this post assumes a basic familiarity with PGP. I had almost none before starting, so if you follow the links I provide and spend a little while reading, you'll be just as qualified to start hacking on this as I was._

I've recently become interested in using [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) for secure email communications. I run macOS 10.11 El Capitan, and I decided to install [Enigmail](https://www.enigmail.net/index.php/en/), a simple PGP plugin for [Thunderbird](https://www.mozilla.org/en-US/thunderbird/), to try it out.

Enigmail requires an existing installation of [GnuPG](https://www.gnupg.org/). You can get it from the [GPG Suite official installer](https://gpgtools.org/), but I use [Homebrew](https://brew.sh/) to install new packages whenever possible, to keep things centralized and streamline updates.  Homebrew is smart about where it puts packages, and Enigmail is smart about where it looks for them, so this would be a seamless install (cue foreboding music). Step 1: `brew install gnupg`. Step 2: download and install Enigmail. Step 3: security!

Or so it seemed.

<img class="lightbox-0920enigmail" alt="Screenshot of the Enigmail error message." style="float:right;width:50%;" src="/assets/media/jekyll/images/2017-09-20/enigmail-error.png" />

The Enigmail setup wizard successfully generated keys, but failed at the next step with: "The revocation certificate could not be created." [Revocation certificates are important](http://www.pgp.net/pgpnet/pgp-faq/pgp-faq-key-revocation.html), so this was a serious obstacle.

While I was able to find [documentation](https://www.enigmail.net/list_archive/2008-April/009156.html) of [this](https://askubuntu.com/questions/670908/enigmail-not-asking-for-pgp-passphrase-but-saying-no-key-available) error [elsewhere](https://forums.freebsd.org/threads/56852/), nobody expressly answered the question of "how do you fix this on a Mac *without* stepping outside the Homebrew ecosystem?" After some digging, I found the problem. Here are the dependencies Homebrew installs with gnupg:

    $ brew deps gnupg
    adns
    gettext
    gmp
    gnutls
    libassuan
    libffi
    libgcrypt
    libgpg-error
    libksba
    libtasn1
    libunistring
    libusb
    nettle
    npth
    p11-kit
    pinentry

Here's the problem: `pinentry` is a program for authenticating to `gpg-agent` (the program to which GnuPG farms out passphrase entry), but it only runs at the command prompt. Enigmail is looking for a GUI authentication program. Fortunately, the Homebrew package `pinentry-mac` seems to be exactly that – a GUIfied verison of `pinentry`.

So, `brew install pinentry-mac`. Then, in `~/.gnupg/gpg-agent.conf`, add the line `pinentry-program /usr/local/bin/pinentry-mac`. This points `gpg-agent` to the right authentication program, so that when Enigmail asks for authentication, the user is prompted to enter the password used to encrypt their private key.

[Enigmail recommends testing your setup](https://enigmail.net/index.php/en/faq?view=topic&id=14) with

    pinentry <<EOT
    SETDESC Hello World
    CONFIRM
    EOT

However, if you've pointed gpg-agent at `pinentry-mac`, you should instead run

    pinentry-mac <<EOT
    SETDESC Hello World
    CONFIRM
    EOT

If you see a graphic dialog box pop up, you've done it right – `pinentry-mac` is now capable of asking for your password. Restart `gpg-agent` (or logout and back in), and you should be able to step through the Enigmail setup wizard without any problems!

I hope this post helps you save some time, and happy encrypting! Oh, and you can find my PGP public key [here](/pgp.txt).
