---

---

# Part 1: Getting AutoHotkey

Up: [[An Introduction to AutoHotkey]]

In this section I'll walk you through downloading and
installing [[AutoHotkey]].
I'll also recommend
a simple [[Workflow]] and
related [[Tools]] for
creating and
editing [[AutoHotkey]] scripts.

### Where and How do I get [[AutoHotkey]]?

Download and install from <https://www.autohotkey.com/>

-   If you have full administrator access to your machine (as in, it's a
    laptop that you personally own) then you can do a full install
    of [[AutoHotkey]].
-   If you DON'T have full administrator access to your machine (as in,
    it's a company or school laptop that an IT department manages for
    you) then you can still
    use [[AutoHotkey]] in
    portable mode.
    -   Even though you *can*
        use [[AutoHotkey]] this
        way, you probably still *shouldn't* if there's any policy
        against it. Don't get in trouble.

### How [[AutoHotkey]] Works

-   The [[AutoHotkey]] program
    runs constantly in the background, "listening" to your keyboard and
    mouse inputs
    -   You'll see a green "H" icon in the system tray when it is
        active.
-   You start the program and configure its behavior
    using [[AutoHotkey]] Script
    files, which are simple text files on your computer with the .ahk
    file type.
    -   You can turn any .txt file into a .ahk file by editing the file
        type (there's more than one way to do this, depending on how
        Windows-savvy you are).
-   When your mouse or keyboard inputs match a trigger defined in the
    Script
    file, [[AutoHotkey]] runs
    the instructions nested under that trigger.
    -   You can configure multiple trigger types—the most common are
        "Hotkeys" and "Hotstrings."
        -   A Hotkey is a single key or combination of keys, kind of
            like **Ctrl+c** to "copy" or **Ctrl+v** to "paste."
        -   A "Hotstring" is a sequence of keys that you type, usually
            in an editor window like your email client
            or [[Note-Taking]] program.
    -   Either type of trigger can then do *anything* your mouse and
        keyboard can do, but automatically!

### Getting Set Up + [[Workflow]] Recommendations

This part of the guide is
highly [[Opinionated]]—that
is, what I outline below is far from mandatory,
and [[AutoHotkey]] will
work fine if you do none of this. But I consider the following to be **a
smart way to set things up.**

#### [[Tools]]

-   A [[Text Editor]] (I
    use [[VS Code]])
    -   Since [[AutoHotkey]] scripts
        are just text files, it's helpful to have a
        fully-featured[[Text Editor]] for
        making edits to
        your [[AutoHotkey]] scripts.
        -   [[VS Code]] has
            an extension
            for [[AutoHotkey]] that
            adds syntax highlighting and smart code completion
            suggestions
            for [[AutoHotkey]]'s
            built-in functions.
            -   [[VS Code]] is
                also usable WITHOUT the ability to officially install
                programs on whatever computer you're using (that's
                called a "portable" program). So even if you're using a
                company laptop with IT department-managed installation
                of
                programs, [[VS Code]] is
                still an option that you can try.
                -   Even though you *can*
                    use [[VS Code]] this
                    way, you probably still *shouldn't* if there's any
                    policy against it. Don't get in trouble.
-   [[Git]] version
    control
    + [[GitHub]] or
    some other repo service
    -   In order to keep track of your scripts, add a layer of
        redundancy so that you don't accidentally delete them, and make
        sure that any changes you make over time are never permanent, I
        recommend using
        some [[Version Control Software]],
        such
        as [[Git]].,
        together with
        a [[Remote Host]] for
        keeping your VCS backed up somewhere safe.
        -   [[Git]] is
            an industry standard tool that programmers use to manage
            large,
            sprawling [[Programming]] projects.
            It's a Swiss Army Knife made for that purpose—but we'll only
            need to use its most basic features.
        -   (Optional):[[GitHub]] is
            an extremely
            popular [[Remote Host]] for
            storing [[Git]] repositories.
            You can use it to share
            your [[AutoHotkey]] scripts
            with the world, if you want, or keep them private.
            Other [[Remote Host]]s
            include GitLab and BitBucket.

#### Setting Things Up

-   Recommended Folder Structure
    -   Create a folder just
        for [[AutoHotkey]] scripts
    -   Create a single "Main" .ahk file that will "Include" other,
        smaller scripts
    -   Make this folder
        a [[Git]] repository
-   Recommended structure for your "Main" .ahk file
    -   Keyboard shortcut for reloading your currently-running script
    -   "Include" statements at the bottom of the file
-   Running
    your [[AutoHotkey]] scripts
    on machine startup

#### Recommended [[Workflow]]

-   If you haven't already, go ahead and create a .ahk file in
    your [[Git]] repository
    folder
    -   Name it whatever you like—the name of the file is not important
        to [[AutoHotkey]]'s
        actual functionality.
    -   Go ahead and add the shortcut above to the top of that file
        using
        your [[Text Editor]] of
        choice and save it. (From now on I won't remind you to save the
        file after every change, but you should get in the habit of
        doing so.)
    -   Add the .ahk file to
        your [[Git]] repository
        and commit this first change. (From now on I won't remind you to
        commit new changes
        to [[Git]] once
        you're happy with them, but you should get in the habit of doing
        so.)
-   Double-click on that .ahk file to
    start [[AutoHotkey]] running
    in the background.
-   From now on, whenever you make changes to your .ahk file, ***after
    you save the changes*** hit **Ctrl+F5** to automatically refresh the
    version of the script
    that [[AutoHotkey]] is
    running in the background.

### Conclusion and What's Next

If you've followed along to this point, you should
have [[AutoHotkey]] installed
on your Windows machine, have
a [[Text Editor]] installed
and configured to recognize and help you out with
writing [[AutoHotkey]] code,
and have a local folder set up as
a [[Git]] repository
to record the changes you make to your scripts over time (whether
local-only or together with
a [[Remote Host]] is
your prerogative). 

Next, I'll walk you through actually
USING [[AutoHotkey]] to
do some simple stuff, like rebinding keys on your keyboard to act like
other keys instead.

Next: [[Part 2: Key Rebinding]]
