---
slug: parsing-json-in-13-lines-of-janet
prefix: blog/
title: Parsing JSON in 13 Lines of Janet
tags: [janet, project, wip]
image: janet-json-parser_2023-03-18.png
last_updated: 2023-03-18
---

# Parsing JSON in 13 Lines of Janet

Here's how you can use [Janet](https://www.janet-lang.org)'s built-in [Parsing Expression Grammar (PEG) module](https://janet-lang.org/docs/peg.html) to define a grammar capable of parsing valid JSON into an [[Abstract Syntax Tree]] in only 13 lines of code (one of which is just the "define" keyword and a symbol name):

```janet showLineNumbers
(def json-parser
  ~{:null (/ (<- "null") ,|[$ :null])
    :bool (/ (<- (+ "true" "false")) ,|[$ :bool])
    :number (/ (<- (* (? "-") :d+ (? (* "." :d+)))) ,|[$ :number])
    :string (/ (* "\"" (<- (to (* (> -1 (not "\\")) "\""))) 
                  (* (> -1 (not "\\")) "\"")) ,|[$ :string])
    :array (/ (* "[" :value (any (* :s* "," :value)) "]") ,|[$& :array])
    :object (/ (* "{" :s* :string :s* ":" :value
                  (any (* :s* "," :s* :string :s* ":" :value))
                  "}") ,|[(from-pairs (partition 2 $&)) :object])
    :value (* :s* (+ :null :bool :number :string :array :object) :s*)
    :unmatched (/ (<- (some 1)) ,|[$ :unmatched])
    :main (some (+ :value "\n" :unmatched))})
```

[WIP]

<!--truncate-->

You would then use this grammar in an actual program like this:

```janet showLineNumbers
(peg/match json-parser "{\"key\": \"value\"}")
=> @[(@{("key" :string) ("value" :string)} :object)]
```

*(**NB**: You'd probably also want to call `(peg/compile)` on the grammar object before using it a lot, because that will speed up the `(peg/match)` function considerably.)*

In what follows, I'll re-create this parsing grammar step-by-step from scratch as a follow-along introduction to Janet's [Parsing Expression Grammars](https://janet-lang.org/docs/peg.html). The best way to come along on this journey with me is to [[Part 1 Getting Janet|download and install Janet]], then create a project, pop open your favorite [[Text Editor]] and a Janet [[REPL]], and try everything yourself as you read along!

## Stuff to Know Up Front



## Recreating the `json-parser` Above


### Parsing `null`s


### Parsing Booleans


### Parsing Numbers


### Parsing Strings


### Parsing Arrays


#### Recursive Pattern Matching


### Parsing Objects


### Misc Thoughts


### Testing Everything


### Final Comments


## Conclusion: PEGs are *Awesome*

