# Newsspec-7553

Inside a favela

## Not using an iFrame

This project uses the iFrame scaffold for development, to give access to the awesome make_vocabs, automated live deployment, media queries for IE, etc.

However, it does not actually create any iFrames - this is because:

a) the includes are only HTML/CSS - no JS - therefore IFrame is overkill
b) the navigation links to an element ID on the parent page. Can't do that from within the iFrame very easily.

## iFrame scaffold

This project was built using the iFrame scaffold v1.4

## License
Copyright (c) 2014 BBC