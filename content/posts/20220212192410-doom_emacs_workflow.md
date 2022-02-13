+++
title = "Doom Emacs Workflow"
author = ["Inom Turdikulov"]
date = 2022-02-12T00:00:00+03:00
lastmod = 2022-02-12T22:57:09+03:00
draft = false
+++

## Command Abbreviations {#command-abbreviations}

-   `C` - "Control" key
-   `M` - "M" or "option/alt" key
-   `s` - "Command" key
-   `SPC` - "Space" key


## General (tested) {#general--tested}

-   `C-s` for saving the current file (customized command).
-   `M-x` for entering a command
-   `SPC q q` to Quit Emacs
-   `SPC f D` to delete this file


## Projects with Projectile (tested) {#projects-with-projectile--tested}

-   `SPC p p` to open a project
-   `SPC SPC` to open a file in a project
-   `SPC o p` to open the file explorer
-   `SPC o T` to open the vterm in fullscreen
-   `SPC o t` to open the vterm in a popup window
-   `SPC f r` recently visited files
-   `SPC f R` recently visited files in a project
-   `M-x projectile-discover-projects-in-directory` to find projects
    within given folder using Projectile
-   `M-x projectile-discover-projects-in-search-path` to find projects in
    the folder defined by the `projectile-project-search-path` variable
    using Projectile


## Dired {#dired}

