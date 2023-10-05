taleenbatalian.com
==================

Portfolio site for multimedia artist Taleen Batalian

## Requirements

From [Jekyll’s installation docs](https://jekyllrb.com/docs/installation/): 

+ Ruby version 2.5.0 or higher, including all development headers (check your Ruby version using `ruby -v`)
+ RubyGems (check your Gems version using `gem -v`)
+ GCC and Make (check versions using `gcc -v`, `g++ -v`, and `make -v`)

## Get Started

If no Bundler installed (check with `which bundler`), install that first: `gem install bundler`.
Then run `bundle install` to fetch the dependencies from the Gemfile. Gemfile.lock will be created.

The Gemfile contains minimum declarations needed to build a successful site locally. Gems have been specified 
because of known conflicts or security flaws. Unmentioned Gems will be auto0-selected and installed by Bundler 
according to its own database of requirements and dependencies.

## Serve and Build commands

Then it is Jekyll commands:

```
# To serve
jekyll serve --I
# Server is now available at localhost:[port]

# or the more verbose
bundle exec jekyll serve --I

# To build
jekyll build
# Files in the _site folder are now built and ready for upload to a server
```