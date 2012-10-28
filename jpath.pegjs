start
  = '/' step jpath
  / jpath

jpath
  = step jpath
  / predicate jpath
  / ''

step
  = '.' name
  / '.*'

predicate
  = '[' _ expr _ ']'

expr
  = or

or
  = and _ '||' _ or
  / and

and
  = cmp _ '&&' _ and
  / cmp

cmp
  = op _ '<' _ op
  / op _ '>' _ op
  / op _ '>=' _ op
  / op _ '<=' _ op
  / op _ '==' _ op
  / op _ '!=' _ op
  / '!' op
  / op

op
  = step
  / '.'
  / digit
  / string

string
  = '"' [^"]* '"'

name
  = letter id*
  / letter id* '-' id+

digit
  = [0-9]+

letter
  = [a-zA-Z]
id
  = [a-zA-Z0-9_]
_
  = ' ' _
  / ''

