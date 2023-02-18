---

---

# I Love Janet (the Language)

I love [the Janet programming language](https://www.janet-lang.org). Here's some background on what it is, how I found it, and some stuff I've used it for.

<!--truncate-->

## What's [[Janet]]?

[[Janet]] is a super small, [[Dynamic Typing|dynamically typed]], [[Programming Paradigms|multi-paradigm]], [[Clojure]]-inspired, modern [[Lisp]] implemented in [[C (language)|C]]. The programs you write in Janet can either run as interpreted scripts executed by the `Janet` executable, or compile to stand-alone native executables that don't need `Janet` to run. That makes it a great language for system scripting (as an alternative to Bash or other shell scripts), rapid prototyping, or even embedding inside of other [[C (language)|C]] or [[C++ Language|C++]] programs. Even though the entire language is *extremely* small—the entire thing is less than 1MB in size)—it has a number of cool above-and-beyond features, like native support for multi-threaded programs, networking niceties, cross-platform OS interop, and a powerful Regex alternative called PEG (which stands for Parsing Expression Grammar). 

[[Janet]] is a great fit for my uses (namely, toy programs, hobby projects, and general tinkering just to learn how [[programming]] works). 

Here's a sample of [[Janet]]'s syntax: 

```janet
# Janet Syntax Sample

(+ 1 1) # => 2

(defn fibonacci [n]
  (var a 0)
  (var b 1)
  (var c 0)
  (case n
    0 0
    1 1
    (do (for i 0 (dec n)
             (set c (+ a b))
             (set a b)
             (set b c))
        b)))

(comment (fibonacci 50)) # => 12586269025

(defn main [&opt args]
  (print "Hello, world!"))
```

## How I Found Janet

My first contact with [[Programming]] was [[Python|Python 2.x]], which I tried to learn when I was 11. [[YouTube]] had not been invented at the time (and even if it had, we didn't have the kind of internet that could make good use of it), and learning to code without any help other than Google was really difficult. My goal was to program videogames, and Google told me that using [[Python]] together with [PyGame](https://www.pygame.org/news) was a beginner-friendly way to start (dear reader: it was not that). Ultimately, 11-year-old me was not very successful in his attempts to become a *l33t c0de sl1ng3r*.

A few decades (oof) later, I stumbled into learning [[Haskell]] as an accident of learning about [[Formal Logic]] and [[Lambda Calculus]]. I really enjoyed programming in [[Haskell]] (I still have [a little bit of Haskell](https://github.com/CFiggers/quad-ci) on [my GitHub](https://github.com/CFiggers)), and learning [[Haskell]] led me to discover [[Category Theory]], which I'm still enthusiastically learning about to this day. But, while [[Monad|Monads]] and [[Monoid|Monoids]] are great fun to think about and (partially) figure out in the abstract, needing to reason around them to accomplish even the most basic programming tasks (like, oh I don't know, printing a string to the terminal) made [[Haskell]] a much sharper knife than I really needed for tinkering around with toy programs and hobby projects.

```haskell
-- Haskell Syntax Sample

1 + 1 -- => 2

fibonacci :: Int -> Integer
fibonacci n = go n (0, 1)
  where
    go !n (!a, !b) 
      | n == 0    = a
      | otherwise = go (n - 1) (b, a + b)

fibonacci 50 -- => 12586269025

main :: IO()
main = putStrLn "Hello, World!"
```

That's when I got into [[Clojure]]. [[Clojure]] and [[Haskell]] are often mentioned in the same breath because they are both emphatically [[Functional Programming Paradigm|Functional]] languages, both are considered weird and unorthodox in comparison with most mainstream [[Languages (Programming)|languages]], and both have vocal support from their niche userbases. That said, the differences between them are profound: [[Haskell]] is first and foremost a mathematics-inspire language by and for Computer Science academics to explore the far reaches of Programming Language Theory, while [[Clojure]] started off as [[Rich Hickey|one salty Java programmer]]'s pet project and has blossomed over the years into a stable, no-nonsense tool for world-weary old timers to just *get things done.*

```clojure
; Clojure Syntax Sample

(+ 1 1) ; => 2

(defn fibonacci [n]
  (loop [fib-nums [0 1]]
    (if (> (count fib-nums) n)
      (last fib-nums)
      (let [[n1 n2] (reverse fib-nums)]
        (recur (conj fib-nums (+ n1 n2)))))))

(comment (fibonacci 50)) ; => 12586269025

(defn main [& args]
  (print "Hello, world!"))
```

I loved the minimal syntax, REPL-driven development style, and S-Expression-enabled editing experience of [[Clojure]] (all of which owes to [[Clojure]]'s roots in [[Lisp]]). But [[Clojure]] is (quite happily) married to the JVM, making its startup times slow and the install size for the language fairly big. Since I just need something simple and fast for side projects and tinkering, the JVM quickly started to feel like serious overkill.

I decided to look for other [[Lisp]] variants that might be a little lighter weight. [[Clojure]] is a [[Lisp]], so it benefits from a long tradition of Lisps going back to the early 70's. But, far from simply carrying the torch forward of any given Lisp variant, [[Clojure]] a *highly opinionated reinterpretation* of the [[Lisp]] tradition (a la its original creator, [[Rich Hickey]]). Since that Hickey-esque reinterpretation was my first introduction to [[Lisp]], more traditional Lisp offerings like [Common Lisp](https://common-lisp.net/), [Scheme](https://www.scheme.org/), and [Racket](https://racket-lang.org/) feel weird and foreign to me, with a lot of historical baggage that I don't resonate with. I could probably get used to any of them, but with each one my first impression led me to keep looking in case there was something else out there.

Enter [[Janet]]. 

## [[Janet]]: The Best (For Me) of Many Different Worlds

[[Janet]] is loosely inspired by [[Clojure]]'s take on [[Lisp]], but since it's implemented in basic [[C Language|C]], it's not tied at the hip to the JVM. It's tiny and lightweight, meaning I can tinker with it everywhere (even on my Android phone). It's more forgiving than [[Clojure]] when it comes to mutable data and functional style, though you totally can still program in those styles if you really want to.

The library ecosystem covers a few of the most important basics—things like bindings for [SQLite 3](https://www.sqlite.org/index.html) and [Postgres](https://github.com/andrewchambers/janet-pq.git), a [graphics library](https://www.raylib.com/), facilities for making [http/s requests](https://git.sr.ht/~pepe/shriek), some [testing](https://github.com/ianthehenry/judge.git) [libraries](https://github.com/pyrmont/testament.git), a fairly mature [web framework](https://github.com/joy-framework/joy.git), a [static site generator](https://github.com/bakpakin/mendoza.git), and some other [miscellaneous odds and ends](https://github.com/janet-lang/spork.git)—but many good ideas from other ecosystems are yet to be implemented for Janet. This is exciting, in some ways, because it means there's tons of room to contribute useful things to the Janet community.

As for tooling, the basics exist and are reasonably solid. [[Janet]] uses its own build tool and dependency manager called [jpm](https://janet-lang.org/docs/jpm.html), which I've generally found effective, well-documented, and easy enough to use. The editor situation is, again, pretty basic but functional—more on that in a moment.

## My Contributions

So far, I've worked on two big projects in/for [[Janet]]: first, improvements to the "official" [[VS Code]] extension for [[Janet]], and second a TUI Text Editor purely implemented in [[Janet]] called [Joule](https://www.github.com/CFiggers/joule-editor).

### [vscode-janet](https://www.github.com/CFiggers/vscode-janet)

The [janet-lang GitHub organization](https://github.com/janet-lang) contains [vscode-janet](https://github.com/janet-lang/vscode-janet) and [janet.vim](https://github.com/janet-lang/janet.vim), which provide (very) basic editor support for [[VS Code]] and [[vim]] respectively. 

The [[VS Code]] extension provides exactly two things: syntax highlighting and the ability to send highlighted code snippets to a [[Janet]] REPL running in the integrated terminal. This is super helpful—in fact, it covers the very barebones minimum needed for a REPL-driven development [[workflow]]—but coming from [the absolutely superb VS Code tooling available for Clojure](https://calva.io/) it left a lot to be desired for me.

So, I forked the [vscode-janet](https://github.com/janet-lang/vscode-janet) repo (which you can see for yourself at [CFiggers/vscode-janet](https://www.github.com/CFiggers/vscode-janet)) and started patching in features that I knew and loved from [Calva](https://calva.io/). So far, I have patched in Calva's [ParEdit](https://www.emacswiki.org/emacs/ParEdit)-style Structural Editing capabilities and as-you-type auto-formatting. It's a little glitchy (especially wherever [[Janet]] and [[Clojure]] syntax diverges), but I use it every time I'm hacking on a [[Janet]] project and I *absolutely love it.* 

**Warning:** the process for building the extension from source is really poorly documented in the repository itself right now—to get everything working you have to compile some of the source code (the part written in [[ClojureScript]]) using [shadow-cljs](https://github.com/thheller/shadow-cljs), then as a *whole separate step* compile the rest of the project (including the output from the ClojureScript compilation) using `tsc` (the [[TypeScript]] compiler). I'll get that cleaned up at some point. 🤡

### [Joule Editor](https://www.github.com/CFiggers/joule-editor)

![A gif showing some basic editing and commands in joule](https://user-images.githubusercontent.com/55862180/210149130-076b412a-f1ae-4b55-8507-ce3e9980d85a.gif)

[Joule](https://www.github.com/CFiggers/joule-editor) is the most involved programming project I've ever made myself from scratch. It's a [TUI](https://en.wikipedia.org/wiki/Text-based_user_interface) [[Text Editor]] implemented entirely in [[Janet]]. To get started with it, I followed along with [this super helpful guide](https://viewsourcecode.org/snaptoken/kilo/index.html) by [paigeruten](https://github.com/paigeruten). But as it grew in complexity and I started making independent decisions about what to implement and how, it has taken on a life completely its own. I'm super proud of it, janky little thing as it is, and it actually has a practical use-case for me—on my Android phone, I only have access to TUI editors for the most part, and [[vim]] is challenging to use without access to a physical keyboard. So Joule is my go-to for text editing when I'm on my phone.

I plan to write a least a small handful of blog posts about [Joule](https://www.github.com/CFiggers/joule-editor), mostly because it's been such a cool and enjoyable learning experience for me getting it to work even as well as I have.

## Conclusion

So, if you've found any part of this interesting, [go try out Janet](https://janet-lang.org)! It has a small but curious and welcoming community, which can be found on [Gitter](https://gitter.im/janet-language/community) (for some unexplainable reason). Ask questions if you run into issues with anything!
