---

---

# Part 2: Key Rebinding

Previous: [[Part 1: Getting AutoHotkey]]

To "rebind" a key means to set a key on your keyboard so that when you
press it, your computer interprets it as a different
key. [[AutoHotkey]] is
great for this!

### Why would I want to do that?

Key rebinding is useful for several reasons. Here are two:

-   First, you can use key rebinding to make less useful keys more
    useful. A very common form of this is to rebind your Caps Lock key
    to either Ctrl or Esc instead (I personally bind my Caps Lock to
    Ctrl, and that will be the first example we'll walk through together
    below).
-   Second, you can rearrange the keys on your keyboard to be in an
    arrangement that you like better. Once you rebind them in software,
    you can then pop the keycaps off and rearrange them to match.

### Rebinding Keys Using [[AutoHotkey]] 

First, locate the .ahk file that we created
in [[Part 1: Getting AutoHotkey]] (or
if you're jumping in here, create a new .ahk file) and open it in
your [[Text Editor]] of
choice.

Rebinding a key
in [[AutoHotkey]] is
basically equivalent to creating a keyboard shortcut that takes only a
single key as its key
combination. [[AutoHotkey]] will
basically intercept the key you physically press and substitute in the
key you tell it instead. 

Let's rebind Caps Lock to be Ctrl instead. Anywhere in your .ahk file,
add this line: 

 

Here's what that syntax means:

 

Go ahead and save the file, then run or refresh the running script. If
you set up your file the way I recommended
in [[Part 1: Getting AutoHotkey]],
then you can do that instantly with the keyboard shortcut Ctrl+F5.

To check whether it worked, try copying and pasting something using Caps
Lock+c and Caps Lock+v.

Assuming that worked, then congratulations! You've now approximately
quadrupled the usefulness of your Caps Lock key, eliminated that
irritating thing where you accidentally turn Caps Lock on by accident,
and learned your first bit
of [[AutoHotkey]] syntax
in the process!

### Wrap-up and What's Next 

Try using your newfound ability to remap other keys as you see fit. Each
time, remember to save the file before you refresh it, otherwise the
change won't be in effect yet. I'd also advise making a commit to your
git repository between each major change (like, for example, once you've
added a new shortcut and have tested it and tweaked it to make sure it's
behaving the way you'd like).

Next, we'll cover custom keyboard shortcuts, which are basically what we
just did but with more than one key in the hotkey combination. We'll
also explore triggering more complicated results than easily fit on a
single line.

Next: [[Part 3: Custom Keyboard Shortcuts]]
