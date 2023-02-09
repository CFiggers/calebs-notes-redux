---

---

# Part 1: Getting AutoHotkey

Up: <a href="https://brick.do/X4gA9LJDa8xd" class="page-link">An Introduction to AutoHotkey</a>

In this section I'll walk you through downloading and
installing <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a>.
I'll also recommend
a simple <a href="https://brick.do/3V7XJoGzrj61" class="page-link">Workflow</a> and
related <a href="https://brick.do/8352ZeJP1wp6" class="page-link">Tools</a> for
creating and
editing <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> scripts.

### Where and How do I get <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a>?

Download and install from <https://www.autohotkey.com/>

-   If you have full administrator access to your machine (as in, it's a
    laptop that you personally own) then you can do a full install
    of <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a>.
-   If you DON'T have full administrator access to your machine (as in,
    it's a company or school laptop that an IT department manages for
    you) then you can still
    use <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> in
    portable mode.
    -   Even though you *can*
        use <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> this
        way, you probably still *shouldn't* if there's any policy
        against it. Don't get in trouble.

### How <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> Works

-   The <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> program
    runs constantly in the background, "listening" to your keyboard and
    mouse inputs
    -   You'll see a green "H" icon in the system tray when it is
        active.
-   You start the program and configure its behavior
    using <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> Script
    files, which are simple text files on your computer with the .ahk
    file type.
    -   You can turn any .txt file into a .ahk file by editing the file
        type (there's more than one way to do this, depending on how
        Windows-savvy you are).
-   When your mouse or keyboard inputs match a trigger defined in the
    Script
    file, <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> runs
    the instructions nested under that trigger.
    -   You can configure multiple trigger types—the most common are
        "Hotkeys" and "Hotstrings."
        -   A Hotkey is a single key or combination of keys, kind of
            like **Ctrl+c** to "copy" or **Ctrl+v** to "paste."
        -   A "Hotstring" is a sequence of keys that you type, usually
            in an editor window like your email client
            or <a href="https://brick.do/Mqqwyq0e1MVw" class="page-link">Note-Taking</a> program.
    -   Either type of trigger can then do *anything* your mouse and
        keyboard can do, but automatically!

### Getting Set Up + <a href="https://brick.do/3V7XJoGzrj61" class="page-link">Workflow</a> Recommendations

This part of the guide is
highly <a href="https://brick.do/Qx6NYjkOoOpp" class="page-link">Opinionated</a>—that
is, what I outline below is far from mandatory,
and <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> will
work fine if you do none of this. But I consider the following to be **a
smart way to set things up.**

#### <a href="https://brick.do/8352ZeJP1wp6" class="page-link">Tools</a>

-   A <a href="https://brick.do/3QwB3zxyZMQ8" class="page-link">Text Editor</a> (I
    use <a href="https://brick.do/bjlZgglMDmR1" class="page-link">VS Code</a>)
    -   Since <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> scripts
        are just text files, it's helpful to have a
        fully-featured<a href="https://brick.do/3QwB3zxyZMQ8" class="page-link">Text Editor</a> for
        making edits to
        your <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> scripts.
        -   <a href="https://brick.do/bjlZgglMDmR1" class="page-link">VS Code</a> has
            an extension
            for <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> that
            adds syntax highlighting and smart code completion
            suggestions
            for <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a>'s
            built-in functions.
            -   <a href="https://brick.do/bjlZgglMDmR1" class="page-link">VS Code</a> is
                also usable WITHOUT the ability to officially install
                programs on whatever computer you're using (that's
                called a "portable" program). So even if you're using a
                company laptop with IT department-managed installation
                of
                programs, <a href="https://brick.do/bjlZgglMDmR1" class="page-link">VS Code</a> is
                still an option that you can try.
                -   Even though you *can*
                    use <a href="https://brick.do/bjlZgglMDmR1" class="page-link">VS Code</a> this
                    way, you probably still *shouldn't* if there's any
                    policy against it. Don't get in trouble.