-   Dired (Directory Editor) is how you interfaces with a directory
-   Press `C-x d` to open dired.
-   Use `RET` to go to a folder or open a file.
-   Use `-` for going one folder back
-   Use `+` for creating a new directory
-   Use `d` to mark the files for deletion, press `x` to delete.
-   Use `M` to change permissions
-   Use `o` to sort by modes.
-   Use `O` to change the owner.
-   Use `m` to mark and `u` to unmark files or directories.
-   `U` to unselect all
-   Use `t` to invert the selection.
-   `t` to switch between files and directories
-   Use `C` to copy.
-   Use `R` to move.
-   Move with `h`, `j`, `k`, `l`
-   Toggle `(` for simple view
-   `SPC .` to create or find a file
-   `*` to invoke mark dialog
-   `* \` to select all directories.
-   `C` copy to another window
-   `R` move to another window
-   `dired-do-what-i-mean-target` set to true
-   `i` to edit file/dir name


## Buffers, Windows and Basic Navigation {#buffers-windows-and-basic-navigation}


### Buffers {#buffers}

-   Buffers are a special concept in emacs they can be terminals, files,
    directories, etc
-   `SPC ,` to open another buffer
    -   workspace buffer
-   `SPC SHIFT ,` to switch to all buffers
-   `SPC b X` You can create a scratch buffer
-   `SPC b s` to save and name it


### Windows {#windows}

-   `CTRL w v` window split vertically
-   `CTRL w s` window split horizonal
-   `CTRL w w` to switch windows
-   `SPC w q` to kill windows
-   `SPC w >` and `SPC w <` to increase and decrease window width
-   `SPC w +` and `SPC w -` to increase and decrease window height
-   You can use vim motion keys to navigate between open windows for example `SPC w H` moves the window to the left.
-   Windows are panes in your screen


### Workspaces {#workspaces}

-   `SPC TAB n` New workspace
-   `SPC TAB N` Newly named workspace
-   `SPC TAB [` Previous workspace
-   `SPC TAB ]` Next workspace
-   `SPC TAB d` Remove workspace
-   `SPC TAB R` Restore last session
-   `M-1` Switch to workspace 1
-   `M-2` Switch to workspace 2 and so forth.


## Installing Packages using org-super-agenda as an example {#installing-packages-using-org-super-agenda-as-an-example}

-   `SPC f p` to open the config.
-   To add a package, add the package to `.doom.d/package.el`
-   Then close and `doom refresh`
-   Then go to `.doom.d/config.el` to configure the package
-   `def-package!` is a macro you can use to configure packages
    -   `space h help` you can look up method man pages
    -   `:init` is used for setting the package up
    -   `:config` to set configuration after the package has been
        initialized
    -   `:after` lets you set which package it should load after
-   You can use `:after!` to configure packages that are already there


## Quick, horizontal movements with evil-snipe {#quick-horizontal-movements-with-evil-snipe}


### Inine navigation {#inine-navigation}

-   `f` and then the letter you want to navigate to.
    -   `,` will go backward
    -   `;` will go forward after that "find"
-   `t` to find and move cursor to the charachter before what you've searched.
-   `v` puts you in vi mode. You can select text by with `v t some-char-you-navigate-to` or `v f some-char-you-navigate-to`
-   `;` to jump to the next find
-   `,` to jump to the previous one
-   `s` to snipe


### Long distance navigation inside the file {#long-distance-navigation-inside-the-file}

-   Evil-snipe lets you go to all the occuranses in your document
-   `g s SPC` to use avy and going to a certain word in file.
-   `t` is the same thing except for a character you want to jump to before the one you insert
-   `s` to do a double character search
-   Evil-snipe will remember your last search so `,` and `;` will navigate
-   `F` or `T` to go backwards
-   `g s SPC` and then select the letter that avy gives you to navigate to that spot
    -   These letters are on your home row so they are easy to click
-   `SPC h v` for variable, to set the avy variable to search all open
    windows
    -   `avy-all-windows` lets you search in all windows open.
-   You can remove a word with
    `g s SPC select-one-letter x select-the-removal-spot`
    -   You can use `X` to stay in your original spot of search
-   You can go `g s space select-one-letter i select-the-correction-spot`
    to correct the spelling of the search
    -   Install ispell on your OS first
-   You can `yank` a word from one place to another with
    `g s SPC select-one-letter y select-the-correction-spot-to-paste`
-   Use `t` to "teleport" the word from one place to another
    `g s SPC select-one-letter t select-the-correction-spot-to-teleport`


## Multiple cursor in Emacs with Evil-multiedit {#multiple-cursor-in-emacs-with-evil-multiedit}

-   Make selections and then edit those selections interactively
-   `M d` will select the current word, and again will find another
    occurance
-   `M D` will find the occurence upward
-   You can use a visual selection to select multiple words.
-   `R` will select all occurances
-   `CTRL n` for next selection `CTRL p` for previous
-   Exclude matches with `RET`
-   You can make an edit and the changes will be reflected in all the
    selection


## Org Mode {#org-mode}


### Basics {#basics}

-   Org mode gives you structure to your document
-   `*` for a h1 `**` for an h2 and so on
-   You can `TAB` a section to fold a subtree (hide it)
-   You can use `SHIFT TAB` to cycle through folded states
-   `CTRL return` to create a headline of the same type
-   `M arrow up` lets you shift the position of the section
-   `M h` promotes a headline to the next level
-   `M l` demotes
-   You can create lists
    1.  onw
    2.  2
    3.  wooo
    4.  3


### Links, Hyperlinks and more {#links-hyperlinks-and-more}

-   `SPC m l` to add a link to an org page
-   You can add `::` to specify a heading or a line number
-   You can paste http links as well
-   You can "link" some text with specific code `SPC m l` elisp: [(+ 2 2)](<(+ 2 2)>) when you click the link, emacs will evaluate the expression
-   Show [My Agenda](org-agenda)
-   [List Files](ls) in directory


### Defining custoom Link Types {#defining-custoom-link-types}

-   [Whatch the video about custom links](https://youtube.com/watch?v=Febe4lUK5G4)


### Linking to words &amp; Bookmarks {#linking-to-words-and-bookmarks}

-   `SPC n l` stores a link to a particular headline


### Code Snippets &amp; Babel {#code-snippets-and-babel}

-   `SPC i s` for inserting code snippets
    -   Example:

        ```emacs-lisp
        (+ 2 3 4 5)
        ```
-   `C-c C-c` to execute the code.
-   `SPC m '` to edit inside the babel in another buffer.
-   Results will show up in a `##+RESULTS` header
-   This feature is called Babel
-   One snippet can consume the output of another snippet
-   You can create your own snippets in the following directory: `~/.doom.d/snippets/`


### Task Management {#task-management}

-   Create a task by prefixing any heading with `TODO`
-   `DONE` means the task is done
-   You can create your custom key words by changing this variable: `org-todo-keywords`
    -   remember you can get to your variables through `SPC h v` (M-x counsel-describe-variable)
    -   These values are already set in Doom:

        ```text
        ((sequence "TODO(t)" "PROJ(p)" "STRT(s)" "WAIT(w)" "HOLD(h)" "|" "DONE(d)" "KILL(k)")
        (sequence "[ ](T)" "[-](S)" "[?](W)" "|" "[X](D)"))
        ```
-   `SPC m t` to change a status of a todo
-   `SHIFT left` and `SHIFT right` can be used to change the status of a todo as well.
-   If you finish a task with a command, org mode will add a date that you "closed" the task.
-   `SPC o a t` to open the agenda -&gt; todo list
-   `q` to quit
-   `org-agenda-files` is a variable you can set to filter which files agenda searches for todos in.


#### Priorities for Tasks {#priorities-for-tasks}

-   `SHIFT up` and `SHIFT down` will toggle the priority of tasks
-   `org-fancy-priorities` gives you fancy looking priorities


#### Marking Tasks with Tags {#marking-tasks-with-tags}

