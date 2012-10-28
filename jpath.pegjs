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
  / '!' path
  / path
  / digit
  / '(' _ or _ ')'

op
  = path
  / '.'
  / digit
  / string

path
  = step+

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