-   <a href="https://brick.do/BdZ8kqloXaLp" class="page-link">Git</a> version
    control
    + <a href="https://brick.do/2b5Y6zNym1BW" class="page-link">GitHub</a> or
    some other repo service
    -   In order to keep track of your scripts, add a layer of
        redundancy so that you don't accidentally delete them, and make
        sure that any changes you make over time are never permanent, I
        recommend using
        some <a href="https://brick.do/BKbgyLwaAq9M" class="page-link">Version Control Software</a>,
        such
        as <a href="https://brick.do/BdZ8kqloXaLp" class="page-link">Git</a>.,
        together with
        a <a href="https://brick.do/mV02jJDAkmn3" class="page-link">Remote Host</a> for
        keeping your VCS backed up somewhere safe.
        -   <a href="https://brick.do/BdZ8kqloXaLp" class="page-link">Git</a> is
            an industry standard tool that programmers use to manage
            large,
            sprawling <a href="https://brick.do/M97QENmBmO0L" class="page-link">Programming</a> projects.
            It's a Swiss Army Knife made for that purpose—but we'll only
            need to use its most basic features.
        -   (Optional):<a href="https://brick.do/2b5Y6zNym1BW" class="page-link">GitHub</a> is
            an extremely
            popular <a href="https://brick.do/mV02jJDAkmn3" class="page-link">Remote Host</a> for
            storing <a href="https://brick.do/BdZ8kqloXaLp" class="page-link">Git</a> repositories.
            You can use it to share
            your <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> scripts
            with the world, if you want, or keep them private.
            Other <a href="https://brick.do/mV02jJDAkmn3" class="page-link">Remote Host</a>s
            include GitLab and BitBucket.

#### Setting Things Up

-   Recommended Folder Structure
    -   Create a folder just
        for <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> scripts
    -   Create a single "Main" .ahk file that will "Include" other,
        smaller scripts
    -   Make this folder
        a <a href="https://brick.do/BdZ8kqloXaLp" class="page-link">Git</a> repository
-   Recommended structure for your "Main" .ahk file
    -   Keyboard shortcut for reloading your currently-running script
    -   "Include" statements at the bottom of the file
-   Running
    your <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> scripts
    on machine startup

#### Recommended <a href="https://brick.do/3V7XJoGzrj61" class="page-link">Workflow</a>

-   If you haven't already, go ahead and create a .ahk file in
    your <a href="https://brick.do/BdZ8kqloXaLp" class="page-link">Git</a> repository
    folder
    -   Name it whatever you like—the name of the file is not important
        to <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a>'s
        actual functionality.
    -   Go ahead and add the shortcut above to the top of that file
        using
        your <a href="https://brick.do/3QwB3zxyZMQ8" class="page-link">Text Editor</a> of
        choice and save it. (From now on I won't remind you to save the
        file after every change, but you should get in the habit of
        doing so.)
    -   Add the .ahk file to
        your <a href="https://brick.do/BdZ8kqloXaLp" class="page-link">Git</a> repository
        and commit this first change. (From now on I won't remind you to
        commit new changes
        to <a href="https://brick.do/BdZ8kqloXaLp" class="page-link">Git</a> once
        you're happy with them, but you should get in the habit of doing
        so.)
-   Double-click on that .ahk file to
    start <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> running
    in the background.
-   From now on, whenever you make changes to your .ahk file, ***after
    you save the changes*** hit **Ctrl+F5** to automatically refresh the
    version of the script
    that <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> is
    running in the background.

### Conclusion and What's Next

If you've followed along to this point, you should
have <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> installed
on your Windows machine, have
a <a href="https://brick.do/3QwB3zxyZMQ8" class="page-link">Text Editor</a> installed
and configured to recognize and help you out with
writing <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> code,
and have a local folder set up as
a <a href="https://brick.do/BdZ8kqloXaLp" class="page-link">Git</a> repository
to record the changes you make to your scripts over time (whether
local-only or together with
a <a href="https://brick.do/mV02jJDAkmn3" class="page-link">Remote Host</a> is
your prerogative). 

Next, I'll walk you through actually
USING <a href="https://brick.do/b097PBa2bpv3" class="page-link">AutoHotkey</a> to
do some simple stuff, like rebinding keys on your keyboard to act like
other keys instead.

Next: <a href="https://brick.do/Nmd0B9gJg3qd" class="page-link">Part 2: Key Rebinding</a>