-   Tags can be attached to any headlines
-   `SPC m q` to tag a headline
-   Example:
    -   TODO play more games :fun:
-   Tags are hierarchical so nested headings will be tagged with the
    parent header tag
-   `org-tag-sparce-tree` will search for headings that only have a specific
    tag


#### Setting a poperty for a task/headline {#setting-a-poperty-for-a-task-headline}

-   `SPC m o` is used for setting a property.

<!--list-separator-->

-  Marking Headlines with Categories

    -   You can use [categories](https://orgmode.org/manual/Categories.html) to change the label in agenda view.

<!--list-separator-->

-  Org-Habits

    -   If you want to [keep track of your habits](https://orgmode.org/manual/Tracking-your-habits.html) using org mode, you can set the `STYLE` property to habit.
        -   If you want to set a category (for chani


### Lists {#lists}

-   Two types of lists, ordered and unordered lists
    -   `SHIFT right` and `SHIFT left` can be used to change the type of lists.
-   You can also change an unorded list by changing the first item to 1. and then typing `C-c C-c` and vice verca.


### Checkboxes {#checkboxes}

-   [ ] This is still todo
-   [-] This is in progress
-   [X] This is a done task


#### You can see how many are done with a "cookie" <code>[1/2]</code> {#you-can-see-how-many-are-done-with-a-cookie}

-   [-] Task 1
-   [X] Task 2
-   You can do this by adding <code>[/]</code> to the heading and pressing `C-c C-c`
-   You can't assign a tag or a priority


## Magit {#magit}

-   Magit is enabled by default in Doom Emacs's init.el
-   `SPC g g` shows Magit status page
    -   Most commands are done from the status page
    -   Use tab to expand headlines in the status page
-   `?` in Magit's status page for a nice list of available commands and help, `q` to close this help page
-   Open diff view for a file with `TAB`
-   Press `s` under "Unstaged changes" to stage a change
    -   `u` to undo a change
    -   `c` to commit
-   `b s` for branch and spinoff to create another branch, rewinding the
    commits you made to master
-   `b b` to switch branches


### Git Commit Flow in More Detail {#git-commit-flow-in-more-detail}

-   `t t` to create a tag, default place is the commit you are currently
    selecting
-   `V` to select a change in a diff and `x` to discard that change.
-   `s` to stage
-   `c` to commit, you can `q` to quit the commit screen
-   `P` to push and then `p` to your remote or `u` to a another remote


### Magit with Forge for Issuing Pull Requests - Emacs {#magit-with-forge-for-issuing-pull-requests-emacs}

-   Forge is installed in emacs doom
-   `@` for forge
-   Set up forge with `M x forge-pull`
    -   the first time you will get a token from github
-   `@ c p` to create a pull request with forge
    -   select the base branch
    -   then select the target branch
    -   then provide a short description
    -   `CTRL c CTRL c` to finish the pull request
-   Now there will be a `pull requests` tab


## Terminal {#terminal}

-   Set up vterm in your init.el file.
-   `SPC o T` for opening vterm
-   `SPC o t` for opening vterm in a popup window


## File Tree {#file-tree}

-   Set up neotree or treemacs in your init.el file.
-   `SPC o p` for opening neotree or treemacs


## Others {#others}

-   `C-c C-z` to insert a note for a heading in org mode.

<!--listend-->

-   `C-c C-c` to insert a tag for a heading in org mode.


## Capturing {#capturing}

-   `SPC X` to capture (the new thing gets caputured to a single file but that's fine since we can easily refile it.)
-   `SPC m r r` to refile


## Org Roam {#org-roam}

These keybinding only work after installing org-roam. To install org roam edit your `init.el` file and add `(org +roam2)` in its designated place. Watch [this video](https://www.youtube.com/watch?v=AyhPmypHDEw) to understand what org-roam is.

-   `SPC n r f` Find an existing node or create a new one.
-   `SPC n r i` Insert a link to another node.
-   `SPC n r r` Toggle backlinks pane
-   `SPC m m o t` Add a roam tag.
-   `SPC m m o a` Add a roam alias.


## Sources {#sources}

-   [Link to youtube video series](https://www.youtube.com/watch?v=BRqjaN4-gGQ&list=PLhXZp00uXBk4np17N39WvB80zgxlZfVwj&index=10)
-   [This org file is mostly from the notes taken from the series above by ianjones.us](https://www.ianjones.us/zaiste-programming-doom-emacs-tutorial/#org7ad2452)
-   [Three HUGE Mistakes New Emacs Users Make](https://www.youtube.com/watch?v=s0ed8Da3mjE) (they are included in the tips above)


## What to learn <code>[0/2]</code> {#what-to-learn}

-   [ ] [Org Roam](https://orgroam.com)
-   [ ] abbrev-mode
